import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero"
import { Footer } from "./components/Footer/Footer";
import { Skills } from "./components/Skills/Skills";
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Projects/Projects";
import { Changes } from "./components/Buttons/Changes";
import "./App.css";

function App() {
  
    return (
      
      <div className="max-w-[1440px] mx-auto">
        <section
          id="hero"
          className="w-full pb-16 bg-[#4731D3]  lg:relative lg:min-h-max lg:flex lg:flex-col lg:gap-y-10 lg:pt-9 lg:pb-36 lg:bg-transparent"
        >
          <div className="hidden lg:block lg:absolute lg:h-[671px] lg:w-[30%] lg:bg-[#CBF281] dark:bg-[ #171043] lg:top-0 lg:right-0 -z-10"></div>
          <div className="hidden lg:block lg:absolute lg:h-[671px] lg:w-[70%] lg:bg-[#4731D3] lg:top-0 lg:left-0 -z-10"></div>
          <Changes/>
          <Header />
          <Hero />
        </section>
        <section
          id="skills"
          className="w-full bg-white lg:relative lg:min-h-max lg:pt-[84px] lg:pb-24"
        >
          <Skills />
        </section>
        <section
          id="profile"
          className="w-full bg-[#4731D3] lg:relative lg:min-h-max lg:pt-[84px] lg:pb-24"
        >
          <Profile />
        </section>
        <section
          id="projects"
          className="w-full bg-[#CBF281] lg:relative lg:min-h-max lg:pt-[84px] lg:pb-24"
        >
          <Projects />
        </section>
        <section
          id="footer"
          className="w-full bg-[#F9F9F9] lg:relative lg:min-h-max lg:pt-[84px] lg:pb-24"
        >
          <Footer />
        </section>
      </div>
    );
}

export default App;
