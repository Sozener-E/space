import "./globals.css"
import { Playfair_Display } from "next/font/google"
import Sidebar from "./components/Sidebar"
import TopBar from "./components/TopBar"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata = {
  title: "Art of Time",
  description: "Explore the world of art through time",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-gray-100`}>
        <TopBar />
        <div className="flex">
          <Sidebar />
          <main className="ml-64 flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}

