import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Inter font
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SVRR Water Systems | India's Smart Water Experience Brand",
  description: "From Source to Purity — We Engineer Every Drop. Premium water purification technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-white">
        {children}
      </body>
    </html>
  );
}
