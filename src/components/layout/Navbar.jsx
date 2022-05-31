import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <span className="navbar-brand" href="/">
            CRUD APP
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  style={{ color: "white" }}
                  className="nav-link "
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link to="/add/users" className="btn btn-outline-light w-15">Add user</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
