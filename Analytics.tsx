import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-95NDSDGHGW", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}