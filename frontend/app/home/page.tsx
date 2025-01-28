import { FeaturedPainting } from "../components/FeaturedPainting"
import { LatestNews } from "../components/LatestNews"
import { LatestArticles } from "../components/LatestArticles"

// This would typically come from an API or database
const paintings = [
  {
    id: 1,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: 1889,
    description:
      "This painting depicts the view from the east-facing window of Van Gogh's asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village.",
  },
  {
    id: 2,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: 1931,
    description:
      "This surrealist masterpiece explores the fluidity of time, featuring melting clocks draped over a barren landscape.",
  },
  {
    id: 3,
    title: "The Scream",
    artist: "Edvard Munch",
    year: 1893,
    description:
      "This expressionist painting represents the universal anxiety of modern man, with a screaming figure set against a landscape with a swirling orange sky.",
  },
]

const latestNews = [
  { id: 1, title: "New Banksy Artwork Appears in London", date: "2023-06-01" },
  { id: 2, title: "Louvre Announces Major Renovation Project", date: "2023-05-28" },
  { id: 3, title: "Lost Van Gogh Painting Discovered in Attic", date: "2023-05-25" },
]

const latestArticles = [
  { id: 1, title: "The Influence of Impressionism on Modern Art", author: "Jane Smith" },
  { id: 2, title: "Understanding Abstract Expressionism", author: "John Doe" },
  { id: 3, title: "The Renaissance: A Deep Dive", author: "Emily Johnson" },
]

export default function Home() {
  const todaysPainting = paintings[Math.floor(Math.random() * paintings.length)]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to Art of Time</h1>
      <p className="text-xl mb-8 text-gray-700">
        Art of Time is your gateway to the fascinating world of art history. We bring you a curated journey through the
        ages, showcasing masterpieces, exploring artistic movements, and connecting you with the stories behind the
        world's most influential artworks.
      </p>
      <FeaturedPainting painting={todaysPainting} />
      <div className="grid md:grid-cols-2 gap-8">
        <LatestNews news={latestNews} />
        <LatestArticles articles={latestArticles} />
      </div>
    </div>
  )
}

