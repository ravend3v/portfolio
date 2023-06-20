import "./globals.css"
import Navbar from "./components/Navbar"

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>

  )
}