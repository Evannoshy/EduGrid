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
              <div className="w-2 h-2 rounded-full bg-[#96D800]"></div>
              System Operational
            </div>
            <div className="w-10 h-10 rounded-full bg-[#0F4C5C] flex items-center justify-center text-white font-bold">
              JD
            </div>
          </div>
        </div>

        {/* Dashboard Navigation */}
        <div className="flex gap-4 mb-8 border-b border-slate-200 pb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <button 
            onClick={() => setActiveTab("admissions")}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === "admissions" ? "bg-[#0F4C5C] text-white" : "text-slate-600 hover:bg-slate-200"}`}
          >
            Admissions Overview
          </button>
          <button 
            onClick={() => setActiveTab("facilities")}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === "facilities" ? "bg-[#0F4C5C] text-white" : "text-slate-600 hover:bg-slate-200"}`}
          >
            Facility Bookings
          </button>
        </div>

        {/* Bento Grid Content */}
        {activeTab === "admissions" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-box md:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl font-bold text-[#0A2342] mb-4">Application Trends</h2>
              <div className="h-64 bg-slate-100 rounded-xl flex items-end justify-between p-4 gap-2">
                {/* Mock Chart */}
                {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                  <div key={i} className="w-full bg-[#0F4C5C] rounded-t-md hover:bg-[#96D800] transition-colors cursor-pointer" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>

            <div className="bento-box animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-xl font-bold text-[#0A2342] mb-4">Quick Stats</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-slate-500 mb-1">Total Applications</div>
                  <div className="text-3xl font-bold text-[#0A2342]">2,451</div>
                  <div className="text-sm text-[#96D800] flex items-center gap-1 mt-1">
                    ↑ 12% from last month
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Pending Review</div>
                  <div className="text-3xl font-bold text-[#0A2342]">342</div>
                </div>
              </div>
            </div>

            <div className="bento-box md:col-span-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-xl font-bold text-[#0A2342] mb-4">Recent Applications</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-sm text-slate-500">
                      <th className="py-3 font-medium">Applicant Name</th>
                      <th className="py-3 font-medium">Program</th>
                      <th className="py-3 font-medium">Date Applied</th>
                      <th className="py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-4 font-medium text-[#0A2342]">Emma Thompson</td>
                      <td className="py-4 text-slate-600">Computer Science B.S.</td>
                      <td className="py-4 text-slate-600">Oct 24, 2023</td>
                      <td className="py-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">In Review</span></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-4 font-medium text-[#0A2342]">Michael Chen</td>
                      <td className="py-4 text-slate-600">Business Administration</td>
                      <td className="py-4 text-slate-600">Oct 23, 2023</td>
                      <td className="py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Accepted</span></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-4 font-medium text-[#0A2342]">Sarah Davis</td>
                      <td className="py-4 text-slate-600">Nursing B.S.N.</td>
                      <td className="py-4 text-slate-600">Oct 22, 2023</td>
                      <td className="py-4"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Waitlisted</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "facilities" && (
          <div className="bento-box animate-fade-in-up flex items-center justify-center h-64 border-dashed border-2 border-slate-300">
            <div className="text-center">
              <svg className="w-12 h-12 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-lg font-medium text-slate-600">Facility Bookings Module</h3>
              <p className="text-sm text-slate-500 mt-2">Currently under development for phase 2.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
