import Link from "next/link";

const DataNotFound = ({ btnLink }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <h1 className="md:text-xl text-lg font-bold text-gray-800 mb-4">Oops! Data Not Found</h1>
            <Link
                href={btnLink}
                className="rounded-md bg-purple-700 px-6 py-3 text-sm font-semibold text-gray-50 shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
            >
                Add New
            </Link>
        </div>
    );
};

export default DataNotFound;
