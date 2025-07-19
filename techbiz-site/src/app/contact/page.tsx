"use client";

import { useState } from "react";
import { sendMessage } from "@/lib/sendMessage";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await sendMessage(form);
      setStatus("✅ Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ Failed to send. Try again.");
      console.error(err);
    }
  }

  return (
    <main
      className="min-h-screen px-4 py-16"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-xl mx-auto">
        <h1
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "var(--primary)" }}
        >
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 shadow-xl rounded-xl p-6 border-1" 
          style={{ backgroundColor: "var(--cardBackground)", borderColor: "var(--foreground)" }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold mb-1"
              style={{ color: "var(--foreground)" }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
                backgroundColor: "var(--inputBackground)",
              }}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-1"
              style={{ color: "var(--foreground)" }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
                backgroundColor: "var(--inputBackground)",
              }}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold mb-1"
              style={{ color: "var(--foreground)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border rounded h-32 focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
                backgroundColor: "var(--inputBackground)",
              }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded transition font-semibold"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--btn-text)",
            }}
          >
            Send Message
          </button>
        </form>

        {status && (
          <p
            className="mt-4 text-center text-sm"
            style={{ color: "var(--success)" }}
          >
            {status}
          </p>
        )}
      </div>
    </main>
  );
}
