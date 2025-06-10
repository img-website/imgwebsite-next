"use client"
import useErrorHandler from "@/helpers/errors";
import TokenFromCookie from "@/helpers/tokenFromCookie";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react"
import { toast } from "sonner";
const CustomEditor = dynamic(() => import('@/components/custom-editor'), { ssr: false });
const CategoryForm = dynamic(() => import('../category/categoryForm'), { ssr: false });


const PostForm = ({ id }) => {
    const handleError = useErrorHandler();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [initialImage, setInitialImage] = useState('');
    const [categoryId, setcategoryId] = useState('');
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [isEditorLoading, setIsEditorLoading] = useState(true);
    const [addCategoryPopup, setAddCategoryPopup] = useState(false);

    const [categories, setCategories] = useState([]);

    const [previousImages, setPreviousImages] = useState(new Set());
    const [removedImages, setRemovedImages] = useState(new Set());


    // This useEffect will handle the image preview
    useEffect(() => {
        if (image) {
            const objectUrl = URL.createObjectURL(image);
            setImagePreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl); // Cleanup URL on unmount
        }
    }, [image]);

    const handleEditorReady = () => {
        setIsEditorLoading(false);
    };

    const fetchCategory = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/categories`);
            const res = await response.json();
            if (response.ok) {
                setCategories(res?.data);
            } else {
                throw new Error(data?.message || 'Failed to fetch category');
            }
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, [addCategoryPopup]);

    useEffect(() => {
        if (categories.length > 0 && !id) {
            setcategoryId(categories[0]?._id);
        }
    }, [categories, id]);

    useEffect(() => {
        if (id) {
            const fetchBlogs = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`/api/blogs/${id}`);
                    const res = await response.json();
                    const data = res?.blog;
                    if (response.ok) {
                        setTitle(data?.title);
                        setDescription(data?.description);
                        setContent(data?.content);
                        setcategoryId(data?.categoryId || categories[0]?._id);
                        setInitialImage(data?.image);
                    } else {
                        throw new Error(data?.message || 'Failed to fetch category');
                    }
                } catch (error) {
                    handleError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchBlogs();
        }
    }, [id, categories]);

    const extractTitle = (data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const headingElement = doc.querySelector('h1');
        return headingElement ? headingElement.textContent : '';
    };


    useEffect(() => {
        // Extract title when the component mounts
        const extractedTitle = extractTitle(content);
        setTitle(extractedTitle);
    }, [content]);


    const extractImageUrls = (data) => {
        const imageRegex = /<img\s+[^>]*src=["']([^"']+)["']/g;
        const imageUrls = new Set();
        let match;

        while ((match = imageRegex.exec(data)) !== null) {
            imageUrls.add(match[1]);
        }

        return imageUrls;
    };

    const handleImageRemove = (editor) => {
        const data = editor.getData();
        const currentImages = extractImageUrls(data);

        // Remove '/api/uploads/blog/' from each URL
        const processedCurrentImages = new Set(
            [...currentImages].map(url => url.replace('/api/uploads/blog/', ''))
        );
        // Find removed images by comparing previousImages and currentImages
        const removed = [...previousImages].filter(url => !processedCurrentImages.has(url.replace('/api/uploads/blog/', '')));

        // Images added back with undo (Ctrl+Z) should be removed from removedImages array
        const restored = [...removedImages].filter(url => processedCurrentImages.has(url.replace('/api/uploads/blog/', '')));

        if (removed.length > 0 || restored.length > 0) {
            setRemovedImages(prevState => {
                const updatedRemoved = new Set(prevState);

                // Add new removed images
                removed.forEach(url => updatedRemoved.add(url.replace('/api/uploads/blog/', '')));

                // Remove restored images
                restored.forEach(url => updatedRemoved.delete(url.replace('/api/uploads/blog/', '')));

                return updatedRemoved;
            });
        }

        // Update previousImages state with current images
        setPreviousImages(processedCurrentImages);
    };

    const resetFormHandler = () => {
        setTitle('');
        setDescription('');
        setContent('');
        setImage(null);
        setcategoryId('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = TokenFromCookie();
            if (!token) {
                throw new Error('Unauthorized Token');
            }
            const method = id ? 'PATCH' : 'POST';
            const url = id ? `/api/blogs/${id}` : `/api/blogs?categoryId=${categoryId}`;


            const formdata = new FormData();
            formdata.append('title', title);
            formdata.append('description', description);
            formdata.append('content', content);
            formdata.append('image', image);
            formdata.append('categoryId', categoryId);

            const response = await fetch(url, {
                method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formdata,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong');
            } else {
                try {
                    if (removedImages?.size > 0) {
                        await fetch('/api/delete-images', {
                            method: 'POST',
                            body: JSON.stringify({ images: Array.from(removedImages) }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
                    }

                } catch (error) {
                    handleError(error);
                }
            }

            toast.success(`Blog ${id ? 'updated' : 'created'} successfully`);

            if (!id) {
                resetFormHandler();
            }
            router.push('/admin/post');
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='grow'></div>
            <div className={`shadow-lg border rounded-xl mx-auto max-w-5xl w-full relative ${loading ? "pointer-events-none" : ""}`}>
                <div className={`absolute inset-0 items-center justify-center z-[60] font-bold text-base bg-white/50 backdrop-blur-sm ${isEditorLoading ? "flex" : "hidden"}`}>Loading Editor...</div>
                {/* <div className="md:text-lg text-base font-bold p-5 rounded-t-xl bg-gray-50">{id ? "Edit" : "Add"} Post</div>
                <hr /> */}
                <div className="p-5 rounded-b-xl">
                    <form className='w-full grid grid-cols-2 gap-5 p-10' onSubmit={handleSubmit}>
                        {/* <div className="sm:col-span-4 pb-5">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-800">
                                Post Title
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-xl shadow-sm ring-2 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-700">
                                    <input
                                        type="text"
                                        placeholder="Oh yes come on baby"
                                        autoComplete="off"
                                        required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="block flex-1 border-0 bg-transparent py-3 text-gray-800 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className="col-span-full">
                            <label htmlFor="file-upload" className="hidden text-sm font-medium leading-6 text-gray-800">
                                Blog Banner
                            </label>
                            <div className="mt-2 flex justify-center rounded-xl relative border-2 border-dashed border-gray-800/50 bg-contain bg-no-repeat bg-center group/opacity" style={imagePreview ? { backgroundImage: `url(${imagePreview})` } : { backgroundImage: `url(/api/uploads/blog${initialImage})` }}>
                                <div className={`text-center px-6 py-10 aspect-[16/9] justify-center group-hover/opacity:opacity-100 backdrop-blur-lg w-full flex items-center flex-col ${(image || initialImage) ? 'opacity-0 bg-gray-50/80' : ''}`}>
                                    {/* <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" /> */}

                                    <div className="w-full md:text-xl text-lg font-bold text-black">Blog Banner</div>
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
                                                onChange={(e) => setImage(e.target.files[0])}
                                                className="absolute inset-0 z-10 opacity-0"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-900 font-semibold">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="max-md:col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-800">
                                Description
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-xl shadow-sm ring-2 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-700">
                                    <input
                                        type="text"
                                        id="description"
                                        placeholder="write some tagline"
                                        autoComplete="off"
                                        required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="block flex-1 border-0 bg-transparent py-3 text-gray-800 placeholder:text-gray-400 focus:ring-0 sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="max-md:col-span-full">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-800">
                                Category
                            </label>
                            <div className="mt-2">
                                <select
                                    id="category"
                                    name="category"
                                    autoComplete="off"
                                    required
                                    disabled={categories == ""}
                                    value={categoryId}
                                    onChange={(e) => setcategoryId(e.target.value)}
                                    className={`peer empty:!hidden w-full rounded-xl border-0 py-3 text-gray-800 shadow-sm ring-2 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-base sm:leading-6 bg-transparent ${categories != "" ? '!block' : '!hidden'}`}
                                >
                                    {
                                        categories != "" ? categories?.map((item) => {
                                            return (
                                                item?.status === "active" && <option key={item?._id} value={item?._id}>{item?.title}</option>
                                            )
                                        })
                                            :
                                            <option>Category not found</option>
                                    }
                                </select>
                                <button type="button" onClick={() => setAddCategoryPopup(true)} className={`block  ${categories != "" ? 'peer-[:not(:empty)]:!hidden' : ''} w-full rounded-xl border-0 py-3 text-white shadow-sm ring-2 ring-inset ring-purple-700 focus:ring-2 focus:ring-inset focus:ring-purple-700 sm:text-base sm:leading-6 bg-purple-700`}>
                                    Add New Category
                                </button>
                            </div>
                        </div>
                        <div
                            className="
                                col-span-full 
                                
                                prose
                                [&.prose_*]:[all:revert]
                                [&.prose_*::before]:[all:revert]
                                [&.prose_*::after]:[all:revert]
                                [&.prose_*::marker]:[all:revert]
                                [&.prose_*::placeholder]:[all:revert] 
                                [&_*::selection]:bg-purple-600           
                                [&_*::selection]:text-white           

                                max-w-none
                            "
                        >
                            <Suspense fallback={'Loading...'}>
                                <CustomEditor
                                    content={content}
                                    setContent={setContent}
                                    setTitle={setTitle}
                                    title={title}
                                    handleImageRemove={handleImageRemove}
                                    extractTitle={extractTitle}
                                    handleEditorReady={handleEditorReady}
                                />
                            </Suspense>
                        </div>

                        <div className="col-span-full mt-6 flex items-center justify-end gap-x-6 sticky bottom-0 bg-white z-50 py-2">
                            <button onClick={(e) => router.back()} type="button" className="text-sm font-semibold leading-6 text-gray-800">
                                {id ? "Cancel" : "Back"}
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
                            >
                                {id ? "Update" : "Save"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='grow'></div>
            {
                addCategoryPopup && (
                    <div className="fixed inset-0 z-[70] flex flex-col items-center backdrop-blur-md overflow-y-auto">
                        <div className="grow py-4"></div>
                        <Suspense fallback={'Loading...'}>
                            <CategoryForm setAddCategoryPopup={setAddCategoryPopup} />
                        </Suspense>
                        <div className="grow py-4"></div>
                    </div>
                )
            }
        </>
    )
}

export default PostForm