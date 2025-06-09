import { useRef } from "react";
import cardamomImg from "../assets/cardamom-new.png";

const Cardamom = () => {
  const cardamomRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="cardamom"
      className="relative min-h-screen flex items-center py-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" ref={cardamomRef}>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-emerald-500">
              Emerald Cardamom
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Discover the exquisite aroma and flavor of our premium Emerald
              Cardamom. Handpicked from the lush highlands of Guatemala, each
              pod encapsulates centuries of tradition and unparalleled quality.
            </p>
            <p className="text-lg mb-10 leading-relaxed">
              With its distinctive sweet and spicy notes, our Emerald Cardamom
              elevates both sweet and savory dishes to new heights of culinary
              excellence. A true treasure for discerning palates.
            </p>
            <button className="px-8 py-3 bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all duration-300 font-light tracking-wider !rounded-button whitespace-nowrap cursor-pointer group">
              Learn More
              <i className="fas fa-long-arrow-alt-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
            </button>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-700">
            <img
              src={cardamomImg}
              alt="Premium Emerald Cardamom"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardamom;
