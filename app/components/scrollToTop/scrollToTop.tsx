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
      className={`fixed bottom-8 right-6 z-[1000] flex justify-center items-center rounded-full
        bg-gradient-to-r from-pink-500 to-violet-600 p-4 
        opacity-0 transition-opacity ease-in-out duration-200
        ${ViewScrollButton ? "!opacity-100" : ""}`}
      disabled={!ViewScrollButton}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;
