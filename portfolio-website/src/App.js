import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { Skills } from "./components/Skills/Skills";
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Projects/Projects";
import { ThemeContext } from "./context/themeContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme")==="light" ? "light" : "dark");
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleTheme = () => {
    setTheme((initialtheme) => initialtheme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("mode","light")
    }
    else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("mode","dark")
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <Hero />

        <Skills />

        <Profile />

        <Projects />

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
