import React from 'react';

function Navbar() {
  return (
    <div id="navbar" className="navbar-area navbar-style-two">
      <div className="tuam-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light"><a className="navbar-brand" href="/"><img
            src="/images/white-logo.png" alt="logo" className="white-logo"/><img src="/images/logo.png" alt="logo"
                                                                                 className="logo"/></a>
            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="icon-bar top-bar"/><span
              className="icon-bar middle-bar"/><span className="icon-bar bottom-bar"/></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/index2/#">Home <i
                  className="flaticon-down-arrow"/></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="/">Home One</a></li>
                    <li className="nav-item"><a className="nav-link active" href="/index2/">Home Two</a></li>
                    <li className="nav-item"><a className="nav-link" href="/index3/">Home Three</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/about/">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/the-place/">The Place</a></li>
                <li className="nav-item"><a className="nav-link" href="/index2/#">Event <i
                  className="flaticon-down-arrow"/></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="/events/">Events</a></li>
                    <li className="nav-item"><a className="nav-link" href="/event-details/">Event Details</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/index2/#">Pages <i
                  className="flaticon-down-arrow"/></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="/gallery/">Gallery</a></li>
                    <li className="nav-item"><a className="nav-link" href="/index2/#">Services</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="nav-link" href="/services/">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="/service-details/">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="/pricing/">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="/team/">Team</a></li>
                    <li className="nav-item"><a className="nav-link" href="/404/">404 Error</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/index2/#">News <i
                  className="flaticon-down-arrow"/></a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="/news1/">News Grid</a></li>
                    <li className="nav-item"><a className="nav-link" href="/news2/">News Right Sidebar</a></li>
                    <li className="nav-item"><a className="nav-link" href="/news-details/">News Details</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/contact/">Contact</a></li>
              </ul>
              <div className="others-option">
                <div className="call-us">
                  <div className="icon"><i className="flaticon-call"/></div>
                  Call Us:<span className="number">+1 518 285679</span></div>
                <a className="default-btn" href="/index2/#">Schedule A Tour<span/></a></div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
