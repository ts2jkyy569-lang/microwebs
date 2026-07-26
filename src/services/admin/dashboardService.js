import {
  collection,
  onSnapshot
} from "firebase/firestore";

import { db } from "../../firebase/firebase";


export function subscribeDashboard(callback) {

  let dashboard = {
    orders: [],
    users: [],
    projects: [],
    payments: [],
  };


  const update = () => {

    const revenue = dashboard.payments.reduce(
      (total, payment) =>
        total + Number(payment.amount || 0),
      0
    );


    callback({

      revenue,

      totalOrders:
        dashboard.orders.length,

      totalCustomers:
        dashboard.users.filter(
          user => user.role !== "admin"
        ).length,


      totalProjects:
        dashboard.projects.length,


      orders:
        dashboard.orders,


      payments:
        dashboard.payments,


      users:
        dashboard.users,


      projects:
        dashboard.projects,

    });

  };



  const unsubscribeOrders =
    onSnapshot(
      collection(db,"orders"),
      (snapshot)=>{

        dashboard.orders =
          snapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
          }));

        update();

      }
    );



  const unsubscribeUsers =
    onSnapshot(
      collection(db,"users"),
      (snapshot)=>{

        dashboard.users =
          snapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
          }));

        update();

      }
    );



  const unsubscribeProjects =
    onSnapshot(
      collection(db,"projects"),
      (snapshot)=>{

        dashboard.projects =
          snapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
          }));

        update();

      }
    );



  const unsubscribePayments =
    onSnapshot(
      collection(db,"payments"),
      (snapshot)=>{

        dashboard.payments =
          snapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
          }));

        update();

      }
    );



  return () => {

    unsubscribeOrders();
    unsubscribeUsers();
    unsubscribeProjects();
    unsubscribePayments();

  };

}