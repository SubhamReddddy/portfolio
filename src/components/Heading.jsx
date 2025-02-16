import React from "react";
import { useThemeContext } from "../context/Theme";

const Heading = ({ title }) => {
  const [theme] = useThemeContext();
  return (
    <h1
      className={`text-5xl font-extrabold text-center mb-8 uppercase tracking-wide relative transition-all duration-500
${
  theme === "dark"
    ? "text-white drop-shadow-lg"
    : "text-gray-900 drop-shadow-md"
}`}
    >
      {title}
      <span
        className={`block mx-auto mt-3 h-1 w-20 rounded-full transition-all duration-500 transform origin-center scale-x-100 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-400 to-cyan-400"
            : "bg-gradient-to-r from-blue-600 to-purple-600"
        }`}
      ></span>
    </h1>
  );
};

export default Heading;
