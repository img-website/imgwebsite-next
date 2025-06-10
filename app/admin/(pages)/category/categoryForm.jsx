"use client"
import useErrorHandler from "@/helpers/errors";
import TokenFromCookie from "@/helpers/tokenFromCookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { toast } from "sonner";

const CategoryForm = ({ id, setAddCategoryPopup }) => {
    const handleError = useErrorHandler();
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [thumb, setThumb] = useState('');
    const [thumbPreview, setThumbPreview] = useState('');
    const [status, setStatus] = useState('active');
    const [initialThumb, setInitialThumb] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    // This useEffect will handle the thumb preview
    useEffect(() => {
        if (thumb) {
            const objectUrl = URL.createObjectURL(thumb);
            setThumbPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl); // Cleanup URL on unmount
        }
    }, [thumb]);


    useEffect(() => {
        if (id) {
            const fetchCategory = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`/api/categories/${id}`);
                    const res = await response.json();
                    const data = res?.data?.[0];
                    if (response.ok) {
                        setCategory(data?.title);
                        setInitialThumb(data?.thumb);
                        setStatus(data?.status);
                    } else {
                        throw new Error(data?.message || 'Failed to fetch category');
                    }
                } catch (error) {
                    handleError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchCategory();
        }
    }, [id]);

    const resetFormHandler = () => {
        setCategory('');
        setThumb(null);
        setThumbPreview('');
        setStatus('active');
    };

    const categoryHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            TokenFromCookie();
            const token = TokenFromCookie();
            if (!token) {
                throw new Error('Unauthorized Token');
            }

            const method = id ? 'PATCH' : 'POST';
            const url = id ? `/api/categories/${id}` : `/api/categories`;

            const formdata = new FormData();
            formdata.append('title', category);
            formdata.append('thumb', thumb);
            formdata.append('status', status);

            const response = await fetch(url, {
                method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // 'Content-Type': 'application/json',
                    // 'Content-Type': 'multipart/form-data',
                },
                body: formdata,
                // body: JSON.stringify(formdata),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong');
            }

            toast.success(`Category ${id ? 'updated' : 'created'} successfully`);
            if (!id) {
                resetFormHandler();
            }
            if (!pathname?.includes('admin/post/add')) {
                router.push('/admin/category');
            } else {
                setAddCategoryPopup(false);
            }
        } catch (error) {
            console.error(error);
            handleError(error);
        } finally {
            setLoading(false);
        }
    };
    
    const resetButtonHandler = () => {
        if (!pathname?.includes('admin/post/add')) {
            router.back();
        } else {
            setAddCategoryPopup(false);
        }
    }

    return (
        <>
            <div className='grow'></div>
            <div className="shadow-lg border rounded-xl mx-auto max-w-lg w-full">
                <div className="md:text-lg text-base font-bold p-5 rounded-t-xl bg-gray-50">{id ? "Edit" : "Add"} Category</div>
                <hr />
                <div className="p-5 rounded-b-xl bg-white">
                    <form className={`w-full ${loading ? 'pointer-events-none' : ''}`} onSubmit={categoryHandler}>
                        <div className="sm:col-span-4 pb-5">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-800">
                                Category Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-xl shadow-sm ring-2 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-700">
                                    <span className="flex select-none items-center pl-3 text-gray-700 font-medium sm:text-base"></span>
                                    <input
                                        type="text"
                                        placeholder=""
                                        required={!id}
                                        minLength={3}
                                        maxLength={30}
                                        autoComplete="off"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="block flex-1 border-0 bg-transparent py-3 pl-1 text-gray-800 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            <span className="break-words">uncoveredvibes.com/category/{category?.toLowerCase()?.replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")}</span>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-800">
                                Category Icon
                            </label>
                            <div className="mt-2 flex justify-center rounded-xl relative border-2 border-dashed border-gray-800/50 bg-contain bg-no-repeat bg-center group/opacity" style={thumbPreview ? { backgroundImage: `url(${thumbPreview})` } : { backgroundImage: `url(/api/uploads/category${initialThumb})` }}>
                                <div className={`text-center px-6 py-10 group-hover/opacity:opacity-100 backdrop-blur-lg w-full flex items-center flex-col ${(thumb || initialThumb) ? 'opacity-0 bg-gray-50/80' : ''}`}>
                                    {/* <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" /> */}
                                    <div className="mt-4 flex text-sm leading-6 text-gray-900 font-semibold">
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer font-semibold text-purple-700 hover:text-purple-600"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                accept="image/*"
                                                required={!id}
                                                type="file"
                                                onChange={(e) => setThumb(e.target.files[0])} className="absolute inset-0 z-10 opacity-0"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-900 font-semibold">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button onClick={(e) => { resetButtonHandler(e) }} type="button" className="text-sm font-semibold leading-6 text-gray-800">
                                {id ? "Cancel" : "Back"}
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-purple-700 px-6 py-3 text-sm font-semibold text-gray-50 shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
                            >
                                {id ? `${loading ? 'Updating...' : 'Update'}` : `${loading ? 'Saving...' : 'Save'}`}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='grow'></div>
        </>
    )
}

export default CategoryForm