/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import { useEffect } from 'react';

import { scriptFunc } from './js/script';

const StartUpAgency = () => {
  useEffect(() => {
    scriptFunc();
  }, []);

  require('./css/style.css');

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Start-up Agency. The Best Way to Grow Your Start-up!" />
        <meta name="google" content="notranslate" />
        <title>Start-up Agency</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/start-up-agency/img/Favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/start-up-agency/img/Favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/start-up-agency/img/Favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/start-up-agency/img/Favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/start-up-agency/img/Favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body">
        <div className="wrapper">
          <div className="scroll-up">
            <picture>
              <source srcSet="/start-up-agency/img/Home/smallRocket.webp" type="image/webp" />
              <img src="/start-up-agency/img/Home/smallRocket.png" alt="Rocket" />
            </picture>
            <svg className="scroll-up__svg" viewBox="-2 -2 52 52">
              <path
                className="scroll-up__svg-path"
                d="M24, 0 a24, 24 0 0, 1 0, 48 a24, 24 0 0, 1 0, -48"
              />
            </svg>
          </div>
          <div className="content">
            <section className="home" id="Home">
              <div className="container">
                <div className="home__row">
                  <header className="home__header header">
                    <div className="header__logo header-logo _anim-items">
                      <picture>
                        <source
                          srcSet="/start-up-agency/img/Home/smallRocket.webp"
                          type="image/webp"
                        />
                        <img src="/start-up-agency/img/Home/smallRocket.png" alt="logoRocket" />
                      </picture>
                      <div className="header-logo__content">
                        <p>START-UP</p>
                        <span>AGENCY</span>
                      </div>
                    </div>
                    <nav className="header__nav header-menu">
                      <ul className="header-menu__list">
                        <li>
                          <a href="#ToServices" className="header-menu__item">
                            SERVICES
                          </a>
                        </li>
                        <li>
                          <a href="#Work" className="header-menu__item">
                            OUR WORK
                          </a>
                        </li>
                        <li>
                          <a href="#Feautures" className="header-menu__item">
                            Feautures
                          </a>
                        </li>
                        <li>
                          <a href="#About" className="header-menu__item">
                            ABOUT US
                          </a>
                        </li>
                        <li>
                          <a href="#Blog" className="header-menu__item">
                            BLOG
                          </a>
                        </li>
                        <li>
                          <a href="#Contact" className="header-menu__item">
                            CONTACT
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="header__gamburger gamburger">
                      <div className="gamburger__item" />
                    </div>
                  </header>
                  <div className="home__body">
                    <h1 className="home__title _anim-items _active-no-hide">
                      The Best Way to Grow Your Start-up
                    </h1>
                    <h2 className="home__subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt.
                    </h2>
                    <div className="home__items">
                      <button className="home__btn btn home_btn-trial">START TRIAL</button>
                      <a href="#Work" className="home__btn btn home_btn-see" id="ToServices">
                        SEE HOW IT WORKS
                      </a>
                    </div>
                    <picture>
                      <source srcSet="/start-up-agency/img/Home/rocket.webp" type="image/webp" />
                      <img
                        className="home__image _anim-items"
                        src="/start-up-agency/img/Home/rocket.png"
                        alt="rocket"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </section>
            <section className="services">
              <div className="container">
                <div className="services__row">
                  <div className="services__box services_box1 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__image">
                        <picture>
                          <source
                            srcSet="/start-up-agency/img/Services/icon1.webp"
                            type="image/webp"
                          />
                          <img src="/start-up-agency/img/Services/icon1.png" alt="icon" />
                        </picture>
                      </div>
                      <h2 className="services__title">Fast Growing</h2>
                      <div className="services__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                      </div>
                      <div className="services__text services_hidden-text">
                        magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                      </div>
                      <button className="services__button">Read more</button>
                    </div>
                  </div>
                  <div className="services__box services_box2 _anim-items _active-no-hide">
                    <div className="services__item services_item2">
                      <div className="services__image">
                        <picture>
                          <source
                            srcSet="/start-up-agency/img/Services/icon2.webp"
                            type="image/webp"
                          />
                          <img src="/start-up-agency/img/Services/icon2.png" alt="icon" />
                        </picture>
                      </div>
                      <h2 className="services__title">Real-time Statistics</h2>
                      <div className="services__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                      </div>
                      <div className="services__text services_hidden-text">
                        magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                      </div>
                      <button className="services__button">Read more</button>
                    </div>
                  </div>
                  <div className="services__box services_box3 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__image">
                        <picture>
                          <source
                            srcSet="/start-up-agency/img/Services/icon3.webp"
                            type="image/webp"
                          />
                          <img src="/start-up-agency/img/Services/icon3.png" alt="icon" />
                        </picture>
                      </div>
                      <h2 className="services__title">Online Data-base</h2>
                      <div className="services__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                      </div>
                      <div className="services__text services_hidden-text">
                        magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                      </div>
                      <button className="services__button">Read more</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="work" id="Work">
              <div className="container">
                <div className="work__row">
                  <h2 className="work__title _anim-items _active-no-hide">How does it work?</h2>
                  <div className="work__body">
                    <div className="work__text-content work_block _anim-items">
                      <div className="work__item item-work">
                        <div className="item-work__box">
                          <div className="item-work__icon-box">
                            <svg
                              className="item-work__icon item-work_icon1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M9.156,9.997 L6.505,7.346 L6.505,3.792 L8.115,3.792 L8.115,6.679 L10.295,8.859 L9.156,9.997 ZM7.309,0.572 C3.751,0.572 0.868,3.456 0.868,7.013 C0.868,10.570 3.751,13.454 7.309,13.454 C10.867,13.454 13.751,10.570 13.751,7.013 C13.751,3.456 10.867,0.572 7.309,0.572 M7.309,11.844 C4.642,11.844 2.478,9.680 2.478,7.013 C2.478,4.344 4.642,2.183 7.309,2.183 C9.977,2.183 12.141,4.344 12.141,7.013 C12.141,9.680 9.977,11.844 7.309,11.844 " />
                            </svg>
                          </div>
                          <h3 className="item-work__title item-work_title1">
                            Sed ut perspiciatis unde omnis iste natus
                          </h3>
                        </div>
                        <div className="item-work__text _anim-items">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices
                          gravida.
                        </div>
                      </div>
                      <div className="work__item item-work">
                        <div className="item-work__box">
                          <div className="item-work__icon-box item-work_icon-box2 _anim-items">
                            <svg
                              className="item-work__icon item-work_icon2"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M7.778,8.414 C7.486,8.365 7.479,7.527 7.479,7.527 C7.479,7.527 8.339,6.640 8.527,5.447 C9.030,5.447 9.341,4.181 8.838,3.734 C8.859,3.266 9.486,0.050 6.312,0.050 C3.140,0.050 3.767,3.266 3.788,3.735 C3.284,4.181 3.595,5.448 4.099,5.448 C4.286,6.641 5.145,7.527 5.145,7.527 C5.145,7.527 5.139,8.365 4.846,8.414 C3.904,8.571 0.386,10.188 0.386,11.960 L6.312,11.960 L12.239,11.960 C12.239,10.188 8.722,8.571 7.778,8.414 " />
                            </svg>
                          </div>
                          <h3 className="item-work__title item-work_title2">
                            Quis nostrum exercitationem ullam corporis suscipit
                          </h3>
                        </div>
                        <div className="item-work__text _anim-items">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.
                        </div>
                      </div>
                      <div className="work__item item-work">
                        <div className="item-work__box">
                          <div className="item-work__icon-box item-work_icon-box3 _anim-items">
                            <svg
                              className="item-work__icon item-work_icon3"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M13.041,7.702 L13.041,5.327 L11.225,5.025 C11.153,4.800 11.062,4.582 10.957,4.374 L12.026,2.878 L10.346,1.198 L8.851,2.263 C8.642,2.158 8.424,2.067 8.199,1.994 L7.897,0.183 L5.519,0.183 L5.219,1.994 C4.994,2.067 4.774,2.158 4.565,2.263 L3.070,1.198 L1.390,2.876 L2.459,4.374 C2.354,4.582 2.265,4.800 2.191,5.023 L0.377,5.327 L0.377,7.702 L2.195,8.007 C2.269,8.228 2.358,8.444 2.463,8.650 L1.390,10.152 L3.070,11.832 L4.576,10.759 C4.782,10.862 4.995,10.949 5.217,11.023 L5.519,12.847 L7.897,12.847 L8.201,11.023 C8.423,10.949 8.636,10.862 8.842,10.757 L10.346,11.832 L12.026,10.152 L10.955,8.650 C11.058,8.444 11.147,8.228 11.221,8.005 L13.041,7.702 ZM6.709,8.098 C5.834,8.098 5.125,7.388 5.125,6.515 C5.125,5.640 5.834,4.932 6.709,4.932 C7.582,4.932 8.292,5.640 8.292,6.515 C8.292,7.388 7.582,8.098 6.709,8.098 " />
                            </svg>
                          </div>
                          <h3 className="item-work__title item-work_title3">
                            Neque porro quisquam est qui dolorem ipsum quia
                          </h3>
                        </div>
                        <div className="item-work__text _anim-items">
                          Maste natus error sit voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                          architecto beatae vitae.
                        </div>
                      </div>
                    </div>
                    <div className="work__image work_block _anim-items _active-no-hide">
                      <picture>
                        <source
                          srcSet="/start-up-agency/img/Work/photoContent.webp"
                          type="image/webp"
                        />
                        <img src="/start-up-agency/img/Work/photoContent.png" alt="image" />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="feautures" id="Feautures">
              <div className="container">
                <div className="feautures__row">
                  <div className="feautures__image feautures_block _anim-items _active-no-hide">
                    <picture>
                      <source
                        srcSet="/start-up-agency/img/Feautures/photoContent.webp"
                        type="image/webp"
                      />
                      <img src="/start-up-agency/img/Feautures/photoContent.png" alt="photo" />
                    </picture>
                  </div>
                  <div className="feautures__body feautures_block">
                    <h2 className="feautures__title">Start-up Agency’s special features</h2>
                    <div className="feautures__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="feautures__items">
                      <ul className="feautures__list _anim-items _active-no-hide">
                        <li className="feautures__item feautures_item1">
                          <span>10 years experience</span>
                        </li>
                        <li className="feautures__item feautures_item2">
                          <span>Support 24/7</span>
                        </li>
                        <li className="feautures__item feautures_item3">
                          <span>Unbelievable results</span>
                        </li>
                        <li className="feautures__item feautures_item4">
                          <span>Acces to data-base</span>
                        </li>
                      </ul>
                      <ul className="feautures__list _anim-items _active-no-hide">
                        <li className="feautures__item feautures_item5">
                          <span>Fast and secure</span>
                        </li>
                        <li className="feautures__item feautures_item6">
                          <span>Online schedule</span>
                        </li>
                        <li className="feautures__item feautures_item7">
                          <span>Qualification process</span>
                        </li>
                        <li className="feautures__item feautures_item8">
                          <span>Easy management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="propositions" id="Propositions">
              <div className="container">
                <div className="propositions__row">
                  <h2 className="propositions__title">Choose the best plan for you</h2>
                  <div className="propositions__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="propositions__items">
                    <div className="propositions__box _anim-items _active-no-hide">
                      <div className="propositions__item item-propositions">
                        <h3 className="item-propositions__title">Silver Plan</h3>
                        <h4
                          className="item-propositions__subtitle _anim-items _active-no-hide no-was-Working"
                          id="plan-counter1"
                        >
                          $20
                        </h4>
                        <ul className="item-propositions__list list-propositions">
                          <li className="list-propositions__item">
                            <span>Free online tech support</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Money back guaranty</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Cancel at anytime</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Acces to data-base</span>
                          </li>
                        </ul>
                        <button className="item-propositions__button btn">Sign Up</button>
                      </div>
                    </div>
                    <div className="propositions__box propositions_box2 _anim-items _active-no-hide">
                      <div className="propositions__item item-propositions">
                        <h3 className="item-propositions__title">Gold Plan</h3>
                        <h4
                          className="item-propositions__subtitle _anim-items _active-no-hide no-was-Working"
                          id="plan-counter2"
                        >
                          $40
                        </h4>
                        <ul className="item-propositions__list list-propositions">
                          <li className="list-propositions__item">
                            <span>Free online tech support</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Money back guaranty</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Cancel at anytime</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Acces to data-base</span>
                          </li>
                        </ul>
                        <button className="item-propositions__button btn">Sign Up</button>
                      </div>
                    </div>
                    <div className="propositions__box propositions_box3 _anim-items _active-no-hide">
                      <div className="propositions__item item-propositions">
                        <h3 className="item-propositions__title">Platinum Plan</h3>
                        <h4
                          className="item-propositions__subtitle _anim-items _active-no-hide no-was-Working"
                          id="plan-counter3"
                        >
                          $70
                        </h4>
                        <ul className="item-propositions__list list-propositions">
                          <li className="list-propositions__item">
                            <span>Free online tech support</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Money back guaranty</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Cancel at anytime</span>
                          </li>
                          <li className="list-propositions__item">
                            <span>Acces to data-base</span>
                          </li>
                        </ul>
                        <button className="item-propositions__button btn">Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="about" id="About">
              <div className="container">
                <div className="about__row _anim-items _active-no-hide">
                  <div className="about__image _anim-items _active-no-hide">
                    <picture>
                      <source
                        srcSet="/start-up-agency/img/About/photoContent.webp"
                        type="image/webp"
                      />
                      <img src="/start-up-agency/img/About/photoContent.png" alt="photo" />
                    </picture>
                  </div>
                  <div className="about__block about_block1">
                    <div className="about__box">
                      <div className="about__item">
                        <h3 className="about__title">Sed ut perspiciatis unde omnis iste natus</h3>
                        <div className="about__text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices
                          gravida.
                        </div>
                      </div>
                    </div>
                    <div className="about__box">
                      <div className="about__item">
                        <h3 className="about__title">Sed ut perspiciatis unde omnis iste natus</h3>
                        <div className="about__text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices
                          gravida.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about__block about_block2">
                    <div className="about__box">
                      <div className="about__item">
                        <h3 className="about__title">Sed ut perspiciatis unde omnis iste natus</h3>
                        <div className="about__text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices
                          gravida.
                        </div>
                      </div>
                    </div>
                    <div className="about__box">
                      <div className="about__item">
                        <h3 className="about__title">Sed ut perspiciatis unde omnis iste natus</h3>
                        <div className="about__text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices
                          gravida.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonial" id="Testimonial">
              <div className="container">
                <div className="testimonial__row _anim-items">
                  <picture>
                    <source srcSet="/start-up-agency/img/Testimonial/fon.webp" type="image/webp" />
                    <img
                      src="/start-up-agency/img/Testimonial/fon.png"
                      className="testimonial__image-fon"
                      alt="image fon"
                    />
                  </picture>
                  <div className="testimonial__body">
                    <h2 className="testimonial__title">Our client testimonial</h2>
                    <div className="testimonial__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                      gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </div>
                    <div className="testimonial__buttons">
                      <button className="testimonial__arrow testimonial__left-arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M11.477,18.859 L3.619,11.002 L11.581,3.039 L11.580,3.039 C11.839,2.769 12.000,2.403 12.000,1.997 C12.000,1.169 11.329,0.498 10.501,0.498 C10.096,0.498 9.730,0.657 9.459,0.919 L9.459,0.918 L0.459,9.918 L0.460,9.919 C0.177,10.191 0.001,10.574 0.001,10.998 C0.001,10.999 0.001,11.001 0.001,11.002 C0.001,11.003 0.001,11.004 0.001,11.005 C0.001,11.428 0.177,11.811 0.460,12.084 L0.459,12.084 L9.459,21.084 L9.462,21.081 C9.732,21.339 10.098,21.498 10.501,21.498 C11.329,21.498 12.000,20.827 12.000,19.998 C12.000,19.543 11.798,19.135 11.477,18.859 Z" />
                        </svg>
                      </button>
                      <button className="testimonial__button btn">See More</button>
                      <button className="testimonial__arrow testimonial__right-arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M0.523,18.859 L8.381,11.002 L0.419,3.039 L0.420,3.039 C0.160,2.769 -0.001,2.403 -0.001,1.997 C-0.001,1.169 0.671,0.498 1.499,0.498 C1.904,0.498 2.270,0.657 2.541,0.919 L2.541,0.918 L11.541,9.918 L11.540,9.919 C11.823,10.191 11.999,10.574 11.999,10.998 C11.999,10.999 11.999,11.001 11.999,11.002 C11.999,11.003 11.999,11.004 11.999,11.005 C11.999,11.428 11.823,11.811 11.540,12.084 L11.541,12.084 L2.541,21.084 L2.537,21.081 C2.268,21.339 1.902,21.498 1.499,21.498 C0.671,21.498 -0.001,20.827 -0.001,19.998 C-0.001,19.543 0.202,19.135 0.523,18.859 Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="testimonial__slider slider-testimonial">
                    <div className="slider-testimonial__track">
                      <div className="slider-testimonial__item">
                        <div className="slider-testimonial__box">
                          <div className="slider-testimonial__image">
                            <picture>
                              <source
                                srcSet="/start-up-agency/img/Testimonial/humanPhoto.webp"
                                type="image/webp"
                              />
                              <img
                                src="/start-up-agency/img/Testimonial/humanPhoto.png"
                                alt="humanPhoto"
                              />
                            </picture>
                          </div>
                          <div className="slider-testimonial__info">
                            <h3 className="slider-testimonial__label">Emma Johnson</h3>
                            <p className="slider-testimonial__subtitle">CEO at Kallyas</p>
                          </div>
                        </div>
                        <div className="slider-testimonial__text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.”
                        </div>
                      </div>
                      <div className="slider-testimonial__item">
                        <div className="slider-testimonial__box">
                          <div className="slider-testimonial__image">
                            <picture>
                              <source
                                srcSet="/start-up-agency/img/Testimonial/humanPhoto.webp"
                                type="image/webp"
                              />
                              <img
                                src="/start-up-agency/img/Testimonial/humanPhoto.png"
                                alt="humanPhoto"
                              />
                            </picture>
                          </div>
                          <div className="slider-testimonial__info">
                            <h3 className="slider-testimonial__label">Emma Johnson</h3>
                            <p className="slider-testimonial__subtitle">CEO at Kallyas</p>
                          </div>
                        </div>
                        <div className="slider-testimonial__text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.”
                        </div>
                      </div>
                      <div className="slider-testimonial__item">
                        <div className="slider-testimonial__box">
                          <div className="slider-testimonial__image">
                            <picture>
                              <source
                                srcSet="/start-up-agency/img/Testimonial/humanPhoto.webp"
                                type="image/webp"
                              />
                              <img
                                src="/start-up-agency/img/Testimonial/humanPhoto.png"
                                alt="humanPhoto"
                              />
                            </picture>
                          </div>
                          <div className="slider-testimonial__info">
                            <h3 className="slider-testimonial__label">Emma Johnson</h3>
                            <p className="slider-testimonial__subtitle">CEO at Kallyas</p>
                          </div>
                        </div>
                        <div className="slider-testimonial__text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.”
                        </div>
                      </div>
                      <div className="slider-testimonial__item">
                        <div className="slider-testimonial__box">
                          <div className="slider-testimonial__image">
                            <picture>
                              <source
                                srcSet="/start-up-agency/img/Testimonial/humanPhoto.webp"
                                type="image/webp"
                              />
                              <img
                                src="/start-up-agency/img/Testimonial/humanPhoto.png"
                                alt="humanPhoto"
                              />
                            </picture>
                          </div>
                          <div className="slider-testimonial__info">
                            <h3 className="slider-testimonial__label">Emma Johnson</h3>
                            <p className="slider-testimonial__subtitle">CEO at Kallyas</p>
                          </div>
                        </div>
                        <div className="slider-testimonial__text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.”
                        </div>
                      </div>
                      <div className="slider-testimonial__item">
                        <div className="slider-testimonial__box">
                          <div className="slider-testimonial__image">
                            <picture>
                              <source
                                srcSet="/start-up-agency/img/Testimonial/humanPhoto.webp"
                                type="image/webp"
                              />
                              <img
                                src="/start-up-agency/img/Testimonial/humanPhoto.png"
                                alt="humanPhoto"
                              />
                            </picture>
                          </div>
                          <div className="slider-testimonial__info">
                            <h3 className="slider-testimonial__label">Emma Johnson</h3>
                            <p className="slider-testimonial__subtitle">CEO at Kallyas</p>
                          </div>
                        </div>
                        <div className="slider-testimonial__text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.”
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="blog" id="Blog">
              <div className="container">
                <div className="blog__row">
                  <h2 className="blog__title">Latest news</h2>
                  <div className="blog__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="blog__items">
                    <div className="blog__box blog_box1 _anim-items _active-no-hide">
                      <div className="blog__item">
                        <a href="#" className="blog__image">
                          <picture>
                            <source
                              srcSet="/start-up-agency/img/Blog/item1.webp"
                              type="image/webp"
                            />
                            <img src="/start-up-agency/img/Blog/item1.png" alt="human" />
                          </picture>
                        </a>
                        <div className="blog__content">
                          See what mistakes to avoid when you start a business.
                        </div>
                      </div>
                    </div>
                    <div className="blog__box blog_box2 _anim-items _active-no-hide">
                      <div className="blog__item">
                        <a href="#" className="blog__image">
                          <picture>
                            <source
                              srcSet="/start-up-agency/img/Blog/item2.webp"
                              type="image/webp"
                            />
                            <img src="/start-up-agency/img/Blog/item2.png" alt="human" />
                          </picture>
                        </a>
                        <div className="blog__content">
                          How many entrepreneurs starts a business when was 20.
                        </div>
                      </div>
                    </div>
                    <div className="blog__box blog_box3 _anim-items _active-no-hide">
                      <div className="blog__item">
                        <a href="#" className="blog__image">
                          <picture>
                            <source
                              srcSet="/start-up-agency/img/Blog/item3.webp"
                              type="image/webp"
                            />
                            <img src="/start-up-agency/img/Blog/item3.png" alt="human" />
                          </picture>
                        </a>
                        <div className="blog__content">
                          What entrepreneurs say about the business mistakes.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer className="footer" id="Contact">
            <div className="container">
              <div className="footer__row _anim-items">
                <picture>
                  <source srcSet="/start-up-agency/img/Contact/fon.webp" type="image/webp" />
                  <img
                    className="footer__image-fon"
                    src="/start-up-agency/img/Contact/fon.png"
                    alt="fon"
                  />
                </picture>
                <div className="footer__top footer-top">
                  <div className="footer-top__block footer-top_block1 _anim-items">
                    <h2 className="footer-top__title">Have any suggestion?</h2>
                    <form action="#" className="footer-top__form">
                      <input
                        type="text"
                        placeholder="Enter your email..."
                        className="footer-top__input-text"
                      />
                      <input
                        type="submit"
                        defaultValue="Send"
                        className="footer-top__input-submit"
                      />
                    </form>
                  </div>
                  <div className="footer-top__block footer-top_block2">
                    <h3 className="footer-top__subtitle">Company</h3>
                    <div className="footer-top__items">
                      <ul className="footer-top__list">
                        <li>
                          <a href="#Home" className="footer-top__item">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#ToServices" className="footer-top__item">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#Work" className="footer-top__item">
                            Our work
                          </a>
                        </li>
                        <li>
                          <a href="#Feautures" className="footer-top__item">
                            Feautures
                          </a>
                        </li>
                      </ul>
                      <ul className="footer-top__list">
                        <li>
                          <a href="#Propositions" className="footer-top__item">
                            Propositions
                          </a>
                        </li>
                        <li>
                          <a href="#About" className="footer-top__item">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#Testimonial" className="footer-top__item">
                            Testimonial
                          </a>
                        </li>
                        <li>
                          <a href="#Blog" className="footer-top__item">
                            Blog
                          </a>
                        </li>
                      </ul>
                      <ul className="footer-top__list">
                        <li>
                          <a href="#" className="footer-top__item">
                            FaQ
                          </a>
                        </li>
                        <li>
                          <a href="#" className="footer-top__item">
                            Support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer__bottom footer-bottom">
                  <div className="footer-bottom__text">
                    <p>
                      Layout made by:
                      <a href="https://github.com/filiptraum" target="__blank">
                        Stanislav Vyhnan
                      </a>
                    </p>
                    <span>
                      Free template by:
                      <a
                        href="https://hogash.com/downloads/start-up-agency-free-psd-template/"
                        target="__blank"
                      >
                        @ Hogash Studio 2019
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
};

export default StartUpAgency;
