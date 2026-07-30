import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Mentor from "./components/Mentor";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <main id="home">
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Mentor />
      <Team />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
