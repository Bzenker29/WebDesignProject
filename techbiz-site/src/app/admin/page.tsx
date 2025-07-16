"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { isAdmin } from "@/lib/checkAdmin";
import AddProductForm from "@/components/AddProductForm";
import AddServiceForm from "@/components/AddServiceForm";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
        const admin = await isAdmin(currentUser.uid);
        if (!admin) {
          router.push("/unauthorized"); // create this page to show "Access Denied"
        } else {
          setIsAuthorized(true);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  if (!isAuthorized) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <p>Checking access...</p>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-4 py-16"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--primary)" }}
          >
            Admin Panel
          </h1>
          <p className="mb-4" style={{ color: "var(--muted)" }}>
            Welcome, {user.email}
          </p>
        </div>

        <AddProductForm />
        <AddServiceForm />
      </div>
    </main>
  );
}
