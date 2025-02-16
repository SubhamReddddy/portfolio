import { Moon, Sun, User } from "lucide-react";
import { useThemeContext } from "../context/Theme";

export default function Navbar() {
  const [theme, toggleTheme] = useThemeContext();
  return (
    <nav
      className={`flex justify-between items-center p-4 border-b shadow-sm fixed w-full z-50 top-0 left-0 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-2">
        <User
          className={`w-6 h-6 ${
            theme === "dark" ? "text-gray-200" : "text-gray-700"
          }`}
        />
        <span className="text-xl font-bold">Subham</span>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {["About", "Projects", "Resume", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`transition ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Side - Theme Toggle */}
      <button
        onClick={() => {
          toggleTheme();
        }}
        className={`flex items-center space-x-2 hover:cursor-pointer ${
          theme === "dark" ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
        <span>Color mode</span>
      </button>
    </nav>
  );
}
