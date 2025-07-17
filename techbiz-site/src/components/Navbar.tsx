"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";


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
    <nav style={{ backgroundColor: "var(--foreground)", color: "var(--foreground)", borderColor: "var(--primary)" }} className="shadow-md border-b-4">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center space-x-2 bg-[var(--background)]">
          <Image src="/cola_logo_bkgrdrm.png" 
          alt="TechBiz Logo" 
          width={60} 
          height={60}
          className="border-2 border-red-700" 
          />
        </div>
      </Link>

        {/* Center: Navigation Links */}
        <div className="flex space-x-15 justify-center flex-1 text-lg font-bold">
          <Link href="/products" className="text-[var(--text-plain)] hover:text-[var(--primary)]">
            Products
          </Link>
          <Link href="/services" className="text-[var(--text-plain)] hover:text-[var(--primary)]">
            Services
          </Link>
          <Link href="/about" className="text-[var(--text-plain)] hover:text-[var(--primary)]">
            About Us
          </Link>
          <Link href="/contact" className="text-[var(--text-plain)] hover:text-[var(--primary)]">
            Contact
          </Link>
        </div>

        {/* Right: Auth Links */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/admin" className="bg-[var(--primary)] text-[var(--text-plain)] px-4 py-2 rounded hover:opacity-90 text-sm font-bold">
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
    </nav>
  );
}
