import { useEffect, useState } from "react";
import { subscribeToOrders } from "../services/admin/orderService";

export default function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToOrders((data) => {
      setOrders(data);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return {
    orders,
    loading,
  };
}