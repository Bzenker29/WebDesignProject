import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[var(--primary)] text-white py-12 px-6 rounded-xl shadow-lg mt-12 mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Power Up Your Business?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Discover innovative tools, top-tier services, and expert support tailored for modern growth. Partner with TechBiz today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/services" className="bg-white text-[var(--primary)] font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition">
            Explore Services
          </Link>
          <Link href="/contact" className="bg-[var(--secondary)] text-white font-semibold py-3 px-6 rounded-md hover:bg-[var(--secondary-hover)] transition">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
