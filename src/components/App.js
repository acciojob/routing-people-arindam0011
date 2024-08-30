import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
import { Suspense, lazy } from "react";

import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";
import User4 from "./User4";
import User5 from "./User5";

// Lazy loading the user components
// const User1 = lazy(() => import('./User1'));
// const User2 = lazy(() => import('./User2'));
// const User3 = lazy(() => import('./User3'));
// const User4 = lazy(() => import('./User4'));
// const User5 = lazy(() => import('./User5'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/users/1" element={<User1 />} />
          <Route path="/users/2" element={<User2 />} />
          <Route path="/users/3" element={<User3 />} />
          <Route path="/users/4" element={<User4 />} />
          <Route path="/users/5" element={<User5 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
