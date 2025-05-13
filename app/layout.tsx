import Link from "next/link"
import type React from "react"
import "@/app/globals.css"
// import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shikamusenge Philemon | Full Stack Developer",
  description:
    "Professional portfolio of Shikamusenge Philemon, a passionate full-stack developer specializing in modern web technologies.",
    generator: 'INTASOBWA TECH'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/philemon.png" />
      <body className={`inter.className`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-12 bg-white dark:bg-gray-900">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <Link
                      href="/"
                      className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mb-4 inline-block"
                    >
                      P. SHIKAMUSENGE
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md">
                      A passionate full-stack developer dedicated to creating elegant, efficient solutions for complex
                      problems.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
                        <li key={item}>
                          <Link
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Connect</h3>
                    <ul className="space-y-2">
                      {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Shikamusenge Philemon. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
