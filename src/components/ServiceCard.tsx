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
      className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
    >
      <div className="mb-4 rounded-full bg-gray-50 p-3 text-black dark:bg-gray-800 dark:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
        {service.title}
      </h3>
      <p className="text-black dark:text-gray-300">
        {service.description}
      </p>
    </motion.div>
  );
} 