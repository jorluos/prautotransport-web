import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopAndHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback: wait a tiny bit for the DOM to render
        const timer = setTimeout(() => {
          const delayedElement = document.getElementById(hash.replace("#", ""));
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTopAndHash;
