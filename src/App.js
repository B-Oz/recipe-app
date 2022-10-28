import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import About from "./pages/About";

// import Navbar from "./components/Navbar";
// import RecipeCard from "./components/RecipeCard";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
