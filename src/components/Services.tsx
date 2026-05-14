export default function Services() {
  const services = [
    {
      title: "Power Apps Development",
      description: "Custom canvas and model-driven applications tailored for educational workflows, from facility booking to student onboarding.",
      icon: (
        <svg className="w-8 h-8 text-[#0F4C5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Power Automate Workflows",
      description: "Eliminate manual data entry and streamline administrative approvals with robust cloud flows that connect campus systems.",
      icon: (
        <svg className="w-8 h-8 text-[#96D800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Copilot Studio Integration",
      description: "Deploy intelligent chatbots to handle student FAQs, IT support tickets, and admissions inquiries 24/7.",
      icon: (
        <svg className="w-8 h-8 text-[#0A2342]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">Enterprise Capabilities</h2>
          <div className="w-24 h-1 bg-[#96D800] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We architect robust, scalable Microsoft solutions that modernize educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bento-box animate-fade-in-up border-t-4 border-t-transparent hover:border-t-[#96D800] transition-all duration-300 group"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#0F4C5C]/5 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2342] mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
