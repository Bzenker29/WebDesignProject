import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function isAdmin(uid: string): Promise<boolean> {
  const docRef = doc(db, "admins", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists(); // or check role field if you add one
}
