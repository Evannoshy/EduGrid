"use client";

import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("admissions");

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-[#0A2342]">Client Portal</h1>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
              <div className="w-2 h-2 rounded-full bg-[#96D800] animate-pulse"></div>
              School Gateway Active
            </div>
            <div className="w-10 h-10 rounded-full bg-[#0F4C5C] flex items-center justify-center text-white font-bold">
              MOE
            </div>
          </div>
        </div>

        {/* Dashboard Navigation */}
        <div className="flex gap-4 mb-8 border-b border-slate-200 pb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <button 
            onClick={() => setActiveTab("admissions")}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === "admissions" ? "bg-[#0F4C5C] text-white" : "text-slate-600 hover:bg-slate-200"}`}
          >
            Intake Overview (AY2026)
          </button>
          <button 
            onClick={() => setActiveTab("facilities")}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === "facilities" ? "bg-[#0F4C5C] text-white" : "text-slate-600 hover:bg-slate-200"}`}
          >
            CCA & Facility Bookings
          </button>
        </div>

        {/* Bento Grid Content */}
        {activeTab === "admissions" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Top row: Trends (2 cols) + Integration Status (1 col) */}
            <div className="bento-box md:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl font-bold text-[#0A2342] mb-4">DSA & JAE Application Trends</h2>
              <div className="h-64 bg-slate-100 rounded-xl flex items-end justify-between p-4 gap-2 relative">
                {/* Mock Chart - realistic lower numbers */}
                {[15, 28, 45, 85, 120, 95, 40].map((height, i) => (
                  <div key={i} className="w-full bg-[#0F4C5C] rounded-t-md hover:bg-[#96D800] transition-colors cursor-pointer group relative" style={{ height: `${height}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0A2342] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {height * 3} {/* Mock data tooltip */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2 px-2">
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug (DSA Phase)</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
              </div>
            </div>

            <div className="bento-box animate-fade-in-up flex flex-col justify-between" style={{ animationDelay: "0.3s" }}>
              <div>
                <h2 className="text-xl font-bold text-[#0A2342] mb-4">System Health</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-600">Internal Data Sync</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-bold">100% Uptime</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-600">MOE Data Gateway</span>
                    <span className="text-xs text-slate-500">Last synced: 2m ago</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-600">Automated Appeals</span>
                    <span className="text-xs bg-[#96D800]/20 text-[#0F4C5C] px-2 py-1 rounded-full font-bold">Running</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: Breakdown (2 cols) + Quick Stats (1 col) */}
            <div className="bento-box md:col-span-2 animate-fade-in-up bg-[#0A2342] text-white" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-xl font-bold text-white mb-6">Cohort Breakdown (Posting Groups)</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-slate-300 text-sm mb-1">Posting Group 3</div>
                  <div className="text-3xl font-bold">210</div>
                  <div className="text-xs text-[#96D800] mt-2">↑ 5% YoY</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-slate-300 text-sm mb-1">Posting Group 2</div>
                  <div className="text-3xl font-bold">145</div>
                  <div className="text-xs text-slate-300 mt-2">Steady</div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="text-slate-300 text-sm mb-1">Posting Group 1</div>
                  <div className="text-3xl font-bold">73</div>
                  <div className="text-xs text-[#96D800] mt-2">↑ 2% YoY</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-white">12%</span> admitted via Direct School Admission (DSA-Sec)
                </div>
                <button className="text-sm font-medium text-[#96D800] hover:text-white transition-colors">
                  Generate MOE Report →
                </button>
              </div>
            </div>

            <div className="bento-box animate-fade-in-up border-t-4 border-t-[#0F4C5C]" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-xl font-bold text-[#0A2342] mb-6">Quick Stats</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">Total Intake Size</div>
                  <div className="text-4xl font-extrabold text-[#0A2342]">428</div>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">Pending Appeals</div>
                  <div className="text-3xl font-bold text-[#0F4C5C]">34</div>
                  <div className="text-xs text-slate-500 mt-1">Requires Principal's review</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === "facilities" && (
          <div className="bento-box animate-fade-in-up flex items-center justify-center h-[500px] border-dashed border-2 border-slate-300 bg-slate-50/50">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 bg-[#0F4C5C]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0F4C5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2342] mb-2">CCA & Facility Module</h3>
              <p className="text-slate-600 mb-6">
                Integration with the School Cockpit system for sports halls, auditorium, and CCA block scheduling is currently under development for Phase 2.
              </p>
              <button className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
                View Development Roadmap
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
