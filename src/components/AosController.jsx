import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSController() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.refreshHard(); // THIS IS THE FIX
  }, [pathname]);

  return null;
}
