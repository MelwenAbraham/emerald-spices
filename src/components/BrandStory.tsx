const BrandStory = () => {
  return (
    <section
      id="story"
      className="relative min-h-screen flex items-center py-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Luxury%20spice%20plantation%20with%20cinematic%20lighting%2C%20emerald%20green%20foliage%20and%20golden%20sunlight%20filtering%20through%2C%20atmospheric%20mist%2C%20professional%20photography%20with%20depth%20of%20field%2C%20exotic%20spice%20farm%20landscape%2C%20high-end%20documentary%20style%2C%20sophisticated%20and%20elegant%20mood&width=1440&height=900&seq=story-bg-1&orientation=landscape"
          alt="Spice plantation"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-emerald-500">
            Our Story
          </h2>
          <p className="text-xl leading-relaxed mb-10">
            Founded on a passion for culinary excellence, Emerald Spices
            represents a journey across continents in search of nature's most
            perfect expressions. Our commitment to quality, sustainability, and
            tradition informs every aspect of our process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-emerald-900/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="text-emerald-500 text-4xl mb-4">
              <i className="fas fa-leaf"></i>
            </div>
            <h3 className="text-2xl font-serif mb-4">Sustainable Sourcing</h3>
            <p className="text-gray-300">
              We partner directly with small-scale farmers who share our
              commitment to sustainable agriculture and ethical practices. Every
              spice in our collection can be traced to its origin.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-emerald-900/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="text-emerald-500 text-4xl mb-4">
              <i className="fas fa-hands"></i>
            </div>
            <h3 className="text-2xl font-serif mb-4">Artisanal Process</h3>
            <p className="text-gray-300">
              Our spices are harvested at peak ripeness, then processed using
              traditional methods that preserve their essential oils and complex
              flavor profiles. Nothing artificial, ever.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-emerald-900/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="text-emerald-500 text-4xl mb-4">
              <i className="fas fa-award"></i>
            </div>
            <h3 className="text-2xl font-serif mb-4">Uncompromising Quality</h3>
            <p className="text-gray-300">
              Each batch undergoes rigorous testing and evaluation by our master
              spice experts. Only those meeting our exacting standards earn the
              Emerald Spices name.
            </p>
          </div>
        </div>
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-block px-10 py-4 bg-emerald-500 text-black hover:bg-emerald-600 transition-colors duration-300 font-light tracking-wider !rounded-button whitespace-nowrap cursor-pointer"
          >
            Discover Our Philosophy
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
