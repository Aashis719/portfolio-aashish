"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";

// This is the main component rendering the contact page UI and logic
export default function ContactPageClient() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    const serviceID = "service_wiiwzk1"; 
    const templateID = "template_pc2y4x3";
    const publicKey = "Zpyv556tuOPUfuzDe"; 

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setSubmissionStatus("success");
          setFormData({ name: "", email: "", message: "" });
          if (form.current) {
            form.current.reset();
          }
          setTimeout(() => setSubmissionStatus("idle"), 5000);
        },
        (error: EmailJSResponseStatus) => {
          console.error("EmailJS error:", error.text);
          setSubmissionStatus("error");
          setTimeout(() => setSubmissionStatus("idle"), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Aashis719",
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aashish-neupane-1a8050327/",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: "X",
      url: "https://x.com/Aashis_19",
      icon: <FaXTwitter className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aashis_neupane/",
      icon: <FaInstagram className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-28 pb-16 md:pb-40 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-2 mb-6 md:space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold  text-white">
            Let&apos;s Connect
            
          </h1>
          
          <p className="text-xl sm:text-2xl font-medium text-blue-400">
            Have a project in mind, a question, or just want to say hi?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.form
            ref={form}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6  bg-gray-800/30 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700/50"
          >
            <div>
            {submissionStatus === "success" && (
              <p className="mb-4 text-sm text-center text-green-400 p-3  bg-green-900/30 rounded-md border  border-green-600">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="mb-4 text-sm text-center text-red-400 p-3 bg-red-900/30 rounded-md border border-red-600">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-lg border  border-gray-600 bg-gray-700/50 text-gray-100   focus:border-transparent transition  placeholder-gray-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium  text-gray-300 mb-1.5"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-700/50 text-gray-100 f focus:border-transparent transition placeholder-gray-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your message here"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-700/50 text-gray-100  focus:border-transparent transition  placeholder-gray-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 text-white rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-gray-800/30  ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : " bg-gray-600 hover:bg-gray-500"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6 py-7 mt-8 md:mt-0"
          >
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700/60 shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <HiMail className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Direct Email</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                For quick inquiries or direct contact, you can email me at:{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&to=aashishnep10@gmail.com" target="_blank"
                  className="font-medium  text-blue-400 hover:text-blue-300 transition-colors"
                >
                  aashishnep10@gmail.com
                </a>
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700/60 shadow-lg">
              <h2 className="text-xl font-semibold text-white mb-4">Connect Elsewhere</h2>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    className=" text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-700/50"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700/60 shadow-lg mt-6">
              <h2 className="text-xl font-semibold  text-white mb-3">Stay Connected</h2>
              <p className=" text-gray-400 text-sm leading-relaxed">
                I&apos;m active on these platforms and always open to networking. Don&apos;t hesitate to reach out or follow my work !
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
} 