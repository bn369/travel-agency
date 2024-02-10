import React, { useRef } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./app.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Form from "./components/content/Form";
import Explore from "./components/content/Explore";
import { useState } from "react";
import About from "./components/navFeatures/About";
import Success from "./components/content/Success";
import Footer from "./components/navFeatures/Footer";
import Customers from "./components/content/Customers";

function App() {
  const [isMain, setIsMain] = useState(true);
  const [isExplore, setIsExplore] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const aboutRef = useRef(null);
  const customersRef = useRef(null);

  return (
    <BrowserRouter>
      <div className={isExplore ? "underwater" : isForm ? "together" :(!isSuccess ? "container" : "success")}>
        <Navbar 
          isSuccess={isSuccess}
          setIsMain={setIsMain}
          setIsExplore={setIsExplore}
          setIsForm={setIsForm}
          setIsSuccess={setIsSuccess}
          aboutRef={aboutRef}
          customersRef={customersRef}
        />
        <Routes>
          {isMain && (
            <Route
              path="/"
              element={
                <Main
                  setIsMain={setIsMain}
                  setIsExplore={setIsExplore}
                  setIsForm={setIsForm}
                />
              }
            />
          )}
          {isExplore && (
            <Route
              path="/explore"
              element={
                <Explore
                  setIsMain={setIsMain}
                  setIsExplore={setIsExplore}
                  setIsForm={setIsForm}
                />
              }
            />
          )}
          {isForm && (
            <Route
              path="/form"
              element={
                <Form
                  setIsForm={setIsForm}
                  setIsSuccess={setIsSuccess}
                />
              }
            />
          )}
          {isSuccess && (
            <Route
              path="/success"
              element={
                <Success
                  setIsSuccess={setIsSuccess}
                  setIsMain={setIsMain}
                  setIsExplore={setIsExplore}
                  setIsForm={setIsForm}
                />
              }
            />
          )}
        </Routes>
      </div>
      <div>
        <Customers 
          ref={customersRef}
        />
      </div>
      <div className="container-2">
        <About 
          ref={aboutRef}
        />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
