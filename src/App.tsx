import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const userLang = navigator.language;
    // if a preferred language is not set, set the browser language
    if (!localStorage.getItem("lang")) {
      switch (userLang) {
        case "nl" || "nl-BE":
          localStorage.setItem("lang", "nl");
          break;

        default:
          localStorage.setItem("lang", "en");
          break;
      }
    }

    const htmlTag = document.getElementsByTagName("html")[0];
    window.addEventListener("dark-mode", () => {
      if (localStorage.getItem("dark-mode") === "true") {
        htmlTag.classList.add("dark");
      } else {
        htmlTag.classList.remove("dark");
      }
    });

    if (!localStorage.getItem("dark-mode")) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        localStorage.setItem("dark-mode", "true");
      } else {
        localStorage.setItem("dark-mode", "false");
      }
    } else if (localStorage.getItem("dark-mode") === "true") {
      htmlTag.classList.add("dark");
    }
  }, []);

  return (
    <>
      <div className="h-full">
        <Router>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<AboutMe />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/skills"} element={<Skills />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
