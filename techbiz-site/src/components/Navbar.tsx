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
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          TechBiz
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>

          {user ? (
            <>
              <Link href="/admin" className="text-blue-600 font-semibold">
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
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
