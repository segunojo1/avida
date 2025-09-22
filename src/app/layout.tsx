import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/sonner";
import Background from "@/components/background";

export const metadata: Metadata = {
  title: "Avida",
  description: "Before I dream board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`playfair-display antialiased py-[29px] px-6  `}>
        <SessionProvider>
        <Background>
        <NextTopLoader />
        <Navbar />
        {children}
        </Background>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
