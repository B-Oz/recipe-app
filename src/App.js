import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import About from "./pages/About";
import Details from "./pages/Details";

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

        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
