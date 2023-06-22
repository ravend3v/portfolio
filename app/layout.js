import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className="flex flex-col">
        <Navbar />
        <Hero />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>

  )
}