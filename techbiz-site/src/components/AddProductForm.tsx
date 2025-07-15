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
    <div className="bg-white shadow rounded-xl p-6 text-blue-700">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded h-24"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Image URL (optional)</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
    </div>
  );
}
