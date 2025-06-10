import Image from "next/image";
import LoginForm from "./loginForm";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const title = 'Login';

export const metadata = {
  title,
  description: 'Login to your account',
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
    <Card className="m-auto w-full max-w-sm border-0 shadow-none">
      <CardHeader>
        <Image
          alt="IMG Logo"
          priority
          src="https://d1y41eupgbwbb2.cloudfront.net/images/android-chrome-192x192.png"
          className="mx-auto size-12 w-auto brightness-0"
          width={48}
          height={48}
        />
        <CardTitle className="text-2xl text-center pt-6">Welcome Back!</CardTitle>
        <CardDescription className="text-center">
          Enter details to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
export default page
