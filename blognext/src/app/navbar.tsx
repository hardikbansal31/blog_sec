// import { auto } from "@popperjs/core";
import Image from "next/image";
// import logo from "./assets/imgs/lambo_logo.webp";

const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid container">
          <a href="/" className="navbar-brand">
            <div className="nav-logo-container">
              <Image
                src="/assets/imgs/lambo_logo.webp"
                alt="Home"
                fill
                sizes="(max-width: 768px) 100px, 150px" // Define responsive sizes
                className="nav-logo"
                priority // Marks image for immediate loading
              />
            </div>
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link col-wh" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link col-wh" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle col-wh"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className="btn btn-outline-success bg-dark col-wh"
                  type="button"
                >
                  <a href="/create" className="col-wh">
                    Create Blog
                  </a>
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 bg-dark col-wh border-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success bg-dark col-wh"
                type="submit"
              >
                <a href="search.html">Search</a>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
