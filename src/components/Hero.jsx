import { useThemeContext } from "../context/Theme";
import { Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { img1 } from "../assets/image";

export default function Hero() {
  const [theme] = useThemeContext();

  return (
    <section
      className={`pt-20 flex flex-row items-center justify-center lg:justify-between px-8 lg:px-20 py-16 transition-all ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="about"
    >
      {/* Left Content */}
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          Welcome to my portfolio website!
        </p>
        <h1 className="text-4xl font-bold mt-2">
          Hello, my name is{" "}
          <span
            className={`${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Subham Reddy
          </span>{" "}
          <br />
          I' m a{" "}
          <span
            className={`${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            <Typewriter
              words={["Full Stack Web Developer", "Frontend Web Developer"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          A passionate MERN Stack Developer with experience in building scalable
          and user-friendly web applications. With a solid foundation in HTML,
          CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, I
          specialize in developing full-stack applications that enhance user
          experiences.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="https://drive.google.com/file/d/1XCxsQhX62Ufz5fhvccD-83nnyMKE2kiQ/view?usp=drive_link"
            download="Subham_Reddy_Resume.pdf"
            target="_blank"
            className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-md transition-all ${
              theme === "dark"
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Illustration */}
      <div className="mt-10 lg:mt-0 hidden lg:block">
        <img src={img1} alt="Illustration" className="w-full max-w-md" />
      </div>
    </section>
  );
}
