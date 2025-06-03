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
      
      className="group relative flex flex-col rounded-xl border-[0.5px] border-gray-700 group bg-[#0f1623] p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700"
    >
      {/* Background glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)'
        }}
      />

      {/* Icon container */}
      <div className="flex items-center gap-4 mb-2 md:mb-0">
      <div className="relative md:mb-6 flex h-16 w-16 md:h-14 md:w-14 items-center justify-center rounded-lg bg-gray-800/50">
      <Icon className="h-8 w-8 md:h-7 md:w-7 text-gray-200 transition-colors duration-300 group-hover:text-blue-400" />
      </div>
      <h3 className="text-2xl md:text-xl md:hidden font-semibold text-white    tracking-tight transition-colors duration-300 group-hover:text-blue-400 ">
          {service.title}
        </h3>
      </div>

      {/* Content */}
      <div className="relative space-y-3 md:space-y-2">
        <h3 className="text-2xl md:text-xl hidden md:block font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 tracking-tight">
          {service.title}
        </h3>
        <p className="text-base md:text-md leading-relaxed text-gray-300">
          {service.description}
        </p>
      </div>

        </motion.div>
  );
} 