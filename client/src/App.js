import React, { createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import About from "./components/about";
import Register from "./components/register";
import Logout from "./components/logout";

import { initialState, reducer } from "./reducer/UseReducer";

// Context api
export const userContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/about" element={<About />} />

      <Route path="/register" element={<Register />} />

      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </userContext.Provider>
    </>
  );
};

export default App;
