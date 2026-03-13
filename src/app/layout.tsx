import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rainier Gardens Art Studio",
    template: "%s | Rainier Gardens Art Studio",
  },
  description:
    "A creative sanctuary in the Pacific Northwest. Take classes, join the community, and explore your artistic potential at Rainier Gardens Art Studio.",
  openGraph: {
    siteName: "Rainier Gardens Art Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
