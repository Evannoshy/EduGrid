import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <ContactForm />
      
      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-[#0A2342]">EDUGRID</span>
            <span className="text-slate-400 text-sm">© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="text-sm text-slate-500">
            Enterprise Solutions for Education
          </div>
        </div>
      </footer>
    </div>
  );
}
