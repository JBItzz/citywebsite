import React from 'react';

export default function PortfolioHero() {
  return (
    <div className="bg-[#05050A] text-white font-sans selection:bg-[#4d61ff] selection:text-white antialiased overflow-x-hidden min-h-screen">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* Profile Card / Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-b from-[#11121d] to-[#0c0d16] border border-[#1e2030] p-8 rounded-3xl shadow-2xl backdrop-blur-md mb-16">
          {/* Avatar Area */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4d61ff] to-[#a24dff] rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500" />
            <div className="relative w-28 h-28 bg-[#161726] border border-[#2e314d] rounded-2xl flex items-center justify-center overflow-hidden">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4d61ff] to-[#a24dff]">
                JB
              </span>
            </div>
          </div>

          {/* Text Info */}
          <div className="text-center md:text-left space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 bg-[#1b2a4a] border border-[#2b4c8c] text-[#7fa6ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#4d61ff] rounded-full animate-pulse" />
              Available for Freelance & Contracts
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#e2e8f0] to-[#94a3b8] bg-clip-text text-transparent">
              itzz_JB
            </h1>
            <p className="text-[#94a3b8] text-base max-w-2xl font-medium leading-relaxed">
              A 14-year-old full-stack developer from the UK focused on building practical web-based solutions. Currently expanding knowledge in backend development, particularly APIs and WebSockets.
            </p>
          </div>
        </div>

        {/* Experience Timeline / Track Record Section */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-bold tracking-widest text-[#64748b] uppercase">
              Experience & Affiliations
            </h2>
            <div className="h-[1px] bg-[#1e2030] flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#0d0e17] border border-[#1a1b2e] p-5 rounded-2xl">
              <h4 className="text-sm font-bold text-[#4d61ff]">JB GAMING</h4>
              <p className="text-xs text-[#64748b] mt-1">Founder & Lead Developer</p>
            </div>
            <div className="bg-[#0d0e17] border border-[#1a1b2e] p-5 rounded-2xl">
              <h4 className="text-sm font-bold text-[#e2e8f0]">Oxford Response</h4>
              <p className="text-xs text-[#64748b] mt-1">QA Tester</p>
            </div>
            <div className="bg-[#0d0e17] border border-[#1a1b2e] p-5 rounded-2xl">
              <h4 className="text-sm font-bold text-[#e2e8f0]">CLD</h4>
              <p className="text-xs text-[#64748b] mt-1">Management & Operations</p>
            </div>
            <div className="bg-[#0d0e17] border border-[#1a1b2e] p-5 rounded-2xl">
              <h4 className="text-sm font-bold text-[#e2e8f0]">BlueLine Productions</h4>
              <p className="text-xs text-[#64748b] mt-1">Marketing & Design Work</p>
            </div>
            <div className="bg-[#0d0e17] border border-[#1a1b2e] p-5 rounded-2xl">
              <h4 className="text-sm font-bold text-[#e2e8f0]">NETSENTRA HUB</h4>
              <p className="text-xs text-[#64748b] mt-1">Support Specialist</p>
            </div>
          </div>
        </div>

        {/* Skills & Technologies Grid */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-bold tracking-widest text-[#64748b] uppercase">
              Tech Stack & Expertise
            </h2>
            <div className="h-[1px] bg-[#1e2030] flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Luau / Roblox Scripting */}
            <div className="flex items-center gap-4 bg-[#0d0e17] border border-[#1a1b2e] hover:border-[#4d61ff]/50 p-4 rounded-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#161726] rounded-xl flex items-center justify-center border border-[#22243d] text-[#4d61ff] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#e2e8f0]">Luau</h3>
                <p className="text-xs text-[#64748b]">Roblox Systems & Scripting</p>
              </div>
            </div>

            {/* Web Dev */}
            <div className="flex items-center gap-4 bg-[#0d0e17] border border-[#1a1b2e] hover:border-[#a24dff]/50 p-4 rounded-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#161726] rounded-xl flex items-center justify-center border border-[#22243d] text-[#a24dff] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#e2e8f0]">Web Dev</h3>
                <p className="text-xs text-[#64748b]">Frontend Frameworks & UI</p>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="flex items-center gap-4 bg-[#0d0e17] border border-[#1a1b2e] hover:border-[#06b6d4]/50 p-4 rounded-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#161726] rounded-xl flex items-center justify-center border border-[#22243d] text-[#06b6d4] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#e2e8f0]">UX/UI Design</h3>
                <p className="text-xs text-[#64748b]">Asset & Layout Layouts</p>
              </div>
            </div>

            {/* Backend Tech */}
            <div className="flex items-center gap-4 bg-[#0d0e17] border border-[#1a1b2e] hover:border-[#f59e0b]/50 p-4 rounded-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-10 h-10 bg-[#161726] rounded-xl flex items-center justify-center border border-[#22243d] text-[#f59e0b] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#e2e8f0]">Backend APIs</h3>
                <p className="text-xs text-[#64748b]">WebSockets & Data Feeds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-bold tracking-widest text-[#64748b] uppercase">
              Get In Touch
            </h2>
            <div className="h-[1px] bg-[#1e2030] flex-1" />
          </div>
          
          <div className="bg-gradient-to-r from-[#0c0d16] to-[#11121d] border border-[#1e2030] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[#94a3b8]">Have a project or partnership in mind?</p>
              <p className="text-xs text-[#64748b]">Drop an email and let's build something great.</p>
            </div>
            <a 
              href="mailto:winterzstudios@gmail.com" 
              className="inline-flex items-center gap-2 bg-[#1b2a4a] hover:bg-[#223763] border border-[#2b4c8c] text-[#7fa6ff] font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              winterzstudios@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
