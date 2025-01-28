import Link from "next/link"
import Image from "next/image"

const artPeriods = [
  { id: 1, name: "Renaissance", years: "14th-17th century", image: "/placeholder.svg?text=Renaissance" },
  { id: 2, name: "Baroque", years: "17th-18th century", image: "/placeholder.svg?text=Baroque" },
  { id: 3, name: "Romanticism", years: "Late 18th-19th century", image: "/placeholder.svg?text=Romanticism" },
  { id: 4, name: "Impressionism", years: "19th-20th century", image: "/placeholder.svg?text=Impressionism" },
  { id: 5, name: "Modern Art", years: "Late 19th-20th century", image: "/placeholder.svg?text=Modern+Art" },
]

export default function ArtHistory() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Art History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artPeriods.map((period) => (
          <Link key={period.id} href={`/history/${period.id}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src={period.image || "/placeholder.svg"}
                alt={period.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{period.name}</h2>
                <p className="text-gray-600">{period.years}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

