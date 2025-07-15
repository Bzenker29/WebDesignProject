import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function addProduct({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image?: string;
}) {
  await addDoc(collection(db, "products"), {
    name,
    description,
    image: image || "",
    createdAt: serverTimestamp(),
  });
}
