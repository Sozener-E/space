import Image from "next/image"

export default function Profile() {
  // This would typically come from a database or API
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    bio: "Art enthusiast and aspiring painter. I love exploring different art styles and sharing my thoughts on various artworks.",
    profilePicture: "/placeholder.svg?text=Jane+Doe",
    favoriteArtworks: [
      { id: 1, title: "Starry Night", artist: "Vincent van Gogh" },
      { id: 2, title: "The Persistence of Memory", artist: "Salvador Dalí" },
      { id: 3, title: "Girl with a Pearl Earring", artist: "Johannes Vermeer" },
    ],
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <Image
            src={user.profilePicture || "/placeholder.svg"}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Bio</h3>
          <p>{user.bio}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Favorite Artworks</h3>
          <ul className="list-disc pl-5">
            {user.favoriteArtworks.map((artwork) => (
              <li key={artwork.id}>
                {artwork.title} by {artwork.artist}
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-6 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">Edit Profile</button>
      </div>
    </div>
  )
}

