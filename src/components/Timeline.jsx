import { Calendar } from "lucide-react";
import { useThemeContext } from "../context/Theme";

export default function Timeline({ title, data }) {
  const [theme] = useThemeContext();
  return (
    <section
      className={`px-8 lg:px-20 py-1 ${
        theme === "dark" ? "bg-gray-900" : "bg-whit"
      }`}
    >
      <h2
        className={`text-3xl font-bold text-center mb-10 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`relative border-l-4 ${
          theme === "dark" ? "border-blue-500" : "border-blue-600"
        }`}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start space-x-4 mb-8 ml-6"
          >
            {/* Timeline Circle */}
            <div
              className={`absolute -left-8.5 top-6 w-4 h-4 rounded-full border-4 ${
                theme === "dark" ? "border-blue-500" : "border-blue-600"
              } bg-white dark:bg-gray-900`}
            ></div>

            {/* Timeline Content */}
            <div
              className={`p-6 rounded-lg shadow-md transition-all w-full ${
                theme === "light"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{item.year}</span>
              </div>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
