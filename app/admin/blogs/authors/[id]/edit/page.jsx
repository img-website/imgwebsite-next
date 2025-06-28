import EditAuthorForm from "./EditAuthorForm";

export default async function Page({ params }) {
  const { id } = await params;
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const res = await fetch(`${base}/api/v1/admin/blogs/authors/${id}`, { cache: 'no-store' });
  const json = await res.json();
  const author = json?.data;

  if (!author) {
    return <div className="p-4">Author not found</div>;
  }

  return (
    <>
      <div className="w-full p-4">
        <EditAuthorForm author={author} />
      </div>
    </>
  );
}
