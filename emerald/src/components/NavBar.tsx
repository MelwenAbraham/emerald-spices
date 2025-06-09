import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      // Determine active section based on scroll position
      const sections = ["hero", "cardamom", "pepper", "story"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 transform translate-y-0 ${
          isScrolled ? "bg-black/40" : "bg-black/20"
        } backdrop-blur-lg border-b border-emerald-500/10`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center py-4">
          <div className="flex items-center">
            <a
              href="#"
              className="text-3xl font-serif tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 transition-all duration-300 cursor-pointer"
              style={{ textShadow: "0 0 20px rgba(16, 185, 129, 0.2)" }}
            >
              Emerald Spices
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#hero"
              className={`relative font-light tracking-wider hover:text-emerald-400 transition-all duration-300 cursor-pointer group ${
                activeSection === "hero" ? "text-emerald-400" : "text-white/90"
              }`}
            >
              Home
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ${
                  activeSection === "hero" ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></span>
            </a>
            <a
              href="#cardamom"
              className={`relative font-light tracking-wider hover:text-emerald-400 transition-all duration-300 cursor-pointer group ${
                activeSection === "cardamom"
                  ? "text-emerald-400"
                  : "text-white/90"
              }`}
            >
              Emerald Cardamom
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ${
                  activeSection === "cardamom" ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></span>
            </a>
            <a
              href="#pepper"
              className={`relative font-light tracking-wider hover:text-emerald-400 transition-all duration-300 cursor-pointer group ${
                activeSection === "pepper"
                  ? "text-emerald-400"
                  : "text-white/90"
              }`}
            >
              Onyx Pepper
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ${
                  activeSection === "pepper" ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></span>
            </a>
            <a
              href="#story"
              className={`relative font-light tracking-wider hover:text-emerald-400 transition-all duration-300 cursor-pointer group ${
                activeSection === "story" ? "text-emerald-400" : "text-white/90"
              }`}
            >
              Our Story
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ${
                  activeSection === "story" ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="container h-full mx-auto px-6 py-20 flex flex-col justify-between">
          <div className="flex flex-col space-y-8">
            <a
              href="#hero"
              className={`text-2xl font-serif tracking-wider ${
                activeSection === "hero" ? "text-emerald-400" : "text-white/90"
              } hover:text-emerald-400 transition-all duration-300 cursor-pointer transform hover:translate-x-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#cardamom"
              className={`text-2xl font-serif tracking-wider ${
                activeSection === "cardamom"
                  ? "text-emerald-400"
                  : "text-white/90"
              } hover:text-emerald-400 transition-all duration-300 cursor-pointer transform hover:translate-x-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Emerald Cardamom
            </a>
            <a
              href="#pepper"
              className={`text-2xl font-serif tracking-wider ${
                activeSection === "pepper"
                  ? "text-emerald-400"
                  : "text-white/90"
              } hover:text-emerald-400 transition-all duration-300 cursor-pointer transform hover:translate-x-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Onyx Pepper
            </a>
            <a
              href="#story"
              className={`text-2xl font-serif tracking-wider ${
                activeSection === "story" ? "text-emerald-400" : "text-white/90"
              } hover:text-emerald-400 transition-all duration-300 cursor-pointer transform hover:translate-x-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
