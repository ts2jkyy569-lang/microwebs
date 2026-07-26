import { db } from "../../firebase/firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";


export function subscribeToOrders(callback) {
  return onSnapshot(collection(db, "orders"), (snapshot) => {
    const orders = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(orders);
  });
}


export async function updateOrder(id, data) {
  const orderRef = doc(db, "orders", id);

  await updateDoc(orderRef, data);
}


export async function deleteOrder(id) {
  const orderRef = doc(db, "orders", id);

  await deleteDoc(orderRef);
}