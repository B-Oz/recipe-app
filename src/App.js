// import { Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
