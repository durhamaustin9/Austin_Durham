import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { MantineSiteProvider } from "./mantine-provider";
import "@mantine/core/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Austin Durham | Full-Stack Software Engineer";
  const description =
    "Full-stack software engineer building production applications, cloud services, internal platforms, and business systems that deliver measurable impact.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "Austin Durham",
      "Full-Stack Software Engineer",
      "Next.js Developer",
      "Cloud Engineer",
      "AWS",
      "Scottsdale Arizona",
    ],
    authors: [{ name: "Austin Durham" }],
    creator: "Austin Durham",
    icons: {},
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1731,
          height: 909,
          alt: "Austin Durham — Full-Stack Software Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineSiteProvider>{children}</MantineSiteProvider>
      </body>
    </html>
  );
}
