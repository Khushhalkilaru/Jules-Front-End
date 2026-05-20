"use client";

import { motion } from "framer-motion";
import F1CarModel from "./F1CarModel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-left"
        >
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white mb-4">
            PRECISION <br />
            <span className="text-red-600">PERFORMANCE</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-lg mb-8">
            Experience the pinnacle of automotive engineering. Dive into the 2024 Formula 1 challengers and the hybrid monsters that power them.
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-none transition-all transform hover:scale-105">
              EXPLORE CARS
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-none transition-all">
              ENGINE TECH
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 h-[500px]"
        >
          <F1CarModel />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-red-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
