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
      whileHover={{ y: -5 }}
      className="flex flex-col rounded-lg border  p-6 shadow-sm transition-all hover:shadow-md border-gray-700 bg-gray-900"
    >
      <div className="mb-4 rounded-full  p-3  bg-gray-800 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">
        {service.title}
      </h3>
      <p className="text-gray-300">
        {service.description}
      </p>
    </motion.div>
  );
} 