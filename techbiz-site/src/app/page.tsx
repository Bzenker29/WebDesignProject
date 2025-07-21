"use client";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)", color: "var(--text-main)" }}
    >
      {/* Hero Section */}
      <section
        className="py-20 px-8 text-center rounded-xl shadow"
        style={{ backgroundColor: "var(--background)", color: "var(--text-main)" }}
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--text-heading)" }}
        >
          Powering Innovation in Tech & Engineering
        </h1>
        <p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          Explore our tools, products, and services designed to take your projects to the next level.
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
      </section>

      {/* Services Preview */}
      <section
        className="py-16 px-8 rounded-xl shadow max-w-6xl mx-auto mt-12"
        style={{ backgroundColor: "var(--background)" }}
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
              <p style={{ color: "var(--text-muted)" }}>
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

      {/* CTA Section */}
      <section
        className="py-20 px-8 text-center rounded-t-xl shadow mt-16"
        style={{ backgroundColor: "var(--primary)", color: "var(--btn-text)" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Something Together
        </h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Contact us today to discuss your next engineering project or get a custom quote.
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
