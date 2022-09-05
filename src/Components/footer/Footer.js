import React from 'react'
import "./style.css"
export default function Footer() {
    return (
        <footer className="text-center text-lg-start text-muted" style={{background:"#272a33"}}>
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-twitter "></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-white">
                    <i className="fas fa-gem me-3 text-white"></i>Company name
                  </h6>
                  <p>
                  In an ideal world this text wouldn’t exist, a client would 
                  acknowledge the importance of having web copy before the design starts.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 links">
                  <h6 className="text-uppercase fw-bold mb-4 text-white">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Angular</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Laravel</a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 links">
                  <h6 className="text-uppercase fw-bold mb-4 text-white">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
                  <p><i className="fas fa-home me-3 text-secondary"></i> El Mahala ElKoubra</p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    ahmdkhaldnws105@gmail.com
                  </p>
                  <p><i className="fas fa-phone me-3 text-secondary"></i> 010 671 755 92</p>
                  <p><i className="fas fa-print me-3 text-secondary"></i> 010 004 694 26</p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-4" style={{background:"#2e313a"}} >
            © 2022 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">AHMED KHALED</a>
          </div>
        </footer>

    )
}
