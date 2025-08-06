"use client";

import Link from "next/link";
import {  FiMail  } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Aashis719", 
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aashish-neupane-1a8050327/",
    icon: <FaLinkedin className="h-5 w-5" />,
  },
  {
    name: "X",
    url: "https://x.com/Aashis_19",
    icon: <FaXTwitter className="h-5 w-5 font-bold" />,
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&to=aashishnep10@gmail.com",
    icon: <FiMail className="h-5 w-5" />,
  },
];

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t  py-8 border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Aashis. All rights reserved.
            </p>
            
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors text-gray-400 hover:text-white"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 