import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Powering Innovation in Tech & Engineering
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Explore our tools, products, and services designed to take your projects to the next level.
        </p>
        <a
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          View Products
        </a>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Custom Engineering", "Rapid Prototyping", "Technical Consulting"].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">{service}</h3>
              <p className="text-gray-600">
                {service === "Custom Engineering" && "Bespoke solutions for manufacturing, robotics, and industrial design."}
                {service === "Rapid Prototyping" && "Fast turnaround for 3D-printed models, enclosures, and tooling."}
                {service === "Technical Consulting" && "Strategic advice and implementation support for your toughest challenges."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-20 px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Something Together</h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Contact us today to discuss your next engineering project or get a custom quote.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
