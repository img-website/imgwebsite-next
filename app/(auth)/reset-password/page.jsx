import Image from "next/image";
import ResetForm from "./resetForm";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

const title = 'Reset Password';

export const metadata = {
  title,
  description: 'Reset your password',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

const ResetPasswordPage = () => {
  return (
    <Card className="m-auto w-full max-w-sm border-0 shadow-none">
      <CardHeader>
        <Image
          alt="IMG Logo"
          priority
          src="https://d1y41eupgbwbb2.cloudfront.net/images/android-chrome-192x192.png"
          className="mx-auto h-12 w-auto brightness-0"
          width={118}
          height={24}
        />
        <CardTitle className="text-2xl text-center pt-6">Reset Password</CardTitle>
        <CardDescription className="text-center">
          Enter your new password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<p>Loading...</p>}>
          <ResetForm />
        </Suspense>
        <div className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResetPasswordPage;
