import Link from "next/link"

const TopBar = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-gray-900 text-white p-4 flex justify-end items-center space-x-4">
      <div className="text-sm">{currentDate}</div>
      <Link
        href="/login"
        className="px-3 py-1 text-sm bg-white text-black font-semibold rounded-none hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Log In
      </Link>
      <Link
        href="/signup"
        className="px-3 py-1 text-sm bg-white text-black font-semibold rounded-none hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Sign Up
      </Link>
    </div>
  )
}

export default TopBar

