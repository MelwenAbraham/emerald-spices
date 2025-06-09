import { useRef } from "react";
import pepperImg from "../assets/pepper-new.png";

const Pepper = () => {
  const pepperRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="pepper"
      className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-700">
            <img
              src={pepperImg}
              alt="Premium Onyx Pepper"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div ref={pepperRef}>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-emerald-500">
              Onyx Pepper
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Grown in the misty highlands of Munnar, Kerala, our Onyx Pepper is
              the epitome of premium pepper cultivation. Nurtured in
              mineral-rich soil and cool mountain air, each peppercorn develops
              a bold, intricate flavor that elevates any dish it touches.
            </p>
            <p className="text-lg mb-10 leading-relaxed">
              With striking notes of citrus, aged wood, and a warm, lingering
              heat, Onyx Pepper isn’t just a spice—it’s an experience.
              Hand-harvested and sun-dried with care, every grain speaks of
              purity, richness, and the untamed beauty of Munnar.
            </p>
            <button className="px-8 py-3 bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all duration-300 font-light tracking-wider !rounded-button whitespace-nowrap cursor-pointer group">
              Learn More
              <i className="fas fa-long-arrow-alt-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pepper;
