"use client"

import { useState } from "react"
import Image from "next/image"

const initialArtworks = [
  {
    id: 1,
    title: "Sunset Dreams",
    artist: "Alice Johnson",
    image: "/placeholder.svg?text=Sunset+Dreams",
    likes: 24,
    saved: false,
  },
  {
    id: 2,
    title: "Urban Jungle",
    artist: "Bob Smith",
    image: "/placeholder.svg?text=Urban+Jungle",
    likes: 18,
    saved: false,
  },
  {
    id: 3,
    title: "Serenity Now",
    artist: "Carol Williams",
    image: "/placeholder.svg?text=Serenity+Now",
    likes: 32,
    saved: false,
  },
  {
    id: 4,
    title: "Abstract Thoughts",
    artist: "David Brown",
    image: "/placeholder.svg?text=Abstract+Thoughts",
    likes: 15,
    saved: false,
  },
  {
    id: 5,
    title: "Nature's Embrace",
    artist: "Eva Green",
    image: "/placeholder.svg?text=Nature's+Embrace",
    likes: 29,
    saved: false,
  },
  {
    id: 6,
    title: "City Lights",
    artist: "Frank White",
    image: "/placeholder.svg?text=City+Lights",
    likes: 21,
    saved: false,
  },
]

export default function VisualGallery() {
  const [artworks, setArtworks] = useState(initialArtworks)

  const handleLike = (id: number) => {
    setArtworks(artworks.map((art) => (art.id === id ? { ...art, likes: art.likes + 1 } : art)))
  }

  const handleSave = (id: number) => {
    setArtworks(artworks.map((art) => (art.id === id ? { ...art, saved: !art.saved } : art)))
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Visual Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{artwork.title}</h2>
              <p className="text-gray-600">by {artwork.artist}</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleLike(artwork.id)}
                  className="flex items-center text-gray-600 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {artwork.likes}
                </button>
                <button
                  onClick={() => handleSave(artwork.id)}
                  className={`flex items-center ${artwork.saved ? "text-yellow-500" : "text-gray-600"} hover:text-yellow-500`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  {artwork.saved ? "Saved" : "Save"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

