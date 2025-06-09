const NewsLetter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-emerald-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6 text-emerald-500">
            Join Our Culinary Journey
          </h2>
          <p className="text-xl mb-10">
            Subscribe to receive exclusive recipes, spice pairing guides, and be
            the first to know about our new releases.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 bg-black/50 border border-emerald-900 focus:border-emerald-500 rounded-none outline-none text-white w-full md:w-auto md:flex-1 max-w-md"
            />
            <button className="px-8 py-3 bg-emerald-500 text-black hover:bg-emerald-600 transition-colors duration-300 font-light tracking-wider !rounded-button whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
