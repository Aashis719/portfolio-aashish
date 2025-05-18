"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="relative px-4 py-3.5 sm:px-6 sm:py-2.5 rounded-full bg-gray-900/30 backdrop-blur-lg border border-gray-200/20 dark:bg-gray-800/70">
        <div className="flex items-center space-x-4 sm:space-x-6">
          {navItems.map((item) => (
            <NavItem key={item.path} item={item} pathname={pathname} />
          ))}
        </div>
      </nav>
    </header>
  );
}

function NavItem({
  item,
  pathname,
}: {
  item: { name: string; path: string };
  pathname: string;
}) {
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={`relative px-2 py-1 sm:px-3 sm:py-1.5 text-sm sm:text-base transition-colors ${
        isActive
          ? "text-gray-900 dark:text-white"
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      }`}
    >
      {item.name}
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute inset-0 rounded-full bg-gray-900/10 dark:bg-gray-700/50"
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
} 