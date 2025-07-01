import Loader from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white/70 z-50">
      <Loader className="w-8 h-8 text-slate-700" />
    </div>
  );
}
