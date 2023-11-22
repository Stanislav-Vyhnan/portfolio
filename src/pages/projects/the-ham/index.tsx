/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import { useEffect } from 'react';

import { config } from 'src/constants/config';

import { scriptFunc } from './js/script';

const TheHam = () => {
  useEffect(() => {
    scriptFunc();
  }, []);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Just Buy And Enjoy These Awesome Features!" />
        <meta name="google" content="notranslate" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/the-ham/img/Favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/the-ham/img/Favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/the-ham/img/Favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/the-ham/img/Favicon/site.webmanifest" />
        <link rel="mask-icon" href="/the-ham/img/Favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>TheHam</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body">
        <div className="wrapper">
          <div className="content">
            <section className="home" id="Home">
              <header className="__header header">
                <div className="container">
                  <div className="header__logo">
                    <picture>
                      <source srcSet="/the-ham/img/Home/logo.webp" type="image/webp" />
                      <img src="/the-ham/img/Home/logo.png" alt="logo" />
                    </picture>
                  </div>
                  <nav className="header__nav header-menu">
                    <ul className="header-menu__list">
                      <li>
                        <a data-page="home" href="#Home" className="header-menu__item active">
                          Home
                        </a>
                      </li>
                      <li>
                        <a data-page="features" href="#Features" className="header-menu__item">
                          Features
                        </a>
                      </li>
                      <li>
                        <a data-page="about" href="#About" className="header-menu__item">
                          About
                        </a>
                      </li>
                      <li>
                        <a data-page="works" href="#Works" className="header-menu__item">
                          Works
                        </a>
                      </li>
                      <li>
                        <a data-page="services" href="#Services" className="header-menu__item">
                          Services
                        </a>
                      </li>
                      <li>
                        <a data-page="blog" href="#Blog" className="header-menu__item">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a data-page="prices" href="#Prices" className="header-menu__item">
                          prices
                        </a>
                      </li>
                      <li>
                        <a data-page="team" href="#Team" className="header-menu__item">
                          Team
                        </a>
                      </li>
                      <li>
                        <a data-page="contact" href="#Contact" className="header-menu__item">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="header__gamburger gamburger">
                    <div className="gamburger__item" />
                  </div>
                </div>
              </header>
              <div className="container">
                <div className="home__row">
                  <div className="home__body">
                    <h2 className="home__subtitle">
                      The Ham is <span>Wordpress theme</span>
                    </h2>
                    <h1 className="home__title">
                      we are <span>creative</span>
                    </h1>
                    <h3 className="home__label">Just Buy And Enjoy These Awesome Features</h3>
                    <div className="home__btns">
                      <a href="#Features" className="home__btn _btn">
                        EXPLORE NOW
                      </a>
                      <a href="#Features" className="home__btn _btn">
                        purchase now
                      </a>
                    </div>
                  </div>
                  <div className="home__slider image-slider">
                    <a
                      href="https://www.pexels.com/ru-ru/photo/1419923/"
                      target="__blank"
                      className="image-slider__image-box"
                    >
                      <img id="slider-image__item" src="/the-ham/img/Home/fon1.jpg" alt="photo" />
                    </a>
                    <div className="image-slider__btns">
                      <button className="image-slider__btn" id="image-slider__prev">
                        ◄
                      </button>
                      <button className="image-slider__btn" id="image-slider__next">
                        ►
                      </button>
                    </div>
                  </div>
                  <a href="#Features" className="home__arrow-bottom">
                    ⇪
                  </a>
                </div>
              </div>
            </section>
            <section className="features" id="Features">
              <div className="features__row">
                <div className="features__block features-top">
                  <div className="features-top__box">
                    <div className="features-top__item">
                      <div className="features-top__img">
                        <picture>
                          <source srcSet="/the-ham/img/Features/icon1.webp" type="image/webp" />
                          <img src="/the-ham/img/Features/icon1.png" alt="icon" />
                        </picture>
                      </div>
                      <h3 className="features-top__title">Different theme option</h3>
                    </div>
                  </div>
                  <div className="features-top__box">
                    <div className="features-top__item">
                      <div className="features-top__img">
                        <picture>
                          <source srcSet="/the-ham/img/Features/icon2.webp" type="image/webp" />
                          <img src="/the-ham/img/Features/icon2.png" alt="icon" />
                        </picture>
                      </div>
                      <h3 className="features-top__title">fully customizable</h3>
                    </div>
                  </div>
                  <div className="features-top__box">
                    <div className="features-top__item">
                      <div className="features-top__img">
                        <picture>
                          <source srcSet="/the-ham/img/Features/icon3.webp" type="image/webp" />
                          <img src="/the-ham/img/Features/icon3.png" alt="icon" />
                        </picture>
                      </div>
                      <h3 className="features-top__title">unlimited support</h3>
                    </div>
                  </div>
                  <div className="features-top__box">
                    <div className="features-top__item">
                      <div className="features-top__img">
                        <picture>
                          <source srcSet="/the-ham/img/Features/icon4.webp" type="image/webp" />
                          <img src="/the-ham/img/Features/icon4.png" alt="icon" />
                        </picture>
                      </div>
                      <h3 className="features-top__title">responsive all device</h3>
                    </div>
                  </div>
                </div>
                <div className="features__block features-bottom">
                  <div className="container">
                    <h2 className="features-bottom__title _title">Creative Amazing Features</h2>
                    <div className="features-bottom__block">
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i1.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i1.png" alt="icon" />
                            </picture>
                            <span>Retina Ready</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i2.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i2.png" alt="icon" />
                            </picture>
                            <span>Creative Blog Style</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i3.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i3.png" alt="icon" />
                            </picture>
                            <span>Icon Fonts</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i4.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i4.png" alt="icon" />
                            </picture>
                            <span>Parallax Effects</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i5.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i5.png" alt="icon" />
                            </picture>
                            <span>Amazing Interface</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i6.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i6.png" alt="icon" />
                            </picture>
                            <span>SEO Optimized</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i7.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i7.png" alt="icon" />
                            </picture>
                            <span>Creative Solutions</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i8.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i8.png" alt="icon" />
                            </picture>
                            <span>Mega Menus</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                      <div className="features-bottom__box">
                        <div className="features-bottom__item">
                          <div className="features-bottom__img-title">
                            <picture>
                              <source srcSet="/the-ham/img/Features/i9.webp" type="image/webp" />
                              <img src="/the-ham/img/Features/i9.png" alt="icon" />
                            </picture>
                            <span>Custom Backgrounds</span>
                          </div>
                          <div className="features-bottom__text">
                            All our modules are built with the possi bility to thse choose between
                            different design and you change.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="about fullscreen" id="About">
              <div className="container">
                <div className="about__row">
                  <h2 className="about__title _title">About Our Company</h2>
                  <ul className="about__list">
                    <li className="about__item active">our History</li>
                    <li className="about__item">our Biography</li>
                    <li className="about__item">our Skills</li>
                  </ul>
                  <div className="about__block about-skills">
                    <div className="about-skills__block">
                      <div className="about-skills__item">
                        <span>User Interface</span>
                      </div>
                      <div className="about-skills__item">
                        <span>Web Design</span>
                      </div>
                      <div className="about-skills__item">
                        <span>Wordpress</span>
                      </div>
                      <div className="about-skills__item">
                        <span>HTML &amp; CSS</span>
                      </div>
                      <div className="about-skills__item">
                        <span>App Design</span>
                      </div>
                    </div>
                    <div className="about-skills__block hidden">
                      <div className="about-skills__item">
                        <span>HTML &amp; CSS</span>
                      </div>
                      <div className="about-skills__item">
                        <span>App Design</span>
                      </div>
                      <div className="about-skills__item">
                        <span>User Interface</span>
                      </div>
                      <div className="about-skills__item">
                        <span>Web Design</span>
                      </div>
                      <div className="about-skills__item">
                        <span>Wordpress</span>
                      </div>
                    </div>
                    <div className="about-skills__block hidden">
                      <div className="about-skills__item">
                        <span>Web Design</span>
                      </div>
                      <div className="about-skills__item">
                        <span>Wordpress</span>
                      </div>
                      <div className="about-skills__item">
                        <span>User Interface</span>
                      </div>
                      <div className="about-skills__item">
                        <span>HTML &amp; CSS</span>
                      </div>
                      <div className="about-skills__item">
                        <span>App Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="works fullscreen" id="Works">
              <div className="container">
                <div className="works__row">
                  <h2 className="works__title _title">Our Amazing Work</h2>
                  <ul className="works__list">
                    <li>
                      <button className=".works_all works__btn active">All</button>
                    </li>
                    <li>
                      <button className=".works_g-design works__btn">Graphic Design</button>
                    </li>
                    <li>
                      <button className=".works_w-design works__btn">Web Design</button>
                    </li>
                    <li>
                      <button className=".works_landing works__btn">Landing Pages</button>
                    </li>
                    <li>
                      <button className=".works_wordpress works__btn">Wordpress</button>
                    </li>
                  </ul>
                  <div className="works__block">
                    <a
                      href="https://www.pexels.com/ru-ru/photo/apple-iphone-iphone-7-442574/"
                      className="works__img works_all works_landing"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i1.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i1.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/iphone-6s-796602/"
                      className="works__img works_all works_g-design"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i2.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i2.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/apple-flat-lay-magic-mouse-399161/"
                      className="works__img works_all works_w-design"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i3.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i3.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/5668491/"
                      className="works__img works_all works_g-design"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i4.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i4.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/4791303/"
                      className="works__img works_all works_w-design"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i5.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i5.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/1684149/"
                      className="works__img works_all works_g-design"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i6.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i6.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/257897/"
                      className="works__img works_all works_w-design"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i7.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i7.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/mac-461073/"
                      className="works__img works_all works_g-design"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i8.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i8.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/4064835/"
                      className="works__img works_all works_wordpress"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i9.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i9.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/4065889/"
                      className="works__img works_all works_wordpress"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i10.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i10.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/374720/"
                      className="works__img works_all works_wordpress"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i11.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i11.jpg" alt="photo" />
                      </picture>
                    </a>
                    <a
                      href="https://www.pexels.com/ru-ru/photo/7379/"
                      className="works__img works_all works_landing"
                      target="__blank"
                    >
                      <picture>
                        <source srcSet="/the-ham/img/Works/i12.webp" type="image/webp" />
                        <img src="/the-ham/img/Works/i12.jpg" alt="photo" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="services fullscreen" id="Services">
              <div className="container">
                <div className="services__row">
                  <h2 className="services__title _title">our services</h2>
                  <ul className="services__list">
                    <li className="services__btn active">Web Design</li>
                    <li className="services__btn">Graphic Design</li>
                    <li className="services__btn">Online Support</li>
                    <li className="services__btn">App Design</li>
                    <li className="services__btn">Online Marketing</li>
                    <li className="services__btn">Seo Service</li>
                  </ul>
                  <div className="services__box-content">
                    <div className="services__block">
                      <a href="https://www.pexels.com/ru-ru/photo/450035/" target="__blank">
                        <picture>
                          <source srcSet="/the-ham/img/Services/i1.webp" type="image/webp" />
                          <img src="/the-ham/img/Services/i1.jpg" alt="photo" />
                        </picture>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </p>
                    </div>
                    <div className="services__block hidden">
                      <a href="https://www.pexels.com/ru-ru/photo/1181271/" target="__blank">
                        <picture>
                          <source srcSet="/the-ham/img/Services/i2.webp" type="image/webp" />
                          <img src="/the-ham/img/Services/i2.jpg" alt="photo" />
                        </picture>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia.
                      </p>
                    </div>
                    <div className="services__block hidden">
                      <a href="https://www.pexels.com/ru-ru/photo/259091/" target="__blank">
                        <picture>
                          <source srcSet="/the-ham/img/Services/i3.webp" type="image/webp" />
                          <img src="/the-ham/img/Services/i3.jpg" alt="photo" />
                        </picture>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="services__block hidden">
                      <a
                        href="https://www.pexels.com/ru-ru/photo/pexels-polaroid-1777023/"
                        target="__blank"
                      >
                        <picture>
                          <source srcSet="/the-ham/img/Services/i4.webp" type="image/webp" />
                          <img src="/the-ham/img/Services/i4.jpg" alt="photo" />
                        </picture>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id.
                      </p>
                    </div>
                    <div className="services__block hidden">
                      <a href="https://www.pexels.com/ru-ru/photo/mac-461082/" target="__blank">
                        <picture>
                          <source srcSet="/the-ham/img/Services/i5.webp" type="image/webp" />
                          <img src="/the-ham/img/Services/i5.jpg" alt="photo" />
                        </picture>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui.
                      </p>
                    </div>
                    <div className="services__block hidden">
                      <a href="https://www.pexels.com/ru-ru/photo/2764670/" target="__blank">
                        <picture>
                          <source srcSet="/the-ham/img/Services/i6.webp" type="image/webp" />
                          <img src="/the-ham/img/Services/i6.jpg" alt="photo" />
                        </picture>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Excepteur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="statement">
              <div className="container">
                <div className="statement__row">
                  <h2 className="statement__title _title">
                    Everything is ready. just buy and install now
                  </h2>
                  <h3 className="statement__subtitle">
                    Smooth reliable, responsive ready, perfect portfolio, unique blog layout and
                    many many options for you
                  </h3>
                  <a href="#Blog" className="statement__btn _btn">
                    purchase now
                  </a>
                </div>
              </div>
            </section>
            <section className="blog fullscreen" id="Blog">
              <div className="container">
                <div className="blog__row">
                  <h2 className="blog__title _title">Breaking News</h2>
                  <div className="blog__body">
                    <div className="blog__box">
                      <div className="blog__item blog-item">
                        <a
                          href="https://www.pexels.com/ru-ru/photo/galaxy-2885320/"
                          target="__blank"
                          className="blog-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Blog/i1.webp" type="image/webp" />
                            <img src="/the-ham/img/Blog/i1.jpg" alt="photo" />
                          </picture>
                        </a>
                        <div className="blog-item__text-content">
                          <h3 className="blog-item__title">Amazing Image Post</h3>
                          <p className="blog-item__subtitle">
                            By admin <span>|</span> 2 comment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog__box">
                      <div className="blog__item blog-item">
                        <a
                          href="https://www.pexels.com/ru-ru/photo/821718/"
                          target="__blank"
                          className="blog-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Blog/i2.webp" type="image/webp" />
                            <img src="/the-ham/img/Blog/i2.jpg" alt="photo" />
                          </picture>
                        </a>
                        <div className="blog-item__text-content">
                          <h3 className="blog-item__title">Amazing Image Post</h3>
                          <p className="blog-item__subtitle">
                            By admin <span>|</span> 5 comment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog__box">
                      <div className="blog__item blog-item">
                        <a
                          href="https://www.pexels.com/ru-ru/photo/3284294/"
                          target="__blank"
                          className="blog-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Blog/i3.webp" type="image/webp" />
                            <img src="/the-ham/img/Blog/i3.jpg" alt="photo" />
                          </picture>
                        </a>
                        <div className="blog-item__text-content">
                          <h3 className="blog-item__title">Amazing Image Post</h3>
                          <p className="blog-item__subtitle">
                            By admin <span>|</span> 3 comment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog__box">
                      <div className="blog__item blog-item">
                        <a
                          href="https://www.pexels.com/ru-ru/photo/1769394/"
                          target="__blank"
                          className="blog-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Blog/i4.webp" type="image/webp" />
                            <img src="/the-ham/img/Blog/i4.jpg" alt="photo" />
                          </picture>
                        </a>
                        <div className="blog-item__text-content">
                          <h3 className="blog-item__title">Amazing Image Post</h3>
                          <p className="blog-item__subtitle">
                            By admin <span>|</span> 4 comment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog__box">
                      <div className="blog__item blog-item">
                        <a
                          href="https://www.pexels.com/ru-ru/photo/2114689/"
                          target="__blank"
                          className="blog-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Blog/i5.webp" type="image/webp" />
                            <img src="/the-ham/img/Blog/i5.jpg" alt="photo" />
                          </picture>
                        </a>
                        <div className="blog-item__text-content">
                          <h3 className="blog-item__title">Amazing Image Post</h3>
                          <p className="blog-item__subtitle">
                            By admin <span>|</span> 2 comment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog__box">
                      <div className="blog__item blog-item">
                        <a
                          href="https://www.pexels.com/ru-ru/photo/3010247/"
                          target="__blank"
                          className="blog-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Blog/i6.webp" type="image/webp" />
                            <img src="/the-ham/img/Blog/i6.jpg" alt="photo" />
                          </picture>
                        </a>
                        <div className="blog-item__text-content">
                          <h3 className="blog-item__title">Amazing Image Post</h3>
                          <p className="blog-item__subtitle">
                            By admin <span>|</span> 3 comment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog__box">
                      <div className="blog__item blog-item">
                        <a
                          href="https://www.pexels.com/ru-ru/photo/2993054/"
                          target="__blank"
                          className="blog-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Blog/i7.webp" type="image/webp" />
                            <img src="/the-ham/img/Blog/i7.jpg" alt="photo" />
                          </picture>
                        </a>
                        <div className="blog-item__text-content">
                          <h3 className="blog-item__title">Amazing Image Post</h3>
                          <p className="blog-item__subtitle">
                            By admin <span>|</span> 4 comment
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog__box">
                      <div className="blog__item blog-item">
                        <a
                          href="https://www.pexels.com/ru-ru/photo/1183021/"
                          target="__blank"
                          className="blog-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Blog/i8.webp" type="image/webp" />
                            <img src="/the-ham/img/Blog/i8.jpg" alt="photo" />
                          </picture>
                        </a>
                        <div className="blog-item__text-content">
                          <h3 className="blog-item__title">Amazing Image Post</h3>
                          <p className="blog-item__subtitle">
                            By admin <span>|</span> 2 comment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="statistic">
              <div className="statistic__row">
                <div className="statistic__box">
                  <div className="statistic__item">
                    <div className="statistic__img">
                      <picture>
                        <source srcSet="/the-ham/img/Statistic/i1.webp" type="image/webp" />
                        <img src="/the-ham/img/Statistic/i1.png" alt="photo" />
                      </picture>
                    </div>
                    <b id="statistic_count1">46</b>
                    <p>Works</p>
                  </div>
                </div>
                <div className="statistic__box">
                  <div className="statistic__item">
                    <div className="statistic__img">
                      <picture>
                        <source srcSet="/the-ham/img/Statistic/i2.webp" type="image/webp" />
                        <img src="/the-ham/img/Statistic/i2.png" alt="photo" />
                      </picture>
                    </div>
                    <b id="statistic_count2">32</b>
                    <p>Customers</p>
                  </div>
                </div>
                <div className="statistic__box">
                  <div className="statistic__item">
                    <div className="statistic__img">
                      <picture>
                        <source srcSet="/the-ham/img/Statistic/i3.webp" type="image/webp" />
                        <img src="/the-ham/img/Statistic/i3.png" alt="photo" />
                      </picture>
                    </div>
                    <b id="statistic_count3">20</b>
                    <p>Purchase</p>
                  </div>
                </div>
                <div className="statistic__box">
                  <div className="statistic__item">
                    <div className="statistic__img">
                      <picture>
                        <source srcSet="/the-ham/img/Statistic/i4.webp" type="image/webp" />
                        <img src="/the-ham/img/Statistic/i4.png" alt="photo" />
                      </picture>
                    </div>
                    <b id="statistic_count4">8</b>
                    <p>Office</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="prices fullscreen" id="Prices">
              <div className="container">
                <div className="prices__row">
                  <h2 className="prices__title _title">Our Pricing Table</h2>
                  <div className="prices__body">
                    <div className="prices__box">
                      <div className="prices__item prices-item">
                        <h3 className="prices-item__title">Personal</h3>
                        <div className="prices-item__subtitle">
                          <span id="prices-count1">$99</span>/mounth
                        </div>
                        <ul className="prices-item__list">
                          <li className="prices-item__info">1 Hosting</li>
                          <li className="prices-item__info">2 Email Marketing</li>
                          <li className="prices-item__info">5 Database</li>
                          <li className="prices-item__info">2 Design Pack</li>
                          <li className="prices-item__info">3 Website Layouts</li>
                          <li className="prices-item__info">5 Header Style</li>
                          <li className="prices-item__info">3 Online Store</li>
                        </ul>
                        <button className="prices-item__btn">buy now</button>
                      </div>
                    </div>
                    <div className="prices__box">
                      <div className="prices__item prices-item">
                        <h3 className="prices-item__title">Business</h3>
                        <div className="prices-item__subtitle">
                          <span id="prices-count2">$199</span>/mounth
                        </div>
                        <ul className="prices-item__list">
                          <li className="prices-item__info">2 Hosting</li>
                          <li className="prices-item__info">3 Email Marketing</li>
                          <li className="prices-item__info">6 Database</li>
                          <li className="prices-item__info">3 Design Pack</li>
                          <li className="prices-item__info">4 Website Layouts</li>
                          <li className="prices-item__info">6 Header Style</li>
                          <li className="prices-item__info">3 Online Store</li>
                        </ul>
                        <button className="prices-item__btn">buy now</button>
                      </div>
                    </div>
                    <div className="prices__box offer">
                      <div className="prices__item prices-item">
                        <h3 className="prices-item__title">Professional</h3>
                        <div className="prices-item__subtitle">
                          <span id="prices-count3">$259</span>/mounth
                        </div>
                        <ul className="prices-item__list">
                          <li className="prices-item__info">4 Hosting</li>
                          <li className="prices-item__info">3 Email Marketing</li>
                          <li className="prices-item__info">7 Database</li>
                          <li className="prices-item__info">4 Design Pack</li>
                          <li className="prices-item__info">5 Website Layouts</li>
                          <li className="prices-item__info">5 Header Style</li>
                          <li className="prices-item__info">5 Online Store</li>
                        </ul>
                        <button className="prices-item__btn">buy now</button>
                      </div>
                    </div>
                    <div className="prices__box">
                      <div className="prices__item prices-item">
                        <h3 className="prices-item__title">diamond</h3>
                        <div className="prices-item__subtitle">
                          <span id="prices-count4">$299</span>/mounth
                        </div>
                        <ul className="prices-item__list">
                          <li className="prices-item__info">5 Hosting</li>
                          <li className="prices-item__info">5 Email Marketing</li>
                          <li className="prices-item__info">8 Database</li>
                          <li className="prices-item__info">6 Design Pack</li>
                          <li className="prices-item__info">6 Website Layouts</li>
                          <li className="prices-item__info">8 Header Style</li>
                          <li className="prices-item__info">6 Online Store</li>
                        </ul>
                        <button className="prices-item__btn">buy now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="team fullscreen" id="Team">
              <div className="container">
                <div className="team__row">
                  <h2 className="team__title _title">Meet Our Team</h2>
                  <div className="team__body">
                    <div className="team__box">
                      <div className="team__item team-item">
                        <a
                          target="__blank"
                          href="https://www.pexels.com/ru-ru/photo/5668770/"
                          className="team-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Team/i1-i3.webp" type="image/webp" />
                            <img src="/the-ham/img/Team/i1-i3.jpg" alt="human" />
                          </picture>
                        </a>
                        <h3 className="team-item__title">Mis Liza</h3>
                        <p className="team-item__subtitle">Founder</p>
                        <ul className="team-item__link-list team-list">
                          <li className="team-list__item">
                            <a href="https://www.facebook.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM1.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM1.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://twitter.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM2.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM2.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://www.skype.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM3.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM3.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://twitter.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM4.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM4.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team__box">
                      <div className="team__item team-item">
                        <a
                          target="__blank"
                          href="https://www.pexels.com/ru-ru/photo/5668765/"
                          className="team-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Team/i2-i4.webp" type="image/webp" />
                            <img src="/the-ham/img/Team/i2-i4.jpg" alt="human" />
                          </picture>
                        </a>
                        <h3 className="team-item__title">Al Masum</h3>
                        <p className="team-item__subtitle">UX Designer</p>
                        <ul className="team-item__link-list team-list">
                          <li className="team-list__item">
                            <a href="https://www.facebook.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM1.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM1.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://twitter.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM2.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM2.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://www.skype.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM3.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM3.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://twitter.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM4.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM4.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team__box">
                      <div className="team__item team-item">
                        <a
                          target="__blank"
                          href="https://www.pexels.com/ru-ru/photo/5668770/"
                          className="team-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Team/i1-i3.webp" type="image/webp" />
                            <img src="/the-ham/img/Team/i1-i3.jpg" alt="human" />
                          </picture>
                        </a>
                        <h3 className="team-item__title">Tanya Jannat</h3>
                        <p className="team-item__subtitle">Web Designer</p>
                        <ul className="team-item__link-list team-list">
                          <li className="team-list__item">
                            <a href="https://www.facebook.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM1.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM1.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://twitter.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM2.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM2.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://www.skype.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM3.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM3.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://twitter.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM4.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM4.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team__box">
                      <div className="team__item team-item">
                        <a
                          target="__blank"
                          href="https://www.pexels.com/ru-ru/photo/5668765/"
                          className="team-item__img"
                        >
                          <picture>
                            <source srcSet="/the-ham/img/Team/i2-i4.webp" type="image/webp" />
                            <img src="/the-ham/img/Team/i2-i4.jpg" alt="human" />
                          </picture>
                        </a>
                        <h3 className="team-item__title">Hasan Mahmud</h3>
                        <p className="team-item__subtitle">Web Designer</p>
                        <ul className="team-item__link-list team-list">
                          <li className="team-list__item">
                            <a href="https://www.facebook.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM1.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM1.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://twitter.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM2.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM2.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://www.skype.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM3.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM3.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                          <li className="team-list__item">
                            <a href="https://twitter.com/" target="__blank">
                              <picture>
                                <source srcSet="/the-ham/img/Team/SM4.webp" type="image/webp" />
                                <img src="/the-ham/img/Team/SM4.png" alt="icon" />
                              </picture>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="contact fullscreen" id="Contact">
              <div className="container">
                <div className="contact__row">
                  <h2 className="contact__title _title">Keep In Touch</h2>
                  <form action="#" className="contact__form contact-form">
                    <input type="text" id="contact-form__name" placeholder="Name:" />
                    <input type="text" id="contact-form__email" placeholder="Email:" />
                    <textarea id="contact-form__textarea" placeholder="Message" defaultValue={''} />
                    <input type="submit" defaultValue="send request" id="contact-form__submit" />
                  </form>
                </div>
              </div>
            </section>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="footer__row">
                <p>
                  Layout made by: <a href={config.baseUrl}>Stanislav Vyhnan</a>
                </p>
                <span>
                  Free template by:{' '}
                  <a
                    href="https://cdn.designsmaz.com/wp-content/uploads/2016/03/theHam-Free-Creative-Landing-Page-PSD-Template.jpg"
                    target="__blank"
                  >
                    2015 @TheHam
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
        <div className="download">
          <img src="/the-ham/img/About/fon2.jpg" alt="photo" />
          <img src="/the-ham/img/About/fon3.jpg" alt="photo" />
          <img src="/the-ham/img/Home/fon2.jpg" alt="photo" />
          <img src="/the-ham/img/Home/fon3.jpg" alt="photo" />
        </div>
      </body>
    </>
  );
};

export default TheHam;
