import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import NewOrder from "./pages/dashboard/NewOrder";
import ProjectsPage from "./pages/dashboard/Projects";
import Orders from "./pages/dashboard/Orders";
import Payments from "./pages/dashboard/Payments";
import Messages from "./pages/dashboard/Messages";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Website Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";

// 404
import NotFound from "./pages/NotFound";


function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Pricing />
      <Projects />
      <WhyChoose />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}


export default function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);


  if (loading) {
    return <Loader />;
  }


  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>


          {/* Main Website */}
          <Route
            path="/"
            element={<HomePage />}
          />


          {/* Authentication */}
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



          {/* User Dashboard */}

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




          {/* Admin Dashboard */}

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



          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />


        </Routes>

      </AuthProvider>

    </BrowserRouter>
  );
}