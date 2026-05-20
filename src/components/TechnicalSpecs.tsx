"use client";

import { GENERAL_SPECS } from "@/data/f1-data";

export default function TechnicalSpecs() {
  return (
    <section id="specs" className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-black italic mb-6">TECHNICAL <br/>OVERVIEW</h2>
            <p className="text-gray-400">Every millimeter is optimized for speed. Every gram is accounted for. This is the technical blueprint of a modern F1 car.</p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(GENERAL_SPECS).map(([key, value]) => (
              <div key={key} className="border-l-2 border-red-600 pl-6 py-2">
                <span className="text-xs text-gray-500 uppercase block mb-1">{key}</span>
                <span className="text-xl font-bold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
