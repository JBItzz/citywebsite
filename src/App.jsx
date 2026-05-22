import { useEffect, useState } from "react";

export default function Portfolio() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const experience = [
    { name: "JB GAMING", role: "Founder" },
    { name: "Oxford Response", role: "Contributor / QA Tester" },
    { name: "CLD", role: "Management" },
    { name: "BlueLine Productions", role: "Marketing & Designer" },
    { name: "NETSENTRA HUB", role: "Support Team" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white px-6 py-10 font-sans">

      {/* Top Bar */}
      <div className="flex justify-between text-xs text-zinc-500 tracking-widest uppercase border-b border-zinc-800 pb-4">
        <span>Winter Studios</span>
        <span>{time}</span>
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto mt-16">

        <h1 className="text-4xl font-bold tracking-tight">
          Winter Studios
        </h1>

        <p className="text-zinc-400 mt-3 max-w-xl">
          Developer focused on building clean web interfaces, dashboards, and interactive systems using modern frontend tools.
        </p>

        <div className="flex gap-4 mt-6 text-sm">
          <span className="text-green-400">● Available for work</span>
          <span className="text-zinc-600">React • UI • Frontend</span>
        </div>

      </div>

      {/* Experience */}
      <div className="max-w-3xl mx-auto mt-16">

        <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
          Experience
        </h2>

        <div className="space-y-4">

          {experience.map((exp, i) => (
            <div
              key={i}
              className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/40"
            >
              <div className="font-medium">{exp.name}</div>
              <div className="text-sm text-zinc-400">{exp.role}</div>
            </div>
          ))}

        </div>
      </div>

      {/* About */}
      <div className="max-w-3xl mx-auto mt-16">

        <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
          About
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          I enjoy building clean, minimal and functional interfaces.
          My focus is on frontend development, UI structure, and creating systems that feel natural to use.
        </p>

      </div>

      {/* Contact */}
      <div className="max-w-3xl mx-auto mt-16 border-t border-zinc-800 pt-8">

        <p className="text-sm text-zinc-500">
          Contact: available via Discord or project requests
        </p>

      </div>

    </div>
  );
}
