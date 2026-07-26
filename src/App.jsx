import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

// Homepage
import Home from "./pages/Home";

// Portfolio
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

// Authentication
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Dashboard Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import NewOrder from "./pages/dashboard/NewOrder";
import ProjectsPage from "./pages/dashboard/Projects";
import Orders from "./pages/dashboard/Orders";
import Payments from "./pages/dashboard/Payments";
import Messages from "./pages/dashboard/Messages";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

// Admin Layout
import AdminLayout from "./layouts/AdminLayout";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

// Components
import Loader from "./components/Loader";

// 404
import NotFound from "./pages/NotFound";


export default function App() {

  const [loading,setLoading] = useState(true);


  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoading(false);
    },2000);


    return ()=>clearTimeout(timer);

  },[]);



  if(loading){
    return <Loader />;
  }



  return (

    <BrowserRouter>

      <AuthProvider>


        <Routes>



          {/* ================= HOME ================= */}

          <Route
            path="/"
            element={<Home />}
          />



          {/* ================= PORTFOLIO ================= */}

          <Route
            path="/projects"
            element={<Projects />}
          />


          <Route
            path="/projects/:id"
            element={<ProjectDetails />}
          />





          {/* ================= AUTH ================= */}


          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/register"
            element={<Register />}
          />


          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />






          {/* ================= USER DASHBOARD ================= */}


          <Route

            path="/dashboard"

            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }

          >


            <Route
              index
              element={<Dashboard />}
            />


            <Route
              path="new-order"
              element={<NewOrder />}
            />


            <Route
              path="projects"
              element={<ProjectsPage />}
            />


            <Route
              path="orders"
              element={<Orders />}
            />


            <Route
              path="payments"
              element={<Payments />}
            />


            <Route
              path="messages"
              element={<Messages />}
            />


            <Route
              path="profile"
              element={<Profile />}
            />


            <Route
              path="settings"
              element={<Settings />}
            />


          </Route>






          {/* ================= ADMIN ================= */}


          <Route

            path="/admin"

            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }

          >


            <Route
              index
              element={<AdminDashboard />}
            />


            <Route
              path="orders"
              element={<AdminOrders />}
            />


            <Route
              path="projects"
              element={<AdminProjects />}
            />


            <Route
              path="payments"
              element={<AdminPayments />}
            />


            <Route
              path="customers"
              element={<AdminCustomers />}
            />


            <Route
              path="messages"
              element={<AdminMessages />}
            />


            <Route
              path="analytics"
              element={<AdminAnalytics />}
            />


            <Route
              path="settings"
              element={<AdminSettings />}
            />


          </Route>






          {/* ================= 404 ================= */}


          <Route
            path="*"
            element={<NotFound />}
          />



        </Routes>


      </AuthProvider>


    </BrowserRouter>

  );

}