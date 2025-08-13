"use client";

import { Service } from "@/lib/services";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiZap, FiDatabase } from "react-icons/fi";

const iconMap = { 
  WebDev: FiCode, 
  Design: FiLayout,
  Performance: FiZap,
  Dashboard: FiDatabase,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || FiCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 md:p-8 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden"
      style={{
        boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Animated border gradient */}
      <div 
        className="absolute inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(100,100,255,0.1), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite linear',
        }}
      />

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(100,100,255,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Icon container with floating animation */}
      <div className="flex items-center gap-4 mb-2 md:mb-0 relative z-10">
        <motion.div 
          className="relative md:mb-6 flex h-16 w-16 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gray-800/80 backdrop-blur-sm"
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="h-8 w-8 md:h-7 md:w-7 text-blue-400/90 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" />
        </motion.div>
        <h3 className="text-2xl md:text-xl md:hidden font-semibold text-white tracking-tight transition-colors duration-300 group-hover:text-blue-300">
          {service.title}
        </h3>
      </div>

      {/* Content with subtle animations */}
      <div className="relative space-y-3 md:space-y-2 z-10">
        <h3 className="text-2xl md:text-xl hidden md:block selection:text-blue-300 font-semibold text-white transition-all duration-300 group-hover:text-blue-300 tracking-tight">
          {service.title}
        </h3>
        <p className="text-base md:text-md selection:text-blue-400 leading-relaxed text-gray-300/90 transition-colors duration-300 group-hover:text-gray-200">
          {service.description}
        </p>
      </div>

    </motion.div>
  );
} 