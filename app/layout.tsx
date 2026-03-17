import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer/Footer";

export const metadata: Metadata = {
  title: "CareerForge | Job Portal & Preparation Hub",
  description: "Your ultimate destination for job listings, DSA preparation, aptitude notes, and company hiring processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mesh-bg" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
