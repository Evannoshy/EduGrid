"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! Your inquiry has been received.");
        setFormData({ name: "", email: "", institution: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to connect to server.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
        <div className="w-[40rem] h-[40rem] bg-[#96D800]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bento-box shadow-xl border-t-8 border-t-[#0F4C5C]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">Start a Conversation</h2>
            <p className="text-slate-600">Let's discuss how we can modernize your institution's operations.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0F4C5C] focus:border-[#0F4C5C] outline-none transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0F4C5C] focus:border-[#0F4C5C] outline-none transition-all"
                  placeholder="jane@university.edu"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-2">Institution Name</label>
              <input 
                type="text" 
                id="institution" 
                required
                value={formData.institution}
                onChange={(e) => setFormData({...formData, institution: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0F4C5C] focus:border-[#0F4C5C] outline-none transition-all"
                placeholder="State University"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-[#0F4C5C] text-white font-bold text-lg hover:bg-[#0c3c49] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center"
            >
              {status === "loading" ? "Submitting..." : "Request Consultation"}
            </button>

            {status === "success" && (
              <div className="p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 text-center animate-fade-in-up">
                {message}
              </div>
            )}
            
            {status === "error" && (
              <div className="p-4 bg-red-50 text-red-800 rounded-xl border border-red-200 text-center animate-fade-in-up">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
