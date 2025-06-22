import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

const About = () => {
  const roles = [
    "Strategic Consultant (HMAL Projects)",
    "G100 Advisory Member (Sustainable Mining ESG)",
    "B20 SA Task Force Contributor",
    "Wecona Exec Board & FinCom Member",
    "TATiC Global Advisory Council Member",
    "BIIC Board Member",
    "Founder, Water for Life NPC"
  ];

  const timeline = [
    "Founder & Director, HMAL Projects",
    "Regional Director, Marketnext Ecosystem",
    "Sports Administrator (UWC, Vaal, UJ, CPUT)",
    "Operations & Marketing Lead, Community Bank",
    "TTO Facilitator, VUT",
    "Trade Mission: Croatia & Scholarship Exchange: India",
    "Leadership Certification, IEDC Slovenia"
  ];

  const projects = [
    "HMAL Projects – Funding strategies & brand growth",
    "Water for Life NPC – \"Water Warriors\" youth program",
    "B20 SA – Trade & investment policy dialogues",
    "Wecona – Women's economic participation across agri, mining, sports",
    "TATiC – Turkey-Africa trade & investment initiatives"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-gradient-warm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                  alt="Heather Phigeland"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="font-heading font-bold text-5xl md:text-6xl text-gray-900 mb-6">
                Heather Phigeland
              </h1>
              <p className="text-2xl text-gray-700 font-medium">
                Strategic Consultant • Connector • Catalyst for Change
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl leading-relaxed text-gray-700 text-center">
            Heather Phigeland is founder of HMAL Projects (Pty) Ltd and Water for Life NPC. 
            A leader in funding readiness, brand strategy and community development, she's served 
            on the B20 Task Force, G100 ESG Wing, Wecona Exec & FinCom, TATiC Global Advisory 
            and the BIIC Board.
          </p>
        </div>
      </section>

      {/* Roles & Memberships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl text-center text-gray-900 mb-12">
            Roles & Memberships
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <div 
                key={role}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-warm rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl text-center text-gray-900 mb-12">
            Career Timeline
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={item}
                className="flex items-start space-x-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 font-medium text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl text-center text-gray-900 mb-12">
            Key Projects & Impact
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-gradient-warm rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-4xl text-center text-gray-900 mb-12">
            Education & Certifications
          </h2>
          <div className="bg-gradient-warm p-8 rounded-2xl text-white text-center">
            <h3 className="font-heading font-semibold text-2xl mb-4">
              IEDC School of Management, Slovenia
            </h3>
            <p className="text-xl text-white/90">
              Leadership Certification
            </p>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Have a project in mind? Let's connect!
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="mailto:heatherphigeland@gmail.com"
              className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>heatherphigeland@gmail.com</span>
            </a>
            <a 
              href="tel:+27825868688"
              className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>+27 82 586 8688</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
