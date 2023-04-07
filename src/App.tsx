import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
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
