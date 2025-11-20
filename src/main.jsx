import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages importing
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Industries from "./pages/Industries.jsx";
import Contact from "./pages/Contact.jsx";
import Solutions from './pages/Solutions.jsx';
import AdvancedEcommerce from './pages/AdvancedEcommerce.jsx';




// Router config
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: "/", element: <Home /> },
      { path: "services", element: <Services /> },
      {path: "services/advanced-ecommerce", element: <AdvancedEcommerce />},

      { path: "about-us", element: <AboutUs /> },
      { path: "solutions", element: <Solutions /> },
      { path: "industries", element: <Industries /> },
      { path: "contact", element: <Contact /> },
      // {path: "services/advanced-ecommerce", element: <AdvancedEcommerce />},
    ],
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)