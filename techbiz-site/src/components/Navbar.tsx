"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { User } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const navLinkClass = (path: string) =>
    `block px-4 py-2 transition relative text-[var(--text-plain)] hover:text-[var(--primary)] ${
      pathname === path ? "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[4px] after:bg-red-500" : ""
    }`;

  return (
    <nav
      style={{
        backgroundColor: "var(--foreground)",
        color: "var(--foreground)",
        borderColor: "var(--primary)",
      }}
      className="shadow-md border-b-4"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 bg-[var(--background)]">
            <Image
              src="/cola_logo_bkgrdrm.png"
              alt="TechBiz Logo"
              width={60}
              height={60}
              className="border-2 border-red-700"
            />
          </div>
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden text-[var(--text-plain)] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-lg font-bold">
          <Link href="/products" className={navLinkClass("/products")}>
            Products
          </Link>
          <Link href="/services" className={navLinkClass("/services")}>
            Services
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link
                href="/admin"
                className="bg-[var(--primary)] text-[var(--text-plain)] px-4 py-2 rounded hover:opacity-90 text-sm font-bold"
              >
                Admin
              </Link>
              <button
                onClick={handleLogout}
                className="bg-[var(--primary)] text-[var(--text-plain)] px-4 py-2 rounded hover:opacity-90 text-sm font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-[var(--primary)] text-[var(--text-plain)] px-4 py-2 rounded hover:opacity-90 text-sm font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-base font-medium">
          <Link href="/products" onClick={() => setIsOpen(false)} className={navLinkClass("/products")}>
            Products
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className={navLinkClass("/services")}>
            Services
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={navLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={navLinkClass("/contact")}>
            Contact
          </Link>
          {user ? (
            <>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[var(--primary)] text-[var(--text-plain)] px-4 py-2 rounded hover:opacity-90 text-sm font-bold"
              >
                Admin
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-[var(--primary)] text-[var(--text-plain)] px-4 py-2 rounded hover:opacity-90 text-sm font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[var(--primary)] text-[var(--text-plain)] px-4 py-2 rounded hover:opacity-90 text-sm font-bold"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
