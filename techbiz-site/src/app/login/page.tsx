"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-main)",
        backgroundImage: "url('/topography.png')",
        backgroundSize: "600px", // adjust size of pattern
        backgroundRepeat: "repeat",
        backgroundPosition: "top left",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="space-y-6 shadow-xl rounded-xl p-6 border border-1 w-full max-w-xl mx-auto"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--foreground)",
          color: "var(--text-main)",
        }}
      >
        <h1
          className="text-xl font-semibold text-center"
          style={{ color: "var(--primary)" }}
        >
          Admin Login
        </h1>

        {error && (
          <p className="text-sm" style={{ color: "red" }}>
            {error}
          </p>
        )}

        <div>
          <label
            className="block text-sm mb-1"
            style={{ color: "var(--primary)" }}
          >
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 rounded border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--inputBackground)",
              color: "var(--foreground)",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label
            className="block text-sm mb-1"
            style={{ color: "var(--primary)" }}
          >
            Password
          </label>
          <input
            type="password"
            className="w-full p-2 rounded border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--inputBackground)",
              color: "var(--foreground)",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded hover:opacity-90 font-semibold"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--btn-text)",
          }}
        >
          Log In
        </button>
      </form>
    </main>
  );
}
