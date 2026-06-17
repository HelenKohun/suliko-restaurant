import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function MainLayout() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
        {showButton && (
          <button
            type="button"
            onClick={scrollToTop}
            className="bg-gold font-heading fixed right-6 bottom-6 z-50 flex h-[70px] w-[70px] items-center justify-center rounded-full text-3xl shadow-md shadow-black/30 hover:shadow-black/40 lg:right-10 lg:bottom-10"
          >
            <ChevronUp className="text-cream" size={30} />
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
}
