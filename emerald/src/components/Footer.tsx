const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-emerald-900/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif text-emerald-500 mb-6">
              Emerald Spices
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Nature's Finest, Handpicked for Your Table. Elevating culinary
              experiences through exceptional spices since 2018.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-serif text-emerald-500 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer"
                >
                  Sourcing Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer"
                >
                  Culinary Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif text-emerald-500 mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-emerald-500 mt-1 mr-3"></i>
                <span className="text-gray-300">
                  123 Spice Avenue, New York, NY 10001
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-emerald-500 mt-1 mr-3"></i>
                <span className="text-gray-300">info@emeraldspices.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-emerald-500 mt-1 mr-3"></i>
                <span className="text-gray-300">+1 (212) 555-7890</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-emerald-900/30 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Emerald Spices. All rights reserved.
          </p>
          <p className="text-emerald-500 mt-4 font-serif italic">
            More spices coming soon...
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
