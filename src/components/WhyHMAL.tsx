
import { Target, Heart, MapPin } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategic Insight",
    description: "We map your path to capital and growth."
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Projects that uplift stakeholders."
  },
  {
    icon: MapPin,
    title: "Global Reach",
    description: "From South Africa to Croatia, India, Turkey & beyond."
  }
];

const WhyHMAL = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Why HMAL
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three pillars that define our approach to transformative business solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mx-auto w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHMAL;
