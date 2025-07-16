"use client";

import { useState } from "react";
import { addService } from "@/lib/addService";

export default function AddServiceForm() {
  const [form, setForm] = useState({ name: "", description: "", icon: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await addService(form);
      setStatus("✅ Service added!");
      setForm({ name: "", description: "", icon: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to add service.");
    }
  }

  return (
    <div className="bg-white shadow rounded-xl p-6 text-blue-700">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Add New Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-blue-700">Service Name</label>
          <input
            type="text"
            className="w-full border border-blue-300 p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-blue-700">Description</label>
          <textarea
            className="w-full border border-blue-300 p-2 rounded h-24"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-blue-700">Icon URL (optional)</label>
          <input
            type="text"
            className="w-full border border-blue-300 p-2 rounded"
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Add Service
        </button>
      </form>

      {status && <p className="mt-4 text-blue-700 text-sm">{status}</p>}
    </div>
  );
}
