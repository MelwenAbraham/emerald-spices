import { useEffect } from "react";

function ScrollProgress() {
  // Scroll progress indicator
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      const progressBar = document.getElementById("scrollProgress");
      if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`;
      }
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);
  return (
    <div className="fixed bottom-0 left-0 w-full h-1 bg-black/30 z-50">
      <div id="scrollProgress" className="h-full bg-emerald-500"></div>
    </div>
  );
}

export default ScrollProgress;
