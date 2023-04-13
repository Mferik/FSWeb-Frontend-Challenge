import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { Skills } from "./components/Skills/Skills";
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Projects/Projects";
import { ThemeContext } from "./context/themeContext";
import { LanguageContext } from "./context/languageContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") === "en" ? "en" : "tr"
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (
      localStorage.language === "en" ||
      (!("language" in localStorage) &&
        window.matchMedia("(prefers-language: en)").matches)
    ) {
      document.documentElement.classList.add("en");
    } else {
      document.documentElement.classList.remove("en");
    }
  }, []);

  const handleTheme = () => {
    setTheme((initialtheme) => (initialtheme === "light" ? "dark" : "light"));
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
  };
  const handleLanguage = () => {
    setLanguage((initialLanguage) => (initialLanguage === "en" ? "tr" : "en"));
    if (language === "en") {
      document.documentElement.classList.add("en");
      localStorage.setItem("language", "tr");
    } else {
      document.documentElement.classList.remove("en");
      localStorage.setItem("language", "en");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <LanguageContext.Provider value={{ language, handleLanguage }}>
        <div className="max-w-[1440px] mx-auto">
          <Header />
          <Hero />

          <Skills />

          <Profile />

          <Projects />

          <Footer />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
