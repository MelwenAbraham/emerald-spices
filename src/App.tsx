// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from "react";
import BrandStory from "./components/BrandStory";
import Cardamom from "./components/Cardamom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewsLetter from "./components/NewsLetter";
import Particles from "./components/Particles";
import Pepper from "./components/Pepper";
import ScrollProgress from "./components/ScrollProgress";
import Testimonials from "./components/Testimonials";
const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <NavBar />
      <Particles />
      <ScrollProgress />
      <Hero />
      <Cardamom />
      <Pepper />
      <BrandStory />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default App;
