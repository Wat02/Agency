import Navbar from "./Components/navbar/Navbar";
import Hero from "../app/Components/hero/Hero";
import About from "./Components/About/About";
import Text from "./Components/Text/Text";
import What from "./Components/Whatwedo/What";
import Benefits from "./Components/Benifits/Benefits";
import Howworks from "./Components/Howworks/Howworks";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <section>
      <div>
        <Hero />
        <Navbar />
        <Text />
        <What />
        <Benefits />
        <About />
        <Pricing />
        <Footer />
      </div>
    </section>
  );
}
