import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useThemeContext } from "../context/Theme";

export default function ContactForm() {
  const [theme] = useThemeContext();
  const prevThemeRef = useRef(theme);
  const formRef = useRef();
  const [message, setMessage] = useState("");

  // Store previous theme value
  useEffect(() => {
    prevThemeRef.current = theme;
  }, [theme]);

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p159krn", // Replace with your EmailJS Service ID
        "template_9a98w2l", // Replace with your EmailJS Template ID
        formRef.current,
        "mP4DG6Fdi7p2uFM_b" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setMessage("✅ Your message has been sent!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          setMessage("❌ Failed to send message. Try again.");
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-full p-6 transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="contact"
    >
      {/* Contact Form Content */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Interested to work together?
      </h2>
      <h3 className="text-2xl font-semibold mt-2">Let's talk</h3>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-2xl mt-6 space-y-4"
      >
        {/* Input Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          />
        </div>

        {/* Message Box */}
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm min-h-[150px]"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className={`${
              theme === "dark" ? "bg-blue-400" : "bg-blue-600"
            } text-white font-bold py-3 px-8 rounded-full transition-all shadow-md`}
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Success/Error Message */}
      {message && <p className="mt-4 text-lg text-center">{message}</p>}
    </div>
  );
}
