import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "sonner";
import PushInit from "@/components/PushInit";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // choose weights you want
  variable: "--font-poppins",
  subsets: ["latin"],
});


export const viewport = {
  themeColor: '#000019',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className="scroll-smooth [scrollbar-width:thin] has-[.peer\/leadPopup:checked]:overflow-hidden [&_*]:tracking-[.5px]">
      <body
        className={`${poppins.variable} antialiased scroll font-poppins group overflow-x-hidden overflow-y-auto has-[.leadPopup:checked]:overflow-hidden !m-0`}
      >
        <Toaster position="bottom-center" richColors />
        <PushInit />
        {children}
      </body>
    </html>
  );
}
