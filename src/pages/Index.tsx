
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyHMAL from "@/components/WhyHMAL";
import Affiliations from "@/components/Affiliations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyHMAL />
      <Affiliations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
