import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import DataNotFound from "./DataNotFound";

const CategoryList = ({ categories, deleteCategory, isSuccess = true, deletingCategoryId, updateCategoryStatus }) => {
    if (!isSuccess) {
        return <div className="col-span-full">Failed to load categories</div>;
    }

    return (
        <div className={`p-6 grid ${categories?.length > 0 ? 'grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 grow'}`}>
            {categories.length > 0 ? (
                categories.map((category, index) => (
                    <div key={category?._id} className={`relative bg-white border rounded-lg shadow-lg overflow-hidden ${category?.status === "active" ? "" : "grayscale-[60%]"}`}>
                        <div className="p-4">
                            <div className="flex items-center">
                                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                                    <Image
                                        src={`/api/uploads/category${category?.thumb}` || "/next.svg"}
                                        alt={category?.title || "Category Image"}
                                        width={70}
                                        height={70}
                                        loading={index <= 1 ? "eager" : "lazy"}
                                        className="object-cover w-full h-auto"
                                        priority={index <= 1}
                                        quality={70}
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">{category?.title}</h3>
                                    <p className="text-gray-500">
                                        {category?.blogCount} {category?.blogCount > 1 ? "blogs" : "blog"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 border-t">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`active-${category?._id}`}
                                    checked={category?.status === "active"}
                                    onChange={() => updateCategoryStatus(category?._id, category?.status === "active" ? "inactive" : "active")}
                                    className="h-4 w-4 rounded border-gray-300 text-purple-700 focus:ring-purple-600 mr-2"
                                />
                                <label htmlFor={`active-${category?._id}`} className="text-gray-700">
                                    {category?.status === "active" ? "Active" : "Inactive"}
                                </label>
                            </div>
                            <div className="flex space-x-2">
                                <Link
                                    href={`/admin/category/edit/${category?._id}`}
                                    aria-label="Edit"
                                    disabled={deletingCategoryId === category?._id}
                                    className="bg-purple-600 text-white px-3 py-1 rounded-md"
                                >
                                    Edit
                                </Link>
                                {
                                    <button
                                        onClick={() => {
                                            category?.blogCount <= 0 ?
                                                toast.info('Delete Category', {
                                                    description: "Are you sure you want to delete this category?",
                                                    action: {
                                                        label: 'Delete',
                                                        onClick: () => deleteCategory(category?._id)
                                                    },
                                                })
                                                :
                                                toast.info('Cannot Delete Category', {
                                                    description: "This category is currently in use by one or more blog posts. Please remove it from those posts before deleting."
                                                });
                                        }}
                                        aria-label="Delete"
                                        disabled={deletingCategoryId === category?._id}
                                        className="bg-red-600 text-white px-3 py-1 rounded-md"
                                    >
                                        {deletingCategoryId === category?._id ? "Deleting..." : "Delete"}
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <DataNotFound btnLink='/admin/category/add' />
            )}
        </div >
    );
};

export default CategoryList;
