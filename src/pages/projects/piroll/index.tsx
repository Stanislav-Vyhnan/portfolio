/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import { useEffect } from 'react';

import { scriptFunc } from './js/script';

const Piroll = () => {
  useEffect(() => {
    scriptFunc();
  }, []);

  require('./css/style.css');

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Design and development" />
        <meta name="google" content="notranslate" />
        <link rel="apple-touch-icon" sizes="180x180" href="/piroll/img/Favicon/" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/piroll/img/Favicon//favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/piroll/img/Favicon//favicon-16x16.png"
        />
        <link rel="manifest" href="/piroll/img/Favicon//site.webmanifest" />
        <link rel="mask-icon" href="/piroll/img/Favicon//safari-pinned-tab.svg" color="#5bbad5" />
        <title>Piroll - Design and Develop</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Nunito+Sans&display=swap"
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
            <section className="home" id="Home">
              <div className="container">
                <div className="home__row">
                  <header className="home__header header">
                    <div className="header__logo">
                      <picture>
                        <source srcSet="/piroll/img/Home/logo.webp" type="image/webp" />
                        <img src="/piroll/img/Home/logo.png" alt="Piroll LOGO" />
                      </picture>
                    </div>
                    <nav className="header__nav header-menu">
                      <ul className="header-menu__list">
                        <li>
                          <a href="#Home" className="header-menu__item active">
                            home
                          </a>
                        </li>
                        <li>
                          <a href="#About" className="header-menu__item">
                            about
                          </a>
                        </li>
                        <li>
                          <a href="#Works" className="header-menu__item">
                            works
                          </a>
                        </li>
                        <li>
                          <a href="#Process" className="header-menu__item">
                            process
                          </a>
                        </li>
                        <li>
                          <a href="#Services" className="header-menu__item">
                            services
                          </a>
                        </li>
                        <li>
                          <a href="#Testimonial" className="header-menu__item">
                            testimonial
                          </a>
                        </li>
                        <li>
                          <a href="#Contact" className="header-menu__item">
                            contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="header__gamburger gamburger">
                      <div className="gamburger__item" />
                    </div>
                  </header>
                  <div className="home__body _anim-items _active-no-hide">
                    <div className="home__box">
                      <h1 className="home__title _title">
                        <span>We</span> Design and Develop
                      </h1>
                      <div className="home__text _text">
                        We are a new design studio based in USA. We have over 20 years of combined
                        experience, and know a thing or two about designing websites and mobile
                        apps.
                      </div>
                      <a href="#Contact" className="home__btn">
                        contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="about" id="About">
              <div className="container">
                <div className="about__row _anim-items _active-no-hide">
                  <h2 className="about__title _title">About Us</h2>
                  <div className="about__text _text">
                    Divide have don&apos;t man wherein air fourth. Own itself make have night
                    won&apos;t make. A you under Seed appear which good give. Own give air without
                    fowl moveth dry first heaven fruit, dominion she&apos;d won&apos;t very all.
                  </div>
                  <div className="canvas-box">
                    <span className="canvas-box__subtitle">draw</span>
                    <h3 className="canvas-box__title _anim-items _active-no-hide">
                      improve your mood
                    </h3>
                    <canvas className="canvas" id="canvas">
                      Ваш браузер не поддерживает Canvas
                    </canvas>
                    <div className="canvas-box__cursor" />
                    <div className="canvas-box__btns">
                      <button className="canvas-box__btn canv-btn_save" id="canv-save">
                        Save<code>( Press S )</code>
                      </button>
                      <button className="canvas-box__btn canv-btn_clear" id="canv-clear">
                        Clear<code>( Press C )</code>
                      </button>
                      <button className="canvas-box__btn canv-btn_replay" id="canv-replay">
                        Replay<code>( Press R )</code>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="skills">
              <div className="container">
                <div className="skills__row">
                  <h2 className="skills__title _title _anim-items _active-no-hide">
                    Professional <span>Skills</span>
                  </h2>
                  <div className="skills__box">
                    <div className="skills__item skills_item1 _anim-items _active-no-hide">
                      <h3 className="skills__subtitle">
                        UI/UX Design
                        <span className="skills__count skills_count1 _anim-items no-was-Working">
                          01%
                        </span>
                      </h3>
                      <div className="skills__line" />
                    </div>
                    <div className="skills__item skills_item2 _anim-items _active-no-hide">
                      <h3 className="skills__subtitle">
                        web development
                        <span className="skills__count skills_count2 _anim-items no-was-Working">
                          02%
                        </span>
                      </h3>
                      <div className="skills__line" />
                    </div>
                    <div className="skills__item skills_item3 _anim-items _active-no-hide">
                      <h3 className="skills__subtitle">
                        marketing
                        <span className="skills__count skills_count3 _anim-items no-was-Working">
                          03%
                        </span>
                      </h3>
                      <div className="skills__line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="statistic">
              <div className="container">
                <div className="statistic__row">
                  <div className="statistic__box">
                    <div className="statistic__item">
                      <div className="statistic__icon">
                        <picture>
                          <source srcSet="/piroll/img/Statistic/projects.webp" type="image/webp" />
                          <img src="/piroll/img/Statistic/projects.png" alt="icon" />
                        </picture>
                      </div>
                      <div className="statistic__text-content _anim-items _active-no-hide">
                        <p className="statistic__count statistic_count1 no-was-Working _anim-items">
                          000
                        </p>
                        <span>projects completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="statistic__box">
                    <div className="statistic__item">
                      <div className="statistic__icon">
                        <picture>
                          <source srcSet="/piroll/img/Statistic/clock.webp" type="image/webp" />
                          <img src="/piroll/img/Statistic/clock.png" alt="icon" />
                        </picture>
                      </div>
                      <div className="statistic__text-content _anim-items _active-no-hide">
                        <p className="statistic__count statistic_count2 no-was-Working _anim-items">
                          0000
                        </p>
                        <span>WORKING HOURS</span>
                      </div>
                    </div>
                  </div>
                  <div className="statistic__box">
                    <div className="statistic__item">
                      <div className="statistic__icon">
                        <picture>
                          <source srcSet="/piroll/img/Statistic/star.webp" type="image/webp" />
                          <img src="/piroll/img/Statistic/star.png" alt="icon" />
                        </picture>
                      </div>
                      <div className="statistic__text-content _anim-items _active-no-hide">
                        <p className="statistic__count statistic_count3 no-was-Working _anim-items">
                          000
                        </p>
                        <span>POSITIVE FEEDBACKS</span>
                      </div>
                    </div>
                  </div>
                  <div className="statistic__box">
                    <div className="statistic__item">
                      <div className="statistic__icon">
                        <picture>
                          <source srcSet="/piroll/img/Statistic/clients.webp" type="image/webp" />
                          <img src="/piroll/img/Statistic/clients.png" alt="icon" />
                        </picture>
                      </div>
                      <div className="statistic__text-content _anim-items _active-no-hide">
                        <p className="statistic__count statistic_count4 no-was-Working _anim-items">
                          000
                        </p>
                        <span>HAPPY CLIENTS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="works" id="Works">
              <div className="works__row _anim-items _active-no-hide">
                <div className="works__items">
                  <a
                    href="https://www.pexels.com/ru-ru/photo/flat-lay-733852/"
                    target="_blank"
                    className="works__item works_item1 hidden3 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item1.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item1.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/iphone-6-1809340/"
                    target="_blank"
                    className="works__item works_item2 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item2.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item2.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/apple-imac-205316/"
                    target="_blank"
                    className="works__item works_item3 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item3.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item3.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/4300393/"
                    target="_blank"
                    className="works__item works_item4 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item4.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item4.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/788948/"
                    target="_blank"
                    className="works__item works_item5 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item5.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item5.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/hd-mac-2039606/"
                    target="_blank"
                    className="works__item works_item6 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item6.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item6.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/4397883/"
                    target="_blank"
                    className="works__item works_item7 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item7.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item7.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/imac-322338/"
                    target="_blank"
                    className="works__item works_item8 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item8.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item8.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/3905856/"
                    target="_blank"
                    className="works__item works_item9 hidden4 hidden3 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item9.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item9.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/hd-2375010/"
                    target="_blank"
                    className="works__item works_item10 hidden4 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item10.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item10.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/3905851/"
                    target="_blank"
                    className="works__item works_item11 hidden4 hidden3 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item11.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item11.jpg" alt="photo" />
                    </picture>
                  </a>
                  <a
                    href="https://www.pexels.com/ru-ru/photo/iphone-5083490/"
                    target="_blank"
                    className="works__item works_item12 hidden4 _anim-items _active-no-hide"
                    rel="noreferrer"
                  >
                    <picture>
                      <source srcSet="/piroll/img/Works/item12.webp" type="image/webp" />
                      <img src="/piroll/img/Works/item12.jpg" alt="photo" />
                    </picture>
                  </a>
                </div>
                <button className="works__btn">load more works</button>
              </div>
            </section>
            <section className="process" id="Process">
              <div className="container">
                <div className="process__row">
                  <div className="process__body _anim-items _active-no-hide">
                    <h2 className="process__title _title">Our Work Process</h2>
                    <div className="process__text _text">
                      Was years it seasons was there form he in in them together over that, third
                      sixth gathered female creeping bearing behold years.
                    </div>
                  </div>
                  <div className="process__videos _anim-items _active-no-hide">
                    <a
                      target="__blank"
                      href="https://www.youtube.com/watch?v=kproPsch7i0&t"
                      className="process__video"
                    >
                      <picture>
                        <source srcSet="/piroll/img/Process/btnVideo.webp" type="image/webp" />
                        <img src="/piroll/img/Process/btnVideo.png" alt="videoBtn" />
                      </picture>
                    </a>
                    <a
                      target="__blank"
                      href="https://www.youtube.com/watch?v=MiG13q79iQE"
                      className="process__video"
                    >
                      <picture>
                        <source srcSet="/piroll/img/Process/btnVideo.webp" type="image/webp" />
                        <img src="/piroll/img/Process/btnVideo.png" alt="videoBtn" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="services" id="Services">
              <div className="container">
                <div className="services__row">
                  <div className="services__box services_box1 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__img">
                        <picture>
                          <source srcSet="/piroll/img/Services/UI_UX.webp" type="image/webp" />
                          <img src="/piroll/img/Services/UI_UX.png" alt="icon" />
                        </picture>
                      </div>
                      <h4 className="services__title">ui / ux design</h4>
                      <div className="services__text _text">
                        Be set fourth land god darkness make it wherein own
                      </div>
                    </div>
                  </div>
                  <div className="services__box services_box2 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__img">
                        <picture>
                          <source srcSet="/piroll/img/Services/web.webp" type="image/webp" />
                          <img src="/piroll/img/Services/web.png" alt="icon" />
                        </picture>
                      </div>
                      <h4 className="services__title">web development</h4>
                      <div className="services__text _text">
                        A she&apos;d them bring void moving third she&apos;d kind fill
                      </div>
                    </div>
                  </div>
                  <div className="services__box services_box3 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__img">
                        <picture>
                          <source
                            srcSet="/piroll/img/Services/mobile-phone.webp"
                            type="image/webp"
                          />
                          <img src="/piroll/img/Services/mobile-phone.png" alt="icon" />
                        </picture>
                      </div>
                      <h4 className="services__title">app / mobile</h4>
                      <div className="services__text _text">
                        Dominion man second spirit he, earth they&apos;re creeping
                      </div>
                    </div>
                  </div>
                  <div className="services__box services_box4 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__img">
                        <picture>
                          <source srcSet="/piroll/img/Services/game.webp" type="image/webp" />
                          <img src="/piroll/img/Services/game.png" alt="icon" />
                        </picture>
                      </div>
                      <h4 className="services__title">game design</h4>
                      <div className="services__text _text">
                        Morning his saying moveth it multiply appear life be
                      </div>
                    </div>
                  </div>
                  <div className="services__box services_box5 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__img">
                        <picture>
                          <source srcSet="/piroll/img/Services/SEO.webp" type="image/webp" />
                          <img src="/piroll/img/Services/SEO.png" alt="icon" />
                        </picture>
                      </div>
                      <h4 className="services__title">SEO / marketing</h4>
                      <div className="services__text _text">
                        Give won&apos;t after land fill creeping meat you, may
                      </div>
                    </div>
                  </div>
                  <div className="services__box services_box6 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__img">
                        <picture>
                          <source
                            srcSet="/piroll/img/Services/photography.webp"
                            type="image/webp"
                          />
                          <img src="/piroll/img/Services/photography.png" alt="icon" />
                        </picture>
                      </div>
                      <h4 className="services__title">photography</h4>
                      <div className="services__text _text">
                        Creepeth one seas cattle grass give moving saw give
                      </div>
                    </div>
                  </div>
                  <div className="services__box services_box7 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__img">
                        <picture>
                          <source
                            srcSet="/piroll/img/Services/graphic-design.webp"
                            type="image/webp"
                          />
                          <img src="/piroll/img/Services/graphic-design.png" alt="icon" />
                        </picture>
                      </div>
                      <h4 className="services__title">graphic design</h4>
                      <div className="services__text _text">
                        Open, great whales air rule for, fourth life whales
                      </div>
                    </div>
                  </div>
                  <div className="services__box services_box8 _anim-items _active-no-hide">
                    <div className="services__item">
                      <div className="services__img">
                        <picture>
                          <source
                            srcSet="/piroll/img/Services/adobe-illustrator.webp"
                            type="image/webp"
                          />
                          <img src="/piroll/img/Services/adobe-illustrator.png" alt="icon" />
                        </picture>
                      </div>
                      <h4 className="services__title">illustrations</h4>
                      <div className="services__text _text">
                        Whales likeness hath, man kind for them air two won&apos;t
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonial" id="Testimonial">
              <div className="container">
                <div className="testimonial__row _anim-items _active-no-hide">
                  <div className="testimonial__slider slider-testimonial">
                    <div className="slider-testimonial__track">
                      <div className="slider-testimonial__box">
                        <div className="slider-testimonial__item">
                          <div className="slider-testimonial__text">
                            “ Outstanding job and exceeded all expectations. It was a pleasure to
                            work with them on a sizable first project and am looking forward to
                            start the next one asap.”
                          </div>
                          <div className="slider-testimonial__author-text">Michael Hopkins</div>
                        </div>
                      </div>
                      <div className="slider-testimonial__box">
                        <div className="slider-testimonial__item">
                          <div className="slider-testimonial__text">
                            “ Job and exceeded outstanding all expectations. It was a pleasure to
                            work with them on a sizable first project and am looking forward to
                            start the next one asap.”
                          </div>
                          <div className="slider-testimonial__author-text">Dominik Alie</div>
                        </div>
                      </div>
                      <div className="slider-testimonial__box">
                        <div className="slider-testimonial__item">
                          <div className="slider-testimonial__text">
                            “ The next one asap outstanding job and exceeded all expectations. It
                            was a pleasure to work with them on a sizable first project and am
                            looking forward to start.”
                          </div>
                          <div className="slider-testimonial__author-text">Lord Fipi</div>
                        </div>
                      </div>
                      <div className="slider-testimonial__box">
                        <div className="slider-testimonial__item">
                          <div className="slider-testimonial__text">
                            “ First project and am outstanding job and exceeded all expectations. It
                            was a pleasure to work with them on a sizable looking forward to start
                            the next one asap.”
                          </div>
                          <div className="slider-testimonial__author-text">Pushistik LoL</div>
                        </div>
                      </div>
                    </div>
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
              </div>
            </section>
            <div className="company">
              <div className="container">
                <div className="company__row _anim-items">
                  <div className="company__item company_item1">
                    <picture>
                      <source srcSet="/piroll/img/Company/company1.webp" type="image/webp" />
                      <img src="/piroll/img/Company/company1.png" alt="company" />
                    </picture>
                  </div>
                  <div className="company__item company_item2">
                    <picture>
                      <source srcSet="/piroll/img/Company/company2.webp" type="image/webp" />
                      <img src="/piroll/img/Company/company2.png" alt="company" />
                    </picture>
                  </div>
                  <div className="company__item company_item3">
                    <picture>
                      <source srcSet="/piroll/img/Company/company3.webp" type="image/webp" />
                      <img src="/piroll/img/Company/company3.png" alt="company" />
                    </picture>
                  </div>
                  <div className="company__item company_item4">
                    <picture>
                      <source srcSet="/piroll/img/Company/company4.webp" type="image/webp" />
                      <img src="/piroll/img/Company/company4.png" alt="company" />
                    </picture>
                  </div>
                  <div className="company__item company_item5">
                    <picture>
                      <source srcSet="/piroll/img/Company/company5.webp" type="image/webp" />
                      <img src="/piroll/img/Company/company5.png" alt="company" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <section className="contact" id="Contact">
              <div className="container">
                <div className="contact__row">
                  <div className="contact__body _anim-items _active-no-hide">
                    <h2 className="contact__title _title">Need a Project?</h2>
                    <div className="contact__text _text">
                      Let us know what you&apos;re looking for in an agency. We&apos;ll take a look
                      and see if this could be the start of something beautiful.
                    </div>
                  </div>
                  <form
                    action="#"
                    className="contact__form form-contact _anim-items _active-no-hide"
                  >
                    <div className="form-contact__box">
                      <input
                        type="text"
                        id="text-input"
                        className="form-contact__text form-contact_item"
                        placeholder="Your Name..."
                      />
                      <input
                        type="email"
                        className="form-contact__email form-contact_item"
                        id="email-input"
                        placeholder="Your Email..."
                      />
                    </div>
                    <input
                      type="text"
                      className="form-contact__title-area form-contact_item"
                      id="input-title-area"
                      placeholder="Your Title..."
                    />
                    <textarea
                      className="form-contact__textarea form-contact_item"
                      id="form-textarea"
                      placeholder="Your Comment..."
                      defaultValue={''}
                    />
                    <input
                      type="submit"
                      defaultValue="send message"
                      className="form-contact__submit"
                      id="input-submit"
                    />
                  </form>
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
                    Stanislav Vyhnan
                  </a>
                </p>
                <span>
                  Free template by:{' '}
                  <a
                    href="http://psd-html-css.ru/templates/piroll-besplatnyy-psd-shablon-dlya-portfolio"
                    target="__blank"
                  >
                    Piroll Design, Inc.
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

export default Piroll;
