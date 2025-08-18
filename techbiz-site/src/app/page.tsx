"use client";
import useProducts from "../lib/useProducts";
import Image from "next/image";

export default function Home() {
  const { products, loading } = useProducts();
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-main)",
        backgroundImage: "url('/topography.svg')",
        backgroundSize: "600px", // adjust size of pattern
        backgroundRepeat: "repeat",
        backgroundPosition: "top left",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative py-45 px-8 shadow flex flex-col items-center md:items-start border-b-4"
        style={{
          backgroundImage: "url('/home_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "var(--text-main)",
          borderColor: "var(--primary)",
        }}
      >
        {/* Optional overlay mask/fade */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
            zIndex: 0,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-center md:text-left font-bold">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-plain)" }}
          >
            Powering Innovation in Tech & Engineering
          </h1>
          <p
            className="text-lg md:text-xl mb-8 font-bold"
            style={{ color: "var(--text-plain)" }}
          >
            Explore our tools, products, and services designed to take your
            projects to the next level.
          </p>
          <a
            href="/products"
            className="inline-block px-6 py-3 rounded-xl shadow font-bold transition-colors duration-300 hover:bg-[var(--primary-hover)] hover:text-[var(--btn-text)]"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--btn-text)",
            }}
          >
            View Products
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className="py-16 px-8 rounded-xl shadow-xl border-1 p-6 space-y-6 max-w-6xl mx-auto mt-12"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--foreground)",
          color: "var(--text-main)",
        }}
      >
        <h2
          className="text-3xl font-semibold text-center mb-12"
          style={{ color: "var(--text-heading)" }}
        >
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Custom Engineering",
            "Rapid Prototyping",
            "Technical Consulting",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow hover:shadow-md transition border"
              style={{
                backgroundColor: "var(--background)",
                color: "var(--text-main)",
                borderColor: "var(--border)",
              }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--text-heading)" }}
              >
                {service}
              </h3>
              <p style={{ color: "var(--text-main)" }}>
                {service === "Custom Engineering" &&
                  "Bespoke solutions for manufacturing, robotics, and industrial design."}
                {service === "Rapid Prototyping" &&
                  "Fast turnaround for 3D-printed models, enclosures, and tooling."}
                {service === "Technical Consulting" &&
                  "Strategic advice and implementation support for your toughest challenges."}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Products Section */}
      <section
        className="py-16 px-8 rounded-xl shadow-xl border-1 p-6 space-y-6 max-w-6xl mx-auto mt-12"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--foreground)",
          color: "var(--text-main)",
        }}
      >
        <h2
          className="text-3xl font-semibold text-center mb-12"
          style={{ color: "var(--text-heading)" }}
        >
          Our Products
        </h2>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-xl shadow hover:shadow-md transition border flex flex-col items-center"
                style={{
                  backgroundColor: "var(--background)",
                  color: "var(--text-main)",
                  borderColor: "var(--border)",
                }}
              >
                {product.image && (
                  <div className="relative w-40 h-40 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                )}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-heading)" }}
                >
                  {product.name}
                </h3>
                <p style={{ color: "var(--text-main)" }}>
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* Premiere Product Highlight: Port Scanner */}
      <section
        className="py-16 px-8 rounded-xl text-center shadow-xl border-1 p-6 space-y-6 max-w-6xl mx-auto mt-12"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--foreground)",
          color: "var(--text-main)",
        }}
      >
        <h2
          className="text-3xl font-semibold text-center mb-4"
          style={{ color: "var(--text-heading)" }}
        >
          IP & Port Scanner
        </h2>
        <p
          className="text-lg mb-6 max-w-4xl mx-auto"
          style={{ color: "var(--text-main)" }}
        >
          Our advanced Port Scanner is designed for network professionals and
          businesses seeking robust security insights. Effortlessly scan and
          analyze open ports, detect vulnerabilities, and ensure your
          infrastructure is protected. Fast, reliable, and easy to use—this tool
          sets the standard for network diagnostics.
        </p>
        <a
          href="/scanner"
          className="inline-block px-6 py-3 rounded-xl shadow font-bold transition-colors duration-300 hover:bg-[var(--btn-disabled)] hover:text-[var(--primary)]"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--btn-text)",
          }}
        >
          Learn More
        </a>
      </section>
      {/* CTA Section */}
      <section
        className="py-20 px-8 text-center rounded-t-xl shadow mt-16"
        style={{ backgroundColor: "var(--primary)", color: "var(--btn-text)" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Something Together
        </h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Contact us today to discuss your next engineering project or get a
          custom quote.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-xl shadow font-bold transition-colors duration-300 hover:bg-[var(--btn-disabled)] hover:text-[var(--primary)]"
          style={{
            backgroundColor: "var(--btn-text)",
            color: "var(--primary)",
          }}
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
