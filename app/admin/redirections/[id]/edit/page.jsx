import EditRedirectionForm from "./EditRedirectionForm";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/redirections/${id}`, { cache: 'no-store' });
  const json = await res.json();
  const redirection = json?.data;

  if (!redirection) {
    return <div className="p-4">Redirection not found</div>;
  }

  return (
    <>
      <div className="w-full p-4">
        <EditRedirectionForm redirection={redirection} />
      </div>
    </>
  );
}
