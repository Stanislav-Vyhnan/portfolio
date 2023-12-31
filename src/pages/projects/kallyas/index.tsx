import { useEffect } from 'react';

/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-css-tags */

import { scriptFunc } from './script';

const Kallyas = () => {
  useEffect(() => {
    scriptFunc();
  }, []);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kallyas</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Source+Sans+Pro:ital,wght@0,700;0,900;1,400;1,600&display=swap"
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
            <section className="home" id="home">
              <div className="container">
                <div className="home__row">
                  <header className="home__header header">
                    <div className="header__logo">
                      Kallyas<span>.</span>
                    </div>
                    <nav className="header__nav">
                      <ul className="header__list">
                        <li className="header__item">
                          <a href="#home">Home</a>
                        </li>
                        <li className="header__item">
                          <a href="#services">Services</a>
                        </li>
                        <li className="header__item">
                          <a href="#about">About us</a>
                        </li>
                        <li className="header__item">
                          <a href="#features">Features</a>
                        </li>
                        <li className="header__item">
                          <a href="#works">Works</a>
                        </li>
                        <li className="header__item">
                          <a href="#details">Details</a>
                        </li>
                      </ul>
                    </nav>
                    <div className="header__gamburger gamburger">
                      <div className="gamburger__item" />
                    </div>
                  </header>
                  <div className="home__body">
                    <h1 className="home__title _title _anim-items _anim-no-hide">
                      Helping Business And Companies Innovate Transform And Lead
                    </h1>
                    <div className="home__text _text _anim-items _anim-no-hide">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                      gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </div>
                    <div className="home__links-block">
                      <a href="#services" className="home__link _button _anim-items">
                        Start Now
                      </a>
                      <a href="#services_content" className="home__link _button _anim-items">
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="services">
              <div className="container">
                <div className="services__row">
                  <div className="services__feautures-cards feautures-cards" id="services">
                    <div className="feautures-cards__box _anim-items _anim-no-hide">
                      <div className="feautures-cards__item">
                        <div className="feautures-cards__img">
                          <img src="/kallyas/css/img/Services/s_f1.png" alt="icon" />
                        </div>
                        <h3 className="feautures-cards__subtitle _anim-items">
                          Content Concept &amp; Strategy
                        </h3>
                        <div className="feautures-cards__text _text _anim-items">
                          Aenean pharetra magna ac placerat magna vestibulum lectus mauris ultrices
                          eros. Eget aliquet nibh dignissim odio velit mauris.
                        </div>
                      </div>
                    </div>
                    <div className="feautures-cards__box _anim-items _anim-no-hide">
                      <div className="feautures-cards__item">
                        <div className="feautures-cards__img">
                          <img src="/kallyas/css/img/Services/s_f2.png" alt="icon" />
                        </div>
                        <h3 className="feautures-cards__subtitle _anim-items">
                          Design &amp; Concepts
                        </h3>
                        <div className="feautures-cards__text _text _anim-items">
                          In egestas erat imperdiet sed euismod. A diam maecenas sed enim ut sem.
                          Faucibus in ornare quam viverra.
                        </div>
                      </div>
                    </div>
                    <div className="feautures-cards__box _anim-items _anim-no-hide">
                      <div className="feautures-cards__item">
                        <div className="feautures-cards__img">
                          <img src="/kallyas/css/img/Services/s_f3.png" alt="icon" />
                        </div>
                        <h3 className="feautures-cards__subtitle _anim-items">
                          SEO &amp; Marketing Solutions
                        </h3>
                        <div className="feautures-cards__text _text _anim-items">
                          In egestas erat imperdiet sed euismod. A diam maecenas sed enim ut sem.
                          Faucibus in ornare quam viverra.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="services__body" id="services_content">
                    <h4 className="services__subtitle _anim-items">services</h4>
                    <h2 className="services__title _title _anim-items _anim-no-hide">
                      Best services for <span>Visual Perfection</span>
                    </h2>
                    <div className="services__text _text _anim-items">
                      Cras sed felis eget velit aliquet sagittis id consectetur. Lectus sit amet est
                      placerat in egestas erat imperdiet sed. Amet nisl purus in mollis nunc sed id
                      semper risus.
                    </div>
                  </div>
                  <div className="services__block">
                    <div className="services__box">
                      <div className="services__item services-item">
                        <div className="serviservices-item__image">
                          <img src="/kallyas/css/img/Services/i1.png" alt="icon" />
                        </div>
                        <h3 className="services-item__title _title _anim-items">Strategy</h3>
                        <div className="services-item__text _text _anim-items _anim-no-hide">
                          Orci a scelerisque purus semper eget. Ac ut consequat semper viverra nam
                          libero justo lectus arcu bibendum at laoreet sit.
                        </div>
                      </div>
                    </div>
                    <div className="services__box">
                      <div className="services__item services-item">
                        <div className="services-item__image">
                          <img src="/kallyas/css/img/Services/i2.png" alt="icon" />
                        </div>
                        <h3 className="services-item__title _title _anim-items">Marketing</h3>
                        <div className="services-item__text _text _anim-items _anim-no-hide">
                          Duis at consectetur lorem donec massa sapien faucibus et. Et malesuada
                          fames ac turpis egestas maecenas pharetra.
                        </div>
                      </div>
                    </div>
                    <div className="services__box">
                      <div className="services__item services-item">
                        <div className="services-item__image">
                          <img src="/kallyas/css/img/Services/i3.png" alt="icon" />
                        </div>
                        <h3 className="services-item__title _title _anim-items">Technology</h3>
                        <div className="services-item__text _text _anim-items _anim-no-hide">
                          Viverra nibh cras pulvinar mattis nunc sed blandit libero. Lorem ipsum
                          dolor sit amet consectetur adipiscing.
                        </div>
                      </div>
                    </div>
                    <div className="services__box">
                      <div className="services__item services-item">
                        <div className="services-item__image">
                          <img src="/kallyas/css/img/Services/i4.png" alt="icon" />
                        </div>
                        <h3 className="services-item__title _title _anim-items">Ecommerce</h3>
                        <div className="services-item__text _text _anim-items _anim-no-hide">
                          Malesuada fames ac turpis egestas maecenas pharetra convallis posuere.
                          Aliquam ut porttitor a sollicitudin.
                        </div>
                      </div>
                    </div>
                    <div className="services__box">
                      <div className="services__item services-item">
                        <div className="services-item__image">
                          <img src="/kallyas/css/img/Services/i5.png" alt="icon" />
                        </div>
                        <h3 className="services-item__title _title _anim-items">Branding</h3>
                        <div className="services-item__text _text _anim-items _anim-no-hide">
                          Orci a scelerisque purus semper eget. Ac ut consequat semper viverra nam
                          libero justo lectus arcu bibendum at laoreet sit.
                        </div>
                      </div>
                    </div>
                    <div className="services__box">
                      <div className="services__item services-item">
                        <div className="services-item__image">
                          <img src="/kallyas/css/img/Services/i6.png" alt="icon" />
                        </div>
                        <h3 className="services-item__title _title _anim-items">SEO Identity</h3>
                        <div className="services-item__text _text _anim-items _anim-no-hide">
                          Etiam sit amet nisl purus in mollis nunc. Orci a scelerisque purus semper.
                          Eget dolor diam quam nulla morbi non arcu.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="about" id="about">
              <div className="container">
                <div className="about__row">
                  <div className="about__body">
                    <h2 className="about__title _title _anim-items _anim-no-hide">
                      Detailed business plans &amp; the most effective results
                    </h2>
                    <div className="about__text _text _anim-items _anim-no-hide">
                      Pellentesque habitant morbi tristique senectus et netus et. Accumsan lacus vel
                      facilisis volutpat est velit egestas. Aliquet lectus proin nibh nisl
                      condimentum id venenatis a condimentum. At varius vel pharetra vel turpis nunc
                      eget.
                    </div>
                    <a href="#features" className="about__btn _button _anim-items">
                      Start Now
                    </a>
                  </div>
                  <div className="about__pictures">
                    <div className="about__image">
                      <img src="/kallyas/css/img/About/f1.png" alt="office" />
                    </div>
                    <div className="about__fon-image">
                      <img src="/kallyas/css/img/About/f2.png" alt="office" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="feautures" id="features">
              <div className="container">
                <div className="feautures__row">
                  <div className="feautures__items-block">
                    <div className="feautures__box">
                      <div className="feautures__item">
                        <h4 className="feautures__subtitle _anim-items _anim-no-hide">
                          01. Elegant / unique design
                        </h4>
                        <div className="feautures__description _anim-items">
                          Malesuada fames ac turpis egestas maecenas pharetra convallis posuere.
                          Aliquam ut porttitor a sollicitudin.
                        </div>
                      </div>
                    </div>
                    <div className="feautures__box">
                      <div className="feautures__item">
                        <h4 className="feautures__subtitle _anim-items _anim-no-hide">
                          02. True responsiveness
                        </h4>
                        <div className="feautures__description _anim-items">
                          At risus viverra adipiscing at in tellus. Nec tincidunt praesent semper
                          feugiat nibh. Nunc scelerisque viverra.
                        </div>
                      </div>
                    </div>
                    <div className="feautures__box">
                      <div className="feautures__item">
                        <h4 className="feautures__subtitle _anim-items _anim-no-hide">
                          03. Different layout type
                        </h4>
                        <div className="feautures__description _anim-items">
                          Sed arcu non odio euismod lacinia at quis risus. Turpis in eu mi bibendum
                          neque egestas congue quisque.
                        </div>
                      </div>
                    </div>
                    <div className="feautures__box">
                      <div className="feautures__item">
                        <h4 className="feautures__subtitle _anim-items _anim-no-hide">
                          04. Make it simple
                        </h4>
                        <div className="feautures__description _anim-items">
                          Imperdiet proin fermentum leo vel orci. Aenean pharetra magna ac placerat
                          vestibulum lectus mauris ultrices.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feautures__body">
                    <h2 className="feautures__title _title _anim-items _anim-no-hide">
                      We provide high quality and cost effective services
                    </h2>
                    <div className="feautures__text _text">
                      <p>
                        Massa ultricies mi quis hendrerit dolor magna eget est lorem. Amet risus
                        nullam eget felis eget. Orci dapibus ultrices in iaculis nunc sed augue
                        lacus viverra. Blandit volutpat maecenas volutpat blandit aliquam etiam erat
                        velit scelerisque.
                      </p>
                      <p className="_anim-items">
                        Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Urna
                        nunc id cursus metus aliquam eleifend. Imperdiet proin fermentum leo vel
                        orci.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="works" id="works">
              <div className="container">
                <div className="works__row">
                  <nav className="works__nav">
                    <ul className="works__list">
                      <li className="works__item">
                        <button className=".works_all works__button active _anim-items _anim-no-hide">
                          ALL
                        </button>
                      </li>
                      <li className="works__item">
                        <button className=".works_web works__button _anim-items _anim-no-hide">
                          WEB
                        </button>
                      </li>
                      <li className="works__item">
                        <button className=".works_adv works__button _anim-items _anim-no-hide">
                          ADVERTISING
                        </button>
                      </li>
                      <li className="works__item">
                        <button className=".works_brand works__button _anim-items _anim-no-hide">
                          BRANDING
                        </button>
                      </li>
                      <li className="works__item">
                        <button className=".works_design works__button _anim-items _anim-no-hide">
                          DESIGN
                        </button>
                      </li>
                      <li className="works__item">
                        <button className=".works_photo works__button _anim-items _anim-no-hide">
                          PHOTOGRAPHY
                        </button>
                      </li>
                    </ul>
                  </nav>
                  <div className="works__pictures">
                    <div className="works__box works_all works_brand works_photo _anim-items _anim-no-hide">
                      <img src="/kallyas/css/img/Works/i1.png" alt="photo" />
                    </div>
                    <div className="works__box works_all works_brand works_web _anim-items _anim-no-hide">
                      <img src="/kallyas/css/img/Works/i2.png" alt="photo" />
                    </div>
                    <div className="works__box works_all works_brand works_photo works_adv _anim-items _anim-no-hide">
                      <img src="/kallyas/css/img/Works/i3.png" alt="photo" />
                    </div>
                    <div className="works__box works_all works_web works_design _anim-items _anim-no-hide">
                      <img src="/kallyas/css/img/Works/i4.png" alt="photo" />
                    </div>
                    <div className="works__box works_all works_brand works_adv _anim-items _anim-no-hide">
                      <img src="/kallyas/css/img/Works/i5.png" alt="photo" />
                    </div>
                    <div className="works__box works_all works_brand works_adv _anim-items _anim-no-hide">
                      <img src="/kallyas/css/img/Works/i6.png" alt="photo" />
                    </div>
                    <div className="works__box works_all works_web works_design _anim-items _anim-no-hide">
                      <img src="/kallyas/css/img/Works/i7.png" alt="photo" />
                    </div>
                    <div className="works__box works_all works_adv _anim-items _anim-no-hide">
                      <img src="/kallyas/css/img/Works/i8.png" alt="photo" />
                    </div>
                    <div className="works__box works_design works_photo works_adv hidden_image">
                      <img src="/kallyas/css/img/Works/i9.png" alt="photo" />
                    </div>
                    <div className="works__box works_design works_photo works_adv hidden_image">
                      <img src="/kallyas/css/img/Works/i10.png" alt="photo" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="statistic">
              <div className="container">
                <div className="statistic__row">
                  <div className="statistic__body">
                    <h2 className="statistic__title _title _anim-items _anim-no-hide">
                      We are trusted by more than 3600+ clients.
                    </h2>
                    <div className="statistic__text _text _anim-items _anim-no-hide">
                      Pellentesque habitant morbi tristique senectus et netus et. Accumsan lacus vel
                      facilisis volutpat est velit egestas. Aliquet lectus proin nibh nisl
                      condimentum id venenatis a condimentum. At varius vel pharetra vel turpis nunc
                      eget.
                    </div>
                    <a href="#details" className="statistic__button _button _anim-items">
                      Learn More
                    </a>
                  </div>
                  <div className="statistic__video">
                    <iframe
                      className="statistic__iframe-video"
                      width={640}
                      height={334}
                      src="https://www.youtube.com/embed/kproPsch7i0"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="partners">
              <div className="container">
                <div className="partners__row">
                  <div className="partners__pictures _anim-items">
                    <div className="partners__block">
                      <img src="/kallyas/css/img/Partners/i1.png" alt="company logo" />
                      <img src="/kallyas/css/img/Partners/i2.png" alt="company logo" />
                    </div>
                    <div className="partners__block">
                      <img src="/kallyas/css/img/Partners/i3.png" alt="company logo" />
                      <img src="/kallyas/css/img/Partners/i4.png" alt="company logo" />
                    </div>
                  </div>
                  <div className="partners__body">
                    <h2 className="partners__title _title _anim-items _anim-no-hide">
                      Clients with projects proudly crafted by our agency.
                    </h2>
                    <div className="partners__text _text _anim-items _anim-no-hide">
                      Aenean sed adipiscing diam donec. Est placerat in egestas erat. Cras fermentum
                      odio eu feugiat pretium nibh ipsum consequat. Enim eu turpis egestas pretium
                      aenean pharetra magna ac placerat. Lacus luctus accumsan tortor posuere.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="details" id="details">
              <div className="container">
                <div className="details__row">
                  <h2 className="details__title _title _anim-items _anim-no-hide">
                    Beautifully handcrafted designs for your website
                  </h2>
                  <div className="details__text _text _anim-items _anim-no-hide">
                    Enim ut tellus elementum sagittis vitae et leo duis. Feugiat sed lectus
                    vestibulum mattis ullamcorper. Aenean et tortor at risus viverra adipiscing at.
                    Neque aliquam vestibulum morbi blandit cursus risus at.
                  </div>
                  <div className="details__items">
                    <div className="details__box">
                      <div className="details__item">
                        <div className="details__image">
                          <img src="/kallyas/css/img/Details/i1.png" alt="icon" />
                        </div>
                        <h4 className="details__subtitle _anim-items _anim-no-hide">
                          Secured Database
                        </h4>
                        <div className="details__description _anim-items">
                          Ullamcorper dignissim cras tincidunt vet lobortis feugiat vivamus. Sed
                          euismod nisi porta lorem mollis turpis.
                        </div>
                      </div>
                    </div>
                    <div className="details__box">
                      <div className="details__item">
                        <div className="details__image">
                          <img src="/kallyas/css/img/Details/i2.png" alt="icon" />
                        </div>
                        <h4 className="details__subtitle _anim-items _anim-no-hide">
                          Modern Framework
                        </h4>
                        <div className="details__description _anim-items">
                          Pharetra massa massa ultricies mi quis hendrerit. Interdum consectetur
                          libero nisl tincidunt eget. nullamnon.consectetur purus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="contact"></section>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="footer__row">
                <div className="footer__author">
                  © 2019. All rights reserved. Buy Kallyas Wordpress Theme.
                </div>
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
        <div className="to-download">
          <img src="/kallyas/css/img/Home/fon2.png" alt="fon" />
          <img src="/kallyas/css/img/Home/fon3.png" alt="fon" />
          <img src="/kallyas/css/img/About/f2.png" alt="office" />
          <img src="/kallyas/css/img/About/f3.png" alt="office" />
          <img src="/kallyas/css/img/About/f4.png" alt="office" />
        </div>
      </body>
    </>
  );
};

export default Kallyas;
