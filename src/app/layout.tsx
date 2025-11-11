import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Winning As One - Financial & Wealth Management",
  description:
    "Leading life insurance and financial planning services in Great Eastern Malaysia. Secure your future with our expert team.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
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