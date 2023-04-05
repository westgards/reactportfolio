import "./App.css";

import "./global-styles/global.css";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
