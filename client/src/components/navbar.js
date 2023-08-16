import React, { useContext } from "react";
import { userContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(userContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <a class="nav-link" aria-current="page" href="/">
            Home
          </a>
          <a class="nav-link" href="/about">
            About
          </a>
          <a class="nav-link" href="/logout">
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <a class="nav-link" aria-current="page" href="/">
            Home
          </a>
          <a class="nav-link" href="/about">
            About
          </a>
          <a class="nav-link" href="/login">
            Log in
          </a>
          <a class="nav-link" href="/register">
            Register
          </a>
        </>
      );
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Password Manager
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <RenderMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
