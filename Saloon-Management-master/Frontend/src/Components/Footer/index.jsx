import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted text-white" style={{backgroundcolor: "#5A189A"}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white">
        <div>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-facebook-f text-white"></i>
          </a>
          <a href="/" className="me-4 text-reset text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5 text-white">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem"></i>Mariya Salon
              </h6>
              <p>
                <HiLocationMarker />
                Obesekarapura Rajagiriya.
              </p>
              <p>
                <AiFillMail />
                shine.on.habaraduwa@gmail.com
              </p>
              <p>
                <BsFillTelephoneFill />
                0769881536
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Book Now
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Payment
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Announcement
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> About
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                Contact Us
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> FAQ
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        Mariya Salon
        </a>
      </div>
    </footer>
  );
}

export default Footer;