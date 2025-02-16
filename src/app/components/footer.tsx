import React from "react";
import styless from "../styles/footer.module.css";

const footer = () => {
  return (
    <>
      <div className={`${styless.footer}`}>
        <div className="container">
          <div className="container row">
            <div className="col">
              <h3>Contact</h3>
              <p>Location</p>
              <p>Phone</p>
              <p>Email</p>
            </div>

            <div className="col">
              <h3>Socials</h3>
              <p>Insta</p>
              <p>Linkedin</p>
              <p>FaceBook</p>
            </div>
            
            <div className="col">
              <h3>Newsletter</h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-dark border-dark"
                  placeholder="Recipient's email"
                  aria-label="Recipient's email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn bg-dark border-dark"
                  type="button"
                  id="button-addon2"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          © Hardik's Blog, All Right Reserved.
        </div>
      </div>
    </>
  );
};

export default footer;
