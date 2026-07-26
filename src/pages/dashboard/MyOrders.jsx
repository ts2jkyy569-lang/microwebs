import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";


export default function MyOrders() {


  const [orders, setOrders] = useState([]);

  const { user } = useAuth();



  useEffect(() => {


    const loadOrders = async () => {


      if (!user) return;



      try {


        const q = query(

          collection(db, "orders"),

          where("userId", "==", user.uid),

          orderBy("createdAt", "desc")

        );



        const snapshot = await getDocs(q);



        const data = snapshot.docs.map((doc) => ({


          id: doc.id,


          ...doc.data(),


        }));



        setOrders(data);



      } catch (error) {


        console.log(error);


      }


    };



    loadOrders();



  }, [user]);





  return (

    <div className="text-white p-10">



      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>




      {orders.length === 0 ? (


        <p className="text-gray-400">
          No orders found.
        </p>



      ) : (



        <div className="space-y-5">



          {orders.map((order) => (



            <div

              key={order.id}

              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"

            >



              <h2 className="text-xl font-bold">

                {order.websiteType}

              </h2>




              <p className="text-gray-400 mt-2">

                Package: {order.packagePlan}

              </p>




              <p className="text-yellow-400 font-bold mt-2">

                ${order.price}

              </p>




              <p className="mt-2">

                Status:

                <span className="ml-2 text-gray-300">

                  {order.status}

                </span>

              </p>




            </div>



          ))}



        </div>



      )}



    </div>

  );

}