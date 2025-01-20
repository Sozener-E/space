import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "The Evolution of Impressionism",
    author: "Emma Thompson",
    excerpt:
      "Explore the revolutionary art movement that challenged traditional painting techniques and paved the way for modern art.",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Decoding Abstract Expressionism",
    author: "Michael Chen",
    excerpt:
      "Dive into the post-World War II art movement that emphasized spontaneous, automatic, or subconscious creation.",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "The Renaissance: A Rebirth of Art and Culture",
    author: "Sophia Rossi",
    excerpt:
      "Discover how this cultural movement profoundly affected European intellectual life in the early modern period.",
    date: "2023-06-05",
  },
  {
    id: 4,
    title: "Pop Art: When Popular Culture Meets Fine Art",
    author: "James Wilson",
    excerpt:
      "Learn about the art movement that emerged in the United Kingdom and the United States during the mid- to late-1950s.",
    date: "2023-05-30",
  },
  {
    id: 5,
    title: "The Influence of Japanese Art on Western Painting",
    author: "Yuki Tanaka",
    excerpt:
      "Explore how Japanese art, especially ukiyo-e prints, influenced European artists in the late 19th century.",
    date: "2023-05-25",
  },
]

export default function Articles() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="space-y-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`} className="block">
            <div className="modernistic-card p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-2">
                By {article.author} | {article.date}
              </p>
              <p className="text-gray-700">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

