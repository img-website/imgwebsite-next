"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import RedirectionForm from "@/components/RedirectionForm";
import { useRedirectionStore } from "@/app/store/use-redirection-store";

export default function AddRedirectionPage() {
  const router = useRouter();
  const redirections = useRedirectionStore((state) => state.redirections);
  const setRedirections = useRedirectionStore((state) => state.setRedirections);
  const setRedirectionDetail = useRedirectionStore(
    (state) => state.setRedirectionDetail,
  );

  function handleSuccess(newRedir) {
    if (newRedir) {
      setRedirectionDetail(newRedir.id, newRedir);
      setRedirections(redirections ? [newRedir, ...redirections] : [newRedir]);
    }
    router.push("/admin/redirections");
  }

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Redirection</CardTitle>
            <CardDescription>
              Create a new URL redirection. Fill in the required information
              below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RedirectionForm onSuccess={handleSuccess} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
