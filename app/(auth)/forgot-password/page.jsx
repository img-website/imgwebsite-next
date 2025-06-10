import Image from "next/image";
import ForgotForm from "./forgotForm";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const title = 'Forgot Password';

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

const ForgotPasswordPage = () => {
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
        <CardTitle className="text-2xl text-center pt-6">Forgot Password</CardTitle>
        <CardDescription className="text-center">
          Enter your email to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotForm />
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

export default ForgotPasswordPage;
