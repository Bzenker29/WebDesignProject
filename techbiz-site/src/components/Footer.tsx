import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
      className="py-6 px-4 text-sm"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0 bg-[var(--background)]">
          <Image
            src="/cola_logo_bkgrdrm.png"
            alt="TechBiz Logo"
            width={60}
            height={60}
            className="border-2 border-red-700"
          />
        </Link>

        {/* Center - Navigation */}
        <div className="text-center flex flex-wrap justify-center items-center gap-4 mb-2 md:mb-0">
            <Link href="/products" className="hover:underline">
                Products
            </Link>
            <span className="h-4 w-px bg-white" />
            <Link href="/services" className="hover:underline">
                Services
            </Link>
            <span className="h-4 w-px bg-white" />
            <Link href="/about" className="hover:underline">
                About Us
            </Link>
            <span className="h-4 w-px bg-white" />
            <Link href="/contact" className="hover:underline">
                Contact
            </Link>
        </div>


        {/* Right - Copyright */}
        <div className="text-center text-xs md:text-right">
          &copy; {new Date().getFullYear()} TechBiz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
