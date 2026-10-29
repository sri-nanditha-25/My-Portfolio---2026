import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: {
    default: "B Sri Nanditha - Frontend Developer",
    template: "%s | B Sri Nanditha",
  },
  description: "Product Engineer specializing in building exceptional web experiences. Currently focused on building User-Centric, Pixel Perfect, High Performant products at Zeko AI.",
  keywords: ["Frontend Developer", "Product Engineer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "B Sri Nanditha" }],
  creator: "B Sri Nanditha",
  publisher: "B Sri Nanditha",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example.com",
    title: "B Sri Nanditha - Frontend Developer",
    description: "Product Engineer specializing in building exceptional web experiences. Currently focused on building User-Centric, Pixel Perfect, High Performant products at Zeko AI.",
    siteName: "B Sri Nanditha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "B Sri Nanditha - Frontend Developer",
    description: "Product Engineer specializing in building exceptional web experiences.",
    creator: "@yourtwitter",
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
  verification: {
    // Add verification codes if you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a192f" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-pink text-slate-300 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
