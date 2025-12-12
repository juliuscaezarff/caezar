import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Tooltip } from "@base-ui-components/react/tooltip";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import BackButton from "./components/ui/back-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julius Caezar",
  description: "Personal website of Julius Caezar - Developer building ideas",
  generator: "Next.js",
  applicationName: "Julius Caezar Portfolio",
  keywords: [
    "Julius Caezar",
    "frontend",
    "backend",
    "AI",
    "crypto",
    "developer",
    "portfolio",
  ],
  authors: [{ name: "Julius Caezar" }],
  creator: "Julius Caezar",
  publisher: "Julius Caezar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Julius Caezar",
    description: "Developer building ideas",
    url: "https://caezar.vercel.app/",
    siteName: "Julius Caezar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julius Caezar - Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julius Caezar",
    description: "Developer building ideas",
    creator: "@julius___C",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider defaultTheme="dark">
          <Tooltip.Provider>
            <div className="relative">
              <div className="relative mx-auto max-w-screen-xl min-h-screen flex flex-col">
                <div className="absolute left-4 md:left-8 top-0 bottom-0 border-l border-dotted border-[var(--border)] border-opacity-40 h-full overflow-hidden"></div>

                <div className="absolute right-4 md:right-8 top-0 bottom-0 border-l border-dotted border-[var(--border)] border-opacity-40 h-full overflow-hidden"></div>

                <div className="px-4 md:px-[34px] root flex flex-col flex-1">
                  <BackButton />
                  <div className="flex-1">{children}</div>
                </div>
              </div>
            </div>
          </Tooltip.Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
