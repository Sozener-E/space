import Image from "next/image"

export default function Profile() {
  // This would typically come from a database or API
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    bio: "Art enthusiast and aspiring painter",
    profilePicture: "/placeholder.svg",
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <div className="modernistic-card p-6">
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
        <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">Edit Profile</button>
      </div>
    </div>
  )
}

