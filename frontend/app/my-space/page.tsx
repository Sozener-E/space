"use client"

import { useState, useEffect } from "react"

interface Note {
  id: number
  title: string
  content: string
}

export default function MySpace() {
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes")
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    if (title.trim() === "" || content.trim() === "") return
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
    }
    setNotes([...notes, newNote])
    setTitle("")
    setContent("")
  }

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">My Space</h1>
      <div className="modernistic-card p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Add a New Note</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note content"
          className="w-full p-2 border rounded h-32 mb-4"
        />
        <button onClick={addNote} className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">
          Add Note
        </button>
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">My Notes</h2>
        {notes.map((note) => (
          <div key={note.id} className="modernistic-card p-6">
            <h3 className="text-2xl font-bold mb-2">{note.title}</h3>
            <p className="mb-4">{note.content}</p>
            <button onClick={() => deleteNote(note.id)} className="text-red-500 hover:underline">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

