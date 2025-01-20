import Link from "next/link"
import Image from "next/image"

const Sidebar = () => {
  return (
    <aside className="fixed w-64 h-screen overflow-y-auto bg-gray-900 text-white p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Art of Time</h1>
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-gray-300">
              News
            </Link>
          </li>
          <li>
            <Link href="/history" className="hover:text-gray-300">
              History
            </Link>
          </li>
          <li>
            <Link href="/articles" className="hover:text-gray-300">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/visual-gallery" className="hover:text-gray-300">
              Visual Gallery
            </Link>
          </li>
          <li>
            <Link href="/my-space" className="hover:text-gray-300">
              My Space
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto space-y-2">
        <Link href="/profile" className="flex items-center hover:bg-gray-800 p-2 rounded">
          <Image src="/placeholder.svg" alt="Profile" width={32} height={32} className="rounded-full mr-2" />
          <span>Profile</span>
        </Link>
        <div className="pl-4">
          <Link href="/settings" className="flex items-center hover:bg-gray-800 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

