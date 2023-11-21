/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import { useEffect } from 'react';

import { scriptFunc } from './js/script';

const Plumber = () => {
  useEffect(() => {
    scriptFunc();
  }, []);

  require('./css/style.css');
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Plumbing Services. We will help you quickly and cheaply!"
        />
        <meta name="google" content="notranslate" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/plumber/img/Favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/plumber/img/Favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/plumber/img/Favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/plumber/img/Favicon/site.webmanifest" />
        <link rel="mask-icon" href="/plumber/img/Favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Plumbing Services</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body">
        <div className="popup-call-us">
          <div className="popup-call-us__box">
            <button className="popup-call-us__close-btn">
              <span>x</span>
            </button>
            <h2 className="popup-call-us__title _title">
              We will help you
              <br />
              quickly and cheaply
            </h2>
            <form action="#" className="popup-call-us__form">
              <input
                type="text"
                className="popup-call-us__name"
                placeholder="Your Name:"
                id="popup-call-us__focus-here"
              />
              <input type="tel" className="popup-call-us__tel" placeholder="Phone Number:" />
              <textarea
                className="popup-call-us__textarea"
                placeholder="Briefly your problem:"
                defaultValue={''}
              />
              <input
                type="submit"
                defaultValue="Send and wait for a call"
                className="popup-call-us__submit"
              />
            </form>
          </div>
        </div>
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
            <section className="home" id="Home">
              <div className="container">
                <div className="home__row">
                  <header className="home__header header">
                    <div className="header__logo">
                      <picture>
                        <source srcSet="/plumber/img/Home/logo.webp" type="image/webp" />
                        <img src="/plumber/img/Home/logo.png" alt="logo" />
                      </picture>
                    </div>
                    <nav className="header__nav header-menu">
                      <ul className="header-menu__list">
                        <li>
                          <a href="#Services" className="header-menu__item">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#Feautures" className="header-menu__item">
                            Feautures
                          </a>
                        </li>
                        <li>
                          <a href="#Team" className="header-menu__item">
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="#Prices" className="header-menu__item">
                            Prices
                          </a>
                        </li>
                        <li>
                          <a href="#Contact" className="header-menu__item">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="header__gamburger gamburger">
                      <div className="gamburger__item" />
                    </div>
                    <button className="header__btn _btn btn-call-popup">Call us now</button>
                  </header>
                  <div className="home__body">
                    <h1 className="home__title _title _anim-items _active-no-hide">
                      24h Emergency Plumbing Services
                    </h1>
                    <ul className="home__list _anim-items _active-no-hide">
                      <li className="home__item">Uniformed, Licensed Plumbers</li>
                      <li className="home__item">24h Emergency Services</li>
                      <li className="home__item">No Travel Charges</li>
                      <li className="home__item">Licensed and Insured</li>
                    </ul>
                    <div className="home__btns-box">
                      <button className="home__btn _btn btn-call-popup _anim-items _active-no-hide">
                        Call us now
                      </button>
                      <a href="#Services" className="home__btn _btn _anim-items">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="services" id="Services">
              <div className="container">
                <div className="services__row">
                  <div className="services__item services__text-content">
                    <h2 className="services__title _title _anim-items _active-no-hide">
                      The quality services you need and want!
                    </h2>
                    <div className="services__text _text _anim-items _active-no-hide">
                      <p>
                        Courtesy may not be the first thing people think of when it comes to
                        plumbing, but for us, it&apos;s one of the most important tools we carry
                        raesent a nulla ut magna.
                      </p>
                      <p>
                        Aliquam dapibus sed nisi ut faucibus. Vivamus venenatis pellentesque ligula,
                        congue lacinia diam rhoncus eget. Vestibulum rutrum, dui at auctor vehicula,
                        dolor mauris gravida turpis.
                      </p>
                    </div>
                    <a href="#Feautures" className="services__link _anim-items">
                      Go to our feautures
                    </a>
                    <div className="services__label _anim-items _active-no-hide">
                      Nullam molestie ante at velit interdum pretium. Fusce egestas, lectus sit amet
                      tincidun bibendum, purus turpis porta lacus, sit amet imperdiet dui purus eget
                      augue.
                    </div>
                  </div>
                  <div className="services__item services__body">
                    <div className="services__box services-box _anim-items _active-no-hide">
                      <div className="services-box__item">
                        <div className="services-box__img">
                          <picture>
                            <source srcSet="/plumber/img/Services/i1.webp" type="image/webp" />
                            <img src="/plumber/img/Services/i1.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="services-box__title">Emergency Support</h4>
                        <div className="services-box__text">
                          Praesent feugiat venenatislibero quis aliquet.
                        </div>
                      </div>
                    </div>
                    <div className="services__box services-box _anim-items _active-no-hide">
                      <div className="services-box__item">
                        <div className="services-box__img">
                          <picture>
                            <source srcSet="/plumber/img/Services/i2.webp" type="image/webp" />
                            <img src="/plumber/img/Services/i2.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="services-box__title">Sanitary Engineering</h4>
                        <div className="services-box__text">
                          Praesent feugiat venenatis libero quis aliquet.
                        </div>
                      </div>
                    </div>
                    <div className="services__box services-box _anim-items _active-no-hide">
                      <div className="services-box__item">
                        <div className="services-box__img">
                          <picture>
                            <source srcSet="/plumber/img/Services/i3.webp" type="image/webp" />
                            <img src="/plumber/img/Services/i3.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="services-box__title">Repair Services</h4>
                        <div className="services-box__text">
                          Praesent feugiat venenatis libero quis aliquet.
                        </div>
                      </div>
                    </div>
                    <div className="services__box services-box _anim-items _active-no-hide">
                      <div className="services-box__item">
                        <div className="services-box__img">
                          <picture>
                            <source srcSet="/plumber/img/Services/i4.webp" type="image/webp" />
                            <img src="/plumber/img/Services/i4.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="services-box__title">24/7 Support</h4>
                        <div className="services-box__text">
                          Praesent feugiat venenatislibero quis aliquet.
                        </div>
                      </div>
                    </div>
                    <div className="services__box services-box _anim-items _active-no-hide">
                      <div className="services-box__item">
                        <div className="services-box__img">
                          <picture>
                            <source srcSet="/plumber/img/Services/i5.webp" type="image/webp" />
                            <img src="/plumber/img/Services/i5.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="services-box__title">Quality Materials</h4>
                        <div className="services-box__text">
                          Praesent feugiat venenatislibero quis aliquet.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="feautures" id="Feautures">
              <div className="container">
                <div className="feautures__row">
                  <div className="feautures__block features-top">
                    <div className="features-top__block">
                      <div className="features-top__img-fon" />
                    </div>
                    <div className="features-top__block features-top__text-content">
                      <div className="feature-top__box">
                        <span className="features-top__subtitle">Feautures</span>
                        <h2 className="features-top__title _title _anim-items _active-no-hide">
                          After 25 years of experience, you can trust us.
                        </h2>
                        <div className="features-top__text _text _anim-items _active-no-hide">
                          Maecenas vitae pulvinar nulla. Vestibulum non felis vitae turpis iaculis
                          tempor sit amet non nulla. Curabitur porttitor ligula ac nulla laoreet, eu
                          congue mauris ornare.
                        </div>
                        <div className="features-top__list-box">
                          <ul className="features-top__list _anim-items _active-no-hide">
                            <li className="features-top__item">Uniformed, Licensed Plumbers</li>
                            <li className="features-top__item">24h Emergency Services</li>
                            <li className="features-top__item">No Travel Charges</li>
                            <li className="features-top__item">Licensed and Insured</li>
                          </ul>
                          <ul className="features-top__list _anim-items _active-no-hide">
                            <li className="features-top__item">Verified Professionals</li>
                            <li className="features-top__item">Ontime at Services</li>
                            <li className="features-top__item">Quick to Respond</li>
                            <li className="features-top__item">Flexible Price</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feautures__block features-center">
                    <div className="features-center__box _anim-items _active-no-hide">
                      <div className="features-center__item">
                        <div className="features-center__img">
                          <picture>
                            <source srcSet="/plumber/img/Features/i1.webp" type="image/webp" />
                            <img src="/plumber/img/Features/i1.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="features-center__title">Connection to Channels</h4>
                        <div className="features-center__text">
                          Praesent feugiat venenatis libero quis aliquet.
                        </div>
                      </div>
                    </div>
                    <div className="features-center__box _anim-items _active-no-hide">
                      <div className="features-center__item">
                        <div className="features-center__img">
                          <picture>
                            <source srcSet="/plumber/img/Features/i2.webp" type="image/webp" />
                            <img src="/plumber/img/Features/i2.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="features-center__title">Cracks in Pipes</h4>
                        <div className="features-center__text">
                          Praesent feugiat venenatis libero quis aliquet.
                        </div>
                      </div>
                    </div>
                    <div className="features-center__box _anim-items _active-no-hide">
                      <div className="features-center__item">
                        <div className="features-center__img">
                          <picture>
                            <source srcSet="/plumber/img/Features/i3.webp" type="image/webp" />
                            <img src="/plumber/img/Features/i3.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="features-center__title">Avoid Harmful Pipes</h4>
                        <div className="features-center__text">
                          Praesent feugiat venenatis libero quis aliquet.
                        </div>
                      </div>
                    </div>
                    <div className="features-center__box _anim-items _active-no-hide">
                      <div className="features-center__item">
                        <div className="features-center__img">
                          <picture>
                            <source srcSet="/plumber/img/Features/i4.webp" type="image/webp" />
                            <img src="/plumber/img/Features/i4.png" alt="icon" />
                          </picture>
                        </div>
                        <h4 className="features-center__title">Instant Hot Water</h4>
                        <div className="features-center__text">
                          Praesent feugiat venenatis libero quis aliquet.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feautures__block features-bottom">
                    <div className="features-bottom__block features-bottom_block1">
                      <h2 className="features-bottom__title _title _anim-items _active-no-hide">
                        Why to choose our plumbing company?
                      </h2>
                      <div className="features-bottom__text _text _anim-items _active-no-hide">
                        Nam hendrerit tellus dui, ac ullamcorper ex aliquet ut. Integer sodales
                        semper dui, elementum malesuada lacus cursus mattis. Nam sed dui at nibh
                        pharetra imperdiet.
                      </div>
                      <a href="#Team" className="features-bottom__btn _btn _anim-items">
                        Look at the team
                      </a>
                    </div>
                    <div className="features-bottom__block features-skills _anim-items">
                      <div className="features-skills__item">
                        <h4 className="features-skills__title">SKILLS</h4>
                        <div className="features-skills__line _anim-items" />
                      </div>
                      <div className="features-skills__item">
                        <h4 className="features-skills__title">PROFESSINALISM</h4>
                        <div className="features-skills__line _anim-items" />
                      </div>
                      <div className="features-skills__item">
                        <h4 className="features-skills__title">SERVICE QUALITY</h4>
                        <div className="features-skills__line _anim-items" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="team" id="Team">
              <div className="container">
                <div className="team__row">
                  <h2 className="team__title _title _anim-items _active-no-hide">
                    Meet our great team
                  </h2>
                  <div className="team__text _text _anim-items _active-no-hide">
                    Proin dapibus nulla sed bibendum tempor. Aliquam in erat nulla. Cras eget ante
                    lacus. Praesent sed fermentum arcu.
                  </div>
                  <div className="team__body">
                    <div className="team__box _anim-items _active-no-hide">
                      <div className="team__item team-item">
                        <div className="team-item__img">
                          <picture>
                            <source srcSet="/plumber/img/Team/human1.webp" type="image/webp" />
                            <img src="/plumber/img/Team/human1.png" alt="human" />
                          </picture>
                        </div>
                        <h4 className="team-item__title">Terry Joseph</h4>
                        <h5 className="team-item__subtitle">Master Plumber</h5>
                      </div>
                    </div>
                    <div className="team__box _anim-items _active-no-hide">
                      <div className="team__item team-item">
                        <div className="team-item__img">
                          <picture>
                            <source srcSet="/plumber/img/Team/human2.webp" type="image/webp" />
                            <img src="/plumber/img/Team/human2.png" alt="human" />
                          </picture>
                        </div>
                        <h4 className="team-item__title">Dany Johnson</h4>
                        <h5 className="team-item__subtitle">Licensed Plumber</h5>
                      </div>
                    </div>
                    <div className="team__box _anim-items _active-no-hide">
                      <div className="team__item team-item">
                        <div className="team-item__img">
                          <picture>
                            <source srcSet="/plumber/img/Team/human3.webp" type="image/webp" />
                            <img src="/plumber/img/Team/human3.png" alt="human" />
                          </picture>
                        </div>
                        <h4 className="team-item__title">Mark Doyle</h4>
                        <h5 className="team-item__subtitle">Plumbing Technician</h5>
                      </div>
                    </div>
                    <div className="team__box _anim-items _active-no-hide">
                      <div className="team__item team-item">
                        <div className="team-item__img">
                          <picture>
                            <source srcSet="/plumber/img/Team/human4.webp" type="image/webp" />
                            <img src="/plumber/img/Team/human4.png" alt="human" />
                          </picture>
                        </div>
                        <h4 className="team-item__title">Dima Moretz</h4>
                        <h5 className="team-item__subtitle">Master Plumber</h5>
                      </div>
                    </div>
                    <div className="team__box _anim-items _active-no-hide">
                      <div className="team__item team-item">
                        <div className="team-item__img">
                          <picture>
                            <source srcSet="/plumber/img/Team/human5.webp" type="image/webp" />
                            <img src="/plumber/img/Team/human5.png" alt="human" />
                          </picture>
                        </div>
                        <h4 className="team-item__title">Mike William</h4>
                        <h5 className="team-item__subtitle">Plumber</h5>
                      </div>
                    </div>
                    <div className="team__box _anim-items _active-no-hide">
                      <div className="team__item team-item">
                        <div className="team-item__img">
                          <picture>
                            <source srcSet="/plumber/img/Team/human6.webp" type="image/webp" />
                            <img src="/plumber/img/Team/human6.png" alt="human" />
                          </picture>
                        </div>
                        <h4 className="team-item__title">Elen Valdez</h4>
                        <h5 className="team-item__subtitle">Accountant</h5>
                      </div>
                    </div>
                    <div className="team__box _anim-items _active-no-hide">
                      <div className="team__item team-item">
                        <div className="team-item__img">
                          <picture>
                            <source srcSet="/plumber/img/Team/human7.webp" type="image/webp" />
                            <img src="/plumber/img/Team/human7.png" alt="human" />
                          </picture>
                        </div>
                        <h4 className="team-item__title">Markus Monson</h4>
                        <h5 className="team-item__subtitle">Plumber’s Helper</h5>
                      </div>
                    </div>
                  </div>
                  <div className="team__subtitle _anim-items">
                    Nulla tincidunt nibh vitae tellus placerat tincidunt.
                    <a href="#Offer">We have an offer for you!</a> Urna libero gravida tortor,
                    dictum euismod eros nisl sit amet tortor. Nullam lobortis hendrerit lectus nec
                    finibus.
                  </div>
                </div>
              </div>
            </section>
            <section className="offer" id="Offer">
              <div className="container">
                <div className="offer__row">
                  <h2 className="offer__title _title _anim-items _active-no-hide">
                    Your faucets are no longer working?
                  </h2>
                  <div className="offer__text _text _anim-items _active-no-hide">
                    We can ensure you always have no problems with water and plumbing as our experts
                    know how to handle all of this!
                  </div>
                  <a href="#Prices" className="offer__btn _btn _anim-items">
                    Look at prices
                  </a>
                </div>
              </div>
            </section>
            <section className="facts">
              <div className="container">
                <div className="facts__row">
                  <div className="facts__box _anim-items _active-no-hide">
                    <div className="facts__item">
                      <div className="facts__img">
                        <picture>
                          <source srcSet="/plumber/img/Facts/i1.webp" type="image/webp" />
                          <img src="/plumber/img/Facts/i1.png" alt="icon" />
                        </picture>
                      </div>
                      <div className="facts__text">
                        <span className="facts__count _anim-items no-was-Working" id="facts_count1">
                          001+
                        </span>
                        <p>total projects</p>
                      </div>
                    </div>
                  </div>
                  <div className="facts__box _anim-items _active-no-hide">
                    <div className="facts__item">
                      <div className="facts__img">
                        <picture>
                          <source srcSet="/plumber/img/Facts/i2.webp" type="image/webp" />
                          <img src="/plumber/img/Facts/i2.png" alt="icon" />
                        </picture>
                      </div>
                      <div className="facts__text">
                        <span className="facts__count _anim-items no-was-Working" id="facts_count2">
                          002+
                        </span>
                        <p>WORK EMPLOYED</p>
                      </div>
                    </div>
                  </div>
                  <div className="facts__box _anim-items _active-no-hide">
                    <div className="facts__item">
                      <div className="facts__img">
                        <picture>
                          <source srcSet="/plumber/img/Facts/i3.webp" type="image/webp" />
                          <img src="/plumber/img/Facts/i3.png" alt="icon" />
                        </picture>
                      </div>
                      <div className="facts__text">
                        <span className="facts__count _anim-items no-was-Working" id="facts_count3">
                          003+
                        </span>
                        <p>HAPPY CLIENTS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="prices" id="Prices">
              <div className="container">
                <div className="prices__row">
                  <h2 className="prices__title _title _anim-items _active-no-hide">
                    Choose the best plan tailored to your needs.
                  </h2>
                  <div className="prices__text _text _anim-items _active-no-hide">
                    Fusce est dui, condimentum ac mauris sit amet, imperdiet posuere tortor. Aliquam
                    erat volutpat. Aenean facilisis ante magna, in aliquet mi ornare nec.
                  </div>
                  <div className="prices__body">
                    <div className="prices__box _anim-items _active-no-hide">
                      <div className="prices__item prices-item">
                        <h4 className="prices-item__title">Plumbing Installation</h4>
                        <div className="prices-item__box">
                          <ul className="prices-item__list">
                            <li className="prices-item__label">Suspendisse imperdiet sapien.</li>
                            <li className="prices-item__label">Ac tortor rhoncus tincidunt.</li>
                            <li className="prices-item__label">Vestibulum euismod tortor nec.</li>
                            <li className="prices-item__label">Ut imperdiet dolor faucibus.</li>
                            <li className="prices-item__label">Maecenas at quam pharetra.</li>
                          </ul>
                          <div className="prices-item__subtitle">PRICE</div>
                          <div
                            className="prices-item__number _anim-items no-was-Working"
                            id="prices-item_number1"
                          >
                            $219.99
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="prices__box _anim-items _active-no-hide">
                      <div className="prices__item prices-item">
                        <h4 className="prices-item__title">Plumbing Emergency</h4>
                        <div className="prices-item__box">
                          <ul className="prices-item__list">
                            <li className="prices-item__label">Suspendisse imperdiet sapien.</li>
                            <li className="prices-item__label">Ac tortor rhoncus tincidunt.</li>
                            <li className="prices-item__label">Vestibulum euismod tortor nec.</li>
                            <li className="prices-item__label">Ut imperdiet dolor faucibus.</li>
                            <li className="prices-item__label">Maecenas at quam pharetra.</li>
                          </ul>
                          <div className="prices-item__subtitle">PRICE</div>
                          <div
                            className="prices-item__number _anim-items no-was-Working"
                            id="prices-item_number2"
                          >
                            $119.99
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="prices__box _anim-items _active-no-hide">
                      <div className="prices__item prices-item">
                        <h4 className="prices-item__title">Plumbing Repair</h4>
                        <div className="prices-item__box">
                          <ul className="prices-item__list">
                            <li className="prices-item__label">Suspendisse imperdiet sapien.</li>
                            <li className="prices-item__label">Ac tortor rhoncus tincidunt.</li>
                            <li className="prices-item__label">Vestibulum euismod tortor nec.</li>
                            <li className="prices-item__label">Ut imperdiet dolor faucibus.</li>
                            <li className="prices-item__label">Maecenas at quam pharetra.</li>
                          </ul>
                          <div className="prices-item__subtitle">PRICE</div>
                          <div
                            className="prices-item__number _anim-items no-was-Working"
                            id="prices-item_number3"
                          >
                            $319.99
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="contact" id="Contact">
              <div className="container">
                <div className="contact__row">
                  <div className="contact__block contact-top">
                    <div className="contact-top__block contact-top-left">
                      <h2 className="contact-top-left__title _title _anim-items _active-no-hide">
                        Experience quality
                      </h2>
                      <div className="contact-top-left__text _text _anim-items _active-no-hide">
                        Phasellus dapibus tellus sed sagittis sagittis. Nullam dapibus quam metus,
                        non sodales nunc imperdiet eu. Aliquam vel tristique libero. Etiam interdum
                        arcu vel dapibus congue. Nullam interdum urna tempor, placerat lorem sit
                        amet, cursus erat.
                      </div>
                      <a href="#Contact-bottom" className="contact-top-left__btn _btn _anim-items">
                        Learn more
                      </a>
                    </div>
                    <div className="contact-top__block contact-top-center">
                      <div className="contact-top-center__img-fon" />
                    </div>
                    <div className="contact-top__block contact-top-right _anim-items _active-no-hide">
                      <p className="_text">
                        Fusce bibendum at lorem vel feugiat. Maecenas massa risus, viverra id
                        pulvinar id, porta nec mi. Proin urna ex, fermentum in pharetra sed,
                        tincidunt in turpis. Nulla cursus nunc eu lacus finibus maximus.
                      </p>
                      <p className="_text">
                        Donec finibus massa nec tempor pulvinar. Cras id venenatis urna.
                      </p>
                      <div className="contact-top-right__links _anim-items">
                        <b>Share:</b>
                        <div className="contact-top-right__box">
                          <a className="contact-top-right__link" href="#">
                            <picture>
                              <source
                                srcSet="/plumber/img/Contact/instagram.webp"
                                type="image/webp"
                              />
                              <img src="/plumber/img/Contact/instagram.png" alt="icon" />
                            </picture>
                          </a>
                          <a className="contact-top-right__link" href="#">
                            <picture>
                              <source
                                srcSet="/plumber/img/Contact/facebook.webp"
                                type="image/webp"
                              />
                              <img src="/plumber/img/Contact/facebook.png" alt="icon" />
                            </picture>
                          </a>
                          <a className="contact-top-right__link" href="#">
                            <picture>
                              <source
                                srcSet="/plumber/img/Contact/twitter.webp"
                                type="image/webp"
                              />
                              <img src="/plumber/img/Contact/twitter.png" alt="icon" />
                            </picture>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact__block contact-bottom" id="Contact-bottom">
                    <div className="contact-bottom__block contact-bottom__body">
                      <h2 className="contact-bottom__title _title _anim-items _active-no-hide">
                        Have problems with the sanitary installation?
                      </h2>
                      <div className="contact-bottom__text _text _anim-items _active-no-hide">
                        Nam hendrerit tellus dui, ac ullamcorper ex aliquet ut. Integer sodales
                        semper dui, elementum malesuada lacus cursus mattis. Nam sed dui at nibh
                        pharetra imperdiet.
                      </div>
                      <div className="contact-bottom__btns">
                        <button className="contact-bottom__btn _btn btn-call-popup _anim-items _active-no-hide">
                          Call us now
                        </button>
                        <a href="#Home" className="contact-bottom__btn _btn _anim-items">
                          Let`s again
                        </a>
                      </div>
                      <div className="contact-bottom__company _anim-items _active-no-hide">
                        <div className="contact-bottom__item">
                          <picture>
                            <source srcSet="/plumber/img/Contact/c1.webp" type="image/webp" />
                            <img src="/plumber/img/Contact/c1.png" alt="company" />
                          </picture>
                        </div>
                        <div className="contact-bottom__item">
                          <picture>
                            <source srcSet="/plumber/img/Contact/c2.webp" type="image/webp" />
                            <img src="/plumber/img/Contact/c2.png" alt="company" />
                          </picture>
                        </div>
                        <div className="contact-bottom__item">
                          <picture>
                            <source srcSet="/plumber/img/Contact/c3.webp" type="image/webp" />
                            <img src="/plumber/img/Contact/c3.png" alt="company" />
                          </picture>
                        </div>
                        <div className="contact-bottom__item">
                          <picture>
                            <source srcSet="/plumber/img/Contact/c4.webp" type="image/webp" />
                            <img src="/plumber/img/Contact/c4.png" alt="company" />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div className="contact-bottom__block contact-bottom__form">
                      <form className="contact-form _anim-items _active-no-hide" action="#">
                        <input
                          type="text"
                          className="contact-form__name"
                          placeholder="Your Name:"
                        />
                        <input
                          type="email"
                          className="contact-form__email"
                          placeholder="Email Address:"
                        />
                        <input
                          type="tel"
                          className="contact-form__tel"
                          placeholder="Phone Number:"
                        />
                        <textarea
                          className="contact-form__textarea"
                          placeholder="Message"
                          defaultValue={''}
                        />
                        <input
                          type="submit"
                          defaultValue="Send message"
                          className="contact-form__submit"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="footer__row">
                <p>
                  Layout made by:{' '}
                  <a href="https://github.com/filiptraum" target="__blank">
                    Fillip Traum
                  </a>
                </p>
                <span>
                  Free template by:{' '}
                  <a
                    href="https://hogash.com/downloads/plumbing-services-free-psd-template/"
                    target="__blank"
                  >
                    2020 @Zion Builder
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
};

export default Plumber;
