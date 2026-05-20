"use client";

import { motion } from "framer-motion";
import { POWER_UNIT_SPECS } from "@/data/f1-data";
import { Cpu, Zap, Flame, Battery } from "lucide-react";

const icons = [Flame, Zap, Cpu, Battery];

export default function EngineSection() {
  return (
    <section id="engines" className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic mb-4">THE POWER UNIT</h2>
          <p className="text-gray-400 max-w-2xl">The 1.6L V6 Turbo Hybrid is a masterpiece of efficiency, converting thermal and kinetic energy into pure speed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POWER_UNIT_SPECS.map((spec, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={spec.component}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111] p-8 border border-white/5 hover:border-red-600/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Icon className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-2xl font-bold">{spec.component}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{spec.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(spec.stats).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-xs text-gray-500 uppercase block">{key}</span>
                      <span className="text-sm font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
