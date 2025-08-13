'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TechStackCardProps {
  name: string;
  description: string;
  icon: string;
  hoverColor: string;
}

export function TechStackCard({ name, description, icon, hoverColor }: TechStackCardProps) {
  // Extract the color from hoverColor
  const glowColor = hoverColor.match(/\[(.*?)\]/)?.[1] || '#ffffff';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-900/80 p-3 sm:p-4 transition-all duration-300 hover:transform hover:scale-[1.02] overflow-hidden"
      style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-out'
      }}
      whileHover={{
        boxShadow: `0 0 20px 0 ${glowColor}40, 0 0 40px 0 ${glowColor}20`
      }}
    >
      {/* Animated border gradient */}
      <div 
        className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-transparent via-gray-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}20, transparent)`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite linear'
        }}
      />

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}15 0%, transparent 70%)`
        }}
      />

      {/* Icon container with floating animation */}
      <motion.div 
        className="relative z-10 h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-xl"
        style={{ backgroundColor: `${glowColor}15` }}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex-1 text-center mt-2 sm:mt-3">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold selection:text-blue-400 text-white mb-1 transition-colors duration-300 group-hover:text-[${glowColor}]">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 selection:text-blue-300 transition-colors duration-300 group-hover:text-gray-300 line-clamp-2 sm:line-clamp-none">
          {description}
        </p>
      </div>
    </motion.div>
  );
} 