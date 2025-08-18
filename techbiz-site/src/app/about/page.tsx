// src/app/about/page.tsx or src/pages/about.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-main)",
        backgroundImage: "url('/topography.png')",
        backgroundSize: "600px",
        backgroundRepeat: "repeat",
        backgroundPosition: "top left",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <section
          className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto mb-12"
          style={{ backgroundColor: "var(--background)" }}
        >
          <h1 className="text-4xl font-bold mb-6 text-[var(--primary)]">
            About Us
          </h1>
          <p className="text-lg leading-7 mb-4">
            Welcome to Colangelo Group Engineering and Manufacturing Services
            (CGEMS) — your one-stop shop for innovative tech solutions.
          </p>
          <p className="text-lg leading-7 mb-4">
            We specialize in providing top-notch products and services to help
            businesses grow and stay competitive in the modern digital
            landscape.
          </p>
          <p className="text-lg leading-7 mb-4">
            Our Mission is to deliver quality products and services while
            enjoying the time well spent with fellow employees, vendors,
            subcontractors, teammates, and customers.
          </p>
          <p className="text-lg leading-7">
            A happy environment makes for a happy customer and a happy life.
          </p>
        </section>

        {/* President Section */}
        <section
          className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 mb-12"
          style={{ backgroundColor: "var(--background)" }}
        >
          <Image
            src="/mrs_betty.PNG"
            alt="Company President"
            width={160}
            height={160}
            className="object-cover rounded border-4 border-red-700"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[var(--primary)] mb-2">
              Meet Our President
            </h2>
            <p className="text-lg leading-7">
              Betty Colangelo is a key member of the leadership team at
              Colangelo Group Engineering and Manufacturing Services (CGEMS).
              She earned her Bachelor of Science from Keene State College and
              her Master’s degree from Southern Connecticut State University.
              Betty brings dedication, insight, and a strong sense of community
              to her role. Outside of work, she enjoys gardening, spending
              quality time with her family, and both playing and watching
              tennis.
            </p>
          </div>
        </section>

        {/* Community Section */}
        <section
          className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6"
          style={{ backgroundColor: "var(--background)" }}
        >
          <div>
            <h2 className="text-2xl font-semibold text-[var(--primary)] mb-2">
              CGEMS in the community!
            </h2>
            <p className="text-lg leading-7">
              At CGEMS, we are committed to supporting and uplifting our
              community through innovation, integrity, and meaningful
              engagement. We believe in creating lasting impact not only through
              the engineering and manufacturing services we provide, but also by
              fostering strong relationships with local organizations, investing
              in educational opportunities, and encouraging our team to actively
              participate in community initiatives. Our dedication goes beyond
              business—we aim to be a trusted partner and a force for good in
              every community we serve.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
