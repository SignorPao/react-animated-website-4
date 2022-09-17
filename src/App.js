import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // init aos
  Aos.init({
    duration: 1500,
    offset: 200,
  });

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
