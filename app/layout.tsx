import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vitalpath.yousfi.dev"),
  title: "VitalPath | Leading Healthcare Management Platform",
  description:
    "VitalPath is your gateway to modern healthcare management. Book appointments, track health, and receive personalized care updates effortlessly.",
  keywords: [
    "healthcare",
    "management",
    "appointments",
    "health tracking",
    "VitalPath",
    "medical platform",
    "patient management",
    "telemedicine",
    "online healthcare",
    "digital health",
    "health monitoring",
    "virtual care",
    "health services",
    "personalized care",
    "health technology",
  ],
  openGraph: {
    title: "VitalPath | Leading Healthcare Management Platform",
    description:
      "VitalPath is your gateway to modern healthcare management. Book appointments, track health, and receive personalized care updates effortlessly.",
    type: "website",
    url: "https://vitalpath.yousfi.dev",
    images: [
      {
        url: "/preview.jpg",
        width: 789,
        height: 500,
        alt: "VitalPath - Healthcare Management",
      },
    ],
    siteName: "VitalPath",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalPath | Leading Healthcare Management Platform",
    description:
      "VitalPath is your gateway to modern healthcare management. Book appointments, track health, and receive personalized care updates effortlessly.",
    images: [
      {
        url: "/preview.jpg",
        alt: "VitalPath - Healthcare Management",
      },
    ],
  },
  applicationName: "VitalPath",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-theme min-h-screen font-sans antialiased",
          inter.variable,
          sans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
