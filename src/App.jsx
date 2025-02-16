import React from "react";
import Navbar from "./components/Navbar";
import { ThemeContextWrapper } from "./context/Theme";
import Hero from "./components/Hero";

import Carousel from "./components/Carousel";
import Resume from "./components/resume";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <ThemeContextWrapper>
      <Navbar />
      <Hero />
      <Carousel />
      <Resume />
      <ContactForm />
    </ThemeContextWrapper>
  );
};

export default App;
