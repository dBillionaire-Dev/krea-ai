import type React from "react"
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Krea AI Clone",
    template: "%s | My App",
  },
  description: "Pixel-perfect Krea AI clone built with Next.js, TypeScript, and Tailwind.",
  openGraph: {
    title: "Krea AI Clone",
    description: "AI-powered image generation platform",
    url: "https://my-krea-ai.vercel.app",
    siteName: "Krea AI Clone",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: ["ai", "ai-generator", "content-generation", "images", "videos"],
  authors: [{
    name: "Nex.Dev",
    url: "https://nexdbillionairedev.vercel.app",
  }],
  creator: "Nex.Dev",
  generator: "Next.js",
  applicationName: "Krea AI Clone",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange={false}
            storageKey="krea-ai-theme"
          >
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
