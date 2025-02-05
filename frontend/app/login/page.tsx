"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { AxiosError } from "axios";


const api = axios.create({
  baseURL: "http://localhost:8000/auth", 
  withCredentials: true, 
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/login/", { email, password });
      router.push("/home");
    } catch (error) {
      const err = error as AxiosError;
      console.error("Login failed:", err.response?.data || err.message)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8">Log In</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link href="/signup" className="text-gray-900 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
