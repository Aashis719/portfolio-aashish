import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MainLayout } from "@/components/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aashish Neupane - Web Developer",
  description: "Full-Stack Web Developer specializing in Next.js, Tailwind CSS, and modern web applications",
  keywords: ["Next.js", "React", "Web Development", "Full-Stack", "Tailwind CSS"],
  authors: [{ name: "Aashis" }],
  openGraph: {
    title: "Aashish Neupane - Web Developer",
    description: "Full-Stack Web Developer specializing in Next.js, Tailwind CSS, and modern web applications",
    url: "https://www.aashishneupane.com.np/",
    siteName: "Aashis Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aashish Neupane - Web Developer",
    description: " Web Developer specializing in Next.js, Tailwind CSS, and modern web applications",
    creator: "@Aashis_19",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gray-950  text-gray-50`}
      >
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
