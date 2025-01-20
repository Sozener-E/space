import Image from 'next/image'

// This would typically come from an API or database
const artworks = [
  { id: 1, title: "Mona Lisa", artist: "Leonardo da Vinci", year: "1503-1506", image: "/placeholder.svg" },
  { id: 2, title: "The Starry Night", artist: "Vincent van Gogh", year: "1889", image: "/placeholder.svg" },
  { id: 3, title: "The Persistence of Memory", artist: "Salvador Dalí", year: "1931", image: "/placeholder.svg" },
]

export default function Gallery() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Art Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="modernistic-card">
            <Image src={artwork.image || "/placeholder.svg"} alt={artwork.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{artwork.title}</h2>
              <p className="text-gray-600">{artwork.artist}, {artwork.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

