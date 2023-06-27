import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Designs from "./components/Designs"

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <main>
          {children}
          <Education />
          <Skills />
          <Projects />
          <Designs />
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>

  )
}