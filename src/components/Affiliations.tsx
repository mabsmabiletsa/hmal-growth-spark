
const affiliations = [
  "G100 Sustainable Mining ESG Wing",
  "B20 South Africa",
  "Wecona Exec & FinCom",
  "TATiC Global Advisory",
  "BIIC"
];

const Affiliations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Affiliations
          </h2>
          <p className="text-lg text-gray-600">
            Proud partners in driving global business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {affiliations.map((affiliation, index) => (
            <div 
              key={affiliation}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-warm-light rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-warm rounded opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="font-medium text-gray-700 text-sm leading-tight">
                  {affiliation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
