import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Public Pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Industries from "./pages/Industries.jsx";
import Contact from "./pages/Contact.jsx";
import Solutions from "./pages/Solutions.jsx";
import AdvancedEcommerce from "./pages/AdvancedEcommerce.jsx";

// Admin Pages
import AdminDashboard from "./components/AdminDashboard.jsx";
import AdminHome from "./pages/AdminHome.jsx";
import AdminService from "./pages/AdminService.jsx";
import AdminAdvanceEcommerce from "./pages/AdminAdvanceEcommerce.jsx";
import AdminAboutUs from "./pages/AdminAboutUs.jsx";
import AdminSolutions from "./pages/AdminSolutions.jsx";
import AdminIndustries from "./pages/AdminIndustries.jsx";
import AdminContact from "./pages/AdminContact.jsx";
import Users from "./pages/Users.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Dash from "./pages/Dash.jsx";

const router = createBrowserRouter([
  // PUBLIC ROUTES
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "services/advanced-ecommerce", element: <AdvancedEcommerce /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "solutions", element: <Solutions /> },
      { path: "industries", element: <Industries /> },
      { path: "contact", element: <Contact /> },
    ],
  },

  // ADMIN LOGIN (no navbar/footer)
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },

  // ADMIN DASHBOARD (protected + nested routes)
  {
    path: "/admindashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dash /> },

      {
        path: "home",
        element: (
          <ProtectedRoute>
            <AdminHome />{" "}
          </ProtectedRoute>
        ),
      },
      { path: "services", element: <AdminService /> },
      { path: "advanced-ecommerce", element: <AdminAdvanceEcommerce /> },
      { path: "about-us", element: <AdminAboutUs /> },
      { path: "solutions", element: <AdminSolutions /> },
      { path: "industries", element: <AdminIndustries /> },
      { path: "contact", element: <AdminContact /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <div>Settings Page</div> },
      { path: "dash", element: <Dash /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
