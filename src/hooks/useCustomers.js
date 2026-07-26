import { useEffect, useState } from "react";
import { subscribeToCustomers } from "../services/admin/customerService";


export default function useCustomers() {

  const [customers, setCustomers] = useState([]);


  useEffect(() => {

    const unsubscribe = subscribeToCustomers(
      setCustomers
    );

    return () => unsubscribe();

  }, []);


  return customers;
}