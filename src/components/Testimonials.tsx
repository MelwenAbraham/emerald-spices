import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16 text-emerald-500">
          What Culinary Experts Say
        </h2>
        {/* <div className="max-w-5xl mx-auto"> */}
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 1, disableOnInteraction: false }}
          speed={7000}
          freeMode={true}
          grabCursor={true}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          className="testimonial-swiper"
        >
          <SwiperSlide>
            <div className="bg-black/40 backdrop-blur-sm p-10 rounded-lg border border-emerald-900/30">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl text-emerald-500 mb-6">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-xl italic mb-8 leading-relaxed">
                  "Emerald Spices has revolutionized my approach to seasoning.
                  The depth and complexity of their Onyx Pepper has become an
                  indispensable element in my signature dishes. Simply
                  extraordinary."
                </p>
                <div className="mt-4">
                  <h4 className="text-xl font-serif text-emerald-400">
                    Chef Isabella Laurent
                  </h4>
                  <p className="text-gray-400">Executive Chef, Le Ciel Bleu</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-black/40 backdrop-blur-sm p-10 rounded-lg border border-emerald-900/30">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl text-emerald-500 mb-6">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-xl italic mb-8 leading-relaxed">
                  "The Emerald Cardamom is unlike anything I've encountered in
                  my 25 years as a pastry chef. Its aromatic complexity elevates
                  even the simplest desserts to Michelin-star quality. A true
                  culinary treasure."
                </p>
                <div className="mt-4">
                  <h4 className="text-xl font-serif text-emerald-400">
                    Pierre Moreau
                  </h4>
                  <p className="text-gray-400">
                    Master Pastry Chef, Dulce Vida
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-black/40 backdrop-blur-sm p-10 rounded-lg border border-emerald-900/30">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl text-emerald-500 mb-6">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-xl italic mb-8 leading-relaxed">
                  "In my search for the world's finest ingredients, I've found
                  nothing that compares to the quality and consistency of
                  Emerald Spices. Their commitment to excellence mirrors our own
                  philosophy at Saveur Magazine."
                </p>
                <div className="mt-4">
                  <h4 className="text-xl font-serif text-emerald-400">
                    Sophia Chen
                  </h4>
                  <p className="text-gray-400">Food Editor, Saveur Magazine</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
