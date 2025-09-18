import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";


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
      <body
        className={`playfair-display antialiased py-[29px] px-6 min-h-screen `}
      >
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
