"use client";

import useProducts from "@/lib/useProducts";

export default function ProductsPage() {
  const { products, loading } = useProducts();

  // ----------------------------
  // Loading state
  // ----------------------------
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p style={{ color: "var(--text-muted)" }}>Loading products…</p>
      </main>
    );
  }

  // ----------------------------
  // When there are no products
  // ----------------------------
  if (products.length === 0) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: "var(--background)", color: "var(--text-muted)" }}
      >
        <p className="text-lg">No products available right now. Check back soon!</p>
      </main>
    );
  }

  // ----------------------------
  // Products grid
  // ----------------------------
  return (
    <main
      className="min-h-screen px-4 py-16"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "var(--text-heading)" }}
        >
          Our Products
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="rounded-xl transition overflow-hidden"
              style={{
                backgroundColor: "var(--background)",
                color: "var(--text-main)",
                border: "2px solid var(--border)",
                boxShadow: "0 4px 6px var(--shadow)",
              }}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-80 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
                <p style={{ color: "var(--text-muted)" }}>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
