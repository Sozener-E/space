"use client"

import { useState } from "react"

export default function Settings() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("en")

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>
      <div className="modernistic-card p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="mr-2"
            />
            Receive email notifications
          </label>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Appearance</h2>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="mr-2"
            />
            Dark Mode
          </label>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Language</h2>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="p-2 border rounded">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">Save Changes</button>
      </div>
    </div>
  )
}

