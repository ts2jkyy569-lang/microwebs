import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";


// Public Website
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Projects from "../components/Projects";
import WhyChoose from "../components/WhyChoose";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";


// Loader
import Loader from "../components/Loader";


// Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/dashboard/Dashboard";
import MyOrders from "../pages/dashboard/MyOrders";
import WebsiteOrder from "../pages/dashboard/WebsiteOrder";

import NotFound from "../pages/NotFound";


import { useEffect, useState } from "react";



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





export default function AppRoutes() {


  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);


    return () => clearTimeout(timer);


  }, []);





  if (loading) {

    return <Loader />;

  }





  return (

    <BrowserRouter>

      <AuthProvider>


        <Routes>


          <Route
            path="/"
            element={<HomePage />}
          />



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




          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />




          <Route
            path="/dashboard/new-order"
            element={
              <ProtectedRoute>
                <WebsiteOrder />
              </ProtectedRoute>
            }
          />




          <Route
            path="/dashboard/orders"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />




          <Route
            path="*"
            element={<NotFound />}
          />


        </Routes>


      </AuthProvider>

    </BrowserRouter>

  );

}