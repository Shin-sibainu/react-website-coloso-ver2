import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Service from "./components/Service";

function App() {
  return (
    <div className="bg-[#f0efed]">
      <div className="container mx-auto py-4 px-3">
        <Header />
        <Hero />
        <About />
        <Service />
        <OurMission />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
