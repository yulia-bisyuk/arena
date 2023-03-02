import React from 'react';

function HomeSection() {
  return (
    <div className="home-section">
      <div
        className="swiper swiper-initialized swiper-horizontal swiper-pointer-events home-slides swiper-backface-hidden">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide-active" style={{width: '532px'}}>
            <div className="main-banner item-bg5">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content"><span
                      className="sub-title">The Best Workspace in New York</span><h1>Professional, Creative, Flexible,
                      Scalable Workspace</h1>
                      <div className="btn-box"><a className="default-btn" href="/index2/#">Book A Room <span/></a>
                        <div className="optional-btn"><i className="flaticon-play-button"/> Watch Video</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-next" style={{width: '532px'}}>
            <div className="main-banner item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content"><span
                      className="sub-title">The Best Workspace in New York</span><h1>Professional, Creative, Flexible,
                      Scalable Workspace</h1>
                      <div className="btn-box"><a className="default-btn" href="/index2/#">Book A Room <span/></a>
                        <div className="optional-btn"><i className="flaticon-play-button"/> Watch Video</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide" style={{width: '532px'}}>
            <div className="main-banner item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content"><span
                      className="sub-title">The Best Workspace in New York</span><h1>Professional, Creative, Flexible,
                      Scalable Workspace</h1>
                      <div className="btn-box"><a className="default-btn" href="/index2/#">Book A Room <span/></a>
                        <div className="optional-btn"><i className="flaticon-play-button"/> Watch Video</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-prev swiper-button-disabled"/>
        <div className="swiper-button-next"/>
      </div>
      <div className="banner-footer">
        <div className="container-fluid p-0">
          <div className="row m-0 align-items-center">
            <div className="col-lg-5 col-md-12 p-0">
              <div className="banner-video">
                <div className="video-btn"><i className="flaticon-play-button-1"/></div>
                <span>Watch Video</span></div>
            </div>
            <div className="col-lg-7 col-md-12 p-0">
              <div className="banner-contact-info">
                <ul>
                  <li><i className="flaticon-location"/><span>Office Address</span>27 Division St, New York, NY 10002,
                    USA
                  </li>
                  <li><i className="flaticon-email"/><span>Email Address</span><a
                    href="mailto:info@tuam.com">info@tuam.com</a><a href="mailto:support@tuam.com">support@tuam.com</a>
                  </li>
                  <li><i className="flaticon-calendar"/><span>Office Hour</span>Mon - Fri, 8 AM - 10 PM (Members are
                    24/7)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
