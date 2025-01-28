import Link from "next/link"

const newsArticles = [
  {
    id: 1,
    title: "New Banksy Artwork Appears in London",
    date: "2023-06-01",
    excerpt: "A new Banksy mural has appeared overnight in East London, sparking excitement among art enthusiasts.",
  },
  {
    id: 2,
    title: "Louvre Announces Major Renovation Project",
    date: "2023-05-28",
    excerpt:
      "The Louvre Museum in Paris has unveiled plans for a comprehensive renovation project set to begin next year.",
  },
  {
    id: 3,
    title: "Lost Van Gogh Painting Discovered in Attic",
    date: "2023-05-25",
    excerpt:
      "A previously unknown painting by Vincent van Gogh has been discovered in the attic of a house in the Netherlands.",
  },
  {
    id: 4,
    title: "AI-Generated Art Wins Controversial Prize",
    date: "2023-05-20",
    excerpt:
      "An AI-generated artwork has won a major art competition, igniting debate about the future of art and creativity.",
  },
  {
    id: 5,
    title: "Ancient Roman Mosaic Unearthed in England",
    date: "2023-05-15",
    excerpt:
      "Archaeologists have uncovered a well-preserved Roman mosaic in a field in rural England, dating back to the 4th century.",
  },
]

export default function News() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Art News</h1>
      <div className="space-y-6">
        {newsArticles.map((article) => (
          <Link key={article.id} href={`/news/${article.id}`} className="block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.date}</p>
                <p className="text-gray-700">{article.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

