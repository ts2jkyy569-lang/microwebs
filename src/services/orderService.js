import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";


export async function saveOrder(order) {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...order,
      createdAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Saving order failed:", error);
    throw error;
  }
}