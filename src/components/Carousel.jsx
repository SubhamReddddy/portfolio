import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "../context/Theme";
import { img2, img3, img4 } from "../assets/image"; // Ensure correct image imports
import Heading from "./Heading";

const slides = [
  {
    img: img2,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with authentication, shopping cart, and secure payments.",
    buttonText: "Live Demo",
    url: "https://amazon-frontend-red.vercel.app/",
  },
  {
    img: img3,
    title: "Language Learning Platform",
    description:
      "An interactive app for structured language learning with lessons and exercises.",
    buttonText: "Live Demo",
    url: "https://language-learning-platform-topaz.vercel.app/",
  },
  {
    img: img4,
    title: "Todo List Platform",
    description:
      "A task management app with authentication and CRUD operations.",
    buttonText: "Live Demo",
    url: "https://totofrontend.vercel.app/",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme] = useThemeContext(); // Make sure this returns `[theme]`
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false); // Prevent spam clicking

  const changeSlide = (newDirection) => {
    if (isAnimating) return; // Block input while animating

    setIsAnimating(true);
    setDirection(newDirection);

    setCurrentIndex((prev) =>
      newDirection === 1
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <div
      className={`relative w-full mx-auto p-8 pt-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-whit"
      }`}
      id="projects"
    >
      <Heading title={"Projects"} />
      {/* Slide Content */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence
          custom={direction}
          onExitComplete={() => setIsAnimating(false)} // Re-enable clicking after animation
        >
          <motion.div
            key={currentIndex}
            initial={{ x: direction * 100 + "%" }}
            animate={{ x: "0%" }}
            exit={{ x: -direction * 100 + "%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
          >
            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 transition-all blurBlack"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
              <h2 className="text-3xl font-bold transition-all text-black">
                {slides[currentIndex].title}
              </h2>
              <p className="mt-4 max-w-xl transition-all text-gray-900">
                {slides[currentIndex].description}
              </p>
              <a
                href={slides[currentIndex].url}
                target="_blank"
                className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition shadow-lg z-10"
              >
                {slides[currentIndex].buttonText}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={() => changeSlide(-1)}
        disabled={isAnimating}
        className={`absolute left-1 top-1/2 p-3 rounded-full ${
          theme == "dark"
            ? "bg-white text-black border-blue-500"
            : "bg-black text-white border-blue-400"
        } bg-opacity-30 backdrop-blur-md hover:bg-opacity-50 transition z-20 border-2 flex items-center justify-center`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => changeSlide(1)}
        disabled={isAnimating}
        className={`absolute right-1 top-1/2 p-3 rounded-full ${
          theme == "dark"
            ? "bg-white text-black border-blue-500"
            : "bg-black text-white border-blue-400"
        } bg-opacity-30 backdrop-blur-md hover:bg-opacity-50 transition z-20 border-2 flex items-center justify-center`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => !isAnimating && setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
