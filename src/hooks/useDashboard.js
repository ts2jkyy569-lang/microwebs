import { useEffect, useState } from "react";
import { subscribeDashboard } from "../services/admin/dashboardService";


export default function useDashboard(){

  const [dashboard,setDashboard] = useState({
    revenue:0,
    totalOrders:0,
    totalCustomers:0,
    totalProjects:0,
    orders:[],
    payments:[],
    users:[],
    projects:[]
  });


  const [loading,setLoading]=useState(true);



  useEffect(()=>{

    const unsubscribe =
      subscribeDashboard((data)=>{

        setDashboard(data);
        setLoading(false);

      });


    return unsubscribe;


  },[]);



  return {
    dashboard,
    loading
  };

}