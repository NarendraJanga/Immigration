import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton"; // Importing Skeleton for loading effect
import "react-loading-skeleton/dist/skeleton.css"; // Import CSS for Skeleton styling

const Header = () => {
  const [loading, setLoading] = useState(true);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000);

  // Function to clear the timeout when the component is unmounted
  const clearTimer = () => {
    clearTimeout(timer);
  };

  // Use useEffect to clear the timeout when the component is unmounted
  React.useEffect(() => {
    return clearTimer;
  }, []);

  return (
    <div className="container-fluid  py-3">
      {loading ? (
        // Skeleton loading effect while loading
        <div>
          <div className="row align-items-center mb-3">
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start gap-3">
              <Skeleton width="100px" height="40px" />
              <Skeleton width="100px" height="40px" />
            </div>

            {/* Logo and Title */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
              <Skeleton height={30} width={200} />
            </div>
          </div>

          {/* Navbar */}
          <div
            className="row"
            style={{
              backgroundColor: "#F5F5F5",
            }}
          >
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Skeleton
                    width="20px"
                    height="20px"
                    className="bg-light rounded"
                  />
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav w-75  d-flex justify-content-evenly">
                    <li className="nav-item">
                      <Skeleton width="50px" height="20px" />
                    </li>
                    <li className="nav-item">
                      <Skeleton width="50px" height="20px" />
                    </li>
                    <li className="nav-item dropdown">
                      <Skeleton width="50px" height="20px" />
                      <Skeleton width="100px" height="20px" />
                    </li>
                    <li className="nav-item">
                      <Skeleton width="50px" height="20px" />
                    </li>
                    <li className="nav-item">
                      <Skeleton width="50px" height="20px" />
                    </li>
                  </ul>
                </div>
                <div>
                  <li className="nav-item list-unstyled">
                    <Skeleton width="100px" height="40px" />
                  </li>
                </div>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        // Actual content after loading
        <div className="container-fluid  py-3">
          <div className="row align-items-center mb-3">
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start gap-3">
              <button className="btn" id="button1">
                For Individuals
              </button>
              <button className="btn" id="button1">
                For Employees
              </button>
            </div>

            {/* Logo and Title */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
              <p className="mb-0 fw-bold text-center text-dark">
                Heman Immigration Services Pvt Ltd.
              </p>
            </div>
          </div>

          {/* Navbar */}
          <div
            className="row"
            style={{
              backgroundColor: "#F5F5F5",
            }}
          >
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav w-75  d-flex justify-content-evenly">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/visa-services">
                            Visa Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/passport-services"
                          >
                            Passport Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/tourism-services"
                          >
                            Tourism Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/carrers">
                        Carrers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/faqs">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <li className="nav-item list-unstyled">
                    <Link
                      className="btn btn-warning text-dark fw-bold"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
