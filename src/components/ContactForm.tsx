"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-lg  p-6 text-center bg-green-900/20"
        >
          <h3 className="mb-2 text-xl font-bold text-green-400">
            Thank you for your message!
          </h3>
          <p className=" text-green-300">
            I will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 rounded-md  px-4 py-2 text-white  bg-green-700 hover:bg-green-600"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded-md p-4  bg-red-900/20 text-red-300">
              {error}
            </div>
          )}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="block w-full rounded-md border px-4 py-2  focus:outline-none focus:ring-2 border-gray-700 bg-gray-800 text-white focus:border-blue-400 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="block w-full rounded-md border  px-4 py-2  focus:outline-none focus:ring-2  border-gray-700  bg-gray-800  text-white  focus:border-blue-400  focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="block w-full rounded-md border  px-4 py-2 focus:outline-none focus:ring-2  border-gray-700 bg-gray-800 text-white focus:border-blue-400 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md  px-6 py-3 text-white transition-colors  disabled:cursor-not-allowed disabled:opacity-70 bg-gray-700 hover:bg-gray-600"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
} 