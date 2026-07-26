import { db } from "../../firebase/firebase";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";


// Get all customers
export function subscribeToCustomers(callback) {
  return onSnapshot(collection(db, "users"), (snapshot) => {
    const customers = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((user) => user.role !== "admin");

    callback(customers);
  });
}


// Delete customer
export async function deleteCustomer(id) {
  const userRef = doc(db, "users", id);

  await deleteDoc(userRef);
}


// Get customer's orders
export async function getCustomerOrders(userId) {
  const ordersRef = collection(db, "orders");

  const q = query(
    ordersRef,
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}