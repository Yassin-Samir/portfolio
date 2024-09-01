"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
function ScrollToTop() {
  const [ViewScrollButton, setViewScrollButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => setViewScrollButton(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`fixed bottom-8 right-6 z-[1000] flex items-center rounded-full
        bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all 
        duration-300 ease-out ${!ViewScrollButton ? "hidden" : ""}`}
      disabled={!ViewScrollButton}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
