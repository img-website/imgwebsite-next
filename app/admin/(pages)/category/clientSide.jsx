"use client"
import { useEffect, useState } from "react";
import { toast } from "sonner";
import TokenFromCookie from "@/helpers/tokenFromCookie";
import CategoryList from "@/components/CategoryList"; // Importing smaller component
import useErrorHandler from "@/helpers/errors";

const ClientSide = () => {
    const handleError = useErrorHandler();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deletingCategoryId, setDeletingCategoryId] = useState();

    const fetchCategory = async () => {
        setLoading(true);
        setError(null); // Reset error state before fetching
        try {
            const response = await fetch(`/api/v1/admin/category`);
            const data = await response.json();
            if (response.ok) {
                setCategories(data);
            } else {
                throw new Error(data?.message || "Failed to fetch category");
            }
        } catch (error) {
            setError(error.message || "Something went wrong while fetching categories");
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const deleteCategory = async (id) => {
        setDeletingCategoryId(id);
        try {
            const token = TokenFromCookie();
            if (!token) {
                throw new Error("Unauthorized Token");
            }
            const response = await fetch(`/api/v1/admin/category/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Category deleted successfully");
                fetchCategory(); // Refresh categories after deletion
            } else {
                throw new Error(data?.message || "Failed to delete category");
            }
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
            setDeletingCategoryId(null);
        }
    };

    const updateCategoryStatus = async (id, status) => {
        try {
            const token = TokenFromCookie();
            if (!token) {
                throw new Error('Unauthorized Token');
            }

            if (status !== 'active' && status !== 'inactive') {
                throw new Error('Invalid status');
            }

            const formdata = new FormData();
            formdata.append('status', status);

            const response = await fetch(`/api/v1/admin/category/${id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // 'Content-Type': 'multipart/form-data' is automatically set when using FormData
                },
                body: formdata,
            });

            const result = await response.json();

            if (response.ok) {
                fetchCategory();
            } else {
                throw new Error(result.message || 'Something went wrong');
            }

            toast.success('Category status updated successfully');
        } catch (error) {
            console.error(error);
            handleError(error);
        }
    };


    if (loading) {
        return <div className="flex flex-col grow items-center justify-center opacity-50">Loading...</div>; // Can replace this with a spinner component
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <button onClick={fetchCategory} className="bg-blue-500 text-white px-3 py-1 rounded-md">
                    Retry
                </button>
            </div>
        );
    }

    const isSuccess = categories?.success;
    const categoryData = categories?.data || [];

    return (
        <CategoryList
            categories={categoryData}
            deleteCategory={deleteCategory}
            isSuccess={isSuccess}
            deletingCategoryId={deletingCategoryId}
            updateCategoryStatus={updateCategoryStatus}
        />
    )
}

export default ClientSide