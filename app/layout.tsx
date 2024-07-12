import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "../components/ui/background-beams";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
// import { SWRConfig } from 'swr';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk Lounge",
  description: "By Mohd Ajlal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<ClerkProvider>
      <body className={`${inter.className} bg-dark-2`}>{children}
        <Toaster/>
      </body>
      </ClerkProvider>
    </html>
  );
}
