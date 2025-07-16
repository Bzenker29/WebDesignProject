import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function addService({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon?: string;
}) {
  await addDoc(collection(db, "services"), {
    name,
    description,
    icon: icon || "",
    createdAt: serverTimestamp(),
  });
}
