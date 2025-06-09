import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Luxury%20spice%20background%20with%20swirling%20golden%20and%20emerald%20green%20smoke%20particles%2C%20dark%20sophisticated%20atmosphere%20with%20subtle%20lighting%2C%20cinematic%20mood%2C%20ultra%20high-end%20product%20photography%20style%2C%20perfect%20for%20luxury%20spice%20brand%2C%20elegant%20and%20mysterious%20ambiance&width=1440&height=900&seq=hero-bg-1&orientation=landscape"
          alt="Luxury spice background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-20 text-center md:text-left">
          <h1
            className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wider opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Emerald Spices
          </h1>
          <p
            className="text-xl md:text-2xl font-light mb-10 tracking-wide opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            Nature's Finest, Handpicked for Your Table
          </p>
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
          >
            <a
              href="#cardamom"
              className="inline-block px-8 py-3 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all duration-300 font-light tracking-wider !rounded-button whitespace-nowrap cursor-pointer"
            >
              Discover Our Collection
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-emerald-500 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
