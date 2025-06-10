import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import DataNotFound from '@/components/DataNotFound';
import moment from 'moment';

const BlogList = ({ blogs, deleteBlog, isSuccess = true, deletingBlogId, updateBlogStatus }) => {

    if (!isSuccess) {
        return <div className="col-span-full">Failed to load blogs</div>;
    }

    return (
        <div className={`grid w-full relative z-10 md:gap-10 gap-6 pb-8 ${blogs?.length > 0 ? ' lg:grid-cols-3 md:grid-cols-2 grid-cols-1' : 'grid-cols-1 grow'}`}>
            {blogs?.length > 0 ? (
                blogs?.map((blog, index) => (
                    <div key={index} className="rounded-2xl group/blog relative">
                        <div className="flex flex-col items-start justify-between w-full bg-white rounded-2xl rounded-br-none shadow-xl shadow-gray-300 h-full">
                            <Image
                                src={`/api/uploads/blog${blog?.image}` || "/next.svg"}
                                alt={blog?.title || "Blog Image"}
                                width={400}
                                height={400}
                                loading={index <= 1 ? "eager" : "lazy"}
                                className="object-cover w-full h-auto aspect-[16/9] rounded-2xl rounded-br-none"
                                priority={index <= 1}
                                quality={70}
                            />
                            <div className="w-full p-6 grow">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={moment(blog?.createdAt).format('MMM D, YYYY')} className="text-gray-500">{moment(blog?.createdAt).format('MMM D, YYYY')}</time>
                                    <Link href={blog?.categoryDetails?.slug || '/'} className="relative z-20 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 uppercase">{blog?.categoryDetails?.title}</Link>
                                </div>
                                <div className="group">
                                    <Link href={`/admin/post/${blog?.slug}`} className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2 before:absolute before:inset-0 before:z-10">{blog?.title}</Link>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{blog?.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image
                                        src="https://avatar.iran.liara.run/public"
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                        alt={blog?.userDetails?.name}
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">Written by</p>
                                        <p className="text-gray-600">{blog?.userDetails?.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-between items-center p-4 border-t relative z-50">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`active-${blog?._id}`}
                                        checked={blog?.status === "active"}
                                        onChange={() => updateBlogStatus(blog?._id, blog?.status === "active" ? "inactive" : "active")}
                                        className="h-4 w-4 rounded border-gray-300 text-purple-700 focus:ring-purple-600 mr-2"
                                    />
                                    <label htmlFor={`active-${blog?._id}`} className="text-gray-700">
                                        {blog?.status === "active" ? "Active" : "Inactive"}
                                    </label>
                                </div>
                                <div className="flex space-x-2">
                                    <Link
                                        href={`/admin/post/edit/${blog?._id}`}
                                        aria-label="Edit"
                                        disabled={deletingBlogId === blog?._id}
                                        className="bg-purple-600 text-white px-3 py-1 rounded-md"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => {
                                            toast.info('Delete Blog', {
                                                description: "Are you sure you want to delete this blog?",
                                                action: {
                                                    label: 'Delete',
                                                    onClick: () => deleteBlog(blog?._id)
                                                },
                                            })
                                        }}
                                        aria-label="Delete"
                                        disabled={deletingBlogId === blog?._id}
                                        className="bg-red-600 text-white px-3 py-1 rounded-md"
                                    >
                                        {deletingBlogId === blog?._id ? "Deleting..." : "Delete"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <DataNotFound btnLink='/admin/post/add' />
            )}
        </div >
    );
};

export default BlogList;
