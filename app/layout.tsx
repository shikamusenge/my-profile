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
            <footer className="border-t border-gray-100 dark:border-gray-800/60 py-12 bg-white/80 dark:bg-[#050812]/80 backdrop-blur-sm">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <Link
                      href="/"
                      className="font-bold text-xl gradient-text mb-4 inline-block"
                    >
                      P. SHIKAMUSENGE
                    </Link>
                    <p className="text-gray-500 dark:text-gray-500 max-w-md text-sm leading-relaxed">
                      A passionate full-stack developer dedicated to creating elegant, efficient solutions for complex
                      problems.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500">Quick Links</h3>
                    <ul className="space-y-2">
                      {["Home", "About", "Portfolio", "Contact"].map((item) => (
                        <li key={item}>
                          <Link
                            href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                            className="text-sm text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500">Connect</h3>
                    <ul className="space-y-2">
                      {[
                        { label: "GitHub", href: "https://github.com/shikamusenge" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/shikamusenge-philemon-86494b291/" },
                        { label: "Twitter", href: "https://twitter.com/ShikamusengeP" },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            target="_blank"
                            className="text-sm text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800/60 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-400 dark:text-gray-600">
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
