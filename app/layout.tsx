import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Austin Durham Portfolio",
  alternates: { canonical: "/" },
  keywords: [
    "Austin Durham",
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "Cloud Engineer",
    "AWS",
    "React",
    "Node.js",
    "Scottsdale Arizona",
  ],
  authors: [{ name: "Austin Durham", url: SITE_URL }],
  creator: "Austin Durham",
  publisher: "Austin Durham",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "profile",
    firstName: "Austin",
    lastName: "Durham",
    username: "durhamaustin9",
    siteName: "Austin Durham Portfolio",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Austin Durham — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f3ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
