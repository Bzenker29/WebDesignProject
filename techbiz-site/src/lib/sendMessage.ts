import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function sendMessage({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  await addDoc(collection(db, "messages"), {
    name,
    email,
    message,
    createdAt: serverTimestamp(),
  });
}
