import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: {
    default: "Winning As One | Financial & Wealth Management",
    template: "%s | Winning As One",
  },
  description:
    "Your trusted partner in financial and wealth management planning.",
  keywords: [
    "financial planning",
    "wealth management",
    "life insurance",
    "Great Eastern Malaysia",
    "Penang financial advisor",
    "retirement planning",
    "estate planning",
    "income protection",
    "legacy planning",
    "child education fund",
  ],
  authors: [{ name: "Team Winning As One" }],
  creator: "Team Winning As One",
  publisher: "Winning As One",
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Winning As One",
    title: "Winning As One | Financial & Wealth Management",
    description:
      "Your trusted partner in financial and wealth management planning.",
    images: [
      {
        url: "/Team Photo.jpg",
        width: 1200,
        height: 630,
        alt: "Team Winning As One - Financial Advisors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winning As One | Financial & Wealth Management",
    description:
      "Your trusted partner in financial and wealth management planning.",
    images: ["/Team Photo.jpg"],
  },
  category: "Finance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}