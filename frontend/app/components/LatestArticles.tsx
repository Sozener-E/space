"use client"

import Link from "next/link"

interface Article {
  id: number
  title: string
  author: string
}

interface LatestArticlesProps {
  articles: Article[]
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p className="text-gray-600">By {article.author}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

