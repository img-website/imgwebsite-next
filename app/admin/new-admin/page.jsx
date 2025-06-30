import Link from "next/link";
import RegisterForm from "./registerForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const title = "Register";

export const metadata = {
  title,
  description: "Register for an account",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

const page = () => {
  return (
    <>
      <Card className="mx-auto w-full max-w-sm border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign up for an account</CardTitle>
          <CardDescription className="text-center">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </>
  );
}
export default page
