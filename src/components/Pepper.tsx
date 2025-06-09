import { useRef } from "react";

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
              src="https://readdy.ai/api/search-image?query=Luxury%20black%20peppercorns%20with%20dramatic%20lighting%20against%20dark%20background%2C%20ultra%20high-end%20product%20photography%2C%20cinematic%20mood%20with%20subtle%20smoke%20effect%2C%20macro%20detail%20showing%20texture%20and%20quality%2C%20professional%20studio%20lighting%20with%20gold%20accents%2C%20sophisticated%20black%20marble%20surface&width=700&height=700&seq=pepper-1&orientation=squarish"
              alt="Premium Onyx Pepper"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div ref={pepperRef}>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-emerald-500">
              Onyx Pepper
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Our Onyx Pepper represents the pinnacle of pepper cultivation.
              Sourced from the volcanic soils of Madagascar, these exceptional
              peppercorns deliver an intense, complex flavor profile unlike any
              other.
            </p>
            <p className="text-lg mb-10 leading-relaxed">
              With notes of citrus, wood, and a lingering heat, Onyx Pepper
              transforms ordinary dishes into extraordinary culinary
              experiences. Each grain is a testament to nature's perfection.
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
