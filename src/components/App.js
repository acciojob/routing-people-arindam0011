
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";
import User4 from "./User4";
import User5 from "./User5";
import Loading from "./Loading";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/users/1" element={<User1 />? <User1 /> : <Loading />} />
      <Route path="/users/2" element={<User2 />? <User1 /> : <Loading />} />
      <Route path="/users/3" element={<User3 />? <User1 /> : <Loading />} />
      <Route path="/users/4" element={<User4 />? <User1 /> : <Loading />} />
      <Route path="/users/5" element={<User5 />? <User1 /> : <Loading />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
