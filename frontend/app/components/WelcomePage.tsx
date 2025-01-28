"use client"

import Link from "next/link"

export function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Art of Time</h1>
        <p className="text-xl mb-8 text-gray-700">Embark on a journey through the fascinating world of art history.</p>
        <Link
          href="/home"
          className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          Enter the Gallery
        </Link>
      </div>
    </div>
  )
}

