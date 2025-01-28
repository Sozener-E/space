"use client"

import Image from "next/image"

interface Painting {
  id: number
  title: string
  artist: string
  year: number
  description: string
}

interface FeaturedPaintingProps {
  painting: Painting
}

export function FeaturedPainting({ painting }: FeaturedPaintingProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <Image
        src={`/placeholder.svg?text=${encodeURIComponent(painting.title)}`}
        alt={painting.title}
        width={800}
        height={600}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{painting.title}</h2>
        <p className="text-xl mb-4">
          {painting.artist}, {painting.year}
        </p>
        <p className="text-gray-700">{painting.description}</p>
      </div>
    </div>
  )
}

