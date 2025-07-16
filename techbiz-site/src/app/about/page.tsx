// src/app/about/page.tsx or src/pages/about.tsx
export default function AboutPage() {
    return (
      <main style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }} className="min-h-screen px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-[var(--primary)]">About Us</h1>
          <p className="text-lg leading-7 mb-4">
            Welcome to TechBiz — your one-stop shop for innovative tech solutions.
          </p>
          <p className="text-lg leading-7 mb-4">
            We specialize in providing top-notch products and services to help businesses grow and stay competitive in the modern digital landscape.
          </p>
          <p className="text-lg leading-7">
            Our mission is to simplify technology for our customers while delivering exceptional value and support.
          </p>
        </div>
      </main>
    );
  }
  