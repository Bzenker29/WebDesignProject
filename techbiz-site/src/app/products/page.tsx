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
        <p className="text-gray-600">Loading products…</p>
      </main>
    );
  }

  // ----------------------------
  // When there are no products
  // ----------------------------
  if (products.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
        <p className="text-gray-500 text-lg">No products available right now. Check back soon!</p>
      </main>
    );
  }

  // ----------------------------
  // Products grid
  // ----------------------------
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-blue-700">
          Our Products
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden text-blue-700"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
                <p className="text-gray-600">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
