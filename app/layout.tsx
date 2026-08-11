import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

// @ts-ignore: side-effect import of CSS file declaration
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUJITH J - Webdeveloper",
  description: "Web Developer who brings your dream website for your business.",
  keywords: [
    "SUJITH J",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "Sujith portfolio",
    "Portfolio",
  ],
  authors: [{ name: "SUJITH J" }],
  creator: "SUJITH J",
  publisher: "SUJITH J",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "SUJITH J - Web Developer & UI/UX Designer",
    description: "Web Developer who brings your dream website for your business.",
    siteName: "SUJITH J Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUJITH J - Web Developer & UI/UX Designer",
    description: "Web Developer who brings your dream website for your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="" href="null" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
