"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav style={{ backgroundColor: "var(--background)", color: "var(--foreground)", borderColor: "var(--primary)" }} className="shadow-md border-b-4">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold text-[var(--primary)]">
          TechBiz
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex space-x-15 justify-center flex-1 text-lg font-bold">
          <Link href="/products" className="hover:text-[var(--primary)]">
            Products
          </Link>
          <Link href="/services" className="hover:text-[var(--primary)]">
            Services
          </Link>
          <Link href="/about" className="hover:text-[var(--primary)]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[var(--primary)]">
            Contact
          </Link>
        </div>

        {/* Right: Auth Links */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/admin" className="text-[var(--primary)] font-bold">
                Admin
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-[var(--primary)] text-white px-4 py-2 rounded hover:opacity-90 text-sm font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
