"use client"
import TokenFromCookie from '@/helpers/tokenFromCookie';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import BlogList from '@/components/BlogList';
import useErrorHandler from '@/helpers/errors';

const ClientSide = () => {
    const handleError = useErrorHandler();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingBlogId, setDeletingBlogId] = useState();
    const [error, setError] = useState(null);

    const fetchBlog = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/blogs`, {
                headers : {
                    'isAdmin': true
                }
            });
            const data = await response.json();
            if (response.ok) {
                setBlogs(data);
            } else {
                throw new Error(data?.message || "Failed to fetch blogs");
            }
        } catch (error) {
            setError(error?.message || "Something went wrong while fetching blogs");
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    const deleteBlog = async (id) => {
        setDeletingBlogId(id);
        try {
            const token = TokenFromCookie();
            if (!token) {
                throw new Error("Unauthorized Token");
            }
            const response = await fetch(`/api/blogs/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Blog deleted successfully");
                fetchBlog(); // Refresh blogs after deletion
            } else {
                throw new Error(data?.message || "Failed to delete blog");
            }
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
            setDeletingBlogId(null);
        }
    };

    const updateBlogStatus = async (id, status) => {
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

            const response = await fetch(`/api/blogs/${id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // 'Content-Type': 'multipart/form-data' is automatically set when using FormData
                },
                body: formdata,
            });

            const result = await response.json();
            

            if (response.ok) {
                fetchBlog();
            } else {
                throw new Error(result.message || 'Something went wrong');
            }

            toast.success('Blog status updated successfully');
        } catch (error) {
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
                <button onClick={fetchBlog} className="bg-blue-500 text-white px-3 py-1 rounded-md">
                    Retry
                </button>
            </div>
        );
    }

    let isSuccess = true;
    isSuccess = blogs?.success;
    const blogData = blogs?.blogs || [];


    return (
        <BlogList
            blogs={blogData}
            deleteBlog={deleteBlog}
            isSuccess={isSuccess}
            deletingBlogId={deletingBlogId}
            updateBlogStatus={updateBlogStatus}
        />
    )
}

export default ClientSide