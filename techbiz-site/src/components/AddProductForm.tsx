"use client";

import { useState } from "react";
import { addProduct } from "@/lib/addProduct";

export default function AddProductForm() {
  const [form, setForm] = useState({ name: "", description: "", image: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await addProduct(form);
      setStatus("✅ Product added!");
      setForm({ name: "", description: "", image: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to add product.");
    }
  }

  return (
    <div
      className="bg-white shadow rounded-xl p-6"
      style={{ color: "var(--text-main)" }}
    >
      <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--text-heading)" }}>
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--text-main)" }}>
            Name
          </label>
          <input
            type="text"
            className="w-full border  p-2 rounded"
            style={{  borderColor: "var(--primary)", color: "var(--text-main)" }}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--text-main)" }}>
            Description
          </label>
          <textarea
            className="w-full border p-2 rounded h-24"
            style={{  borderColor: "var(--primary)", color: "var(--text-main)" }}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--text-main)" }}>
            Image URL (optional)
          </label>
          <input
            type="text"
            className="w-full border  p-2 rounded"
            style={{  borderColor: "var(--primary)", color: "var(--text-main)" }}
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded hover:bg-blue-700"
          style={{ backgroundColor: "var(--btn-bg)", color: "var(--btn-text)" }}
        >
          Add Product
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm" style={{ color: status.startsWith("✅") ? "var(--accent)" : "red" }}>
          {status}
        </p>
      )}
    </div>
  );
}
