import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-[#96D800]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[30rem] h-[30rem] bg-[#0F4C5C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0A2342] tracking-tight mb-8">
            Empowering Education with <span className="text-[#0F4C5C]">Enterprise Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Specialized Microsoft Power Platform solutions strictly for K-12 and Universities. 
            Streamline operations, boost admissions, and elevate the campus experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#contact" className="px-8 py-4 rounded-xl bg-[#0F4C5C] text-white font-semibold text-lg hover:bg-[#0c3c49] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
              Start Your Transformation
            </Link>
            <Link href="#services" className="px-8 py-4 rounded-xl bg-white text-[#0F4C5C] border-2 border-slate-200 font-semibold text-lg hover:border-[#0F4C5C] hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto">
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
