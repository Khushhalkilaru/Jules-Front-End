"use client";

import { motion } from "framer-motion";
import { TEAMS } from "@/data/f1-data";

export default function CarGallery() {
  return (
    <section id="cars" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-right">
          <h2 className="text-4xl md:text-5xl font-black italic mb-4">THE GRID</h2>
          <p className="text-gray-400 ml-auto max-w-2xl">The 2024 challengers represent the cutting edge of aerodynamics and engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {TEAMS.map((team) => (
            <motion.div 
              key={team.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-video overflow-hidden group bg-black"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={team.image} 
                alt={team.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex flex-col justify-end">
                <div 
                  className="w-12 h-1 mb-4" 
                  style={{ backgroundColor: team.color }}
                />
                <h3 className="text-3xl font-black italic text-white uppercase leading-none">{team.name}</h3>
                <p className="text-xl font-bold text-gray-400 mt-2">{team.car}</p>
                <div className="flex gap-4 mt-4">
                  {team.drivers.map(driver => (
                    <span key={driver} className="text-xs font-bold tracking-widest uppercase text-white/50 border border-white/20 px-2 py-1">
                      {driver.split(' ').pop()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
