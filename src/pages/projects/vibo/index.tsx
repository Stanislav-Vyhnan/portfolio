/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import { useEffect } from 'react';

import { scriptFunc } from './script';

const Vibo = () => {
  useEffect(() => {
    scriptFunc();
  }, []);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vibo</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body">
        <div className="wrapper">
          <div className="scroll-up">
            <svg className="scroll-up__svg" viewBox="-2 -2 52 52">
              <path
                className="scroll-up__svg-path"
                d="M24, 0 a24, 24 0 0, 1 0, 48 a24, 24 0 0, 1 0, -48"
              />
            </svg>
          </div>
          <div className="content">
            <div className="intro">
              <div className="container">
                <div className="intro__row">
                  <header className="intro__header header">
                    <div className="header__logo _anim-items">
                      <img src="/vibo/css/img/intro/Logo.png" alt="logo" />
                    </div>
                    <nav className="header__nav">
                      <ul className="header__menu">
                        <li className="header__item">
                          <a href="#about">About</a>
                        </li>
                        <li className="header__item">
                          <a href="#service">Service</a>
                        </li>
                        <li className="header__item">
                          <a href="#info">Info</a>
                        </li>
                        <li className="header__item">
                          <a href="#download">Download</a>
                        </li>
                      </ul>
                    </nav>
                    <div className="header__gamburger gamburger">
                      <div className="gamburger__item" />
                    </div>
                  </header>
                  <div className="intro__body">
                    <div className="intro__title _anim-items _active-no-hide">
                      Choose a better way to
                      <br />
                      represent your app
                    </div>
                    <div className="intro__subtitle _anim-items">
                      Vestibulum ac diam sit amet quam vehicula elementum.
                    </div>
                    <div className="intro__buttons">
                      <button className="intro__button-download _anim-items">Download Free</button>
                      <button className="intro__button-contact _anim-items">Contact Us</button>
                    </div>
                    <div className="intro__image _anim-items">
                      <img src="/vibo/css/img/intro/Smartphone.png" alt="smartphone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about" id="about">
              <div className="container">
                <div className="about__row">
                  <div className="about__image _anim-items _active-no-hide">
                    <img src="/vibo/css/img/service/smartphone.png" alt="smartphone" />
                  </div>
                  <div className="about__items">
                    <div className="about__item _anim-items">
                      <div className="about__icon">
                        <img src="/vibo/css/img/service/Icon1.png" alt="icon" />
                      </div>
                      <div className="about__title">First 7 Days Free</div>
                      <div className="about__text">
                        Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                        tincidunt. Vestibulum ac diamdo.
                      </div>
                    </div>
                    <div className="about__item _anim-items">
                      <div className="about__icon">
                        <img src="/vibo/css/img/service/Icon2.png" alt="icon" />
                      </div>
                      <div className="about__title">Fully Support</div>
                      <div className="about__text">
                        Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                        tincidunt. Vestibulum ac diamdo.
                      </div>
                    </div>
                    <div className="about__item _anim-items">
                      <div className="about__icon">
                        <img src="/vibo/css/img/service/Icon3.png" alt="icon" />
                      </div>
                      <div className="about__title">Modern Flat Design</div>
                      <div className="about__text">
                        Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                        tincidunt. Vestibulum ac diamdo.
                      </div>
                    </div>
                    <div className="about__item _anim-items">
                      <div className="about__icon">
                        <img src="/vibo/css/img/service/Icon4.png" alt="icon" />
                      </div>
                      <div className="about__title">User Friendly</div>
                      <div className="about__text">
                        Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                        tincidunt. Vestibulum ac diamdo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service" id="service">
              <div className="container">
                <div className="service__row">
                  <div className="service__body">
                    <div className="service__title title _anim-items _active-no-hide">
                      Stable And Ready
                    </div>
                    <div className="service__text _anim-items">
                      Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                      tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                      dui. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id
                      dui posuere blandit. Vestibulum ac diam sit amet quam.
                    </div>
                    <div className="service__box">
                      <button className="service__button _anim-items">Download Free</button>
                    </div>
                  </div>
                  <div className="service__buttons buttons">
                    <button className="buttons__item active-btn _anim-items _active-no-hide">
                      <div className="buttons__box-icon">
                        <svg
                          className="buttons__icon buttons_icon-w30-h26"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M14.373,25.376 C14.340,25.347 14.320,25.323 14.313,25.319 L14.313,25.319 L14.545,25.102 L14.311,25.316 C10.465,21.468 7.036,18.127 4.547,15.284 L4.547,15.284 C2.072,12.427 0.463,10.137 0.426,8.030 L0.426,8.030 C0.426,7.993 0.423,7.940 0.430,7.872 L0.430,7.872 C0.453,3.764 3.778,0.453 7.889,0.445 L7.889,0.445 C10.876,0.445 13.448,2.211 14.635,4.753 L14.635,4.753 L14.801,5.109 L14.807,5.099 L14.969,4.751 C16.159,2.211 18.732,0.445 21.721,0.445 L21.721,0.445 C25.844,0.453 29.170,3.783 29.178,7.875 L29.178,7.875 C29.180,7.930 29.180,7.984 29.182,8.034 L29.182,8.034 C29.144,10.139 27.532,12.429 25.059,15.286 L25.059,15.286 C22.572,18.124 19.152,21.459 15.310,25.300 L15.310,25.300 C15.299,25.311 15.289,25.323 15.283,25.331 L15.283,25.331 L15.283,25.331 L14.850,25.800 L14.373,25.376 L14.373,25.376 ZM1.728,7.904 L1.726,7.939 L1.726,7.961 C1.726,7.962 1.725,7.988 1.725,8.030 L1.725,8.030 C1.687,9.392 3.074,11.663 5.523,14.428 L5.523,14.428 C7.871,17.109 11.133,20.308 14.805,23.971 L14.805,23.971 C18.481,20.299 21.736,17.106 24.080,14.430 L24.080,14.430 C26.531,11.667 27.920,9.395 27.883,8.034 L27.883,8.034 C27.883,7.996 27.881,7.961 27.879,7.904 L27.879,7.904 C27.871,4.498 25.128,1.751 21.721,1.743 L21.721,1.743 C19.257,1.743 17.130,3.200 16.144,5.300 L16.144,5.300 L15.983,5.650 L15.890,5.845 L15.869,5.879 C15.656,6.216 15.271,6.472 14.805,6.472 L14.805,6.472 C14.310,6.472 13.900,6.182 13.686,5.790 L13.686,5.790 C13.680,5.777 13.653,5.732 13.623,5.658 L13.623,5.658 L13.457,5.301 C12.477,3.200 10.354,1.743 7.891,1.743 L7.891,1.743 C4.482,1.750 1.733,4.498 1.728,7.904 L1.728,7.904 ZM14.838,5.197 C14.838,5.197 14.840,5.200 14.830,5.179 L14.830,5.179 L14.830,5.179 L14.838,5.197 L14.838,5.197 Z" />
                        </svg>
                      </div>
                      <div className="buttons__text-content">
                        <div className="buttons__title">Made With Love</div>
                        <div className="buttons__text">
                          Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                          tincidunt. Vestibulum ac diam.
                        </div>
                      </div>
                    </button>
                    <button className="buttons__item _anim-items">
                      <div className="buttons__box-icon">
                        <svg
                          className="buttons__icon buttons_icon-w16-h31"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M15.018,17.258 C14.779,13.362 11.990,10.178 8.370,9.745 L8.370,9.474 C8.337,8.653 7.894,7.944 7.174,7.555 L3.657,5.828 C3.483,5.778 3.191,5.309 3.224,5.132 L3.224,3.792 C3.224,3.673 3.330,3.564 3.449,3.564 L8.936,3.564 L8.936,4.042 C8.937,5.053 9.756,5.869 10.767,5.872 L12.175,5.872 C13.185,5.869 14.004,5.053 14.006,4.042 L14.006,2.633 C14.004,1.623 13.185,0.804 12.175,0.801 L10.767,0.803 C9.905,0.804 9.189,1.400 8.994,2.202 L3.449,2.202 C2.571,2.205 1.861,2.912 1.860,3.792 L1.860,5.132 C1.891,5.953 2.334,6.662 3.055,7.053 L6.572,8.778 C6.746,8.829 7.037,9.296 7.006,9.474 L7.006,9.722 C3.246,10.015 0.317,13.261 0.070,17.258 L0.053,17.258 L0.053,28.253 C0.055,29.762 1.279,30.989 2.791,30.991 L12.299,30.991 C13.809,30.989 15.033,29.762 15.035,28.253 L15.035,17.258 L15.018,17.258 ZM10.300,2.633 C10.301,2.380 10.516,2.167 10.767,2.167 L12.175,2.167 C12.426,2.167 12.641,2.380 12.643,2.633 L12.643,4.042 C12.641,4.293 12.426,4.508 12.175,4.508 L10.767,4.509 C10.516,4.508 10.301,4.293 10.300,4.042 L10.300,2.633 ZM8.297,15.483 C8.548,15.483 8.762,15.696 8.762,15.949 L8.762,17.358 C8.762,17.608 8.548,17.822 8.297,17.825 L6.888,17.825 C6.636,17.822 6.422,17.608 6.422,17.358 L6.422,15.949 C6.422,15.696 6.636,15.483 6.888,15.483 L8.297,15.483 ZM13.671,18.622 L13.671,28.253 C13.669,29.004 13.049,29.625 12.299,29.627 L2.791,29.627 C2.040,29.625 1.420,29.004 1.418,28.253 L1.418,18.622 L1.425,18.622 L1.425,17.938 C1.422,17.829 1.416,17.789 1.418,17.789 C1.422,14.231 3.913,11.391 7.006,11.087 L7.006,14.119 L6.888,14.119 C5.876,14.120 5.059,14.936 5.058,15.949 L5.058,17.358 C5.059,18.370 5.876,19.184 6.888,19.189 L8.297,19.188 C9.307,19.184 10.124,18.370 10.126,17.358 L10.126,15.949 C10.124,14.962 9.346,14.167 8.370,14.125 L8.370,11.127 C11.328,11.573 13.669,14.343 13.671,17.789 L13.672,17.789 C13.672,17.789 13.666,17.829 13.665,17.938 L13.665,18.622 L13.671,18.622 Z" />
                        </svg>
                      </div>
                      <div className="buttons__text-content">
                        <div className="buttons__title">Free of Use</div>
                        <div className="buttons__text active-text">
                          Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                          tincidunt. Vestibulum ac diam.
                        </div>
                      </div>
                    </button>
                    <button className="buttons__item _anim-items">
                      <div className="buttons__box-icon">
                        <svg
                          className="buttons__icon buttons_icon-w31-h28"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M30.164,8.412 C30.161,6.492 28.817,4.819 26.988,4.800 L21.031,4.800 L21.031,2.142 C21.029,1.062 20.155,0.185 19.074,0.183 L11.707,0.183 C10.624,0.185 9.750,1.062 9.748,2.142 L9.748,4.800 L3.792,4.800 C1.961,4.819 0.620,6.492 0.617,8.412 L0.617,11.866 C0.617,11.891 0.617,11.914 0.620,11.932 C0.617,11.950 0.617,11.972 0.617,11.998 C0.617,12.164 0.639,12.319 0.671,12.455 C0.854,13.194 1.348,13.795 2.054,14.311 L2.054,23.320 C2.057,25.721 4.011,27.677 6.413,27.680 L24.367,27.680 C26.769,27.677 28.725,25.721 28.728,23.320 L28.728,14.311 C29.432,13.793 29.925,13.193 30.107,12.451 C30.141,12.319 30.162,12.164 30.162,11.998 C30.162,11.970 30.162,11.945 30.161,11.929 C30.162,11.912 30.162,11.889 30.162,11.866 L30.164,8.412 ZM10.979,2.142 C10.980,1.746 11.309,1.415 11.707,1.415 L19.074,1.415 C19.472,1.415 19.801,1.746 19.803,2.142 L19.803,4.800 L10.977,4.800 L10.979,2.142 ZM27.495,15.046 L27.495,23.320 C27.492,25.035 26.085,26.443 24.367,26.447 L6.413,26.447 C4.695,26.443 3.289,25.035 3.284,23.320 L3.284,15.046 C3.326,15.067 3.379,15.086 3.422,15.107 C3.660,15.219 3.906,15.328 4.166,15.434 C6.109,16.202 8.732,16.752 11.722,17.006 L11.722,18.317 C11.725,19.167 12.410,19.854 13.260,19.855 L17.518,19.855 C18.368,19.854 19.054,19.167 19.057,18.317 L19.057,17.006 C20.383,16.892 21.633,16.721 22.789,16.498 C24.236,16.218 25.531,15.862 26.613,15.434 L26.613,15.434 L26.613,15.434 C26.876,15.327 27.121,15.217 27.363,15.103 C27.405,15.084 27.453,15.066 27.495,15.046 ZM12.952,15.856 L12.952,15.291 C12.952,15.126 13.096,14.983 13.260,14.983 L17.518,14.983 C17.683,14.983 17.826,15.126 17.826,15.291 L17.826,15.856 L17.826,15.857 L17.826,17.088 L17.826,17.090 L17.826,18.317 C17.826,18.481 17.683,18.624 17.518,18.625 L13.260,18.625 C13.096,18.624 12.952,18.481 12.952,18.317 L12.952,17.090 L12.952,17.088 L12.952,15.857 L12.952,15.856 ZM26.988,6.032 C27.974,6.034 28.929,7.036 28.932,8.412 L28.932,11.847 C28.929,11.865 28.928,11.891 28.928,11.929 C28.928,11.972 28.929,12.003 28.932,12.018 C28.929,12.063 28.922,12.117 28.908,12.185 C28.844,12.607 28.318,13.184 27.369,13.722 C27.301,13.760 27.229,13.799 27.157,13.835 C27.088,13.873 27.016,13.908 26.940,13.945 C26.852,13.989 26.756,14.034 26.660,14.077 C26.501,14.149 26.338,14.219 26.160,14.288 C24.848,14.809 23.132,15.235 21.166,15.524 C20.493,15.623 19.787,15.704 19.057,15.767 L19.057,15.291 C19.054,14.438 18.368,13.753 17.518,13.751 L13.260,13.751 C12.410,13.753 11.725,14.438 11.722,15.291 L11.722,15.767 C11.129,15.717 10.555,15.651 9.998,15.576 C7.871,15.288 6.016,14.844 4.619,14.288 C4.439,14.219 4.271,14.146 4.109,14.073 C4.020,14.032 3.936,13.992 3.855,13.951 C3.767,13.912 3.687,13.870 3.607,13.828 C3.541,13.793 3.478,13.760 3.416,13.726 C2.463,13.187 1.937,12.610 1.871,12.189 C1.858,12.122 1.850,12.068 1.847,12.024 C1.848,12.012 1.850,11.991 1.853,11.959 L1.853,11.926 L1.853,11.894 C1.850,11.865 1.848,11.842 1.847,11.831 L1.848,8.412 C1.848,7.036 2.805,6.034 3.792,6.032 L26.988,6.032 Z" />
                        </svg>
                      </div>
                      <div className="buttons__text-content">
                        <div className="buttons__title">Fully Support Avaliable</div>
                        <div className="buttons__text">
                          Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                          tincidunt. Vestibulum ac diam.
                        </div>
                      </div>
                    </button>
                    <button className="buttons__item _anim-items">
                      <div className="buttons__box-icon">
                        <svg
                          className="buttons__icon buttons_icon-w27-h27"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M23.232,5.385 L25.421,7.573 C25.551,7.703 25.617,7.874 25.617,8.051 C25.617,8.229 25.551,8.399 25.420,8.529 L25.421,8.529 L11.488,22.461 L12.406,23.380 L26.340,9.448 C26.724,9.063 26.916,8.554 26.916,8.051 C26.916,7.547 26.724,7.038 26.339,6.655 L21.041,1.358 C20.656,0.973 20.148,0.781 19.644,0.781 C19.141,0.781 18.632,0.973 18.246,1.358 L4.317,15.289 L5.235,16.208 L19.166,2.277 C19.299,2.145 19.468,2.080 19.644,2.080 C19.822,2.080 19.992,2.145 20.123,2.277 L22.313,4.466 L9.100,17.679 L10.019,18.597 L23.232,5.385 ZM3.505,18.858 C3.235,18.595 2.918,18.384 2.496,18.377 C2.166,18.368 1.826,18.558 1.652,18.809 C1.470,19.060 1.396,19.340 1.369,19.639 L0.919,24.888 L0.919,24.888 C0.913,24.941 0.911,25.000 0.911,25.057 C0.908,25.527 1.090,25.973 1.408,26.288 C1.723,26.603 2.165,26.785 2.634,26.785 L2.639,26.785 C2.689,26.785 2.740,26.783 2.792,26.779 L8.060,26.328 C8.358,26.302 8.639,26.226 8.888,26.044 C9.139,25.869 9.329,25.531 9.321,25.201 C9.314,24.779 9.104,24.461 8.840,24.193 L3.505,18.858 Z" />
                        </svg>
                      </div>
                      <div className="buttons__text-content">
                        <div className="buttons__title">Flat and Modern Ui &amp; Ux</div>
                        <div className="buttons__text">
                          Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                          tincidunt. Vestibulum ac diam.
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="info" id="info">
              <div className="container">
                <div className="info__row">
                  <div className="info__image _anim-items">
                    <img src="/vibo/css/img/info/left.png" alt="code" />
                  </div>
                  <div className="info__body">
                    <div className="info__title title _anim-items _active-no-hide">
                      Everything You Need
                    </div>
                    <div className="info__subtitle _anim-items">
                      <p>Android</p>
                      <p>iPhone</p>
                    </div>
                    <div className="info__text _anim-items">
                      Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                      tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                      dui. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id
                      dui posuere blandit. Vestibulum ac diam sit amet quam.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="download" id="download">
              <div className="container">
                <div className="download__row">
                  <div className="download__image _anim-items _active-no-hide">
                    <img src="/vibo/css/img/download/smartphone.png" alt="phone" />
                  </div>
                  <div className="download__body">
                    <div className="download__title title _anim-items _active-no-hide">
                      Now Available
                    </div>
                    <div className="download__text _anim-items">
                      Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
                      tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                      dui. quam vehicula elementum sed sit ametsuada.
                    </div>
                    <div className="download__links">
                      <button className="download__link _anim-items">
                        <img src="/vibo/css/img/download/iOS.png" alt="downloadbtn" />
                      </button>
                      <button className="download__link _anim-items">
                        <img src="/vibo/css/img/download/Google.png" alt="downloadbtn" />
                      </button>
                    </div>
                  </div>
                  <button className="download__button _anim-items">GET THE APP TODAY</button>
                </div>
              </div>
            </div>
            <div className="links">
              <div className="container">
                <div className="links__row">
                  <div className="links__block">
                    <div className="links__box">
                      <p>Company</p>
                      <a className="links__item">Home</a>
                      <a className="links__item">Jobs</a>
                      <a className="links__item">Press</a>
                    </div>
                    <div className="links__box">
                      <p>Development</p>
                      <a className="links__item">iOS</a>
                      <a className="links__item">Android</a>
                    </div>
                    <div className="links__box">
                      <p>Community</p>
                      <a className="links__item">Social</a>
                      <a className="links__item">Forum</a>
                      <a className="links__item">Contact</a>
                      <a className="links__item">FAQ</a>
                    </div>
                    <div className="links__box">
                      <p>Info</p>
                      <a className="links__item">Terms of Service</a>
                      <a className="links__item">Privacy Policy</a>
                    </div>
                  </div>
                  <div className="links__body">
                    <div className="links__title title _anim-items _active-no-hide">
                      Get In Touch
                    </div>
                    <div className="links__subtitle _anim-items">
                      Subscribe to our newsletter and get notification for upcoming cool sutff.
                    </div>
                    <div className="links__inputs">
                      <input
                        type="email"
                        placeholder="Write..."
                        className="links__input-email _anim-items"
                      />
                      <input
                        type="button"
                        defaultValue="COUNT ME IN"
                        className="links__input-btn _anim-items"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer _anim-items">
            <div className="container">
              <div className="footer__row">
                <div className="footer__author">© 2018 - Appo,All Right Reserved</div>
                <div className="footer__links">
                  <a className="footer__icon">
                    <svg
                      className="footer__facebook"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M12.166,8.622 L8.117,8.622 L8.117,5.967 C8.117,4.968 8.778,4.739 9.244,4.739 C9.707,4.739 12.103,4.739 12.103,4.739 L12.103,0.351 L8.164,0.337 C3.793,0.337 2.799,3.606 2.799,5.700 L2.799,8.622 L0.273,8.622 L0.273,13.143 L2.799,13.143 C2.799,18.944 2.799,25.930 2.799,25.930 L8.117,25.930 C8.117,25.930 8.117,18.874 8.117,13.143 L11.703,13.143 L12.166,8.622 Z" />
                    </svg>
                  </a>
                  <a className="footer__icon">
                    <svg
                      className="footer__twitter"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M26.146,3.157 C25.187,3.583 24.156,3.872 23.072,3.999 C24.178,3.339 25.027,2.288 25.427,1.036 C24.393,1.651 23.244,2.097 22.027,2.339 C21.051,1.296 19.658,0.645 18.117,0.645 C15.160,0.645 12.762,3.044 12.762,6.001 C12.762,6.421 12.811,6.827 12.902,7.222 C8.450,7.001 4.506,4.866 1.863,1.626 C1.402,2.415 1.138,3.339 1.138,4.319 C1.138,6.177 2.084,7.813 3.521,8.778 C2.644,8.749 1.816,8.507 1.094,8.104 C1.094,8.128 1.094,8.151 1.094,8.175 C1.094,10.766 2.941,12.932 5.391,13.425 C4.939,13.548 4.468,13.610 3.978,13.610 C3.635,13.610 3.299,13.579 2.973,13.515 C3.652,15.643 5.630,17.190 7.973,17.235 C6.140,18.671 3.832,19.528 1.324,19.528 C0.890,19.528 0.465,19.501 0.045,19.452 C2.416,20.972 5.231,21.858 8.255,21.858 C18.105,21.858 23.492,13.698 23.492,6.622 C23.492,6.391 23.486,6.159 23.475,5.929 C24.520,5.173 25.430,4.229 26.146,3.157 Z" />
                    </svg>
                  </a>
                  <a className="footer__icon">
                    <svg
                      className="footer__dribbble"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M25.959,10.860 C25.788,10.019 25.530,9.190 25.196,8.397 C24.866,7.620 24.462,6.872 23.987,6.173 C23.520,5.479 22.981,4.829 22.391,4.237 C21.796,3.643 21.145,3.104 20.452,2.637 C19.754,2.163 19.005,1.755 18.227,1.427 C17.436,1.095 16.606,0.837 15.766,0.665 C14.903,0.489 14.014,0.399 13.128,0.399 C12.240,0.399 11.354,0.489 10.489,0.665 C9.650,0.837 8.819,1.095 8.030,1.427 C7.252,1.755 6.503,2.163 5.804,2.637 C5.110,3.104 4.458,3.643 3.864,4.237 C3.275,4.829 2.736,5.479 2.267,6.173 C1.795,6.872 1.388,7.620 1.060,8.397 C0.725,9.190 0.467,10.019 0.295,10.860 C0.120,11.721 0.029,12.612 0.029,13.497 C0.029,14.386 0.120,15.274 0.295,16.134 C0.467,16.974 0.725,17.806 1.060,18.594 C1.388,19.372 1.795,20.122 2.267,20.823 C2.736,21.515 3.275,22.167 3.864,22.759 C4.458,23.352 5.110,23.889 5.804,24.354 C6.503,24.831 7.252,25.237 8.030,25.567 C8.819,25.899 9.650,26.155 10.489,26.327 C11.354,26.507 12.240,26.594 13.128,26.594 C14.014,26.594 14.903,26.507 15.766,26.327 C16.606,26.155 17.436,25.899 18.227,25.567 C19.005,25.237 19.754,24.831 20.452,24.354 C21.145,23.889 21.796,23.352 22.391,22.759 C22.981,22.167 23.520,21.515 23.987,20.823 C24.462,20.122 24.866,19.372 25.196,18.594 C25.530,17.806 25.788,16.974 25.959,16.134 C26.137,15.274 26.225,14.386 26.225,13.497 C26.225,12.612 26.137,11.721 25.959,10.860 ZM24.310,13.384 C24.147,13.351 20.362,12.534 16.519,13.018 C16.441,12.827 16.359,12.634 16.278,12.442 C16.045,11.895 15.794,11.352 15.535,10.819 C19.952,9.016 21.743,6.423 21.767,6.392 C23.334,8.296 24.284,10.731 24.310,13.384 ZM20.517,5.103 C20.487,5.147 18.894,7.571 14.673,9.153 C12.761,5.640 10.661,2.849 10.491,2.626 C11.340,2.423 12.220,2.311 13.128,2.311 C15.960,2.311 18.545,3.366 20.517,5.103 ZM10.448,2.636 L10.448,2.637 C10.448,2.637 10.434,2.641 10.413,2.643 C10.413,2.643 10.436,2.641 10.448,2.636 ZM8.356,3.382 C8.502,3.579 10.573,6.386 12.507,9.825 C7.138,11.253 2.477,11.194 2.180,11.192 C2.908,7.727 5.235,4.854 8.356,3.382 ZM1.940,13.497 C1.940,13.376 1.946,13.261 1.949,13.143 C2.147,13.147 7.677,13.272 13.435,11.550 C13.755,12.177 14.063,12.815 14.343,13.452 C14.194,13.491 14.050,13.538 13.900,13.583 C7.864,15.532 4.805,20.966 4.805,20.966 L4.808,20.972 C3.028,18.987 1.940,16.368 1.940,13.497 ZM13.128,24.685 C10.422,24.685 7.936,23.720 6.002,22.120 C6.147,22.241 6.253,22.315 6.253,22.315 C6.253,22.315 8.397,17.640 15.030,15.325 C15.058,15.315 15.080,15.310 15.104,15.306 C16.680,19.394 17.329,22.819 17.493,23.800 C16.153,24.366 14.679,24.685 13.128,24.685 ZM19.378,22.772 C19.265,22.101 18.667,18.817 17.202,14.784 C20.812,14.208 23.940,15.198 24.173,15.274 C23.675,18.392 21.892,21.081 19.378,22.772 Z" />
                    </svg>
                  </a>
                  <a className="footer__icon">
                    <svg
                      className="footer__google-plus"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M26.646,10.273 L22.668,10.273 L22.668,6.293 C22.668,5.990 22.420,5.742 22.117,5.742 L20.983,5.742 C20.678,5.742 20.434,5.990 20.434,6.293 L20.434,10.273 L16.453,10.273 C16.150,10.273 15.899,10.519 15.899,10.822 L15.899,11.957 C15.899,12.264 16.150,12.506 16.453,12.506 L20.434,12.506 L20.434,16.490 C20.434,16.793 20.678,17.037 20.983,17.037 L22.117,17.037 C22.420,17.037 22.668,16.793 22.668,16.490 L22.668,12.506 L26.646,12.506 C26.950,12.506 27.197,12.264 27.197,11.957 L27.197,10.822 C27.197,10.519 26.950,10.273 26.646,10.273 ZM13.271,13.762 C12.435,13.168 11.672,12.301 11.660,12.033 C11.660,11.545 11.701,11.312 12.794,10.465 C14.203,9.357 14.981,7.906 14.981,6.375 C14.981,4.982 14.557,3.746 13.831,2.879 L14.394,2.879 C14.510,2.879 14.623,2.844 14.717,2.775 L16.283,1.638 C16.479,1.502 16.559,1.252 16.484,1.025 C16.410,0.797 16.199,0.644 15.961,0.644 L8.959,0.644 C8.193,0.644 7.416,0.777 6.649,1.043 C4.098,1.922 2.314,4.096 2.314,6.328 C2.314,9.492 4.764,11.888 8.039,11.965 C7.973,12.215 7.943,12.461 7.943,12.701 C7.943,13.191 8.065,13.652 8.318,14.097 L8.228,14.097 C5.108,14.097 2.287,15.631 1.222,17.912 C0.941,18.502 0.803,19.103 0.803,19.691 C0.803,20.267 0.947,20.824 1.239,21.344 C1.910,22.547 3.355,23.478 5.307,23.973 C6.312,24.228 7.394,24.355 8.520,24.355 C9.528,24.355 10.492,24.228 11.381,23.969 C14.157,23.164 15.951,21.119 15.951,18.760 C15.951,16.498 15.224,15.140 13.271,13.762 ZM5.928,6.244 C5.775,5.084 6.020,4.043 6.597,3.385 C6.971,2.961 7.457,2.738 8.008,2.738 L8.068,2.738 C9.615,2.781 11.096,4.510 11.369,6.580 C11.521,7.742 11.262,8.836 10.679,9.504 C10.306,9.928 9.822,10.152 9.254,10.152 L9.229,10.152 C7.713,10.105 6.201,8.314 5.928,6.244 ZM8.506,22.137 C6.219,22.137 4.430,20.734 4.430,18.941 C4.430,17.297 6.518,15.851 8.901,15.851 L8.966,15.851 C9.487,15.861 9.992,15.933 10.469,16.082 C10.635,16.193 10.789,16.301 10.943,16.406 C12.045,17.156 12.773,17.652 12.977,18.451 C13.027,18.652 13.051,18.849 13.051,19.045 C13.051,21.096 11.521,22.137 8.506,22.137 Z" />
                    </svg>
                  </a>
                  <a className="footer__icon">
                    <svg
                      className="footer__youtube"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M21.248,12.397 L4.755,12.397 C2.133,12.397 0.006,14.524 0.006,17.147 L0.006,20.964 C0.006,23.583 2.133,25.710 4.755,25.710 L21.248,25.710 C23.870,25.710 25.994,23.583 25.994,20.964 L25.994,17.147 C25.994,14.524 23.870,12.397 21.248,12.397 ZM8.219,15.370 L6.686,15.370 L6.686,22.989 L5.207,22.989 L5.207,15.370 L3.674,15.370 L3.674,14.073 L8.219,14.073 L8.219,15.370 ZM12.552,22.989 L11.237,22.989 L11.237,22.268 C10.993,22.534 10.742,22.737 10.479,22.874 C10.215,23.017 9.961,23.085 9.714,23.085 C9.411,23.085 9.184,22.989 9.029,22.790 C8.874,22.595 8.796,22.303 8.796,21.911 L8.796,16.411 L10.109,16.411 L10.109,21.456 C10.109,21.612 10.142,21.723 10.194,21.790 C10.249,21.864 10.340,21.899 10.462,21.899 C10.559,21.899 10.681,21.854 10.829,21.761 C10.977,21.669 11.115,21.550 11.237,21.405 L11.237,16.411 L12.552,16.411 L12.552,22.989 ZM17.320,21.630 C17.320,22.095 17.218,22.452 17.012,22.700 C16.808,22.950 16.508,23.073 16.120,23.073 C15.860,23.073 15.631,23.026 15.433,22.930 C15.228,22.835 15.039,22.684 14.870,22.481 L14.870,22.989 L13.539,22.989 L13.539,14.073 L14.870,14.073 L14.870,16.944 C15.045,16.745 15.234,16.591 15.433,16.489 C15.634,16.384 15.835,16.331 16.038,16.331 C16.455,16.331 16.772,16.472 16.994,16.749 C17.213,17.030 17.320,17.440 17.320,17.981 L17.320,21.630 ZM21.880,19.858 L19.368,19.858 L19.368,21.096 C19.368,21.444 19.406,21.683 19.494,21.817 C19.581,21.950 19.732,22.018 19.939,22.018 C20.158,22.018 20.310,21.960 20.397,21.846 C20.484,21.733 20.528,21.485 20.528,21.096 L20.528,20.798 L21.880,20.798 L21.880,21.136 C21.880,21.809 21.717,22.315 21.385,22.659 C21.059,22.999 20.565,23.165 19.910,23.165 C19.319,23.165 18.856,22.989 18.518,22.624 C18.183,22.268 18.011,21.770 18.011,21.136 L18.011,18.183 C18.011,17.612 18.197,17.144 18.570,16.786 C18.943,16.427 19.418,16.247 20.007,16.247 C20.609,16.247 21.073,16.413 21.396,16.747 C21.720,17.079 21.880,17.555 21.880,18.183 L21.880,19.858 ZM19.951,17.397 C19.744,17.397 19.593,17.458 19.503,17.581 C19.409,17.694 19.368,17.894 19.368,18.169 L19.368,18.833 L20.528,18.833 L20.528,18.169 C20.528,17.894 20.481,17.694 20.392,17.581 C20.301,17.458 20.152,17.397 19.951,17.397 ZM15.418,17.374 C15.325,17.374 15.231,17.393 15.142,17.438 C15.048,17.479 14.958,17.551 14.870,17.639 L14.870,21.739 C14.976,21.843 15.080,21.927 15.179,21.972 C15.284,22.018 15.386,22.042 15.500,22.042 C15.660,22.042 15.776,21.997 15.852,21.905 C15.928,21.809 15.966,21.659 15.966,21.450 L15.966,18.054 C15.966,17.829 15.922,17.663 15.829,17.546 C15.732,17.433 15.596,17.374 15.418,17.374 ZM6.913,10.114 L8.580,10.114 L8.580,6.038 L10.520,0.290 L8.825,0.290 L7.796,4.216 L7.688,4.216 L6.608,0.290 L4.930,0.290 L6.913,6.221 L6.913,10.114 ZM12.775,10.296 C13.448,10.296 13.976,10.120 14.363,9.766 C14.745,9.411 14.936,8.927 14.936,8.308 L14.936,4.567 C14.936,4.016 14.739,3.561 14.352,3.212 C13.958,2.860 13.457,2.684 12.843,2.684 C12.173,2.684 11.637,2.854 11.237,3.182 C10.838,3.515 10.640,3.960 10.640,4.522 L10.640,8.278 C10.640,8.896 10.835,9.384 11.223,9.749 C11.610,10.114 12.132,10.296 12.775,10.296 ZM12.164,4.468 C12.164,4.313 12.222,4.186 12.330,4.087 C12.446,3.987 12.592,3.940 12.772,3.940 C12.968,3.940 13.128,3.987 13.247,4.087 C13.367,4.186 13.429,4.313 13.429,4.468 L13.429,8.419 C13.429,8.610 13.370,8.765 13.251,8.876 C13.131,8.985 12.974,9.040 12.772,9.040 C12.574,9.040 12.426,8.985 12.321,8.878 C12.216,8.766 12.164,8.616 12.164,8.419 L12.164,4.468 ZM17.172,10.219 C17.448,10.219 17.734,10.139 18.028,9.989 C18.325,9.831 18.611,9.606 18.879,9.311 L18.879,10.114 L20.362,10.114 L20.362,2.868 L18.879,2.868 L18.879,8.368 C18.742,8.526 18.591,8.657 18.425,8.757 C18.259,8.858 18.119,8.911 18.011,8.911 C17.871,8.911 17.769,8.872 17.711,8.794 C17.649,8.720 17.614,8.593 17.614,8.421 L17.614,2.868 L16.138,2.868 L16.138,8.923 C16.138,9.356 16.226,9.677 16.397,9.893 C16.571,10.108 16.828,10.219 17.172,10.219 Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
};

export default Vibo;
