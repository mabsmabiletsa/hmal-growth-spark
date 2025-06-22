
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Lightbulb, Trophy, Globe, Droplets } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Funding Readiness",
    description: "Grant writing, document packaging, investor prep"
  },
  {
    icon: Users,
    title: "Professional Conference Organiser (PCO)",
    description: "Event planning & B2B networking"
  },
  {
    icon: Lightbulb,
    title: "Strategic Think Tank",
    description: "Market positioning & scenario planning"
  },
  {
    icon: Trophy,
    title: "Sport Consultancy",
    description: "University sports dev & leadership training"
  },
  {
    icon: Globe,
    title: "Trade & Investment",
    description: "Market entry, trade missions, B20 liaison"
  },
  {
    icon: Droplets,
    title: "Water for Life NPC",
    description: "Youth water-conservation education & activism"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to drive growth, unlock opportunities, and build sustainable communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-heading text-xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
