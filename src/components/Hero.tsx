
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in">
          HMAL Projects
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Powering SMME Growth • Unlocking Capital • Building Communities
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToServices}
            size="lg" 
            className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Discover Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
