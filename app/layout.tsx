import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";


// Default font 
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Existing fonts from Next.js template
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated metadata for VyomGarud
export const metadata: Metadata = {
  title: "VyomGarud UAV Systems",
  description:
    "Advanced military-grade autonomous UAV and drone technologies by VyomGarud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${inter.variable}
          antialiased bg-black text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
