"use client";

import useServices from "@/lib/useServices";

export default function ServicesPage() {
  const { services, loading } = useServices();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading services…</p>
      </main>
    );
  }

  if (services.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
        <p className="text-gray-500 text-lg">No services found yet. Stay tuned!</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-12">Our Services</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl shadow p-6 hover:shadow-md transition text-left text-blue-700"
            >
              <div className="text-4xl mb-4">{s.icon || "🛠️"}</div>
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
