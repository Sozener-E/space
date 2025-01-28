"use client"

import Link from "next/link"

interface NewsItem {
  id: number
  title: string
  date: string
}

interface LatestNewsProps {
  news: NewsItem[]
}

export function LatestNews({ news }: LatestNewsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-600">{item.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

