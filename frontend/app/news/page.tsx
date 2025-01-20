import Link from 'next/link'

// This would typically come from an API or database
const newsArticles = [
  { id: 1, title: "New Banksy Artwork Appears in London", date: "2023-06-01" },
  { id: 2, title: "Louvre Announces Major Renovation Project", date: "2023-05-28" },
  { id: 3, title: "Lost Van Gogh Painting Discovered in Attic", date: "2023-05-25" },
]

export default function News() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Art News</h1>
      <div className="space-y-6">
        {newsArticles.map((article) => (
          <Link key={article.id} href={`/news/${article.id}`} className="block modernistic-card">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

