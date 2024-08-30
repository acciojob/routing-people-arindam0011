import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
import { Suspense, lazy } from "react";

// const User1 = lazy(() => import('./User1'));
// const User2 = lazy(() => import('./User2'));
// const User3 = lazy(() => import('./User3'));
// const User4 = lazy(() => import('./User4'));
// const User5 = lazy(() => import('./User5'));
// const User6 = lazy(() => import('./User6'));
// const User7 = lazy(() => import('./User7'));
// const User8 = lazy(() => import('./User8'));
// const User9 = lazy(() => import('./User9'));
// const User10 = lazy(() => import('./User10'));

import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';
import User5 from './User5';
import User6 from './User6';
import User7 from './User7';
import User8 from './User8';
import User9 from './User9';
import User10 from './User10';

const App = () => {
  
  return (
    
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/users/1" element={
          <Suspense fallback={<Loading />}>
            <User1 />
          </Suspense>
        } />
        <Route path="/users/2" element={
          <Suspense fallback={<Loading />}>
            <User2 />
          </Suspense>
        } />
        <Route path="/users/3" element={
          <Suspense fallback={<Loading />}>
            <User3 />
          </Suspense>
        } />
        <Route path="/users/4" element={
          <Suspense fallback={<Loading />}>
            <User4 />
          </Suspense>
        } />
        <Route path="/users/5" element={
          <Suspense fallback={<Loading />}>
            <User5 />
          </Suspense>
        } />
        <Route path="/users/6" element={
          <Suspense fallback={<Loading />}>
            <User6 />
          </Suspense>
        } />
        <Route path="/users/7" element={
          <Suspense fallback={<Loading />}>
            <User7 />
          </Suspense>
        } />
        <Route path="/users/8" element={
          <Suspense fallback={<Loading />}>
            <User8 />
          </Suspense>
        } />
        <Route path="/users/9" element={
          <Suspense fallback={<Loading />}>
            <User9 />
          </Suspense>
        } />
        <Route path="/users/10" element={
          <Suspense fallback={<Loading />}>
            <User10 />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
