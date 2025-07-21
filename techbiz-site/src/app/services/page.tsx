"use client";

import useServices from "@/lib/useServices";

export default function ServicesPage() {
  const { services, loading } = useServices();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p style={{ color: "var(--text-muted)" }}>Loading services…</p>
      </main>
    );
  }

  if (services.length === 0) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: "var(--background)", color: "var(--text-muted)" }}
      >
        <p className="text-lg">No services found yet. Stay tuned!</p>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-4 py-16"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1
          className="text-3xl font-bold mb-12"
          style={{ color: "var(--text-heading)" }}
        >
          Our Services
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="rounded-xl p-6 transition text-left hover:shadow-md"
              style={{
                backgroundColor: "var(--background)",
                color: "var(--text-main)",
                border: "2px solid var(--border)",
                boxShadow: "0 4px 6px var(--shadow)",
              }}
            >
              <div className="text-4xl mb-4">{s.icon || "🛠️"}</div>
              <h2 className="text-lg font-semibold">{s.name}</h2>
              <p style={{ color: "var(--text-muted)" }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
