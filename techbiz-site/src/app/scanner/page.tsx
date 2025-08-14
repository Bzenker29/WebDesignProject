"use client";

export default function PortScannerInfo() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-main)",
      }}
    >
      <section className="py-20 px-8 text-center rounded-xl shadow max-w-4xl mx-auto mt-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: "var(--text-heading)" }}
        >
          Port Scanner
        </h1>
        <p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          Our Port Scanner is a powerful tool designed for network professionals
          and businesses. It allows you to scan and analyze open ports on any
          device, helping you detect vulnerabilities and secure your
          infrastructure. With a user-friendly interface and fast scanning
          capabilities, it&apos;s ideal for both quick checks and in-depth
          diagnostics.
        </p>
        <ul
          className="text-left mx-auto max-w-2xl mb-8 list-disc list-inside"
          style={{ color: "var(--text-main)" }}
        >
          <li>Scan any IP address or domain for open ports</li>
          <li>Identify potential security risks</li>
          <li>Fast and reliable results</li>
          <li>Easy-to-use interface</li>
          <li>Detailed reporting and recommendations</li>
        </ul>
        <p
          className="text-lg mb-8 max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          Whether you&apos;re a network administrator, security analyst, or a
          curious user, our port scanner helps you stay ahead of threats and
          maintain a secure environment.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-xl shadow font-bold transition-colors duration-300 hover:bg-[var(--primary-hover)] hover:text-[var(--btn-text)]"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--btn-text)",
          }}
        >
          Request a Demo
        </a>
      </section>

      {/* Why Section */}
      <section
        className="py-16 px-8 rounded-xl shadow max-w-4xl mx-auto mt-12 text-center"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--text-main)",
        }}
      >
        <h2
          className="text-3xl font-semibold mb-6"
          style={{ color: "var(--text-heading)" }}
        >
          Why?
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          In today&apos;s digital landscape, network security is more important
          than ever. Open ports can expose your systems to cyber threats,
          unauthorized access, and data breaches. Regularly scanning your
          network helps you:
        </p>
        <ul
          className="text-left mx-auto max-w-2xl mb-8 list-disc list-inside"
          style={{ color: "var(--text-main)" }}
        >
          <li>Identify and close unnecessary open ports</li>
          <li>Prevent unauthorized access to sensitive data</li>
          <li>Detect vulnerabilities before attackers do</li>
          <li>Comply with security standards and best practices</li>
          <li>
            Maintain a strong security posture for your business or organization
          </li>
        </ul>
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--text-muted)" }}
        >
          Our port scanner makes these tasks simple and efficient, empowering
          you to protect your network and assets with confidence.
        </p>
      </section>
    </main>
  );
}
