import DepartmentForm from '@/components/department-form';

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/departments`, { cache: 'no-store' });
  const json = await res.json();
  const depts = Array.isArray(json?.data) ? json.data : [];
  return (
    <div className="p-4 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Role Departments</h2>
        <ul className="space-y-2">
          {depts.map(d => (
            <li key={d._id} className="border rounded p-2">
              <span className="font-medium">{d.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <DepartmentForm />
      </div>
    </div>
  );
}
