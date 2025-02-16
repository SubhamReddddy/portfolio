import React from "react";
import Heading from "./Heading";
import Timeline from "./Timeline";
import { useThemeContext } from "../context/Theme";
import { education, experience } from "../data";

const Resume = () => {
  const [theme] = useThemeContext();
  return (
    <div
      className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} pt-16`}
      id="resume"
    >
      <Heading title={"Resume"} />
      <main className="grid grid-cols-2">
        <Timeline title={"Education"} data={education} />
        <Timeline title={"Experience"} data={experience} />
      </main>
    </div>
  );
};

export default Resume;
