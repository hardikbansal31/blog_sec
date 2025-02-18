// import { auto } from "@popperjs/core";
import Image from "next/image";
import Link from "next/link";
// import logo from "./assets/imgs/lambo_logo.webp";

const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid container">
          <Link href="/" className="navbar-brand">
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
          </Link>
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
                <Link href="/" className="nav-link col-wh" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link col-wh">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  href="/"
                  className="nav-link dropdown-toggle col-wh"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/" className="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link href="/" className="dropdown-item">
                      soemthing
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className="btn btn-outline-success bg-dark col-wh"
                  type="button"
                >
                  <Link href="/create" className="col-wh">Create Blog</Link>
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
                <Link href="/">search</Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
