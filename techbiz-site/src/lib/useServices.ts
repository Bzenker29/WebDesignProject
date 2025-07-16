"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export type Service = {
  id: string;
  name: string;
  description: string;
  icon?: string;
};

export default function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, "services"));
      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Service, "id">),
      }));
      setServices(list);
      setLoading(false);
    })();
  }, []);

  return { services, loading };
}
