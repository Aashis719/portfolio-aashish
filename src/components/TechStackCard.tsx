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
      className={`
        flex items-center gap-6 rounded-xl  border-1 border-gray-700 p-4
        transition-all duration-300 ease-out
        hover:bg-[#151c2b]
        relative
      `}
      style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-out'
      }}
      whileHover={{
        boxShadow: `0 0 20px 0 ${glowColor}40, 0 0 40px 0 ${glowColor}20`
      }}
    >
      <div className='h-14 w-14 text-center flex items-center justify-center rounded-sm  '
      style={{ backgroundColor: `${glowColor}33` }}
      >
      <div className="relative h-9 w-9 flex-shrink-0 "
       
       >
         <Image
           src={icon}
           alt={name}
           fill
           className="object-contain"
         />
       </div>
      </div>
      <div>
        <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
} 