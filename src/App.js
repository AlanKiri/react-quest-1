import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Contributors from "./pages/contributors/Contributors";

function App() {
  console.log("a");
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
