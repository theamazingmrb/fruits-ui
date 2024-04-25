import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditFruit from "./pages/fruits/EditFruit";
import ShowFruit from "./pages/fruits/ShowFruit";
import NewFruit from "./pages/fruits/NewFruit";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fruits/new" element={<NewFruit />} />
        <Route path="/fruits/:id" element={<ShowFruit />} />
        <Route path="/fruits/:id/edit" element={<EditFruit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
