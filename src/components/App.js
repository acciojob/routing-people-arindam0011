
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";
import User4 from "./User4";
import User5 from "./User5";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/user/1" element={<User1 />} />
      <Route path="/user/2" element={<User2 />} />
      <Route path="/user/3" element={<User3 />} />
      <Route path="/user/4" element={<User4 />} />
      <Route path="/user/5" element={<User5 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
