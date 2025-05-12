import type React from "react"
import type { Metadata } from "next"
import { Inter, Be_Vietnam_Pro, Epilogue } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
})

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-epilogue",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Smalt - Studio Digital",
  description:
    "Smalt accompagne les TPE, PME, startups et collectivités dans la création de solutions numériques utiles, humaines et adaptées à leurs besoins.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/helvetica-neue-9" />
      </head>
      <body className={`${inter.variable} ${beVietnamPro.variable} ${epilogue.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
