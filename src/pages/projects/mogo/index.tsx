/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-css-tags */

import { useEffect } from 'react';

import { scriptFunc, moveToID } from './script';

const Mogo = () => {
  useEffect(() => {
    scriptFunc();
  }, []);

  require('./css/style.css');
  require('./css/media.css');
  require('./css/animation.css');

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MoGo</title>
        <link
          href="https://fonts.googleapis.com//mogo/css2?family=Roboto:ital,wght@1,300&family=Kaushan+Script&family=Montserrat:wght@400;700&family=Roboto:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body">
        <div>
          <div className="shop shop_close">
            <button id="shop_button-close">X</button>
            <div className="container">
              <div className="shop__row">
                <div className="shop__left-arrow _left-arrow">
                  <button id="shop__left-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M11.477,18.859 L3.619,11.002 L11.581,3.039 L11.580,3.039 C11.839,2.769 12.000,2.403 12.000,1.997 C12.000,1.169 11.329,0.498 10.501,0.498 C10.096,0.498 9.730,0.657 9.459,0.919 L9.459,0.918 L0.459,9.918 L0.460,9.919 C0.177,10.191 0.001,10.574 0.001,10.998 C0.001,10.999 0.001,11.001 0.001,11.002 C0.001,11.003 0.001,11.004 0.001,11.005 C0.001,11.428 0.177,11.811 0.460,12.084 L0.459,12.084 L9.459,21.084 L9.462,21.081 C9.732,21.339 10.098,21.498 10.501,21.498 C11.329,21.498 12.000,20.827 12.000,19.998 C12.000,19.543 11.798,19.135 11.477,18.859 Z" />
                    </svg>
                  </button>
                </div>
                <div className="shop-slider">
                  <div className="shop-slider__track">
                    <div className="shop-slider__item">
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="shop-slider__item">
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="shop-slider__item">
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="shop-slider__item">
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="shop-slider__item">
                      <div className="shop-slider__container">
                        <b>MoGo</b>
                        <div className="shop-slider__hover">
                          <p>Name of product: Any name...</p>
                          <p>Price of product: Any price...</p>
                        </div>
                        <button id="shop-slider__button">
                          <span>Buy now</span>
                          <svg
                            className="shop-slider__svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop__right-arrow _right-arrow">
                  <button id="shop__right-arrow">
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
            <section className="banner">
              <div className="container">
                <div className="banner__row">
                  <header className="banner__header header">
                    <div className="header__logo _anim_items">MoGo</div>
                    <div className="header__menu">
                      <nav className="header__navigation">
                        <ul className="header__list _uppercase">
                          <li className="header__item">
                            <a href="#about">about</a>
                          </li>
                          <li className="header__item">
                            <a href="#service">service</a>
                          </li>
                          <li className="header__item">
                            <a href="#work">work</a>
                          </li>
                          <li className="header__item">
                            <a href="#blog">blog</a>
                          </li>
                          <li className="header__item">
                            <a href="#contacts">contact</a>
                          </li>
                        </ul>
                      </nav>
                      <div className="header__buttons">
                        <div className="header__shop-button">
                          <button id="header-shop">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M17.726,3.663 L17.727,3.663 L15.252,9.163 L15.252,9.163 C15.130,9.434 14.866,9.628 14.555,9.648 L14.555,9.648 L7.427,10.123 L7.839,11.299 L15.600,11.299 C16.511,11.299 17.250,12.039 17.250,12.950 C17.250,13.861 16.511,14.600 15.600,14.600 C14.689,14.600 13.950,13.861 13.950,12.950 L6.250,12.950 C6.250,13.861 5.511,14.600 4.600,14.600 C3.689,14.600 2.950,13.861 2.950,12.950 C2.950,12.039 3.689,11.299 4.600,11.299 L6.091,11.299 L2.915,2.225 L1.025,2.225 C0.569,2.225 0.200,1.855 0.200,1.400 C0.200,0.944 0.569,0.575 1.025,0.575 L3.500,0.575 C3.860,0.575 4.163,0.807 4.276,1.128 L4.279,1.127 L4.759,2.500 L16.975,2.500 C17.431,2.500 17.800,2.869 17.800,3.325 C17.800,3.445 17.773,3.559 17.726,3.663 ZM5.337,4.150 L6.862,8.507 L13.951,8.034 L15.699,4.150 L5.337,4.150 Z" />
                            </svg>
                          </button>
                        </div>
                        <div className="header__search-button">
                          <button id="header-search">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M17.317,14.983 C17.615,15.281 17.800,15.694 17.800,16.150 C17.800,17.061 17.061,17.800 16.150,17.800 C15.694,17.800 15.282,17.615 14.983,17.316 L14.983,17.316 L10.147,12.481 C9.165,13.061 8.023,13.400 6.800,13.400 C3.155,13.400 0.200,10.445 0.200,6.800 C0.200,3.155 3.155,0.200 6.800,0.200 C10.445,0.200 13.400,3.155 13.400,6.800 C13.400,8.023 13.061,9.165 12.481,10.147 L17.317,14.983 L17.317,14.983 ZM6.800,1.850 C4.066,1.850 1.850,4.066 1.850,6.800 C1.850,9.534 4.066,11.750 6.800,11.750 C9.534,11.750 11.750,9.534 11.750,6.800 C11.750,4.066 9.534,1.850 6.800,1.850 Z" />
                            </svg>
                          </button>
                          <button className="header-close-search">X</button>
                          <div className="header__search-input_box">
                            <input
                              type="search"
                              className="header__search-input"
                              placeholder="Search..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="header__gamburger gamburger">
                      <div className="gamburger__item" />
                    </div>
                  </header>
                  <div className="banner__body">
                    <div className="banner__title __decoration-red-line _title _anim_items">
                      <div className="banner__title_span _anim_items">
                        <span>Creative Template</span>
                      </div>
                      <div className="banner__title_h1T _anim_items">
                        <h1>welcome</h1>
                      </div>
                      <div className="banner__title_h1B _anim_items">
                        <h1>to mogo</h1>
                      </div>
                    </div>
                    <div className="banner__button _anim_items">
                      <a href="#about">learn more</a>
                    </div>
                  </div>
                  <div className="banner__slider slider _uppercase">
                    <div className="slider__row _anim_items">
                      <div className="slider__item _active-slider _anim_items" id="bannerItemLine">
                        <button
                          onClick={() => moveToID('.banner')}
                          className="slider__line _active-line"
                          id="bannerLine"
                        />
                        <div className="slider__text">
                          <b>01</b>
                          <span>intro</span>
                        </div>
                      </div>
                      <div className="slider__item _anim_items" id="workItemLine">
                        <button
                          onClick={() => moveToID('.service2')}
                          className="slider__line"
                          id="workLine"
                        />
                        <div className="slider__text">
                          <b>02</b>
                          <span>service2</span>
                        </div>
                      </div>
                      <div className="slider__item _last-slider _anim_items" id="blogItemLine">
                        <button
                          onClick={() => moveToID('.team')}
                          className="slider__line"
                          id="blogLine"
                        />
                        <div className="slider__text">
                          <b>03</b>
                          <span>team</span>
                        </div>
                      </div>
                      <div className="slider__item _last-slider _anim_items" id="contactsItemLine">
                        <button
                          onClick={() => moveToID('.comments')}
                          className="slider__line"
                          id="contactsLine"
                        />
                        <div className="slider__text">
                          <b>04</b>
                          <span>comments</span>
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
                    <div className="about__title __decoration-red-line _title _anim_items">
                      <div className="title_span_anim _anim_items">
                        <span>What we do</span>
                      </div>
                      <div className="title_h1_anim _anim_items">
                        <h1>story about us</h1>
                      </div>
                    </div>
                    <div className="about__text _text _anim_items">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="about__box-image">
                      <div className="about__item-block _anim_items">
                        <button
                          onClick={() => moveToID('#team__text')}
                          className="about__item about__item1"
                        >
                          <img src="/mogo/css/img/about/image1.png" alt="photo" />
                          <div className="about__hover-item _uppercase">
                            <span>
                              <svg
                                className="about__hover-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M31.950,22.503 C31.950,22.504 31.950,22.505 31.950,22.505 C31.950,23.054 31.504,23.497 30.955,23.497 L23.543,23.497 C24.099,23.374 24.515,22.883 24.515,22.292 C24.515,22.291 24.514,22.291 24.514,22.290 L24.515,22.290 C24.515,22.290 24.515,17.786 21.214,16.148 C19.802,15.448 19.709,15.582 19.008,15.416 L19.028,13.466 C19.028,13.466 18.257,12.878 18.017,11.035 C17.535,11.175 17.376,10.471 17.347,10.023 C17.321,9.592 17.068,8.240 17.657,8.362 C17.536,7.460 17.450,6.647 17.492,6.215 C17.640,4.703 19.102,3.122 21.353,3.008 C24.002,3.122 25.051,4.702 25.198,6.214 C25.241,6.646 25.147,7.460 25.026,8.360 C25.615,8.240 25.359,9.588 25.330,10.021 C25.305,10.469 25.142,11.170 24.661,11.030 C24.420,12.873 23.649,13.456 23.649,13.456 L23.667,15.404 C23.667,15.404 24.155,15.682 26.213,16.531 C28.271,17.382 27.625,16.745 29.301,17.576 C31.950,18.890 31.950,22.503 31.950,22.503 L31.950,22.503 ZM17.023,15.840 C19.285,16.775 18.575,16.075 20.418,16.990 C23.330,18.433 23.330,22.405 23.330,22.405 L23.329,22.405 C23.329,22.405 23.329,22.406 23.329,22.408 C23.329,23.010 22.840,23.497 22.236,23.497 L1.093,23.497 C0.489,23.497 -0.000,23.010 -0.000,22.408 C-0.000,22.406 0.000,22.405 0.000,22.405 L-0.001,22.405 C-0.001,22.405 -0.001,18.433 2.911,16.988 C4.754,16.075 4.044,16.817 6.306,15.882 C8.568,14.949 9.104,14.622 9.104,14.622 L9.125,12.470 C9.125,12.470 8.278,11.824 8.015,9.800 C7.485,9.953 7.310,9.179 7.279,8.687 C7.250,8.212 6.972,6.727 7.618,6.862 C7.486,5.870 7.391,4.976 7.438,4.503 C7.600,2.839 9.207,1.103 11.682,0.975 C14.593,1.101 15.747,2.838 15.908,4.500 C15.955,4.975 15.852,5.869 15.719,6.859 C16.366,6.727 16.085,8.209 16.053,8.684 C16.025,9.177 15.846,9.947 15.317,9.794 C15.053,11.820 14.206,12.460 14.206,12.460 L14.225,14.602 C14.225,14.602 14.761,14.906 17.023,15.840 Z" />
                              </svg>
                              <b>super team</b>
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="about__item-block _anim_items">
                        <button
                          onClick={() => moveToID('#team__text')}
                          className="about__item about__item2"
                        >
                          <img src="/mogo/css/img/about/image2.png" alt="photo" />
                          <div className="about__hover-item _uppercase">
                            <span>
                              <svg
                                className="about__hover-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M31.950,22.503 C31.950,22.504 31.950,22.505 31.950,22.505 C31.950,23.054 31.504,23.497 30.955,23.497 L23.543,23.497 C24.099,23.374 24.515,22.883 24.515,22.292 C24.515,22.291 24.514,22.291 24.514,22.290 L24.515,22.290 C24.515,22.290 24.515,17.786 21.214,16.148 C19.802,15.448 19.709,15.582 19.008,15.416 L19.028,13.466 C19.028,13.466 18.257,12.878 18.017,11.035 C17.535,11.175 17.376,10.471 17.347,10.023 C17.321,9.592 17.068,8.240 17.657,8.362 C17.536,7.460 17.450,6.647 17.492,6.215 C17.640,4.703 19.102,3.122 21.353,3.008 C24.002,3.122 25.051,4.702 25.198,6.214 C25.241,6.646 25.147,7.460 25.026,8.360 C25.615,8.240 25.359,9.588 25.330,10.021 C25.305,10.469 25.142,11.170 24.661,11.030 C24.420,12.873 23.649,13.456 23.649,13.456 L23.667,15.404 C23.667,15.404 24.155,15.682 26.213,16.531 C28.271,17.382 27.625,16.745 29.301,17.576 C31.950,18.890 31.950,22.503 31.950,22.503 L31.950,22.503 ZM17.023,15.840 C19.285,16.775 18.575,16.075 20.418,16.990 C23.330,18.433 23.330,22.405 23.330,22.405 L23.329,22.405 C23.329,22.405 23.329,22.406 23.329,22.408 C23.329,23.010 22.840,23.497 22.236,23.497 L1.093,23.497 C0.489,23.497 -0.000,23.010 -0.000,22.408 C-0.000,22.406 0.000,22.405 0.000,22.405 L-0.001,22.405 C-0.001,22.405 -0.001,18.433 2.911,16.988 C4.754,16.075 4.044,16.817 6.306,15.882 C8.568,14.949 9.104,14.622 9.104,14.622 L9.125,12.470 C9.125,12.470 8.278,11.824 8.015,9.800 C7.485,9.953 7.310,9.179 7.279,8.687 C7.250,8.212 6.972,6.727 7.618,6.862 C7.486,5.870 7.391,4.976 7.438,4.503 C7.600,2.839 9.207,1.103 11.682,0.975 C14.593,1.101 15.747,2.838 15.908,4.500 C15.955,4.975 15.852,5.869 15.719,6.859 C16.366,6.727 16.085,8.209 16.053,8.684 C16.025,9.177 15.846,9.947 15.317,9.794 C15.053,11.820 14.206,12.460 14.206,12.460 L14.225,14.602 C14.225,14.602 14.761,14.906 17.023,15.840 Z" />
                              </svg>
                              <b>super team</b>
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="about__item-block _anim_items">
                        <button
                          onClick={() => moveToID('#team__text')}
                          className="about__item about__item3"
                        >
                          <img src="/mogo/css/img/about/image3.png" alt="photo" />
                          <div className="about__hover-item _uppercase">
                            <span>
                              <svg
                                className="about__hover-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M31.950,22.503 C31.950,22.504 31.950,22.505 31.950,22.505 C31.950,23.054 31.504,23.497 30.955,23.497 L23.543,23.497 C24.099,23.374 24.515,22.883 24.515,22.292 C24.515,22.291 24.514,22.291 24.514,22.290 L24.515,22.290 C24.515,22.290 24.515,17.786 21.214,16.148 C19.802,15.448 19.709,15.582 19.008,15.416 L19.028,13.466 C19.028,13.466 18.257,12.878 18.017,11.035 C17.535,11.175 17.376,10.471 17.347,10.023 C17.321,9.592 17.068,8.240 17.657,8.362 C17.536,7.460 17.450,6.647 17.492,6.215 C17.640,4.703 19.102,3.122 21.353,3.008 C24.002,3.122 25.051,4.702 25.198,6.214 C25.241,6.646 25.147,7.460 25.026,8.360 C25.615,8.240 25.359,9.588 25.330,10.021 C25.305,10.469 25.142,11.170 24.661,11.030 C24.420,12.873 23.649,13.456 23.649,13.456 L23.667,15.404 C23.667,15.404 24.155,15.682 26.213,16.531 C28.271,17.382 27.625,16.745 29.301,17.576 C31.950,18.890 31.950,22.503 31.950,22.503 L31.950,22.503 ZM17.023,15.840 C19.285,16.775 18.575,16.075 20.418,16.990 C23.330,18.433 23.330,22.405 23.330,22.405 L23.329,22.405 C23.329,22.405 23.329,22.406 23.329,22.408 C23.329,23.010 22.840,23.497 22.236,23.497 L1.093,23.497 C0.489,23.497 -0.000,23.010 -0.000,22.408 C-0.000,22.406 0.000,22.405 0.000,22.405 L-0.001,22.405 C-0.001,22.405 -0.001,18.433 2.911,16.988 C4.754,16.075 4.044,16.817 6.306,15.882 C8.568,14.949 9.104,14.622 9.104,14.622 L9.125,12.470 C9.125,12.470 8.278,11.824 8.015,9.800 C7.485,9.953 7.310,9.179 7.279,8.687 C7.250,8.212 6.972,6.727 7.618,6.862 C7.486,5.870 7.391,4.976 7.438,4.503 C7.600,2.839 9.207,1.103 11.682,0.975 C14.593,1.101 15.747,2.838 15.908,4.500 C15.955,4.975 15.852,5.869 15.719,6.859 C16.366,6.727 16.085,8.209 16.053,8.684 C16.025,9.177 15.846,9.947 15.317,9.794 C15.053,11.820 14.206,12.460 14.206,12.460 L14.225,14.602 C14.225,14.602 14.761,14.906 17.023,15.840 Z" />
                              </svg>
                              <b>super team</b>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="facts">
              <div className="container">
                <div className="facts__row _uppercase">
                  <div className="facts__item facts__item1 _anim_items">
                    <span>42</span>
                    <p>web design projects</p>
                  </div>
                  <div className="facts__item facts__item2 _anim_items">
                    <span>123</span>
                    <p>happy client</p>
                  </div>
                  <div className="facts__item facts__item3 _anim_items">
                    <span>15</span>
                    <p>award winner</p>
                  </div>
                  <div className="facts__item facts__item4 _anim_items">
                    <span>99</span>
                    <p>cup of coffee</p>
                  </div>
                  <div className="facts__item facts__item5 _anim_items">
                    <span>24</span>
                    <p>members</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="service" id="service">
              <div className="container">
                <div className="service__row">
                  <div className="service__title __decoration-red-line _title _anim_items">
                    <div className="title_span_anim _anim_items">
                      <span>We work with</span>
                    </div>
                    <div className="title_h1_anim _anim_items">
                      <h1>amazing services</h1>
                    </div>
                  </div>
                  <div className="service__block">
                    <div className="service__item _anim_items">
                      <div className="service__icon">
                        <svg
                          className="service_svg service_svg31"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M30.740,9.503 C29.156,5.807 26.193,2.843 22.497,1.260 C23.497,0.473 24.755,0.000 26.126,0.000 C29.370,0.000 32.000,2.630 32.000,5.874 C32.000,7.245 31.527,8.503 30.740,9.503 ZM30.500,16.000 C30.500,19.852 28.988,23.343 26.537,25.940 L28.566,27.968 C28.834,28.237 29.000,28.607 29.000,29.017 C29.000,29.836 28.336,30.500 27.517,30.500 C27.107,30.500 26.736,30.334 26.468,30.065 L24.290,27.887 C21.939,29.529 19.085,30.500 16.000,30.500 C12.921,30.500 10.072,29.534 7.724,27.897 L5.561,30.060 C5.289,30.332 4.914,30.500 4.500,30.500 C3.672,30.500 3.000,29.828 3.000,29.000 C3.000,28.586 3.168,28.210 3.439,27.939 L5.451,25.927 C3.008,23.332 1.500,19.845 1.500,16.000 C1.500,7.992 7.992,1.500 16.000,1.500 C24.008,1.500 30.500,7.992 30.500,16.000 ZM16.000,4.500 C9.649,4.500 4.500,9.648 4.500,16.000 C4.500,22.351 9.649,27.500 16.000,27.500 C22.351,27.500 27.500,22.351 27.500,16.000 C27.500,9.648 22.351,4.500 16.000,4.500 ZM22.000,17.500 L16.000,17.500 C15.172,17.500 14.500,16.828 14.500,16.000 L14.500,8.000 C14.500,7.172 15.172,6.500 16.000,6.500 C16.828,6.500 17.500,7.172 17.500,8.000 L17.500,14.499 L22.000,14.499 C22.828,14.499 23.500,15.171 23.500,16.000 C23.500,16.828 22.828,17.500 22.000,17.500 ZM1.287,9.705 C0.483,8.685 -0.000,7.400 -0.000,6.000 C-0.000,2.686 2.686,0.000 6.000,0.000 C7.400,0.000 8.685,0.483 9.706,1.287 C5.931,2.904 2.904,5.931 1.287,9.705 Z" />
                        </svg>
                      </div>
                      <div className="service__text">
                        <span>photography</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor.
                        </p>
                      </div>
                    </div>
                    <div className="service__item _anim_items">
                      <div className="service__icon">
                        <svg
                          className="service_svg service_svg32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M30.500,32.000 L1.500,32.000 C0.672,32.000 0.000,31.328 0.000,30.500 L0.000,1.500 C0.000,0.672 0.672,-0.000 1.500,-0.000 L30.500,-0.000 C31.328,-0.000 32.000,0.672 32.000,1.500 L32.000,30.500 C32.000,31.328 31.328,32.000 30.500,32.000 ZM29.000,3.000 L3.000,3.000 L3.000,29.000 L29.000,29.000 L29.000,3.000 ZM5.215,16.239 L5.215,16.237 L9.215,13.738 L9.215,13.739 C9.444,13.598 9.712,13.517 10.000,13.517 C10.311,13.517 10.600,13.612 10.840,13.775 L10.846,13.766 L17.477,18.186 L25.115,12.795 C25.363,12.613 25.669,12.506 26.000,12.506 C26.828,12.506 27.500,13.177 27.500,14.005 C27.500,14.505 27.255,14.948 26.878,15.221 L26.879,15.221 L18.379,21.222 L18.378,21.221 C18.132,21.400 17.828,21.505 17.500,21.505 C17.179,21.505 16.882,21.405 16.639,21.233 L9.982,16.795 L6.847,18.755 C6.606,18.920 6.314,19.017 6.000,19.017 C5.172,19.017 4.500,18.346 4.500,17.517 C4.500,16.976 4.786,16.503 5.215,16.239 Z" />
                        </svg>
                      </div>
                      <div className="service__text">
                        <span>web design</span>
                        <p>
                          Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                    <div className="service__item _anim_items">
                      <div className="service__icon">
                        <svg
                          className="service_svg service_svg28"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M30.000,23.000 L22.500,23.000 L20.500,23.000 L20.500,25.500 L22.500,27.500 L22.500,28.000 L9.500,28.000 L9.500,27.500 L11.500,25.500 L11.500,23.000 L9.500,23.000 L2.000,23.000 C1.172,23.000 0.500,22.328 0.500,21.499 L0.500,1.500 C0.500,0.671 1.172,0.000 2.000,0.000 L30.000,0.000 C30.828,0.000 31.500,0.671 31.500,1.500 L31.500,21.499 C31.500,22.328 30.828,23.000 30.000,23.000 ZM29.500,2.000 L2.500,2.000 L2.500,19.000 L29.500,19.000 L29.500,2.000 ZM13.000,9.000 C13.414,9.000 13.789,9.168 14.061,9.439 L14.061,9.439 L15.000,10.378 L17.939,7.439 L17.939,7.439 C18.211,7.168 18.586,7.000 19.000,7.000 C19.828,7.000 20.500,7.671 20.500,8.500 C20.500,8.914 20.332,9.289 20.061,9.561 L20.061,9.561 L16.061,13.561 L16.061,13.561 C15.789,13.832 15.414,14.000 15.000,14.000 C14.586,14.000 14.211,13.832 13.939,13.561 L13.939,13.561 L11.939,11.560 L11.939,11.560 C11.668,11.289 11.500,10.914 11.500,10.500 C11.500,9.672 12.172,9.000 13.000,9.000 Z" />
                        </svg>
                      </div>
                      <div className="service__text">
                        <span>creativity</span>
                        <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                  </div>
                  <div className="service__block">
                    <div className="service__item _anim_items">
                      <div className="service__icon">
                        <svg
                          className="service_svg service_svg32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M31.065,25.889 L16.594,31.877 C16.412,31.956 16.211,32.000 16.000,32.000 C15.789,32.000 15.588,31.956 15.406,31.877 L0.935,25.889 C0.387,25.666 -0.000,25.128 -0.000,24.500 L-0.000,1.500 C-0.000,0.671 0.672,0.000 1.500,0.000 C1.703,0.000 1.897,0.041 2.073,0.114 L2.074,0.114 L2.076,0.115 C2.080,0.116 2.085,0.119 2.089,0.120 L16.000,5.877 L29.911,0.120 C29.915,0.119 29.920,0.116 29.924,0.115 L29.927,0.114 L29.927,0.114 C30.103,0.041 30.297,0.000 30.500,0.000 C31.328,0.000 32.000,0.671 32.000,1.500 L32.000,24.500 C32.000,25.128 31.613,25.666 31.065,25.889 ZM14.500,8.503 L3.000,3.744 L3.000,23.497 L14.500,28.256 L14.500,8.503 ZM29.000,3.744 L17.500,8.503 L17.500,28.256 L29.000,23.497 L29.000,3.744 ZM19.879,10.634 L25.379,8.134 L25.379,8.134 C25.568,8.048 25.778,8.000 26.000,8.000 C26.828,8.000 27.500,8.671 27.500,9.500 C27.500,10.107 27.139,10.629 26.621,10.865 L26.621,10.865 L21.121,13.365 L21.121,13.365 C20.931,13.452 20.721,13.500 20.500,13.500 C19.672,13.500 19.000,12.828 19.000,12.000 C19.000,11.393 19.361,10.870 19.879,10.634 ZM19.879,16.134 L19.879,16.134 L25.379,13.634 L25.379,13.634 C25.568,13.548 25.778,13.500 26.000,13.500 C26.828,13.500 27.500,14.171 27.500,15.000 C27.500,15.607 27.139,16.129 26.621,16.365 L21.121,18.866 L21.121,18.865 C20.931,18.951 20.721,19.000 20.500,19.000 C19.672,19.000 19.000,18.328 19.000,17.500 C19.000,16.893 19.361,16.371 19.879,16.134 ZM19.879,21.634 L19.879,21.634 L25.379,19.134 L25.379,19.134 C25.568,19.048 25.778,19.000 26.000,19.000 C26.828,19.000 27.500,19.671 27.500,20.500 C27.500,21.107 27.139,21.629 26.621,21.865 L26.621,21.865 L21.121,24.365 L21.121,24.365 C20.931,24.452 20.721,24.500 20.500,24.500 C19.672,24.500 19.000,23.828 19.000,23.000 C19.000,22.393 19.361,21.870 19.879,21.634 ZM6.000,8.000 C6.221,8.000 6.431,8.048 6.621,8.134 L6.621,8.134 L12.121,10.634 L12.121,10.634 C12.639,10.870 13.000,11.393 13.000,12.000 C13.000,12.828 12.328,13.500 11.500,13.500 C11.278,13.500 11.068,13.452 10.879,13.365 L10.879,13.365 L5.379,10.865 L5.379,10.865 C4.861,10.629 4.500,10.107 4.500,9.500 C4.500,8.671 5.172,8.000 6.000,8.000 ZM6.000,13.500 C6.221,13.500 6.431,13.548 6.621,13.634 L6.621,13.634 L12.121,16.134 L12.121,16.134 C12.639,16.371 13.000,16.893 13.000,17.500 C13.000,18.328 12.328,19.000 11.500,19.000 C11.278,19.000 11.068,18.951 10.879,18.865 L10.879,18.866 L5.379,16.365 L5.379,16.365 C4.861,16.129 4.500,15.607 4.500,15.000 C4.500,14.171 5.172,13.500 6.000,13.500 ZM6.000,19.000 C6.221,19.000 6.431,19.048 6.621,19.134 L6.621,19.134 L12.121,21.634 L12.121,21.634 C12.639,21.870 13.000,22.393 13.000,23.000 C13.000,23.828 12.328,24.500 11.500,24.500 C11.278,24.500 11.068,24.452 10.879,24.365 L10.879,24.365 L5.379,21.865 L5.379,21.865 C4.861,21.629 4.500,21.107 4.500,20.500 C4.500,19.671 5.172,19.000 6.000,19.000 Z" />
                        </svg>
                      </div>
                      <div className="service__text">
                        <span>seo</span>
                        <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                      </div>
                    </div>
                    <div className="service__item _anim_items">
                      <div className="service__icon">
                        <svg
                          className="service_svg service_svg31"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M32.000,16.500 C32.000,17.328 31.328,18.000 30.500,18.000 C30.105,18.000 29.748,17.844 29.480,17.594 L29.477,17.598 L16.038,4.159 L16.038,4.159 L16.000,4.122 L16.000,4.122 L2.554,17.569 L2.553,17.568 C2.282,17.835 1.910,18.000 1.500,18.000 C0.672,18.000 -0.000,17.328 -0.000,16.500 C-0.000,16.075 0.177,15.692 0.461,15.419 L14.919,0.960 C15.192,0.677 15.575,0.500 16.000,0.500 L16.000,0.500 L16.000,0.500 C16.000,0.500 16.000,0.500 16.001,0.500 C16.027,0.500 16.053,0.500 16.080,0.502 C16.084,0.502 16.088,0.503 16.092,0.503 C16.115,0.504 16.137,0.506 16.160,0.509 C16.161,0.509 16.162,0.509 16.164,0.509 C16.531,0.549 16.858,0.721 17.097,0.977 L17.098,0.976 L23.000,6.878 L23.000,5.500 C23.000,4.671 23.671,4.000 24.500,4.000 C25.328,4.000 26.000,4.671 26.000,5.500 L26.000,9.878 L31.598,15.476 L31.594,15.480 C31.844,15.748 32.000,16.105 32.000,16.500 ZM29.000,19.000 L29.000,23.500 L29.000,25.500 L29.000,29.500 C29.000,30.328 28.328,31.000 27.500,31.000 L24.500,31.000 L24.500,19.000 L18.500,19.000 L18.500,31.000 L4.500,31.000 C3.672,31.000 3.000,30.328 3.000,29.500 L3.000,25.500 L3.000,23.500 L3.000,19.000 L16.000,6.000 L29.000,19.000 ZM13.500,19.000 L7.500,19.000 L7.500,25.000 L13.500,25.000 L13.500,19.000 Z" />
                        </svg>
                      </div>
                      <div className="service__text">
                        <span>css/html</span>
                        <p>Lorem dolor sit amet, consectetur adipiscing elit, sed do tempor.</p>
                      </div>
                    </div>
                    <div className="service__item _anim_items">
                      <div className="service__icon">
                        <svg
                          className="service_svg service_svg32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M30.500,32.000 L1.500,32.000 C0.671,32.000 -0.000,31.328 -0.000,30.500 L-0.000,1.500 C-0.000,0.671 0.671,0.000 1.500,0.000 L30.500,0.000 C31.328,0.000 32.000,0.671 32.000,1.500 L32.000,30.500 C32.000,31.328 31.328,32.000 30.500,32.000 ZM29.000,3.000 L3.000,3.000 L3.000,29.000 L29.000,29.000 L29.000,3.000 ZM6.500,4.500 L12.000,4.500 L12.000,4.500 C12.828,4.500 13.500,5.171 13.500,6.000 C13.500,6.828 12.828,7.500 12.000,7.500 L12.000,7.500 L7.500,7.500 L7.500,12.000 L7.500,12.000 C7.500,12.828 6.828,13.500 6.000,13.500 C5.172,13.500 4.500,12.828 4.500,12.000 L4.500,12.000 L4.500,6.500 L4.500,6.500 L4.500,4.500 L6.500,4.500 L6.500,4.500 ZM4.500,20.000 L4.500,20.000 C4.500,19.171 5.172,18.500 6.000,18.500 C6.828,18.500 7.500,19.171 7.500,20.000 L7.500,20.000 L7.500,24.499 L12.000,24.499 L12.000,24.500 C12.828,24.500 13.500,25.171 13.500,26.000 C13.500,26.828 12.828,27.500 12.000,27.500 L12.000,27.500 L6.500,27.500 L6.500,27.500 L4.500,27.500 L4.500,25.500 L4.500,25.500 L4.500,20.000 ZM20.000,4.500 L20.000,4.500 L25.500,4.500 L25.500,4.500 L27.500,4.500 L27.500,6.500 L27.500,6.500 L27.500,12.000 L27.500,12.000 C27.500,12.828 26.828,13.500 26.000,13.500 C25.172,13.500 24.500,12.828 24.500,12.000 L24.500,12.000 L24.500,7.500 L20.000,7.500 L20.000,7.500 C19.172,7.500 18.500,6.828 18.500,6.000 C18.500,5.171 19.172,4.500 20.000,4.500 ZM20.000,24.500 L20.000,24.499 L24.500,24.499 L24.500,20.000 L24.500,20.000 C24.500,19.171 25.172,18.500 26.000,18.500 C26.828,18.500 27.500,19.171 27.500,20.000 L27.500,20.000 L27.500,25.500 L27.500,25.500 L27.500,27.500 L25.500,27.500 L25.500,27.500 L20.000,27.500 L20.000,27.500 C19.172,27.500 18.500,26.828 18.500,26.000 C18.500,25.171 19.172,24.500 20.000,24.500 Z" />
                        </svg>
                      </div>
                      <div className="service__text">
                        <span>digital</span>
                        <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="feauture">
              <div className="container">
                <div className="feauture__row">
                  <div className="feauture__title __decoration-red-line _title _anim_items">
                    <div className="title_span_anim _anim_items">
                      <span>For all devices</span>
                    </div>
                    <div className="title_h1_anim _anim_items">
                      <h1>unique design</h1>
                    </div>
                  </div>
                  <div className="feauture__images _anim_items">
                    <img
                      className="feauture__display"
                      src="/mogo/css/img/feauture/displaybg767x1024.png"
                      alt="display"
                    />
                    <img
                      className="feauture__phone"
                      src="/mogo/css/img/feauture/phone.png"
                      alt="phone"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="service2">
              <div className="container">
                <div className="service2__row">
                  <div className="service2__title __decoration-red-line _title _anim_items">
                    <div className="title_span_anim _anim_items">
                      <span>Service</span>
                    </div>
                    <div className="title_h1_anim _anim_items">
                      <h1>what we do</h1>
                    </div>
                  </div>
                  <div className="service2__text _text _anim_items">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <div className="service2__body">
                    <div className="service2__image _anim_items">
                      <img src="/mogo/css/img/service2/imageservice2.png" alt="photo" />
                    </div>
                    <div className="service2__items">
                      <div className="service2__item _anim_items">
                        <button className="service2__button activeBtn" id="service2__photography">
                          <span>
                            <svg
                              className="service2__icon"
                              id="service2__icon-photography"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M30.000,23.999 C30.000,24.650 29.581,25.199 29.000,25.406 L29.000,27.089 C29.581,27.296 30.000,27.846 30.000,28.498 C30.000,29.326 29.328,29.999 28.500,29.999 C27.848,29.999 27.298,29.579 27.092,28.998 L25.408,28.998 C25.201,29.579 24.652,29.999 24.000,29.999 C23.348,29.999 22.798,29.579 22.592,28.998 L20.908,28.998 C20.701,29.579 20.152,29.999 19.500,29.999 C18.848,29.999 18.299,29.579 18.092,28.998 L16.408,28.998 C16.201,29.579 15.652,29.999 15.000,29.999 C14.348,29.999 13.798,29.579 13.592,28.998 L11.908,28.998 C11.702,29.579 11.152,29.999 10.500,29.999 C9.848,29.999 9.298,29.579 9.092,28.998 L7.408,28.998 C7.202,29.579 6.652,29.999 6.000,29.999 C5.348,29.999 4.798,29.579 4.592,28.998 L2.908,28.998 C2.701,29.579 2.152,29.999 1.500,29.999 C0.672,29.999 -0.000,29.326 -0.000,28.498 C-0.000,27.846 0.419,27.296 1.000,27.089 L1.000,25.406 C0.419,25.199 -0.000,24.650 -0.000,23.999 C-0.000,23.345 0.419,22.797 1.000,22.590 L1.000,20.907 C0.419,20.699 -0.000,20.150 -0.000,19.498 C-0.000,18.847 0.419,18.297 1.000,18.090 L1.000,16.406 C0.419,16.200 -0.000,15.651 -0.000,14.999 C-0.000,14.347 0.419,13.797 1.000,13.589 L1.000,11.906 C0.419,11.700 -0.000,11.151 -0.000,10.498 C-0.000,9.846 0.419,9.296 1.000,9.091 L1.000,7.406 C0.419,7.199 -0.000,6.650 -0.000,5.998 C-0.000,5.346 0.419,4.796 1.000,4.590 L1.000,2.905 C0.419,2.700 -0.000,2.150 -0.000,1.498 C-0.000,0.669 0.672,-0.001 1.500,-0.001 C2.152,-0.001 2.701,0.416 2.908,0.999 L4.592,0.999 C4.798,0.416 5.348,-0.001 6.000,-0.001 C6.652,-0.001 7.202,0.416 7.408,0.999 L9.092,0.999 C9.298,0.416 9.848,-0.001 10.500,-0.001 C11.152,-0.001 11.702,0.416 11.908,0.999 L13.592,0.999 C13.798,0.416 14.348,-0.001 15.000,-0.001 C15.652,-0.001 16.201,0.416 16.408,0.999 L18.092,0.999 C18.299,0.416 18.848,-0.001 19.500,-0.001 C20.152,-0.001 20.701,0.416 20.908,0.999 L22.592,0.999 C22.798,0.416 23.348,-0.001 24.000,-0.001 C24.652,-0.001 25.201,0.416 25.408,0.999 L27.092,0.999 C27.298,0.416 27.848,-0.001 28.500,-0.001 C29.328,-0.001 30.000,0.669 30.000,1.498 C30.000,2.150 29.581,2.700 29.000,2.905 L29.000,4.590 C29.581,4.796 30.000,5.346 30.000,5.998 C30.000,6.650 29.581,7.199 29.000,7.406 L29.000,9.091 C29.581,9.296 30.000,9.846 30.000,10.498 C30.000,11.151 29.581,11.700 29.000,11.906 L29.000,13.589 C29.581,13.797 30.000,14.347 30.000,14.999 C30.000,15.651 29.581,16.200 29.000,16.406 L29.000,18.090 C29.581,18.297 30.000,18.847 30.000,19.498 C30.000,20.150 29.581,20.699 29.000,20.907 L29.000,22.590 C29.581,22.797 30.000,23.345 30.000,23.999 ZM26.000,3.997 L4.000,3.997 L4.000,25.998 L26.000,25.998 L26.000,3.997 ZM13.000,19.998 L20.000,11.499 L24.500,18.499 L24.500,24.498 L5.500,24.498 L11.500,18.499 L13.000,19.998 ZM10.000,12.998 C8.343,12.998 7.000,11.655 7.000,9.997 C7.000,8.340 8.343,6.998 10.000,6.998 C11.657,6.998 13.000,8.340 13.000,9.997 C13.000,11.655 11.657,12.998 10.000,12.998 Z" />
                            </svg>
                            photography
                          </span>
                          <p>
                            <svg
                              className="service__arrow-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M3.138,11.474 L10.997,3.616 L18.958,11.578 L18.959,11.578 C19.229,11.837 19.596,11.998 20.000,11.998 C20.828,11.998 21.500,11.326 21.500,10.497 C21.500,10.093 21.340,9.726 21.079,9.456 L21.080,9.456 L12.080,0.456 L12.079,0.456 C11.807,0.174 11.424,-0.002 11.000,-0.002 C10.999,-0.002 10.998,-0.002 10.997,-0.002 C10.996,-0.002 10.994,-0.002 10.993,-0.002 C10.569,-0.002 10.187,0.174 9.914,0.456 L9.914,0.456 L0.913,9.456 L0.917,9.460 C0.659,9.730 0.500,10.095 0.500,10.497 C0.500,11.326 1.172,11.998 2.000,11.998 C2.455,11.998 2.862,11.794 3.138,11.474 Z" />
                            </svg>
                          </p>
                        </button>
                        <div className="service2__hidden-text service2_active">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                      <div className="service2__item _anim_items">
                        <button className="service2__button" id="service2__creativity">
                          <span>
                            <svg
                              className="service2__icon"
                              id="service2__icon-creativity"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M26.500,16.497 L23.500,16.497 C22.672,16.497 22.000,15.827 22.000,14.998 L22.000,8.998 C22.000,8.170 22.672,7.499 23.500,7.499 L26.500,7.499 C27.328,7.499 28.000,8.170 28.000,8.998 L28.000,14.998 C28.000,15.827 27.328,16.497 26.500,16.497 ZM23.500,1.497 C23.500,0.669 24.172,-0.002 25.000,-0.002 C25.828,-0.002 26.500,0.669 26.500,1.497 L26.500,5.998 L23.500,5.998 L23.500,1.497 ZM15.500,24.497 L12.500,24.497 C11.672,24.497 11.000,23.827 11.000,22.998 L11.000,16.998 C11.000,16.170 11.672,15.498 12.500,15.498 L15.500,15.498 C16.328,15.498 17.000,16.170 17.000,16.998 L17.000,22.998 C17.000,23.827 16.328,24.497 15.500,24.497 ZM12.500,1.497 C12.500,0.669 13.172,-0.002 14.000,-0.002 C14.828,-0.002 15.500,0.669 15.500,1.497 L15.500,13.998 L12.500,13.998 L12.500,1.497 ZM4.500,20.498 L1.500,20.498 C0.672,20.498 -0.000,19.826 -0.000,18.997 L-0.000,12.997 C-0.000,12.169 0.672,11.498 1.500,11.498 L4.500,11.498 C5.328,11.498 6.000,12.169 6.000,12.997 L6.000,18.997 C6.000,19.826 5.328,20.498 4.500,20.498 ZM1.500,1.497 C1.500,0.669 2.172,-0.002 3.000,-0.002 C3.828,-0.002 4.500,0.669 4.500,1.497 L4.500,9.999 L1.500,9.999 L1.500,1.497 ZM4.500,30.497 C4.500,31.326 3.828,31.998 3.000,31.998 C2.172,31.998 1.500,31.326 1.500,30.497 L1.500,21.998 L4.500,21.998 L4.500,30.497 ZM15.500,30.497 C15.500,31.326 14.828,31.998 14.000,31.998 C13.172,31.998 12.500,31.326 12.500,30.497 L12.500,25.997 L15.500,25.997 L15.500,30.497 ZM26.500,30.497 C26.500,31.326 25.828,31.998 25.000,31.998 C24.172,31.998 23.500,31.326 23.500,30.497 L23.500,17.999 L26.500,17.999 L26.500,30.497 Z" />
                            </svg>
                            creativity
                          </span>
                          <p>
                            <svg
                              className="service__arrow-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M3.138,11.474 L10.997,3.616 L18.958,11.578 L18.959,11.578 C19.229,11.837 19.596,11.998 20.000,11.998 C20.828,11.998 21.500,11.326 21.500,10.497 C21.500,10.093 21.340,9.726 21.079,9.456 L21.080,9.456 L12.080,0.456 L12.079,0.456 C11.807,0.174 11.424,-0.002 11.000,-0.002 C10.999,-0.002 10.998,-0.002 10.997,-0.002 C10.996,-0.002 10.994,-0.002 10.993,-0.002 C10.569,-0.002 10.187,0.174 9.914,0.456 L9.914,0.456 L0.913,9.456 L0.917,9.460 C0.659,9.730 0.500,10.095 0.500,10.497 C0.500,11.326 1.172,11.998 2.000,11.998 C2.455,11.998 2.862,11.794 3.138,11.474 Z" />
                            </svg>
                          </p>
                        </button>
                        <div className="service2__hidden-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                      <div className="service2__item _anim_items">
                        <button className="service2__button" id="service2__web-design">
                          <span>
                            <svg
                              className="service2__icon"
                              id="service2__icon-web-design"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M16.000,31.998 C7.164,31.998 -0.000,24.835 -0.000,15.997 C-0.000,7.162 7.164,-0.002 16.000,-0.002 C24.837,-0.002 32.000,7.162 32.000,15.997 C32.000,24.835 24.837,31.998 16.000,31.998 ZM16.000,2.998 C8.820,2.998 3.000,8.818 3.000,15.997 C3.000,23.177 8.820,28.998 16.000,28.998 C23.180,28.998 29.000,23.177 29.000,15.997 C29.000,8.818 23.180,2.998 16.000,2.998 ZM16.000,25.497 C10.753,25.497 6.500,21.244 6.500,15.997 C6.500,10.752 10.753,6.498 16.000,6.498 C21.247,6.498 25.500,10.752 25.500,15.997 C25.500,21.244 21.247,25.497 16.000,25.497 ZM16.000,9.498 C12.410,9.498 9.500,12.408 9.500,15.997 C9.500,19.587 12.410,22.499 16.000,22.499 C19.590,22.499 22.500,19.587 22.500,15.997 C22.500,12.408 19.590,9.498 16.000,9.498 ZM16.000,18.999 C14.343,18.999 13.000,17.655 13.000,15.997 C13.000,14.341 14.343,12.999 16.000,12.999 C17.657,12.999 19.000,14.341 19.000,15.997 C19.000,17.655 17.657,18.999 16.000,18.999 Z" />
                            </svg>
                            web design
                          </span>
                          <p>
                            <svg
                              className="service__arrow-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M3.138,11.474 L10.997,3.616 L18.958,11.578 L18.959,11.578 C19.229,11.837 19.596,11.998 20.000,11.998 C20.828,11.998 21.500,11.326 21.500,10.497 C21.500,10.093 21.340,9.726 21.079,9.456 L21.080,9.456 L12.080,0.456 L12.079,0.456 C11.807,0.174 11.424,-0.002 11.000,-0.002 C10.999,-0.002 10.998,-0.002 10.997,-0.002 C10.996,-0.002 10.994,-0.002 10.993,-0.002 C10.569,-0.002 10.187,0.174 9.914,0.456 L9.914,0.456 L0.913,9.456 L0.917,9.460 C0.659,9.730 0.500,10.095 0.500,10.497 C0.500,11.326 1.172,11.998 2.000,11.998 C2.455,11.998 2.862,11.794 3.138,11.474 Z" />
                            </svg>
                          </p>
                        </button>
                        <div className="service2__hidden-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="quote">
              <div className="container">
                <div className="quote__row _anim_items">
                  <div className="quote__left-arrow _left-arrow">
                    <button id="quote__left-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path d="M11.477,18.859 L3.619,11.002 L11.581,3.039 L11.580,3.039 C11.839,2.769 12.000,2.403 12.000,1.997 C12.000,1.169 11.329,0.498 10.501,0.498 C10.096,0.498 9.730,0.657 9.459,0.919 L9.459,0.918 L0.459,9.918 L0.460,9.919 C0.177,10.191 0.001,10.574 0.001,10.998 C0.001,10.999 0.001,11.001 0.001,11.002 C0.001,11.003 0.001,11.004 0.001,11.005 C0.001,11.428 0.177,11.811 0.460,12.084 L0.459,12.084 L9.459,21.084 L9.462,21.081 C9.732,21.339 10.098,21.498 10.501,21.498 C11.329,21.498 12.000,20.827 12.000,19.998 C12.000,19.543 11.798,19.135 11.477,18.859 Z" />
                      </svg>
                    </button>
                  </div>
                  <div className="quote__slider text-slider">
                    <div className="quote__track text-slider__track">
                      <div className="quote__item text-slider__item">
                        <div className="quote__image text-slider__image">
                          <svg
                            className="quote__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M60.000,35.998 L59.100,35.998 L59.100,35.998 L58.000,35.998 L58.000,40.999 L58.000,40.999 C58.000,41.204 57.979,41.408 57.939,41.603 C57.911,41.739 57.863,41.866 57.817,41.995 C57.797,42.053 57.787,42.112 57.764,42.165 C57.716,42.280 57.649,42.385 57.588,42.492 C57.553,42.552 57.527,42.618 57.488,42.676 C57.390,42.820 57.276,42.954 57.154,43.079 C57.142,43.092 57.134,43.108 57.121,43.119 C56.587,43.655 55.850,43.985 55.037,43.995 C55.025,43.995 55.013,43.997 55.000,43.997 L55.000,43.997 L55.000,43.997 C54.172,43.997 53.422,43.663 52.879,43.119 L45.757,35.998 L45.400,35.998 L45.400,35.998 L18.000,35.998 C16.343,35.998 15.000,34.655 15.000,32.998 L15.000,2.998 C15.000,1.341 16.343,-0.003 18.000,-0.003 L60.000,-0.003 C61.657,-0.003 63.000,1.341 63.000,2.998 L63.000,32.998 C63.000,34.655 61.657,35.998 60.000,35.998 ZM44.515,38.998 L50.841,45.325 L50.849,45.317 C51.928,46.354 53.386,46.999 55.000,46.999 L55.000,48.999 C55.000,50.655 53.657,51.998 52.000,51.998 L52.000,51.998 L30.900,51.998 L30.900,51.998 L24.000,51.998 L24.000,51.998 L21.000,51.998 L21.000,51.998 L20.243,51.998 L12.121,60.120 C11.578,60.662 10.828,60.999 10.000,60.999 L10.000,60.999 L10.000,60.999 C9.987,60.999 9.976,60.995 9.963,60.995 C9.149,60.984 8.413,60.654 7.879,60.120 C7.866,60.107 7.858,60.091 7.846,60.079 C7.724,59.954 7.610,59.820 7.512,59.675 C7.473,59.618 7.448,59.553 7.413,59.492 C7.351,59.384 7.284,59.280 7.236,59.166 C7.213,59.112 7.203,59.052 7.183,58.996 C7.137,58.866 7.089,58.740 7.061,58.602 C7.021,58.408 7.000,58.205 7.000,57.997 L7.000,57.997 L7.000,51.998 L6.500,51.998 L6.500,51.998 L2.996,51.998 C1.341,51.995 0.000,50.654 0.000,48.999 L0.000,14.999 C0.000,14.998 0.000,14.998 0.000,14.998 C0.000,13.340 1.343,11.998 3.000,11.998 L12.000,11.998 L12.000,32.998 C12.000,36.311 14.686,38.998 18.000,38.998 L44.515,38.998 Z" />
                          </svg>
                        </div>
                        <div className="quote__text-content text-slider__text-content">
                          <div className="quote__text text-slider__text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.”
                          </div>
                          <div className="quote__author-name text-slider__author-name">
                            Joshua Earle
                          </div>
                        </div>
                      </div>
                      <div className="quote__item text-slider__item">
                        <div className="quote__image text-slider__image">
                          <svg
                            className="quote__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M60.000,35.998 L59.100,35.998 L59.100,35.998 L58.000,35.998 L58.000,40.999 L58.000,40.999 C58.000,41.204 57.979,41.408 57.939,41.603 C57.911,41.739 57.863,41.866 57.817,41.995 C57.797,42.053 57.787,42.112 57.764,42.165 C57.716,42.280 57.649,42.385 57.588,42.492 C57.553,42.552 57.527,42.618 57.488,42.676 C57.390,42.820 57.276,42.954 57.154,43.079 C57.142,43.092 57.134,43.108 57.121,43.119 C56.587,43.655 55.850,43.985 55.037,43.995 C55.025,43.995 55.013,43.997 55.000,43.997 L55.000,43.997 L55.000,43.997 C54.172,43.997 53.422,43.663 52.879,43.119 L45.757,35.998 L45.400,35.998 L45.400,35.998 L18.000,35.998 C16.343,35.998 15.000,34.655 15.000,32.998 L15.000,2.998 C15.000,1.341 16.343,-0.003 18.000,-0.003 L60.000,-0.003 C61.657,-0.003 63.000,1.341 63.000,2.998 L63.000,32.998 C63.000,34.655 61.657,35.998 60.000,35.998 ZM44.515,38.998 L50.841,45.325 L50.849,45.317 C51.928,46.354 53.386,46.999 55.000,46.999 L55.000,48.999 C55.000,50.655 53.657,51.998 52.000,51.998 L52.000,51.998 L30.900,51.998 L30.900,51.998 L24.000,51.998 L24.000,51.998 L21.000,51.998 L21.000,51.998 L20.243,51.998 L12.121,60.120 C11.578,60.662 10.828,60.999 10.000,60.999 L10.000,60.999 L10.000,60.999 C9.987,60.999 9.976,60.995 9.963,60.995 C9.149,60.984 8.413,60.654 7.879,60.120 C7.866,60.107 7.858,60.091 7.846,60.079 C7.724,59.954 7.610,59.820 7.512,59.675 C7.473,59.618 7.448,59.553 7.413,59.492 C7.351,59.384 7.284,59.280 7.236,59.166 C7.213,59.112 7.203,59.052 7.183,58.996 C7.137,58.866 7.089,58.740 7.061,58.602 C7.021,58.408 7.000,58.205 7.000,57.997 L7.000,57.997 L7.000,51.998 L6.500,51.998 L6.500,51.998 L2.996,51.998 C1.341,51.995 0.000,50.654 0.000,48.999 L0.000,14.999 C0.000,14.998 0.000,14.998 0.000,14.998 C0.000,13.340 1.343,11.998 3.000,11.998 L12.000,11.998 L12.000,32.998 C12.000,36.311 14.686,38.998 18.000,38.998 L44.515,38.998 Z" />
                          </svg>
                        </div>
                        <div className="quote__text-content text-slider__text-content">
                          <div className="quote__text text-slider__text">
                            “Nostrud exercitation lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna et
                            dolore magna aliqua. Ut enim ad minim veniam, quis.”
                          </div>
                          <div className="quote__author-name text-slider__author-name">
                            Matthew Dix
                          </div>
                        </div>
                      </div>
                      <div className="quote__item text-slider__item">
                        <div className="quote__image text-slider__image">
                          <svg
                            className="quote__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M60.000,35.998 L59.100,35.998 L59.100,35.998 L58.000,35.998 L58.000,40.999 L58.000,40.999 C58.000,41.204 57.979,41.408 57.939,41.603 C57.911,41.739 57.863,41.866 57.817,41.995 C57.797,42.053 57.787,42.112 57.764,42.165 C57.716,42.280 57.649,42.385 57.588,42.492 C57.553,42.552 57.527,42.618 57.488,42.676 C57.390,42.820 57.276,42.954 57.154,43.079 C57.142,43.092 57.134,43.108 57.121,43.119 C56.587,43.655 55.850,43.985 55.037,43.995 C55.025,43.995 55.013,43.997 55.000,43.997 L55.000,43.997 L55.000,43.997 C54.172,43.997 53.422,43.663 52.879,43.119 L45.757,35.998 L45.400,35.998 L45.400,35.998 L18.000,35.998 C16.343,35.998 15.000,34.655 15.000,32.998 L15.000,2.998 C15.000,1.341 16.343,-0.003 18.000,-0.003 L60.000,-0.003 C61.657,-0.003 63.000,1.341 63.000,2.998 L63.000,32.998 C63.000,34.655 61.657,35.998 60.000,35.998 ZM44.515,38.998 L50.841,45.325 L50.849,45.317 C51.928,46.354 53.386,46.999 55.000,46.999 L55.000,48.999 C55.000,50.655 53.657,51.998 52.000,51.998 L52.000,51.998 L30.900,51.998 L30.900,51.998 L24.000,51.998 L24.000,51.998 L21.000,51.998 L21.000,51.998 L20.243,51.998 L12.121,60.120 C11.578,60.662 10.828,60.999 10.000,60.999 L10.000,60.999 L10.000,60.999 C9.987,60.999 9.976,60.995 9.963,60.995 C9.149,60.984 8.413,60.654 7.879,60.120 C7.866,60.107 7.858,60.091 7.846,60.079 C7.724,59.954 7.610,59.820 7.512,59.675 C7.473,59.618 7.448,59.553 7.413,59.492 C7.351,59.384 7.284,59.280 7.236,59.166 C7.213,59.112 7.203,59.052 7.183,58.996 C7.137,58.866 7.089,58.740 7.061,58.602 C7.021,58.408 7.000,58.205 7.000,57.997 L7.000,57.997 L7.000,51.998 L6.500,51.998 L6.500,51.998 L2.996,51.998 C1.341,51.995 0.000,50.654 0.000,48.999 L0.000,14.999 C0.000,14.998 0.000,14.998 0.000,14.998 C0.000,13.340 1.343,11.998 3.000,11.998 L12.000,11.998 L12.000,32.998 C12.000,36.311 14.686,38.998 18.000,38.998 L44.515,38.998 Z" />
                          </svg>
                        </div>
                        <div className="quote__text-content text-slider__text-content">
                          <div className="quote__text text-slider__text">
                            “Consectetur adipiscing elit, sed do sed do eiusmod tempor incididunt ut
                            labore et dolore magna et dolore magna aliqua. Ut enim ad minim veniam,
                            lorem ipsum dolor sit amet, quis nostrud exercitation.”
                          </div>
                          <div className="quote__author-name text-slider__author-name">Jon Doe</div>
                        </div>
                      </div>
                      <div className="quote__item text-slider__item">
                        <div className="quote__image text-slider__image">
                          <svg
                            className="quote__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M60.000,35.998 L59.100,35.998 L59.100,35.998 L58.000,35.998 L58.000,40.999 L58.000,40.999 C58.000,41.204 57.979,41.408 57.939,41.603 C57.911,41.739 57.863,41.866 57.817,41.995 C57.797,42.053 57.787,42.112 57.764,42.165 C57.716,42.280 57.649,42.385 57.588,42.492 C57.553,42.552 57.527,42.618 57.488,42.676 C57.390,42.820 57.276,42.954 57.154,43.079 C57.142,43.092 57.134,43.108 57.121,43.119 C56.587,43.655 55.850,43.985 55.037,43.995 C55.025,43.995 55.013,43.997 55.000,43.997 L55.000,43.997 L55.000,43.997 C54.172,43.997 53.422,43.663 52.879,43.119 L45.757,35.998 L45.400,35.998 L45.400,35.998 L18.000,35.998 C16.343,35.998 15.000,34.655 15.000,32.998 L15.000,2.998 C15.000,1.341 16.343,-0.003 18.000,-0.003 L60.000,-0.003 C61.657,-0.003 63.000,1.341 63.000,2.998 L63.000,32.998 C63.000,34.655 61.657,35.998 60.000,35.998 ZM44.515,38.998 L50.841,45.325 L50.849,45.317 C51.928,46.354 53.386,46.999 55.000,46.999 L55.000,48.999 C55.000,50.655 53.657,51.998 52.000,51.998 L52.000,51.998 L30.900,51.998 L30.900,51.998 L24.000,51.998 L24.000,51.998 L21.000,51.998 L21.000,51.998 L20.243,51.998 L12.121,60.120 C11.578,60.662 10.828,60.999 10.000,60.999 L10.000,60.999 L10.000,60.999 C9.987,60.999 9.976,60.995 9.963,60.995 C9.149,60.984 8.413,60.654 7.879,60.120 C7.866,60.107 7.858,60.091 7.846,60.079 C7.724,59.954 7.610,59.820 7.512,59.675 C7.473,59.618 7.448,59.553 7.413,59.492 C7.351,59.384 7.284,59.280 7.236,59.166 C7.213,59.112 7.203,59.052 7.183,58.996 C7.137,58.866 7.089,58.740 7.061,58.602 C7.021,58.408 7.000,58.205 7.000,57.997 L7.000,57.997 L7.000,51.998 L6.500,51.998 L6.500,51.998 L2.996,51.998 C1.341,51.995 0.000,50.654 0.000,48.999 L0.000,14.999 C0.000,14.998 0.000,14.998 0.000,14.998 C0.000,13.340 1.343,11.998 3.000,11.998 L12.000,11.998 L12.000,32.998 C12.000,36.311 14.686,38.998 18.000,38.998 L44.515,38.998 Z" />
                          </svg>
                        </div>
                        <div className="quote__text-content text-slider__text-content">
                          <div className="quote__text text-slider__text">
                            “Incididunt ut labore adipiscing elit, sed do eiusmod tempor incididunt
                            et dolore magna lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”
                          </div>
                          <div className="quote__author-name text-slider__author-name">
                            Christopher Campbell
                          </div>
                        </div>
                      </div>
                      <div className="quote__item text-slider__item">
                        <div className="quote__image text-slider__image">
                          <svg
                            className="quote__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M60.000,35.998 L59.100,35.998 L59.100,35.998 L58.000,35.998 L58.000,40.999 L58.000,40.999 C58.000,41.204 57.979,41.408 57.939,41.603 C57.911,41.739 57.863,41.866 57.817,41.995 C57.797,42.053 57.787,42.112 57.764,42.165 C57.716,42.280 57.649,42.385 57.588,42.492 C57.553,42.552 57.527,42.618 57.488,42.676 C57.390,42.820 57.276,42.954 57.154,43.079 C57.142,43.092 57.134,43.108 57.121,43.119 C56.587,43.655 55.850,43.985 55.037,43.995 C55.025,43.995 55.013,43.997 55.000,43.997 L55.000,43.997 L55.000,43.997 C54.172,43.997 53.422,43.663 52.879,43.119 L45.757,35.998 L45.400,35.998 L45.400,35.998 L18.000,35.998 C16.343,35.998 15.000,34.655 15.000,32.998 L15.000,2.998 C15.000,1.341 16.343,-0.003 18.000,-0.003 L60.000,-0.003 C61.657,-0.003 63.000,1.341 63.000,2.998 L63.000,32.998 C63.000,34.655 61.657,35.998 60.000,35.998 ZM44.515,38.998 L50.841,45.325 L50.849,45.317 C51.928,46.354 53.386,46.999 55.000,46.999 L55.000,48.999 C55.000,50.655 53.657,51.998 52.000,51.998 L52.000,51.998 L30.900,51.998 L30.900,51.998 L24.000,51.998 L24.000,51.998 L21.000,51.998 L21.000,51.998 L20.243,51.998 L12.121,60.120 C11.578,60.662 10.828,60.999 10.000,60.999 L10.000,60.999 L10.000,60.999 C9.987,60.999 9.976,60.995 9.963,60.995 C9.149,60.984 8.413,60.654 7.879,60.120 C7.866,60.107 7.858,60.091 7.846,60.079 C7.724,59.954 7.610,59.820 7.512,59.675 C7.473,59.618 7.448,59.553 7.413,59.492 C7.351,59.384 7.284,59.280 7.236,59.166 C7.213,59.112 7.203,59.052 7.183,58.996 C7.137,58.866 7.089,58.740 7.061,58.602 C7.021,58.408 7.000,58.205 7.000,57.997 L7.000,57.997 L7.000,51.998 L6.500,51.998 L6.500,51.998 L2.996,51.998 C1.341,51.995 0.000,50.654 0.000,48.999 L0.000,14.999 C0.000,14.998 0.000,14.998 0.000,14.998 C0.000,13.340 1.343,11.998 3.000,11.998 L12.000,11.998 L12.000,32.998 C12.000,36.311 14.686,38.998 18.000,38.998 L44.515,38.998 Z" />
                          </svg>
                        </div>
                        <div className="quote__text-content text-slider__text-content">
                          <div className="quote__text text-slider__text">
                            “Sed do eiusmod tempor. sed do eiusmod tempor. lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, incididunt ut labore et dolore magna
                            sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.”
                          </div>
                          <div className="quote__author-name text-slider__author-name">
                            Michael Fertig
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quote__right-arrow _right-arrow">
                    <button id="quote__right-arrow">
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
            <section className="team" id="team">
              <div className="container">
                <div className="team__row">
                  <div className="team__title __decoration-red-line _title _anim_items">
                    <div className="title_span_anim _anim_items">
                      <span>Who we are</span>
                    </div>
                    <div className="title_h1_anim _anim_items">
                      <h1>meet our team</h1>
                    </div>
                  </div>
                  <div className="team__text _text _anim_items" id="team__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <div className="team__body">
                    <div className="team__item">
                      <div className="team__box _anim_items">
                        <button className="team__image team__image_left">
                          <img src="/mogo/css/img/our-team/left.png" alt="human" />
                          <div className="team__hover-item">
                            <a href="#facebook" className="team__icon" id="#facebook">
                              <svg
                                className="team__svg team_svg26h team_svg13w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M12.089,0.199 C12.089,1.675 12.089,4.320 12.089,4.320 C12.089,4.320 9.052,4.017 8.291,5.181 C7.875,5.817 8.122,7.681 8.085,9.019 C9.411,9.019 10.788,9.019 12.114,9.019 C11.774,10.583 11.530,11.643 11.279,12.997 C10.132,12.997 8.063,12.997 8.063,12.997 L8.063,25.801 C8.063,25.801 4.266,25.801 2.481,25.801 C2.482,21.854 2.480,17.249 2.481,13.047 C1.614,13.047 0.973,13.047 0.106,13.047 C0.106,11.572 0.106,10.496 0.106,9.019 C0.947,9.019 1.613,9.019 2.455,9.019 C2.575,6.073 2.620,3.155 4.084,1.669 C5.728,-0.002 7.297,0.199 12.089,0.199 Z" />
                              </svg>
                            </a>
                            <a href="#twitter" className="team__icon" id="#twitter">
                              <svg
                                className="team__svg team_svg22h team_svg26w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M17.513,0.601 C19.547,0.565 20.630,1.306 21.664,2.249 C22.542,2.173 23.683,1.683 24.355,1.341 C24.572,1.223 24.790,1.103 25.008,0.984 C24.624,2.021 24.104,2.833 23.304,3.450 C23.126,3.586 22.950,3.771 22.727,3.858 C22.727,3.862 22.727,3.867 22.727,3.871 C23.867,3.860 24.807,3.345 25.700,3.066 C25.700,3.070 25.700,3.075 25.700,3.079 C25.231,3.824 24.596,4.581 23.919,5.123 C23.646,5.340 23.372,5.557 23.099,5.774 C23.114,6.981 23.081,8.133 22.856,9.147 C21.544,15.042 18.068,19.045 12.567,20.759 C10.591,21.374 7.399,21.627 5.135,21.065 C4.013,20.787 2.999,20.472 2.048,20.057 C1.519,19.825 1.029,19.575 0.561,19.290 C0.407,19.196 0.254,19.102 0.100,19.009 C0.610,19.024 1.208,19.165 1.778,19.073 C2.295,18.989 2.801,19.011 3.278,18.907 C4.466,18.646 5.521,18.301 6.429,17.770 C6.870,17.511 7.539,17.209 7.852,16.837 C7.262,16.848 6.727,16.710 6.289,16.556 C4.590,15.956 3.601,14.853 2.957,13.196 C3.472,13.253 4.955,13.387 5.302,13.094 C4.654,13.058 4.031,12.683 3.585,12.405 C2.218,11.549 1.104,10.115 1.112,7.908 C1.292,7.993 1.471,8.078 1.650,8.163 C1.994,8.308 2.343,8.385 2.752,8.470 C2.925,8.506 3.271,8.607 3.470,8.533 C3.461,8.533 3.453,8.533 3.444,8.533 C3.180,8.226 2.749,8.021 2.483,7.690 C1.606,6.601 0.785,4.924 1.304,2.926 C1.436,2.419 1.645,1.972 1.868,1.559 C1.877,1.563 1.885,1.567 1.894,1.571 C1.996,1.785 2.224,1.942 2.368,2.121 C2.816,2.676 3.368,3.175 3.931,3.615 C5.849,5.116 7.576,6.037 10.350,6.719 C11.054,6.893 11.867,7.025 12.708,7.026 C12.472,6.339 12.548,5.226 12.733,4.561 C13.201,2.887 14.216,1.682 15.706,1.036 C16.062,0.881 16.457,0.767 16.872,0.677 C17.086,0.652 17.299,0.626 17.513,0.601 Z" />
                              </svg>
                            </a>
                            <a href="#pinterest" className="team__icon" id="#pinterest">
                              <svg
                                className="team__svg team_svg26h team_svg21w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M9.051,16.854 C8.842,17.687 8.631,18.560 8.413,19.414 C8.198,20.256 8.008,21.110 7.695,21.884 C7.176,23.165 6.517,24.403 5.652,25.405 C5.077,26.072 5.199,25.806 5.026,25.770 C4.894,25.743 4.883,25.613 4.857,25.425 C4.716,24.407 4.812,23.230 4.864,22.086 C4.924,20.782 5.198,19.698 5.453,18.615 C5.937,16.552 6.399,14.528 6.888,12.451 C6.920,12.313 7.008,12.085 6.978,12.006 C6.756,11.429 6.612,10.911 6.549,10.306 C6.476,9.610 6.532,8.961 6.688,8.362 C6.965,7.304 7.601,6.367 8.582,6.024 C9.206,5.808 9.897,5.906 10.317,6.156 C10.749,6.415 11.046,6.823 11.184,7.402 C11.332,8.017 11.223,8.753 11.104,9.293 C10.837,10.512 10.486,11.427 10.167,12.603 C10.009,13.186 9.830,13.785 9.978,14.415 C10.114,14.993 10.415,15.391 10.825,15.690 C11.251,16.000 11.755,16.169 12.450,16.145 C13.678,16.102 14.531,15.317 15.101,14.577 C16.014,13.392 16.566,11.793 16.776,9.891 C16.843,9.277 16.893,8.572 16.846,7.877 C16.758,6.593 16.357,5.560 15.719,4.760 C15.113,3.998 14.253,3.391 13.207,3.049 C12.170,2.711 10.735,2.598 9.460,2.816 C7.142,3.213 5.508,4.530 4.545,6.349 C4.041,7.301 3.708,8.396 3.708,9.759 C3.708,10.810 3.967,11.624 4.386,12.259 C4.519,12.460 4.714,12.626 4.844,12.856 C5.029,13.182 4.816,13.667 4.725,14.020 C4.615,14.445 4.603,15.032 4.107,15.042 C3.901,15.046 3.643,14.896 3.469,14.799 C2.164,14.078 1.372,12.766 1.047,11.065 C0.849,10.031 0.850,8.826 1.047,7.827 C1.237,6.860 1.591,5.969 1.984,5.246 C2.798,3.743 3.991,2.541 5.443,1.683 C6.559,1.023 7.818,0.560 9.350,0.337 C9.858,0.263 10.384,0.232 10.955,0.206 C12.623,0.127 14.139,0.505 15.281,1.015 C16.486,1.554 17.448,2.271 18.261,3.161 C19.099,4.076 19.709,5.140 20.095,6.470 C20.297,7.162 20.493,7.902 20.493,8.757 C20.493,9.615 20.312,10.370 20.185,11.125 C19.711,13.953 18.366,16.266 16.347,17.583 C15.858,17.902 15.266,18.196 14.593,18.392 C13.926,18.586 13.165,18.732 12.350,18.675 C11.559,18.621 10.911,18.406 10.367,18.098 C9.827,17.793 9.373,17.419 9.051,16.854 Z" />
                              </svg>
                            </a>
                            <a href="#instagram" className="team__icon" id="#instagram">
                              <svg
                                className="team__svg team_svg26h team_svg26w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M22.700,25.800 L3.500,25.800 C1.733,25.800 0.300,24.367 0.300,22.600 L0.300,3.400 C0.300,1.632 1.733,0.200 3.500,0.200 L22.700,0.200 C24.467,0.200 25.900,1.632 25.900,3.400 L25.900,22.600 C25.900,24.367 24.467,25.800 22.700,25.800 ZM13.100,8.039 C11.104,8.039 9.389,9.221 8.602,10.919 L8.597,10.919 C8.589,10.937 8.583,10.956 8.575,10.974 C8.528,11.079 8.487,11.187 8.447,11.296 C8.428,11.348 8.407,11.399 8.390,11.451 C8.353,11.563 8.323,11.676 8.295,11.791 C8.281,11.845 8.265,11.897 8.253,11.951 C8.227,12.072 8.209,12.195 8.192,12.319 C8.185,12.369 8.175,12.418 8.169,12.469 C8.151,12.643 8.140,12.820 8.140,13.000 C8.140,15.739 10.361,17.959 13.100,17.959 C15.839,17.959 18.060,15.739 18.060,13.000 C18.060,12.820 18.049,12.643 18.031,12.469 C18.025,12.418 18.015,12.369 18.008,12.319 C17.991,12.195 17.973,12.072 17.947,11.951 C17.935,11.897 17.919,11.845 17.905,11.791 C17.877,11.676 17.847,11.563 17.810,11.451 C17.793,11.399 17.772,11.348 17.753,11.296 C17.713,11.187 17.672,11.079 17.625,10.974 C17.617,10.956 17.611,10.937 17.603,10.919 L17.598,10.919 C16.811,9.221 15.096,8.039 13.100,8.039 ZM23.020,4.359 C23.020,3.652 22.447,3.080 21.740,3.080 L19.180,3.080 C18.473,3.080 17.900,3.652 17.900,4.359 L17.900,6.920 C17.900,7.627 18.473,8.200 19.180,8.200 L21.740,8.200 C22.447,8.200 23.020,7.627 23.020,6.920 L23.020,4.359 ZM23.020,10.919 L20.660,10.919 C20.842,11.582 20.940,12.280 20.940,13.000 C20.940,17.330 17.430,20.839 13.100,20.839 C8.770,20.839 5.260,17.330 5.260,13.000 C5.260,12.280 5.358,11.582 5.540,10.919 L3.180,10.919 L3.180,21.639 C3.180,22.347 3.753,22.920 4.460,22.920 L21.740,22.920 C22.447,22.920 23.020,22.347 23.020,21.639 L23.020,10.919 Z" />
                              </svg>
                            </a>
                          </div>
                        </button>
                      </div>
                      <div className="team__subtitle _anim_items">
                        <span>Matthew Dix</span>
                        <p>Graphic Design</p>
                      </div>
                    </div>
                    <div className="team__item">
                      <div className="team__box _anim_items">
                        <button className="team__image team__image_center">
                          <img src="/mogo/css/img/our-team/center.png" alt="human" />
                          <div className="team__hover-item">
                            <a href="#facebook" className="team__icon" id="#facebook">
                              <svg
                                className="team__svg team_svg26h team_svg13w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M12.089,0.199 C12.089,1.675 12.089,4.320 12.089,4.320 C12.089,4.320 9.052,4.017 8.291,5.181 C7.875,5.817 8.122,7.681 8.085,9.019 C9.411,9.019 10.788,9.019 12.114,9.019 C11.774,10.583 11.530,11.643 11.279,12.997 C10.132,12.997 8.063,12.997 8.063,12.997 L8.063,25.801 C8.063,25.801 4.266,25.801 2.481,25.801 C2.482,21.854 2.480,17.249 2.481,13.047 C1.614,13.047 0.973,13.047 0.106,13.047 C0.106,11.572 0.106,10.496 0.106,9.019 C0.947,9.019 1.613,9.019 2.455,9.019 C2.575,6.073 2.620,3.155 4.084,1.669 C5.728,-0.002 7.297,0.199 12.089,0.199 Z" />
                              </svg>
                            </a>
                            <a href="#twitter" className="team__icon" id="#twitter">
                              <svg
                                className="team__svg team_svg22h team_svg26w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M17.513,0.601 C19.547,0.565 20.630,1.306 21.664,2.249 C22.542,2.173 23.683,1.683 24.355,1.341 C24.572,1.223 24.790,1.103 25.008,0.984 C24.624,2.021 24.104,2.833 23.304,3.450 C23.126,3.586 22.950,3.771 22.727,3.858 C22.727,3.862 22.727,3.867 22.727,3.871 C23.867,3.860 24.807,3.345 25.700,3.066 C25.700,3.070 25.700,3.075 25.700,3.079 C25.231,3.824 24.596,4.581 23.919,5.123 C23.646,5.340 23.372,5.557 23.099,5.774 C23.114,6.981 23.081,8.133 22.856,9.147 C21.544,15.042 18.068,19.045 12.567,20.759 C10.591,21.374 7.399,21.627 5.135,21.065 C4.013,20.787 2.999,20.472 2.048,20.057 C1.519,19.825 1.029,19.575 0.561,19.290 C0.407,19.196 0.254,19.102 0.100,19.009 C0.610,19.024 1.208,19.165 1.778,19.073 C2.295,18.989 2.801,19.011 3.278,18.907 C4.466,18.646 5.521,18.301 6.429,17.770 C6.870,17.511 7.539,17.209 7.852,16.837 C7.262,16.848 6.727,16.710 6.289,16.556 C4.590,15.956 3.601,14.853 2.957,13.196 C3.472,13.253 4.955,13.387 5.302,13.094 C4.654,13.058 4.031,12.683 3.585,12.405 C2.218,11.549 1.104,10.115 1.112,7.908 C1.292,7.993 1.471,8.078 1.650,8.163 C1.994,8.308 2.343,8.385 2.752,8.470 C2.925,8.506 3.271,8.607 3.470,8.533 C3.461,8.533 3.453,8.533 3.444,8.533 C3.180,8.226 2.749,8.021 2.483,7.690 C1.606,6.601 0.785,4.924 1.304,2.926 C1.436,2.419 1.645,1.972 1.868,1.559 C1.877,1.563 1.885,1.567 1.894,1.571 C1.996,1.785 2.224,1.942 2.368,2.121 C2.816,2.676 3.368,3.175 3.931,3.615 C5.849,5.116 7.576,6.037 10.350,6.719 C11.054,6.893 11.867,7.025 12.708,7.026 C12.472,6.339 12.548,5.226 12.733,4.561 C13.201,2.887 14.216,1.682 15.706,1.036 C16.062,0.881 16.457,0.767 16.872,0.677 C17.086,0.652 17.299,0.626 17.513,0.601 Z" />
                              </svg>
                            </a>
                            <a href="#pinterest" className="team__icon" id="#pinterest">
                              <svg
                                className="team__svg team_svg26h team_svg21w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M9.051,16.854 C8.842,17.687 8.631,18.560 8.413,19.414 C8.198,20.256 8.008,21.110 7.695,21.884 C7.176,23.165 6.517,24.403 5.652,25.405 C5.077,26.072 5.199,25.806 5.026,25.770 C4.894,25.743 4.883,25.613 4.857,25.425 C4.716,24.407 4.812,23.230 4.864,22.086 C4.924,20.782 5.198,19.698 5.453,18.615 C5.937,16.552 6.399,14.528 6.888,12.451 C6.920,12.313 7.008,12.085 6.978,12.006 C6.756,11.429 6.612,10.911 6.549,10.306 C6.476,9.610 6.532,8.961 6.688,8.362 C6.965,7.304 7.601,6.367 8.582,6.024 C9.206,5.808 9.897,5.906 10.317,6.156 C10.749,6.415 11.046,6.823 11.184,7.402 C11.332,8.017 11.223,8.753 11.104,9.293 C10.837,10.512 10.486,11.427 10.167,12.603 C10.009,13.186 9.830,13.785 9.978,14.415 C10.114,14.993 10.415,15.391 10.825,15.690 C11.251,16.000 11.755,16.169 12.450,16.145 C13.678,16.102 14.531,15.317 15.101,14.577 C16.014,13.392 16.566,11.793 16.776,9.891 C16.843,9.277 16.893,8.572 16.846,7.877 C16.758,6.593 16.357,5.560 15.719,4.760 C15.113,3.998 14.253,3.391 13.207,3.049 C12.170,2.711 10.735,2.598 9.460,2.816 C7.142,3.213 5.508,4.530 4.545,6.349 C4.041,7.301 3.708,8.396 3.708,9.759 C3.708,10.810 3.967,11.624 4.386,12.259 C4.519,12.460 4.714,12.626 4.844,12.856 C5.029,13.182 4.816,13.667 4.725,14.020 C4.615,14.445 4.603,15.032 4.107,15.042 C3.901,15.046 3.643,14.896 3.469,14.799 C2.164,14.078 1.372,12.766 1.047,11.065 C0.849,10.031 0.850,8.826 1.047,7.827 C1.237,6.860 1.591,5.969 1.984,5.246 C2.798,3.743 3.991,2.541 5.443,1.683 C6.559,1.023 7.818,0.560 9.350,0.337 C9.858,0.263 10.384,0.232 10.955,0.206 C12.623,0.127 14.139,0.505 15.281,1.015 C16.486,1.554 17.448,2.271 18.261,3.161 C19.099,4.076 19.709,5.140 20.095,6.470 C20.297,7.162 20.493,7.902 20.493,8.757 C20.493,9.615 20.312,10.370 20.185,11.125 C19.711,13.953 18.366,16.266 16.347,17.583 C15.858,17.902 15.266,18.196 14.593,18.392 C13.926,18.586 13.165,18.732 12.350,18.675 C11.559,18.621 10.911,18.406 10.367,18.098 C9.827,17.793 9.373,17.419 9.051,16.854 Z" />
                              </svg>
                            </a>
                            <a href="#instagram" className="team__icon" id="#instagram">
                              <svg
                                className="team__svg team_svg26h team_svg26w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M22.700,25.800 L3.500,25.800 C1.733,25.800 0.300,24.367 0.300,22.600 L0.300,3.400 C0.300,1.632 1.733,0.200 3.500,0.200 L22.700,0.200 C24.467,0.200 25.900,1.632 25.900,3.400 L25.900,22.600 C25.900,24.367 24.467,25.800 22.700,25.800 ZM13.100,8.039 C11.104,8.039 9.389,9.221 8.602,10.919 L8.597,10.919 C8.589,10.937 8.583,10.956 8.575,10.974 C8.528,11.079 8.487,11.187 8.447,11.296 C8.428,11.348 8.407,11.399 8.390,11.451 C8.353,11.563 8.323,11.676 8.295,11.791 C8.281,11.845 8.265,11.897 8.253,11.951 C8.227,12.072 8.209,12.195 8.192,12.319 C8.185,12.369 8.175,12.418 8.169,12.469 C8.151,12.643 8.140,12.820 8.140,13.000 C8.140,15.739 10.361,17.959 13.100,17.959 C15.839,17.959 18.060,15.739 18.060,13.000 C18.060,12.820 18.049,12.643 18.031,12.469 C18.025,12.418 18.015,12.369 18.008,12.319 C17.991,12.195 17.973,12.072 17.947,11.951 C17.935,11.897 17.919,11.845 17.905,11.791 C17.877,11.676 17.847,11.563 17.810,11.451 C17.793,11.399 17.772,11.348 17.753,11.296 C17.713,11.187 17.672,11.079 17.625,10.974 C17.617,10.956 17.611,10.937 17.603,10.919 L17.598,10.919 C16.811,9.221 15.096,8.039 13.100,8.039 ZM23.020,4.359 C23.020,3.652 22.447,3.080 21.740,3.080 L19.180,3.080 C18.473,3.080 17.900,3.652 17.900,4.359 L17.900,6.920 C17.900,7.627 18.473,8.200 19.180,8.200 L21.740,8.200 C22.447,8.200 23.020,7.627 23.020,6.920 L23.020,4.359 ZM23.020,10.919 L20.660,10.919 C20.842,11.582 20.940,12.280 20.940,13.000 C20.940,17.330 17.430,20.839 13.100,20.839 C8.770,20.839 5.260,17.330 5.260,13.000 C5.260,12.280 5.358,11.582 5.540,10.919 L3.180,10.919 L3.180,21.639 C3.180,22.347 3.753,22.920 4.460,22.920 L21.740,22.920 C22.447,22.920 23.020,22.347 23.020,21.639 L23.020,10.919 Z" />
                              </svg>
                            </a>
                          </div>
                        </button>
                      </div>
                      <div className="team__subtitle _anim_items">
                        <span>Christopher Campbell</span>
                        <p>Branding/UX design</p>
                      </div>
                    </div>
                    <div className="team__item">
                      <div className="team__box _anim_items">
                        <button className="team__image team__image_right">
                          <img src="/mogo/css/img/our-team/right.png" alt="human" />
                          <div className="team__hover-item">
                            <a href="#facebook" className="team__icon" id="#facebook">
                              <svg
                                className="team__svg team_svg26h team_svg13w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M12.089,0.199 C12.089,1.675 12.089,4.320 12.089,4.320 C12.089,4.320 9.052,4.017 8.291,5.181 C7.875,5.817 8.122,7.681 8.085,9.019 C9.411,9.019 10.788,9.019 12.114,9.019 C11.774,10.583 11.530,11.643 11.279,12.997 C10.132,12.997 8.063,12.997 8.063,12.997 L8.063,25.801 C8.063,25.801 4.266,25.801 2.481,25.801 C2.482,21.854 2.480,17.249 2.481,13.047 C1.614,13.047 0.973,13.047 0.106,13.047 C0.106,11.572 0.106,10.496 0.106,9.019 C0.947,9.019 1.613,9.019 2.455,9.019 C2.575,6.073 2.620,3.155 4.084,1.669 C5.728,-0.002 7.297,0.199 12.089,0.199 Z" />
                              </svg>
                            </a>
                            <a href="#twitter" className="team__icon" id="#twitter">
                              <svg
                                className="team__svg team_svg22h team_svg26w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M17.513,0.601 C19.547,0.565 20.630,1.306 21.664,2.249 C22.542,2.173 23.683,1.683 24.355,1.341 C24.572,1.223 24.790,1.103 25.008,0.984 C24.624,2.021 24.104,2.833 23.304,3.450 C23.126,3.586 22.950,3.771 22.727,3.858 C22.727,3.862 22.727,3.867 22.727,3.871 C23.867,3.860 24.807,3.345 25.700,3.066 C25.700,3.070 25.700,3.075 25.700,3.079 C25.231,3.824 24.596,4.581 23.919,5.123 C23.646,5.340 23.372,5.557 23.099,5.774 C23.114,6.981 23.081,8.133 22.856,9.147 C21.544,15.042 18.068,19.045 12.567,20.759 C10.591,21.374 7.399,21.627 5.135,21.065 C4.013,20.787 2.999,20.472 2.048,20.057 C1.519,19.825 1.029,19.575 0.561,19.290 C0.407,19.196 0.254,19.102 0.100,19.009 C0.610,19.024 1.208,19.165 1.778,19.073 C2.295,18.989 2.801,19.011 3.278,18.907 C4.466,18.646 5.521,18.301 6.429,17.770 C6.870,17.511 7.539,17.209 7.852,16.837 C7.262,16.848 6.727,16.710 6.289,16.556 C4.590,15.956 3.601,14.853 2.957,13.196 C3.472,13.253 4.955,13.387 5.302,13.094 C4.654,13.058 4.031,12.683 3.585,12.405 C2.218,11.549 1.104,10.115 1.112,7.908 C1.292,7.993 1.471,8.078 1.650,8.163 C1.994,8.308 2.343,8.385 2.752,8.470 C2.925,8.506 3.271,8.607 3.470,8.533 C3.461,8.533 3.453,8.533 3.444,8.533 C3.180,8.226 2.749,8.021 2.483,7.690 C1.606,6.601 0.785,4.924 1.304,2.926 C1.436,2.419 1.645,1.972 1.868,1.559 C1.877,1.563 1.885,1.567 1.894,1.571 C1.996,1.785 2.224,1.942 2.368,2.121 C2.816,2.676 3.368,3.175 3.931,3.615 C5.849,5.116 7.576,6.037 10.350,6.719 C11.054,6.893 11.867,7.025 12.708,7.026 C12.472,6.339 12.548,5.226 12.733,4.561 C13.201,2.887 14.216,1.682 15.706,1.036 C16.062,0.881 16.457,0.767 16.872,0.677 C17.086,0.652 17.299,0.626 17.513,0.601 Z" />
                              </svg>
                            </a>
                            <a href="#pinterest" className="team__icon" id="#pinterest">
                              <svg
                                className="team__svg team_svg26h team_svg21w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M9.051,16.854 C8.842,17.687 8.631,18.560 8.413,19.414 C8.198,20.256 8.008,21.110 7.695,21.884 C7.176,23.165 6.517,24.403 5.652,25.405 C5.077,26.072 5.199,25.806 5.026,25.770 C4.894,25.743 4.883,25.613 4.857,25.425 C4.716,24.407 4.812,23.230 4.864,22.086 C4.924,20.782 5.198,19.698 5.453,18.615 C5.937,16.552 6.399,14.528 6.888,12.451 C6.920,12.313 7.008,12.085 6.978,12.006 C6.756,11.429 6.612,10.911 6.549,10.306 C6.476,9.610 6.532,8.961 6.688,8.362 C6.965,7.304 7.601,6.367 8.582,6.024 C9.206,5.808 9.897,5.906 10.317,6.156 C10.749,6.415 11.046,6.823 11.184,7.402 C11.332,8.017 11.223,8.753 11.104,9.293 C10.837,10.512 10.486,11.427 10.167,12.603 C10.009,13.186 9.830,13.785 9.978,14.415 C10.114,14.993 10.415,15.391 10.825,15.690 C11.251,16.000 11.755,16.169 12.450,16.145 C13.678,16.102 14.531,15.317 15.101,14.577 C16.014,13.392 16.566,11.793 16.776,9.891 C16.843,9.277 16.893,8.572 16.846,7.877 C16.758,6.593 16.357,5.560 15.719,4.760 C15.113,3.998 14.253,3.391 13.207,3.049 C12.170,2.711 10.735,2.598 9.460,2.816 C7.142,3.213 5.508,4.530 4.545,6.349 C4.041,7.301 3.708,8.396 3.708,9.759 C3.708,10.810 3.967,11.624 4.386,12.259 C4.519,12.460 4.714,12.626 4.844,12.856 C5.029,13.182 4.816,13.667 4.725,14.020 C4.615,14.445 4.603,15.032 4.107,15.042 C3.901,15.046 3.643,14.896 3.469,14.799 C2.164,14.078 1.372,12.766 1.047,11.065 C0.849,10.031 0.850,8.826 1.047,7.827 C1.237,6.860 1.591,5.969 1.984,5.246 C2.798,3.743 3.991,2.541 5.443,1.683 C6.559,1.023 7.818,0.560 9.350,0.337 C9.858,0.263 10.384,0.232 10.955,0.206 C12.623,0.127 14.139,0.505 15.281,1.015 C16.486,1.554 17.448,2.271 18.261,3.161 C19.099,4.076 19.709,5.140 20.095,6.470 C20.297,7.162 20.493,7.902 20.493,8.757 C20.493,9.615 20.312,10.370 20.185,11.125 C19.711,13.953 18.366,16.266 16.347,17.583 C15.858,17.902 15.266,18.196 14.593,18.392 C13.926,18.586 13.165,18.732 12.350,18.675 C11.559,18.621 10.911,18.406 10.367,18.098 C9.827,17.793 9.373,17.419 9.051,16.854 Z" />
                              </svg>
                            </a>
                            <a href="#instagram" className="team__icon" id="#instagram">
                              <svg
                                className="team__svg team_svg26h team_svg26w"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M22.700,25.800 L3.500,25.800 C1.733,25.800 0.300,24.367 0.300,22.600 L0.300,3.400 C0.300,1.632 1.733,0.200 3.500,0.200 L22.700,0.200 C24.467,0.200 25.900,1.632 25.900,3.400 L25.900,22.600 C25.900,24.367 24.467,25.800 22.700,25.800 ZM13.100,8.039 C11.104,8.039 9.389,9.221 8.602,10.919 L8.597,10.919 C8.589,10.937 8.583,10.956 8.575,10.974 C8.528,11.079 8.487,11.187 8.447,11.296 C8.428,11.348 8.407,11.399 8.390,11.451 C8.353,11.563 8.323,11.676 8.295,11.791 C8.281,11.845 8.265,11.897 8.253,11.951 C8.227,12.072 8.209,12.195 8.192,12.319 C8.185,12.369 8.175,12.418 8.169,12.469 C8.151,12.643 8.140,12.820 8.140,13.000 C8.140,15.739 10.361,17.959 13.100,17.959 C15.839,17.959 18.060,15.739 18.060,13.000 C18.060,12.820 18.049,12.643 18.031,12.469 C18.025,12.418 18.015,12.369 18.008,12.319 C17.991,12.195 17.973,12.072 17.947,11.951 C17.935,11.897 17.919,11.845 17.905,11.791 C17.877,11.676 17.847,11.563 17.810,11.451 C17.793,11.399 17.772,11.348 17.753,11.296 C17.713,11.187 17.672,11.079 17.625,10.974 C17.617,10.956 17.611,10.937 17.603,10.919 L17.598,10.919 C16.811,9.221 15.096,8.039 13.100,8.039 ZM23.020,4.359 C23.020,3.652 22.447,3.080 21.740,3.080 L19.180,3.080 C18.473,3.080 17.900,3.652 17.900,4.359 L17.900,6.920 C17.900,7.627 18.473,8.200 19.180,8.200 L21.740,8.200 C22.447,8.200 23.020,7.627 23.020,6.920 L23.020,4.359 ZM23.020,10.919 L20.660,10.919 C20.842,11.582 20.940,12.280 20.940,13.000 C20.940,17.330 17.430,20.839 13.100,20.839 C8.770,20.839 5.260,17.330 5.260,13.000 C5.260,12.280 5.358,11.582 5.540,10.919 L3.180,10.919 L3.180,21.639 C3.180,22.347 3.753,22.920 4.460,22.920 L21.740,22.920 C22.447,22.920 23.020,22.347 23.020,21.639 L23.020,10.919 Z" />
                              </svg>
                            </a>
                          </div>
                        </button>
                      </div>
                      <div className="team__subtitle _anim_items">
                        <span>Michael Fertig</span>
                        <p>Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="logos">
              <div className="container">
                <div className="logos__row">
                  <div className="logos__item _anim_items">
                    <img src="/mogo/css/img/logos/logos1.png" alt="logo" />
                  </div>
                  <div className="logos__item _anim_items">
                    <img src="/mogo/css/img/logos/logos2.png" alt="logo" />
                  </div>
                  <div className="logos__item _anim_items">
                    <img src="/mogo/css/img/logos/logos3.png" alt="logo" />
                  </div>
                  <div className="logos__item _anim_items">
                    <img src="/mogo/css/img/logos/logos4.png" alt="logo" />
                  </div>
                  <div className="logos__item _anim_items">
                    <img src="/mogo/css/img/logos/logos5.png" alt="logo" />
                  </div>
                  <div className="logos__item _anim_items">
                    <img src="/mogo/css/img/logos/logos6.png" alt="logo" />
                  </div>
                </div>
              </div>
            </section>
            <section className="work" id="work">
              <div className="container">
                <div className="work__row">
                  <div className="work__title __decoration-red-line _title _anim_items">
                    <div className="title_span_anim _anim_items">
                      <span>What we do</span>
                    </div>
                    <div className="title_h1_anim _anim_items">
                      <h1>meet our team</h1>
                    </div>
                  </div>
                  <div className="work__text _text _anim_items">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className="work__body">
                <div className="work__block">
                  <div className="work__box _anim_items">
                    <div className="work__item">
                      <img src="/mogo/css/img/work/work1.png" alt="photo" />
                      <div className="work__hover-content">
                        <div className="work__icon">
                          <svg
                            className="work_svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M30.000,23.999 C30.000,24.652 29.581,25.201 29.000,25.408 L29.000,27.091 C29.581,27.298 30.000,27.848 30.000,28.500 C30.000,29.328 29.328,29.999 28.500,29.999 C27.848,29.999 27.299,29.581 27.092,29.000 L25.408,29.000 C25.201,29.581 24.652,29.999 24.000,29.999 C23.348,29.999 22.798,29.581 22.592,29.000 L20.908,29.000 C20.701,29.581 20.152,29.999 19.500,29.999 C18.848,29.999 18.298,29.581 18.092,29.000 L16.408,29.000 C16.202,29.581 15.652,29.999 15.000,29.999 C14.348,29.999 13.798,29.581 13.592,29.000 L11.908,29.000 C11.701,29.581 11.152,29.999 10.500,29.999 C9.848,29.999 9.298,29.581 9.092,29.000 L7.408,29.000 C7.202,29.581 6.652,29.999 6.000,29.999 C5.348,29.999 4.798,29.581 4.592,29.000 L2.908,29.000 C2.701,29.581 2.152,29.999 1.500,29.999 C0.672,29.999 -0.000,29.328 -0.000,28.500 C-0.000,27.848 0.419,27.298 1.000,27.091 L1.000,25.408 C0.419,25.201 -0.000,24.652 -0.000,23.999 C-0.000,23.347 0.419,22.798 1.000,22.592 L1.000,20.908 C0.419,20.701 -0.000,20.151 -0.000,19.500 C-0.000,18.848 0.419,18.298 1.000,18.091 L1.000,16.408 C0.419,16.201 -0.000,15.652 -0.000,15.000 C-0.000,14.347 0.419,13.798 1.000,13.591 L1.000,11.907 C0.419,11.701 -0.000,11.152 -0.000,10.500 C-0.000,9.848 0.419,9.298 1.000,9.092 L1.000,7.408 C0.419,7.201 -0.000,6.652 -0.000,5.999 C-0.000,5.347 0.419,4.798 1.000,4.592 L1.000,2.908 C0.419,2.701 -0.000,2.151 -0.000,1.500 C-0.000,0.671 0.672,-0.000 1.500,-0.000 C2.152,-0.000 2.701,0.418 2.908,0.999 L4.592,0.999 C4.798,0.418 5.348,-0.000 6.000,-0.000 C6.652,-0.000 7.202,0.418 7.408,0.999 L9.092,0.999 C9.298,0.418 9.848,-0.000 10.500,-0.000 C11.152,-0.000 11.701,0.418 11.908,0.999 L13.592,0.999 C13.798,0.418 14.348,-0.000 15.000,-0.000 C15.652,-0.000 16.202,0.418 16.408,0.999 L18.092,0.999 C18.298,0.418 18.848,-0.000 19.500,-0.000 C20.152,-0.000 20.701,0.418 20.908,0.999 L22.592,0.999 C22.798,0.418 23.348,-0.000 24.000,-0.000 C24.652,-0.000 25.201,0.418 25.408,0.999 L27.092,0.999 C27.299,0.418 27.848,-0.000 28.500,-0.000 C29.328,-0.000 30.000,0.671 30.000,1.500 C30.000,2.151 29.581,2.701 29.000,2.908 L29.000,4.592 C29.581,4.798 30.000,5.347 30.000,5.999 C30.000,6.652 29.581,7.201 29.000,7.408 L29.000,9.092 C29.581,9.298 30.000,9.848 30.000,10.500 C30.000,11.152 29.581,11.701 29.000,11.907 L29.000,13.591 C29.581,13.798 30.000,14.347 30.000,15.000 C30.000,15.652 29.581,16.201 29.000,16.408 L29.000,18.091 C29.581,18.298 30.000,18.848 30.000,19.500 C30.000,20.151 29.581,20.701 29.000,20.908 L29.000,22.592 C29.581,22.798 30.000,23.347 30.000,23.999 ZM26.000,3.999 L4.000,3.999 L4.000,26.000 L26.000,26.000 L26.000,3.999 ZM13.000,20.000 L20.000,11.500 L24.500,18.499 L24.500,24.500 L5.500,24.500 L11.500,18.499 L13.000,20.000 ZM10.000,12.999 C8.343,12.999 7.000,11.657 7.000,10.000 C7.000,8.343 8.343,7.000 10.000,7.000 C11.657,7.000 13.000,8.343 13.000,10.000 C13.000,11.657 11.657,12.999 10.000,12.999 Z" />
                          </svg>
                        </div>
                        <div className="work__subtitle">
                          <span>creatively designed</span>
                          <p>Lorem ipsum dolor sit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="work__box _anim_items">
                    <div className="work__item">
                      <img src="/mogo/css/img/work/work2.png" alt="photo" />
                      <div className="work__hover-content">
                        <div className="work__icon">
                          <svg
                            className="work_svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M30.000,23.999 C30.000,24.652 29.581,25.201 29.000,25.408 L29.000,27.091 C29.581,27.298 30.000,27.848 30.000,28.500 C30.000,29.328 29.328,29.999 28.500,29.999 C27.848,29.999 27.299,29.581 27.092,29.000 L25.408,29.000 C25.201,29.581 24.652,29.999 24.000,29.999 C23.348,29.999 22.798,29.581 22.592,29.000 L20.908,29.000 C20.701,29.581 20.152,29.999 19.500,29.999 C18.848,29.999 18.298,29.581 18.092,29.000 L16.408,29.000 C16.202,29.581 15.652,29.999 15.000,29.999 C14.348,29.999 13.798,29.581 13.592,29.000 L11.908,29.000 C11.701,29.581 11.152,29.999 10.500,29.999 C9.848,29.999 9.298,29.581 9.092,29.000 L7.408,29.000 C7.202,29.581 6.652,29.999 6.000,29.999 C5.348,29.999 4.798,29.581 4.592,29.000 L2.908,29.000 C2.701,29.581 2.152,29.999 1.500,29.999 C0.672,29.999 -0.000,29.328 -0.000,28.500 C-0.000,27.848 0.419,27.298 1.000,27.091 L1.000,25.408 C0.419,25.201 -0.000,24.652 -0.000,23.999 C-0.000,23.347 0.419,22.798 1.000,22.592 L1.000,20.908 C0.419,20.701 -0.000,20.151 -0.000,19.500 C-0.000,18.848 0.419,18.298 1.000,18.091 L1.000,16.408 C0.419,16.201 -0.000,15.652 -0.000,15.000 C-0.000,14.347 0.419,13.798 1.000,13.591 L1.000,11.907 C0.419,11.701 -0.000,11.152 -0.000,10.500 C-0.000,9.848 0.419,9.298 1.000,9.092 L1.000,7.408 C0.419,7.201 -0.000,6.652 -0.000,5.999 C-0.000,5.347 0.419,4.798 1.000,4.592 L1.000,2.908 C0.419,2.701 -0.000,2.151 -0.000,1.500 C-0.000,0.671 0.672,-0.000 1.500,-0.000 C2.152,-0.000 2.701,0.418 2.908,0.999 L4.592,0.999 C4.798,0.418 5.348,-0.000 6.000,-0.000 C6.652,-0.000 7.202,0.418 7.408,0.999 L9.092,0.999 C9.298,0.418 9.848,-0.000 10.500,-0.000 C11.152,-0.000 11.701,0.418 11.908,0.999 L13.592,0.999 C13.798,0.418 14.348,-0.000 15.000,-0.000 C15.652,-0.000 16.202,0.418 16.408,0.999 L18.092,0.999 C18.298,0.418 18.848,-0.000 19.500,-0.000 C20.152,-0.000 20.701,0.418 20.908,0.999 L22.592,0.999 C22.798,0.418 23.348,-0.000 24.000,-0.000 C24.652,-0.000 25.201,0.418 25.408,0.999 L27.092,0.999 C27.299,0.418 27.848,-0.000 28.500,-0.000 C29.328,-0.000 30.000,0.671 30.000,1.500 C30.000,2.151 29.581,2.701 29.000,2.908 L29.000,4.592 C29.581,4.798 30.000,5.347 30.000,5.999 C30.000,6.652 29.581,7.201 29.000,7.408 L29.000,9.092 C29.581,9.298 30.000,9.848 30.000,10.500 C30.000,11.152 29.581,11.701 29.000,11.907 L29.000,13.591 C29.581,13.798 30.000,14.347 30.000,15.000 C30.000,15.652 29.581,16.201 29.000,16.408 L29.000,18.091 C29.581,18.298 30.000,18.848 30.000,19.500 C30.000,20.151 29.581,20.701 29.000,20.908 L29.000,22.592 C29.581,22.798 30.000,23.347 30.000,23.999 ZM26.000,3.999 L4.000,3.999 L4.000,26.000 L26.000,26.000 L26.000,3.999 ZM13.000,20.000 L20.000,11.500 L24.500,18.499 L24.500,24.500 L5.500,24.500 L11.500,18.499 L13.000,20.000 ZM10.000,12.999 C8.343,12.999 7.000,11.657 7.000,10.000 C7.000,8.343 8.343,7.000 10.000,7.000 C11.657,7.000 13.000,8.343 13.000,10.000 C13.000,11.657 11.657,12.999 10.000,12.999 Z" />
                          </svg>
                        </div>
                        <div className="work__subtitle">
                          <span>creatively designed</span>
                          <p>Lorem ipsum dolor sit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work__block">
                  <div className="work__box _anim_items">
                    <div className="work__item">
                      <img src="/mogo/css/img/work/work3.png" alt="photo" />
                      <div className="work__hover-content">
                        <div className="work__icon">
                          <svg
                            className="work_svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M30.000,23.999 C30.000,24.652 29.581,25.201 29.000,25.408 L29.000,27.091 C29.581,27.298 30.000,27.848 30.000,28.500 C30.000,29.328 29.328,29.999 28.500,29.999 C27.848,29.999 27.299,29.581 27.092,29.000 L25.408,29.000 C25.201,29.581 24.652,29.999 24.000,29.999 C23.348,29.999 22.798,29.581 22.592,29.000 L20.908,29.000 C20.701,29.581 20.152,29.999 19.500,29.999 C18.848,29.999 18.298,29.581 18.092,29.000 L16.408,29.000 C16.202,29.581 15.652,29.999 15.000,29.999 C14.348,29.999 13.798,29.581 13.592,29.000 L11.908,29.000 C11.701,29.581 11.152,29.999 10.500,29.999 C9.848,29.999 9.298,29.581 9.092,29.000 L7.408,29.000 C7.202,29.581 6.652,29.999 6.000,29.999 C5.348,29.999 4.798,29.581 4.592,29.000 L2.908,29.000 C2.701,29.581 2.152,29.999 1.500,29.999 C0.672,29.999 -0.000,29.328 -0.000,28.500 C-0.000,27.848 0.419,27.298 1.000,27.091 L1.000,25.408 C0.419,25.201 -0.000,24.652 -0.000,23.999 C-0.000,23.347 0.419,22.798 1.000,22.592 L1.000,20.908 C0.419,20.701 -0.000,20.151 -0.000,19.500 C-0.000,18.848 0.419,18.298 1.000,18.091 L1.000,16.408 C0.419,16.201 -0.000,15.652 -0.000,15.000 C-0.000,14.347 0.419,13.798 1.000,13.591 L1.000,11.907 C0.419,11.701 -0.000,11.152 -0.000,10.500 C-0.000,9.848 0.419,9.298 1.000,9.092 L1.000,7.408 C0.419,7.201 -0.000,6.652 -0.000,5.999 C-0.000,5.347 0.419,4.798 1.000,4.592 L1.000,2.908 C0.419,2.701 -0.000,2.151 -0.000,1.500 C-0.000,0.671 0.672,-0.000 1.500,-0.000 C2.152,-0.000 2.701,0.418 2.908,0.999 L4.592,0.999 C4.798,0.418 5.348,-0.000 6.000,-0.000 C6.652,-0.000 7.202,0.418 7.408,0.999 L9.092,0.999 C9.298,0.418 9.848,-0.000 10.500,-0.000 C11.152,-0.000 11.701,0.418 11.908,0.999 L13.592,0.999 C13.798,0.418 14.348,-0.000 15.000,-0.000 C15.652,-0.000 16.202,0.418 16.408,0.999 L18.092,0.999 C18.298,0.418 18.848,-0.000 19.500,-0.000 C20.152,-0.000 20.701,0.418 20.908,0.999 L22.592,0.999 C22.798,0.418 23.348,-0.000 24.000,-0.000 C24.652,-0.000 25.201,0.418 25.408,0.999 L27.092,0.999 C27.299,0.418 27.848,-0.000 28.500,-0.000 C29.328,-0.000 30.000,0.671 30.000,1.500 C30.000,2.151 29.581,2.701 29.000,2.908 L29.000,4.592 C29.581,4.798 30.000,5.347 30.000,5.999 C30.000,6.652 29.581,7.201 29.000,7.408 L29.000,9.092 C29.581,9.298 30.000,9.848 30.000,10.500 C30.000,11.152 29.581,11.701 29.000,11.907 L29.000,13.591 C29.581,13.798 30.000,14.347 30.000,15.000 C30.000,15.652 29.581,16.201 29.000,16.408 L29.000,18.091 C29.581,18.298 30.000,18.848 30.000,19.500 C30.000,20.151 29.581,20.701 29.000,20.908 L29.000,22.592 C29.581,22.798 30.000,23.347 30.000,23.999 ZM26.000,3.999 L4.000,3.999 L4.000,26.000 L26.000,26.000 L26.000,3.999 ZM13.000,20.000 L20.000,11.500 L24.500,18.499 L24.500,24.500 L5.500,24.500 L11.500,18.499 L13.000,20.000 ZM10.000,12.999 C8.343,12.999 7.000,11.657 7.000,10.000 C7.000,8.343 8.343,7.000 10.000,7.000 C11.657,7.000 13.000,8.343 13.000,10.000 C13.000,11.657 11.657,12.999 10.000,12.999 Z" />
                          </svg>
                        </div>
                        <div className="work__subtitle">
                          <span>creatively designed</span>
                          <p>Lorem ipsum dolor sit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="work__box _anim_items">
                    <div className="work__item">
                      <img src="/mogo/css/img/work/work4.png" alt="photo" />
                      <div className="work__hover-content">
                        <div className="work__icon">
                          <svg
                            className="work_svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M30.000,23.999 C30.000,24.652 29.581,25.201 29.000,25.408 L29.000,27.091 C29.581,27.298 30.000,27.848 30.000,28.500 C30.000,29.328 29.328,29.999 28.500,29.999 C27.848,29.999 27.299,29.581 27.092,29.000 L25.408,29.000 C25.201,29.581 24.652,29.999 24.000,29.999 C23.348,29.999 22.798,29.581 22.592,29.000 L20.908,29.000 C20.701,29.581 20.152,29.999 19.500,29.999 C18.848,29.999 18.298,29.581 18.092,29.000 L16.408,29.000 C16.202,29.581 15.652,29.999 15.000,29.999 C14.348,29.999 13.798,29.581 13.592,29.000 L11.908,29.000 C11.701,29.581 11.152,29.999 10.500,29.999 C9.848,29.999 9.298,29.581 9.092,29.000 L7.408,29.000 C7.202,29.581 6.652,29.999 6.000,29.999 C5.348,29.999 4.798,29.581 4.592,29.000 L2.908,29.000 C2.701,29.581 2.152,29.999 1.500,29.999 C0.672,29.999 -0.000,29.328 -0.000,28.500 C-0.000,27.848 0.419,27.298 1.000,27.091 L1.000,25.408 C0.419,25.201 -0.000,24.652 -0.000,23.999 C-0.000,23.347 0.419,22.798 1.000,22.592 L1.000,20.908 C0.419,20.701 -0.000,20.151 -0.000,19.500 C-0.000,18.848 0.419,18.298 1.000,18.091 L1.000,16.408 C0.419,16.201 -0.000,15.652 -0.000,15.000 C-0.000,14.347 0.419,13.798 1.000,13.591 L1.000,11.907 C0.419,11.701 -0.000,11.152 -0.000,10.500 C-0.000,9.848 0.419,9.298 1.000,9.092 L1.000,7.408 C0.419,7.201 -0.000,6.652 -0.000,5.999 C-0.000,5.347 0.419,4.798 1.000,4.592 L1.000,2.908 C0.419,2.701 -0.000,2.151 -0.000,1.500 C-0.000,0.671 0.672,-0.000 1.500,-0.000 C2.152,-0.000 2.701,0.418 2.908,0.999 L4.592,0.999 C4.798,0.418 5.348,-0.000 6.000,-0.000 C6.652,-0.000 7.202,0.418 7.408,0.999 L9.092,0.999 C9.298,0.418 9.848,-0.000 10.500,-0.000 C11.152,-0.000 11.701,0.418 11.908,0.999 L13.592,0.999 C13.798,0.418 14.348,-0.000 15.000,-0.000 C15.652,-0.000 16.202,0.418 16.408,0.999 L18.092,0.999 C18.298,0.418 18.848,-0.000 19.500,-0.000 C20.152,-0.000 20.701,0.418 20.908,0.999 L22.592,0.999 C22.798,0.418 23.348,-0.000 24.000,-0.000 C24.652,-0.000 25.201,0.418 25.408,0.999 L27.092,0.999 C27.299,0.418 27.848,-0.000 28.500,-0.000 C29.328,-0.000 30.000,0.671 30.000,1.500 C30.000,2.151 29.581,2.701 29.000,2.908 L29.000,4.592 C29.581,4.798 30.000,5.347 30.000,5.999 C30.000,6.652 29.581,7.201 29.000,7.408 L29.000,9.092 C29.581,9.298 30.000,9.848 30.000,10.500 C30.000,11.152 29.581,11.701 29.000,11.907 L29.000,13.591 C29.581,13.798 30.000,14.347 30.000,15.000 C30.000,15.652 29.581,16.201 29.000,16.408 L29.000,18.091 C29.581,18.298 30.000,18.848 30.000,19.500 C30.000,20.151 29.581,20.701 29.000,20.908 L29.000,22.592 C29.581,22.798 30.000,23.347 30.000,23.999 ZM26.000,3.999 L4.000,3.999 L4.000,26.000 L26.000,26.000 L26.000,3.999 ZM13.000,20.000 L20.000,11.500 L24.500,18.499 L24.500,24.500 L5.500,24.500 L11.500,18.499 L13.000,20.000 ZM10.000,12.999 C8.343,12.999 7.000,11.657 7.000,10.000 C7.000,8.343 8.343,7.000 10.000,7.000 C11.657,7.000 13.000,8.343 13.000,10.000 C13.000,11.657 11.657,12.999 10.000,12.999 Z" />
                          </svg>
                        </div>
                        <div className="work__subtitle">
                          <span>creatively designed</span>
                          <p>Lorem ipsum dolor sit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work__block">
                  <div className="work__box _anim_items">
                    <div className="work__item">
                      <img src="/mogo/css/img/work/work5.png" alt="photo" />
                      <div className="work__hover-content">
                        <div className="work__icon">
                          <svg
                            className="work_svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M30.000,23.999 C30.000,24.652 29.581,25.201 29.000,25.408 L29.000,27.091 C29.581,27.298 30.000,27.848 30.000,28.500 C30.000,29.328 29.328,29.999 28.500,29.999 C27.848,29.999 27.299,29.581 27.092,29.000 L25.408,29.000 C25.201,29.581 24.652,29.999 24.000,29.999 C23.348,29.999 22.798,29.581 22.592,29.000 L20.908,29.000 C20.701,29.581 20.152,29.999 19.500,29.999 C18.848,29.999 18.298,29.581 18.092,29.000 L16.408,29.000 C16.202,29.581 15.652,29.999 15.000,29.999 C14.348,29.999 13.798,29.581 13.592,29.000 L11.908,29.000 C11.701,29.581 11.152,29.999 10.500,29.999 C9.848,29.999 9.298,29.581 9.092,29.000 L7.408,29.000 C7.202,29.581 6.652,29.999 6.000,29.999 C5.348,29.999 4.798,29.581 4.592,29.000 L2.908,29.000 C2.701,29.581 2.152,29.999 1.500,29.999 C0.672,29.999 -0.000,29.328 -0.000,28.500 C-0.000,27.848 0.419,27.298 1.000,27.091 L1.000,25.408 C0.419,25.201 -0.000,24.652 -0.000,23.999 C-0.000,23.347 0.419,22.798 1.000,22.592 L1.000,20.908 C0.419,20.701 -0.000,20.151 -0.000,19.500 C-0.000,18.848 0.419,18.298 1.000,18.091 L1.000,16.408 C0.419,16.201 -0.000,15.652 -0.000,15.000 C-0.000,14.347 0.419,13.798 1.000,13.591 L1.000,11.907 C0.419,11.701 -0.000,11.152 -0.000,10.500 C-0.000,9.848 0.419,9.298 1.000,9.092 L1.000,7.408 C0.419,7.201 -0.000,6.652 -0.000,5.999 C-0.000,5.347 0.419,4.798 1.000,4.592 L1.000,2.908 C0.419,2.701 -0.000,2.151 -0.000,1.500 C-0.000,0.671 0.672,-0.000 1.500,-0.000 C2.152,-0.000 2.701,0.418 2.908,0.999 L4.592,0.999 C4.798,0.418 5.348,-0.000 6.000,-0.000 C6.652,-0.000 7.202,0.418 7.408,0.999 L9.092,0.999 C9.298,0.418 9.848,-0.000 10.500,-0.000 C11.152,-0.000 11.701,0.418 11.908,0.999 L13.592,0.999 C13.798,0.418 14.348,-0.000 15.000,-0.000 C15.652,-0.000 16.202,0.418 16.408,0.999 L18.092,0.999 C18.298,0.418 18.848,-0.000 19.500,-0.000 C20.152,-0.000 20.701,0.418 20.908,0.999 L22.592,0.999 C22.798,0.418 23.348,-0.000 24.000,-0.000 C24.652,-0.000 25.201,0.418 25.408,0.999 L27.092,0.999 C27.299,0.418 27.848,-0.000 28.500,-0.000 C29.328,-0.000 30.000,0.671 30.000,1.500 C30.000,2.151 29.581,2.701 29.000,2.908 L29.000,4.592 C29.581,4.798 30.000,5.347 30.000,5.999 C30.000,6.652 29.581,7.201 29.000,7.408 L29.000,9.092 C29.581,9.298 30.000,9.848 30.000,10.500 C30.000,11.152 29.581,11.701 29.000,11.907 L29.000,13.591 C29.581,13.798 30.000,14.347 30.000,15.000 C30.000,15.652 29.581,16.201 29.000,16.408 L29.000,18.091 C29.581,18.298 30.000,18.848 30.000,19.500 C30.000,20.151 29.581,20.701 29.000,20.908 L29.000,22.592 C29.581,22.798 30.000,23.347 30.000,23.999 ZM26.000,3.999 L4.000,3.999 L4.000,26.000 L26.000,26.000 L26.000,3.999 ZM13.000,20.000 L20.000,11.500 L24.500,18.499 L24.500,24.500 L5.500,24.500 L11.500,18.499 L13.000,20.000 ZM10.000,12.999 C8.343,12.999 7.000,11.657 7.000,10.000 C7.000,8.343 8.343,7.000 10.000,7.000 C11.657,7.000 13.000,8.343 13.000,10.000 C13.000,11.657 11.657,12.999 10.000,12.999 Z" />
                          </svg>
                        </div>
                        <div className="work__subtitle">
                          <span>creatively designed</span>
                          <p>Lorem ipsum dolor sit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work__block">
                  <div className="work__box _anim_items">
                    <div className="work__item">
                      <img src="/mogo/css/img/work/work6.png" alt="photo" />
                      <div className="work__hover-content">
                        <div className="work__icon">
                          <svg
                            className="work_svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M30.000,23.999 C30.000,24.652 29.581,25.201 29.000,25.408 L29.000,27.091 C29.581,27.298 30.000,27.848 30.000,28.500 C30.000,29.328 29.328,29.999 28.500,29.999 C27.848,29.999 27.299,29.581 27.092,29.000 L25.408,29.000 C25.201,29.581 24.652,29.999 24.000,29.999 C23.348,29.999 22.798,29.581 22.592,29.000 L20.908,29.000 C20.701,29.581 20.152,29.999 19.500,29.999 C18.848,29.999 18.298,29.581 18.092,29.000 L16.408,29.000 C16.202,29.581 15.652,29.999 15.000,29.999 C14.348,29.999 13.798,29.581 13.592,29.000 L11.908,29.000 C11.701,29.581 11.152,29.999 10.500,29.999 C9.848,29.999 9.298,29.581 9.092,29.000 L7.408,29.000 C7.202,29.581 6.652,29.999 6.000,29.999 C5.348,29.999 4.798,29.581 4.592,29.000 L2.908,29.000 C2.701,29.581 2.152,29.999 1.500,29.999 C0.672,29.999 -0.000,29.328 -0.000,28.500 C-0.000,27.848 0.419,27.298 1.000,27.091 L1.000,25.408 C0.419,25.201 -0.000,24.652 -0.000,23.999 C-0.000,23.347 0.419,22.798 1.000,22.592 L1.000,20.908 C0.419,20.701 -0.000,20.151 -0.000,19.500 C-0.000,18.848 0.419,18.298 1.000,18.091 L1.000,16.408 C0.419,16.201 -0.000,15.652 -0.000,15.000 C-0.000,14.347 0.419,13.798 1.000,13.591 L1.000,11.907 C0.419,11.701 -0.000,11.152 -0.000,10.500 C-0.000,9.848 0.419,9.298 1.000,9.092 L1.000,7.408 C0.419,7.201 -0.000,6.652 -0.000,5.999 C-0.000,5.347 0.419,4.798 1.000,4.592 L1.000,2.908 C0.419,2.701 -0.000,2.151 -0.000,1.500 C-0.000,0.671 0.672,-0.000 1.500,-0.000 C2.152,-0.000 2.701,0.418 2.908,0.999 L4.592,0.999 C4.798,0.418 5.348,-0.000 6.000,-0.000 C6.652,-0.000 7.202,0.418 7.408,0.999 L9.092,0.999 C9.298,0.418 9.848,-0.000 10.500,-0.000 C11.152,-0.000 11.701,0.418 11.908,0.999 L13.592,0.999 C13.798,0.418 14.348,-0.000 15.000,-0.000 C15.652,-0.000 16.202,0.418 16.408,0.999 L18.092,0.999 C18.298,0.418 18.848,-0.000 19.500,-0.000 C20.152,-0.000 20.701,0.418 20.908,0.999 L22.592,0.999 C22.798,0.418 23.348,-0.000 24.000,-0.000 C24.652,-0.000 25.201,0.418 25.408,0.999 L27.092,0.999 C27.299,0.418 27.848,-0.000 28.500,-0.000 C29.328,-0.000 30.000,0.671 30.000,1.500 C30.000,2.151 29.581,2.701 29.000,2.908 L29.000,4.592 C29.581,4.798 30.000,5.347 30.000,5.999 C30.000,6.652 29.581,7.201 29.000,7.408 L29.000,9.092 C29.581,9.298 30.000,9.848 30.000,10.500 C30.000,11.152 29.581,11.701 29.000,11.907 L29.000,13.591 C29.581,13.798 30.000,14.347 30.000,15.000 C30.000,15.652 29.581,16.201 29.000,16.408 L29.000,18.091 C29.581,18.298 30.000,18.848 30.000,19.500 C30.000,20.151 29.581,20.701 29.000,20.908 L29.000,22.592 C29.581,22.798 30.000,23.347 30.000,23.999 ZM26.000,3.999 L4.000,3.999 L4.000,26.000 L26.000,26.000 L26.000,3.999 ZM13.000,20.000 L20.000,11.500 L24.500,18.499 L24.500,24.500 L5.500,24.500 L11.500,18.499 L13.000,20.000 ZM10.000,12.999 C8.343,12.999 7.000,11.657 7.000,10.000 C7.000,8.343 8.343,7.000 10.000,7.000 C11.657,7.000 13.000,8.343 13.000,10.000 C13.000,11.657 11.657,12.999 10.000,12.999 Z" />
                          </svg>
                        </div>
                        <div className="work__subtitle">
                          <span>creatively designed</span>
                          <p>Lorem ipsum dolor sit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="work__box _anim_items">
                    <div className="work__item">
                      <img src="/mogo/css/img/work/work7.png" alt="photo" />
                      <div className="work__hover-content">
                        <div className="work__icon">
                          <svg
                            className="work_svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M30.000,23.999 C30.000,24.652 29.581,25.201 29.000,25.408 L29.000,27.091 C29.581,27.298 30.000,27.848 30.000,28.500 C30.000,29.328 29.328,29.999 28.500,29.999 C27.848,29.999 27.299,29.581 27.092,29.000 L25.408,29.000 C25.201,29.581 24.652,29.999 24.000,29.999 C23.348,29.999 22.798,29.581 22.592,29.000 L20.908,29.000 C20.701,29.581 20.152,29.999 19.500,29.999 C18.848,29.999 18.298,29.581 18.092,29.000 L16.408,29.000 C16.202,29.581 15.652,29.999 15.000,29.999 C14.348,29.999 13.798,29.581 13.592,29.000 L11.908,29.000 C11.701,29.581 11.152,29.999 10.500,29.999 C9.848,29.999 9.298,29.581 9.092,29.000 L7.408,29.000 C7.202,29.581 6.652,29.999 6.000,29.999 C5.348,29.999 4.798,29.581 4.592,29.000 L2.908,29.000 C2.701,29.581 2.152,29.999 1.500,29.999 C0.672,29.999 -0.000,29.328 -0.000,28.500 C-0.000,27.848 0.419,27.298 1.000,27.091 L1.000,25.408 C0.419,25.201 -0.000,24.652 -0.000,23.999 C-0.000,23.347 0.419,22.798 1.000,22.592 L1.000,20.908 C0.419,20.701 -0.000,20.151 -0.000,19.500 C-0.000,18.848 0.419,18.298 1.000,18.091 L1.000,16.408 C0.419,16.201 -0.000,15.652 -0.000,15.000 C-0.000,14.347 0.419,13.798 1.000,13.591 L1.000,11.907 C0.419,11.701 -0.000,11.152 -0.000,10.500 C-0.000,9.848 0.419,9.298 1.000,9.092 L1.000,7.408 C0.419,7.201 -0.000,6.652 -0.000,5.999 C-0.000,5.347 0.419,4.798 1.000,4.592 L1.000,2.908 C0.419,2.701 -0.000,2.151 -0.000,1.500 C-0.000,0.671 0.672,-0.000 1.500,-0.000 C2.152,-0.000 2.701,0.418 2.908,0.999 L4.592,0.999 C4.798,0.418 5.348,-0.000 6.000,-0.000 C6.652,-0.000 7.202,0.418 7.408,0.999 L9.092,0.999 C9.298,0.418 9.848,-0.000 10.500,-0.000 C11.152,-0.000 11.701,0.418 11.908,0.999 L13.592,0.999 C13.798,0.418 14.348,-0.000 15.000,-0.000 C15.652,-0.000 16.202,0.418 16.408,0.999 L18.092,0.999 C18.298,0.418 18.848,-0.000 19.500,-0.000 C20.152,-0.000 20.701,0.418 20.908,0.999 L22.592,0.999 C22.798,0.418 23.348,-0.000 24.000,-0.000 C24.652,-0.000 25.201,0.418 25.408,0.999 L27.092,0.999 C27.299,0.418 27.848,-0.000 28.500,-0.000 C29.328,-0.000 30.000,0.671 30.000,1.500 C30.000,2.151 29.581,2.701 29.000,2.908 L29.000,4.592 C29.581,4.798 30.000,5.347 30.000,5.999 C30.000,6.652 29.581,7.201 29.000,7.408 L29.000,9.092 C29.581,9.298 30.000,9.848 30.000,10.500 C30.000,11.152 29.581,11.701 29.000,11.907 L29.000,13.591 C29.581,13.798 30.000,14.347 30.000,15.000 C30.000,15.652 29.581,16.201 29.000,16.408 L29.000,18.091 C29.581,18.298 30.000,18.848 30.000,19.500 C30.000,20.151 29.581,20.701 29.000,20.908 L29.000,22.592 C29.581,22.798 30.000,23.347 30.000,23.999 ZM26.000,3.999 L4.000,3.999 L4.000,26.000 L26.000,26.000 L26.000,3.999 ZM13.000,20.000 L20.000,11.500 L24.500,18.499 L24.500,24.500 L5.500,24.500 L11.500,18.499 L13.000,20.000 ZM10.000,12.999 C8.343,12.999 7.000,11.657 7.000,10.000 C7.000,8.343 8.343,7.000 10.000,7.000 C11.657,7.000 13.000,8.343 13.000,10.000 C13.000,11.657 11.657,12.999 10.000,12.999 Z" />
                          </svg>
                        </div>
                        <div className="work__subtitle">
                          <span>creatively designed</span>
                          <p>Lorem ipsum dolor sit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonial">
              <div className="container">
                <div className="testimonial__row _anim_items">
                  <div className="testimonial__left-arrow _left-arrow">
                    <button id="testimonial__left-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path d="M11.477,18.859 L3.619,11.002 L11.581,3.039 L11.580,3.039 C11.839,2.769 12.000,2.403 12.000,1.997 C12.000,1.169 11.329,0.498 10.501,0.498 C10.096,0.498 9.730,0.657 9.459,0.919 L9.459,0.918 L0.459,9.918 L0.460,9.919 C0.177,10.191 0.001,10.574 0.001,10.998 C0.001,10.999 0.001,11.001 0.001,11.002 C0.001,11.003 0.001,11.004 0.001,11.005 C0.001,11.428 0.177,11.811 0.460,12.084 L0.459,12.084 L9.459,21.084 L9.462,21.081 C9.732,21.339 10.098,21.498 10.501,21.498 C11.329,21.498 12.000,20.827 12.000,19.998 C12.000,19.543 11.798,19.135 11.477,18.859 Z" />
                      </svg>
                    </button>
                  </div>
                  <div className="testimonial__slider text-slider">
                    <div className="testimonial__track text-slider__track">
                      <div className="testimonial__item text-slider__item">
                        <div className="testimonial__image text-slider__image">
                          <img src="/mogo/css/img/testimonial/testimonial.png" alt="human" />
                        </div>
                        <div className="testimonial__text-content text-slider__text-content">
                          <div className="testimonial__text text-slider__text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.”
                          </div>
                          <div className="testimonial__author-name text-slider__author-name">
                            Joshua Earle
                          </div>
                        </div>
                      </div>
                      <div className="testimonial__item text-slider__item">
                        <div className="testimonial__image text-slider__image">
                          <img src="/mogo/css/img/testimonial/testimonial.png" alt="human" />
                        </div>
                        <div className="testimonial__text-content text-slider__text-content">
                          <div className="testimonial__text text-slider__text">
                            “Nostrud exercitation lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna et
                            dolore magna aliqua. Ut enim ad minim veniam, quis.”
                          </div>
                          <div className="testimonial__author-name text-slider__author-name">
                            Matthew Dix
                          </div>
                        </div>
                      </div>
                      <div className="testimonial__item text-slider__item">
                        <div className="testimonial__image text-slider__image">
                          <img src="/mogo/css/img/testimonial/testimonial.png" alt="human" />
                        </div>
                        <div className="testimonial__text-content text-slider__text-content">
                          <div className="testimonial__text text-slider__text">
                            “Consectetur adipiscing elit, sed do sed do eiusmod tempor incididunt ut
                            labore et dolore magna et dolore magna aliqua. Ut enim ad minim veniam,
                            lorem ipsum dolor sit amet, quis nostrud exercitation.”
                          </div>
                          <div className="testimonial__author-name text-slider__author-name">
                            Jon Doe
                          </div>
                        </div>
                      </div>
                      <div className="testimonial__item text-slider__item">
                        <div className="testimonial__image text-slider__image">
                          <img src="/mogo/css/img/testimonial/testimonial.png" alt="human" />
                        </div>
                        <div className="testimonial__text-content text-slider__text-content">
                          <div className="testimonial__text text-slider__text">
                            “Incididunt ut labore adipiscing elit, sed do eiusmod tempor incididunt
                            et dolore magna lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”
                          </div>
                          <div className="testimonial__author-name text-slider__author-name">
                            Christopher Campbell
                          </div>
                        </div>
                      </div>
                      <div className="testimonial__item text-slider__item">
                        <div className="testimonial__image text-slider__image">
                          <img src="/mogo/css/img/testimonial/testimonial.png" alt="human" />
                        </div>
                        <div className="testimonial__text-content text-slider__text-content">
                          <div className="testimonial__text text-slider__text">
                            “Sed do eiusmod tempor. sed do eiusmod tempor. lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, incididunt ut labore et dolore magna
                            sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.”
                          </div>
                          <div className="testimonial__author-name text-slider__author-name">
                            Michael Fertig
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__right-arrow _right-arrow">
                    <button id="testimonial__right-arrow">
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
            <section className="comments">
              <div className="container">
                <div className="comments__row">
                  <div className="comments__title __decoration-red-line _title _anim_items">
                    <div className="title_span_anim _anim_items">
                      <span>Happy Clients</span>
                    </div>
                    <div className="title_h1_anim _anim_items">
                      <h1>what people say</h1>
                    </div>
                  </div>
                  <div className="comments__body">
                    <div className="comments__item">
                      <div className="comments__image _anim_items">
                        <img src="/mogo/css/img/comments/comments1.png" alt="human" />
                      </div>
                      <div className="comments__text-content">
                        <div className="comments__name _anim_items">Matthew Dix</div>
                        <div className="comments__career _anim_items">Graphic Design</div>
                        <div className="comments__text _anim_items">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </div>
                      </div>
                    </div>
                    <div className="comments__item">
                      <div className="comments__image _anim_items">
                        <img src="/mogo/css/img/comments/comments2.png" alt="human" />
                      </div>
                      <div className="comments__text-content">
                        <div className="comments__name _anim_items">Nick Karvounis</div>
                        <div className="comments__career _anim_items">Graphic Design</div>
                        <div className="comments__text _anim_items">
                          Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam
                        </div>
                      </div>
                    </div>
                    <div className="comments__item comments_last-item">
                      <div className="comments__image _anim_items">
                        <img src="/mogo/css/img/comments/comments3.png" alt="human" />
                      </div>
                      <div className="comments__text-content">
                        <div className="comments__name _anim_items">Jaelynn Castillo</div>
                        <div className="comments__career _anim_items">Graphic Design</div>
                        <div className="comments__text _anim_items">
                          Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </div>
                      </div>
                    </div>
                    <div className="comments__item comments_last-item">
                      <div className="comments__image _anim_items">
                        <img src="/mogo/css/img/comments/comments4.png" alt="human" />
                      </div>
                      <div className="comments__text-content">
                        <div className="comments__name _anim_items">Mike Petrucci</div>
                        <div className="comments__career _anim_items">Graphic Design</div>
                        <div className="comments__text _anim_items">
                          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="blog" id="blog">
              <div className="container">
                <div className="blog__row">
                  <div className="blog__title __decoration-red-line _title _anim_items">
                    <div className="title_span_anim _anim_items">
                      <span>Our stories</span>
                    </div>
                    <div className="title_h1_anim _anim_items">
                      <h1>Latest blog</h1>
                    </div>
                  </div>
                  <div className="blog__body">
                    <div className="blog__item">
                      <div className="blog__image _anim_items">
                        <img src="/mogo/css/img/blog/blog1.png" alt="photo" />
                        <div className="blog__date _anim_items">
                          <span>15</span>
                          <p>Jan</p>
                        </div>
                      </div>
                      <div className="blog__text-content">
                        <div className="blog__subtitle _anim_items">Lorem ipsum dolor sit amet</div>
                        <div className="blog__text _anim_items">
                          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </div>
                      </div>
                      <div className="blog__icons _anim_items _anim_items">
                        <div className="blog__icon">
                          <svg
                            className="blog__svg-icon blog_eye-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M19.710,5.776 C19.709,5.784 19.709,5.793 19.708,5.800 C19.708,5.804 19.707,5.809 19.707,5.813 C19.707,5.819 19.705,5.825 19.705,5.830 C19.704,5.837 19.703,5.844 19.702,5.851 C19.702,5.852 19.702,5.853 19.702,5.853 C19.678,6.008 19.607,6.151 19.499,6.263 C19.295,6.510 19.072,6.742 18.848,6.970 C17.636,8.200 16.246,9.297 14.725,10.092 C13.752,10.601 12.713,11.011 11.635,11.208 C10.450,11.425 9.264,11.414 8.085,11.158 C6.045,10.714 4.198,9.613 2.582,8.295 C1.832,7.684 1.094,7.015 0.474,6.263 C0.202,5.934 0.202,5.544 0.474,5.215 C0.677,4.968 0.900,4.735 1.125,4.507 C2.336,3.278 3.726,2.181 5.248,1.385 C6.220,0.877 7.259,0.466 8.337,0.269 C9.522,0.053 10.708,0.063 11.887,0.320 C13.927,0.763 15.774,1.865 17.390,3.182 C18.140,3.793 18.878,4.463 19.498,5.215 C19.606,5.326 19.677,5.470 19.701,5.624 C19.701,5.625 19.701,5.626 19.702,5.627 C19.703,5.633 19.704,5.641 19.704,5.647 C19.705,5.653 19.706,5.659 19.707,5.665 C19.707,5.669 19.707,5.673 19.708,5.677 C19.708,5.685 19.709,5.694 19.709,5.702 C19.710,5.714 19.711,5.726 19.711,5.739 C19.711,5.751 19.710,5.764 19.710,5.776 ZM9.990,1.942 C7.977,1.942 6.345,3.574 6.345,5.587 C6.345,7.600 7.977,9.232 9.990,9.232 C12.003,9.232 13.636,7.600 13.636,5.587 C13.636,3.574 12.003,1.942 9.990,1.942 ZM9.990,7.409 C8.984,7.409 8.168,6.594 8.168,5.587 C8.168,4.580 8.984,3.764 9.990,3.764 C10.997,3.764 11.813,4.580 11.813,5.587 C11.813,6.594 10.997,7.409 9.990,7.409 Z" />
                          </svg>
                          <span>542</span>
                        </div>
                        <div className="blog__icon">
                          <svg
                            className="blog__svg-icon blog_speech-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M9.416,12.358 C8.843,12.358 8.282,12.193 7.740,12.115 C5.549,14.886 2.093,14.340 2.093,14.340 C4.534,13.185 4.484,11.271 4.050,11.016 C2.134,9.890 0.982,8.176 0.982,6.255 C0.982,2.865 4.709,0.116 9.416,0.116 C14.124,0.116 16.993,2.865 16.993,6.255 C16.993,9.647 14.124,12.358 9.416,12.358 ZM5.242,4.875 C4.414,4.875 3.742,5.546 3.742,6.375 C3.742,7.203 4.414,7.875 5.242,7.875 C6.071,7.875 6.742,7.203 6.742,6.375 C6.742,5.546 6.071,4.875 5.242,4.875 ZM8.992,4.875 C8.164,4.875 7.492,5.546 7.492,6.375 C7.492,7.203 8.164,7.875 8.992,7.875 C9.821,7.875 10.492,7.203 10.492,6.375 C10.492,5.546 9.821,4.875 8.992,4.875 ZM12.742,4.875 C11.914,4.875 11.242,5.546 11.242,6.375 C11.242,7.203 11.914,7.875 12.742,7.875 C13.571,7.875 14.242,7.203 14.242,6.375 C14.242,5.546 13.571,4.875 12.742,4.875 Z" />
                          </svg>
                          <span>17</span>
                        </div>
                      </div>
                    </div>
                    <div className="blog__item">
                      <div className="blog__image _anim_items">
                        <img src="/mogo/css/img/blog/blog2.png" alt="photo" />
                        <div className="blog__date _anim_items">
                          <span>14</span>
                          <p>Jan</p>
                        </div>
                      </div>
                      <div className="blog__text-content">
                        <div className="blog__subtitle _anim_items">sed do eiusmod tempor</div>
                        <div className="blog__text _anim_items">
                          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </div>
                      </div>
                      <div className="blog__icons _anim_items">
                        <div className="blog__icon">
                          <svg
                            className="blog__svg-icon blog_eye-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M19.710,5.776 C19.709,5.784 19.709,5.793 19.708,5.800 C19.708,5.804 19.707,5.809 19.707,5.813 C19.707,5.819 19.705,5.825 19.705,5.830 C19.704,5.837 19.703,5.844 19.702,5.851 C19.702,5.852 19.702,5.853 19.702,5.853 C19.678,6.008 19.607,6.151 19.499,6.263 C19.295,6.510 19.072,6.742 18.848,6.970 C17.636,8.200 16.246,9.297 14.725,10.092 C13.752,10.601 12.713,11.011 11.635,11.208 C10.450,11.425 9.264,11.414 8.085,11.158 C6.045,10.714 4.198,9.613 2.582,8.295 C1.832,7.684 1.094,7.015 0.474,6.263 C0.202,5.934 0.202,5.544 0.474,5.215 C0.677,4.968 0.900,4.735 1.125,4.507 C2.336,3.278 3.726,2.181 5.248,1.385 C6.220,0.877 7.259,0.466 8.337,0.269 C9.522,0.053 10.708,0.063 11.887,0.320 C13.927,0.763 15.774,1.865 17.390,3.182 C18.140,3.793 18.878,4.463 19.498,5.215 C19.606,5.326 19.677,5.470 19.701,5.624 C19.701,5.625 19.701,5.626 19.702,5.627 C19.703,5.633 19.704,5.641 19.704,5.647 C19.705,5.653 19.706,5.659 19.707,5.665 C19.707,5.669 19.707,5.673 19.708,5.677 C19.708,5.685 19.709,5.694 19.709,5.702 C19.710,5.714 19.711,5.726 19.711,5.739 C19.711,5.751 19.710,5.764 19.710,5.776 ZM9.990,1.942 C7.977,1.942 6.345,3.574 6.345,5.587 C6.345,7.600 7.977,9.232 9.990,9.232 C12.003,9.232 13.636,7.600 13.636,5.587 C13.636,3.574 12.003,1.942 9.990,1.942 ZM9.990,7.409 C8.984,7.409 8.168,6.594 8.168,5.587 C8.168,4.580 8.984,3.764 9.990,3.764 C10.997,3.764 11.813,4.580 11.813,5.587 C11.813,6.594 10.997,7.409 9.990,7.409 Z" />
                          </svg>
                          <span>992</span>
                        </div>
                        <div className="blog__icon">
                          <svg
                            className="blog__svg-icon blog_speech-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M9.416,12.358 C8.843,12.358 8.282,12.193 7.740,12.115 C5.549,14.886 2.093,14.340 2.093,14.340 C4.534,13.185 4.484,11.271 4.050,11.016 C2.134,9.890 0.982,8.176 0.982,6.255 C0.982,2.865 4.709,0.116 9.416,0.116 C14.124,0.116 16.993,2.865 16.993,6.255 C16.993,9.647 14.124,12.358 9.416,12.358 ZM5.242,4.875 C4.414,4.875 3.742,5.546 3.742,6.375 C3.742,7.203 4.414,7.875 5.242,7.875 C6.071,7.875 6.742,7.203 6.742,6.375 C6.742,5.546 6.071,4.875 5.242,4.875 ZM8.992,4.875 C8.164,4.875 7.492,5.546 7.492,6.375 C7.492,7.203 8.164,7.875 8.992,7.875 C9.821,7.875 10.492,7.203 10.492,6.375 C10.492,5.546 9.821,4.875 8.992,4.875 ZM12.742,4.875 C11.914,4.875 11.242,5.546 11.242,6.375 C11.242,7.203 11.914,7.875 12.742,7.875 C13.571,7.875 14.242,7.203 14.242,6.375 C14.242,5.546 13.571,4.875 12.742,4.875 Z" />
                          </svg>
                          <span>42</span>
                        </div>
                      </div>
                    </div>
                    <div className="blog__item">
                      <div className="blog__image _anim_items">
                        <img src="/mogo/css/img/blog/blog3.png" alt="photo" />
                        <div className="blog__date _anim_items">
                          <span>12</span>
                          <p>Jan</p>
                        </div>
                      </div>
                      <div className="blog__text-content">
                        <div className="blog__subtitle _anim_items">
                          incididunt ut labore et dolore
                        </div>
                        <div className="blog__text _anim_items">
                          Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                      </div>
                      <div className="blog__icons _anim_items">
                        <div className="blog__icon">
                          <svg
                            className="blog__svg-icon blog_eye-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M19.710,5.776 C19.709,5.784 19.709,5.793 19.708,5.800 C19.708,5.804 19.707,5.809 19.707,5.813 C19.707,5.819 19.705,5.825 19.705,5.830 C19.704,5.837 19.703,5.844 19.702,5.851 C19.702,5.852 19.702,5.853 19.702,5.853 C19.678,6.008 19.607,6.151 19.499,6.263 C19.295,6.510 19.072,6.742 18.848,6.970 C17.636,8.200 16.246,9.297 14.725,10.092 C13.752,10.601 12.713,11.011 11.635,11.208 C10.450,11.425 9.264,11.414 8.085,11.158 C6.045,10.714 4.198,9.613 2.582,8.295 C1.832,7.684 1.094,7.015 0.474,6.263 C0.202,5.934 0.202,5.544 0.474,5.215 C0.677,4.968 0.900,4.735 1.125,4.507 C2.336,3.278 3.726,2.181 5.248,1.385 C6.220,0.877 7.259,0.466 8.337,0.269 C9.522,0.053 10.708,0.063 11.887,0.320 C13.927,0.763 15.774,1.865 17.390,3.182 C18.140,3.793 18.878,4.463 19.498,5.215 C19.606,5.326 19.677,5.470 19.701,5.624 C19.701,5.625 19.701,5.626 19.702,5.627 C19.703,5.633 19.704,5.641 19.704,5.647 C19.705,5.653 19.706,5.659 19.707,5.665 C19.707,5.669 19.707,5.673 19.708,5.677 C19.708,5.685 19.709,5.694 19.709,5.702 C19.710,5.714 19.711,5.726 19.711,5.739 C19.711,5.751 19.710,5.764 19.710,5.776 ZM9.990,1.942 C7.977,1.942 6.345,3.574 6.345,5.587 C6.345,7.600 7.977,9.232 9.990,9.232 C12.003,9.232 13.636,7.600 13.636,5.587 C13.636,3.574 12.003,1.942 9.990,1.942 ZM9.990,7.409 C8.984,7.409 8.168,6.594 8.168,5.587 C8.168,4.580 8.984,3.764 9.990,3.764 C10.997,3.764 11.813,4.580 11.813,5.587 C11.813,6.594 10.997,7.409 9.990,7.409 Z" />
                          </svg>
                          <span>1560</span>
                        </div>
                        <div className="blog__icon">
                          <svg
                            className="blog__svg-icon blog_speech-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path d="M9.416,12.358 C8.843,12.358 8.282,12.193 7.740,12.115 C5.549,14.886 2.093,14.340 2.093,14.340 C4.534,13.185 4.484,11.271 4.050,11.016 C2.134,9.890 0.982,8.176 0.982,6.255 C0.982,2.865 4.709,0.116 9.416,0.116 C14.124,0.116 16.993,2.865 16.993,6.255 C16.993,9.647 14.124,12.358 9.416,12.358 ZM5.242,4.875 C4.414,4.875 3.742,5.546 3.742,6.375 C3.742,7.203 4.414,7.875 5.242,7.875 C6.071,7.875 6.742,7.203 6.742,6.375 C6.742,5.546 6.071,4.875 5.242,4.875 ZM8.992,4.875 C8.164,4.875 7.492,5.546 7.492,6.375 C7.492,7.203 8.164,7.875 8.992,7.875 C9.821,7.875 10.492,7.203 10.492,6.375 C10.492,5.546 9.821,4.875 8.992,4.875 ZM12.742,4.875 C11.914,4.875 11.242,5.546 11.242,6.375 C11.242,7.203 11.914,7.875 12.742,7.875 C13.571,7.875 14.242,7.203 14.242,6.375 C14.242,5.546 13.571,4.875 12.742,4.875 Z" />
                          </svg>
                          <span>98</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="map">
              <a href="#map" className="map__row" id="map">
                <div className="map__icon _anim_items">
                  <svg
                    className="map__svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M10.000,25.800 C10.000,25.800 0.400,15.101 0.400,9.800 C0.400,4.499 4.698,0.200 10.000,0.200 C15.302,0.200 19.600,4.499 19.600,9.800 C19.600,15.101 10.000,25.800 10.000,25.800 ZM10.000,3.400 C6.466,3.400 3.600,6.265 3.600,9.800 C3.600,13.334 6.466,16.200 10.000,16.200 C13.534,16.200 16.400,13.334 16.400,9.800 C16.400,6.265 13.534,3.400 10.000,3.400 ZM10.000,13.000 C8.233,13.000 6.800,11.567 6.800,9.800 C6.800,8.032 8.233,6.600 10.000,6.600 C11.767,6.600 13.200,8.032 13.200,9.800 C13.200,11.567 11.767,13.000 10.000,13.000 Z" />
                  </svg>
                </div>
                <div className="map__title _uppercase __decoration-red-line _anim_items">
                  open map
                </div>
              </a>
            </section>
            <section className="links" id="contacts">
              <div className="container">
                <div className="links__row">
                  <div className="links__subscribe subscribe-links links__item">
                    <div className="subscribe-links__text-content">
                      <div className="subscribe-links__title _anim_items">MoGo</div>
                      <div className="subscribe-links__text _anim_items">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </div>
                      <div className="subscribe-links__subtitle _anim_items">
                        <b>15k</b> followers
                      </div>
                    </div>
                    <div className="subscribe-links__icons _anim_items">
                      <span> Follow Us: </span>
                      <a href="#iconFacebook" className="subscribe-links__icon" id="iconFacebook">
                        <svg
                          className="subscribe-links__svg-icon subscribe-links_facebook"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M7.993,0.015 C7.993,0.937 7.993,2.590 7.993,2.590 C7.993,2.590 6.095,2.401 5.619,3.128 C5.359,3.527 5.514,4.691 5.491,5.527 C6.319,5.527 7.180,5.527 8.009,5.527 C7.796,6.505 7.644,7.167 7.487,8.014 C6.770,8.014 5.477,8.014 5.477,8.014 L5.477,16.016 C5.477,16.016 3.104,16.016 1.988,16.016 C1.989,13.549 1.987,10.671 1.988,8.045 C1.446,8.045 1.045,8.045 0.504,8.045 C0.504,7.122 0.504,6.450 0.504,5.527 C1.029,5.527 1.446,5.527 1.972,5.527 C2.047,3.686 2.075,1.862 2.990,0.933 C4.018,-0.111 4.998,0.015 7.993,0.015 Z" />
                        </svg>
                      </a>
                      <a href="#iconTwitter" className="subscribe-links__icon" id="iconTwitter">
                        <svg
                          className="subscribe-links__svg-icon subscribe-links_twitter"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M10.883,0.516 C12.154,0.493 12.831,0.957 13.477,1.545 C14.026,1.498 14.739,1.192 15.159,0.979 C15.295,0.904 15.431,0.830 15.568,0.755 C15.328,1.404 15.002,1.911 14.502,2.296 C14.392,2.382 14.281,2.497 14.142,2.552 C14.142,2.555 14.142,2.557 14.142,2.559 C14.854,2.552 15.442,2.231 16.000,2.057 C16.000,2.059 16.000,2.062 16.000,2.065 C15.707,2.531 15.310,3.003 14.887,3.342 C14.716,3.478 14.545,3.613 14.374,3.749 C14.384,4.504 14.363,5.223 14.222,5.857 C13.402,9.542 11.230,12.043 7.792,13.114 C6.557,13.499 4.562,13.658 3.147,13.306 C2.446,13.132 1.812,12.935 1.217,12.675 C0.887,12.531 0.581,12.375 0.288,12.196 C0.192,12.138 0.096,12.079 -0.000,12.020 C0.319,12.030 0.692,12.118 1.049,12.060 C1.372,12.008 1.688,12.022 1.986,11.957 C2.728,11.794 3.388,11.579 3.956,11.246 C4.231,11.085 4.649,10.896 4.845,10.664 C4.476,10.670 4.142,10.585 3.868,10.488 C2.806,10.113 2.188,9.423 1.786,8.388 C2.108,8.423 3.034,8.507 3.251,8.324 C2.846,8.302 2.457,8.067 2.178,7.893 C1.324,7.359 0.627,6.462 0.633,5.082 C0.745,5.135 0.857,5.189 0.969,5.242 C1.183,5.333 1.402,5.381 1.658,5.434 C1.766,5.456 1.982,5.520 2.106,5.473 C2.101,5.473 2.095,5.473 2.090,5.473 C1.925,5.282 1.655,5.153 1.489,4.947 C0.941,4.265 0.428,3.217 0.753,1.969 C0.835,1.652 0.966,1.373 1.105,1.115 C1.110,1.117 1.116,1.120 1.121,1.123 C1.185,1.256 1.327,1.354 1.417,1.466 C1.697,1.813 2.043,2.125 2.394,2.400 C3.593,3.337 4.673,3.914 6.406,4.340 C6.846,4.448 7.355,4.530 7.880,4.532 C7.732,4.102 7.780,3.406 7.896,2.991 C8.188,1.945 8.823,1.191 9.754,0.787 C9.976,0.691 10.223,0.620 10.482,0.564 C10.616,0.548 10.749,0.532 10.883,0.516 Z" />
                        </svg>
                      </a>
                      <a href="#iconInstagram" className="subscribe-links__icon" id="iconInstagram">
                        <svg
                          className="subscribe-links__svg-icon subscribe-links_instagram"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M14.000,16.015 L2.000,16.015 C0.895,16.015 -0.000,15.120 -0.000,14.015 L-0.000,2.015 C-0.000,0.910 0.895,0.015 2.000,0.015 L14.000,0.015 C15.105,0.015 16.000,0.910 16.000,2.015 L16.000,14.015 C16.000,15.120 15.105,16.015 14.000,16.015 ZM8.000,4.915 C6.753,4.915 5.680,5.653 5.189,6.715 L5.186,6.715 C5.181,6.726 5.177,6.738 5.172,6.749 C5.143,6.814 5.117,6.882 5.092,6.950 C5.080,6.982 5.067,7.014 5.056,7.047 C5.033,7.117 5.014,7.188 4.997,7.260 C4.988,7.293 4.978,7.326 4.971,7.360 C4.954,7.435 4.943,7.512 4.933,7.590 C4.928,7.621 4.922,7.652 4.918,7.683 C4.907,7.792 4.900,7.903 4.900,8.015 C4.900,9.727 6.288,11.115 8.000,11.115 C9.712,11.115 11.100,9.727 11.100,8.015 C11.100,7.903 11.093,7.792 11.082,7.683 C11.078,7.652 11.072,7.621 11.067,7.590 C11.057,7.512 11.045,7.435 11.029,7.360 C11.022,7.326 11.012,7.293 11.003,7.260 C10.985,7.188 10.967,7.117 10.944,7.047 C10.933,7.014 10.920,6.982 10.908,6.950 C10.883,6.882 10.857,6.814 10.828,6.749 C10.823,6.738 10.819,6.726 10.814,6.715 L10.811,6.715 C10.319,5.653 9.247,4.915 8.000,4.915 ZM14.200,2.615 C14.200,2.173 13.842,1.815 13.400,1.815 L11.800,1.815 C11.358,1.815 11.000,2.173 11.000,2.615 L11.000,4.215 C11.000,4.657 11.358,5.015 11.800,5.015 L13.400,5.015 C13.842,5.015 14.200,4.657 14.200,4.215 L14.200,2.615 ZM14.200,6.715 L12.725,6.715 C12.839,7.129 12.900,7.565 12.900,8.015 C12.900,10.721 10.706,12.915 8.000,12.915 C5.294,12.915 3.100,10.721 3.100,8.015 C3.100,7.565 3.161,7.129 3.275,6.715 L1.800,6.715 L1.800,13.415 C1.800,13.857 2.158,14.215 2.600,14.215 L13.400,14.215 C13.842,14.215 14.200,13.857 14.200,13.415 L14.200,6.715 Z" />
                        </svg>
                      </a>
                      <a href="#iconPinterest" className="subscribe-links__icon" id="iconPinterest">
                        <svg
                          className="subscribe-links__svg-icon subscribe-links_pinterest"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M5.844,10.424 C5.713,10.945 5.582,11.490 5.446,12.024 C5.311,12.550 5.193,13.084 4.997,13.567 C4.673,14.368 4.260,15.142 3.720,15.767 C3.361,16.185 3.437,16.019 3.329,15.996 C3.246,15.979 3.239,15.899 3.223,15.781 C3.135,15.145 3.195,14.409 3.228,13.694 C3.265,12.879 3.436,12.201 3.595,11.524 C3.898,10.234 4.187,8.970 4.492,7.673 C4.513,7.586 4.567,7.443 4.549,7.394 C4.410,7.034 4.320,6.709 4.281,6.332 C4.235,5.896 4.270,5.491 4.368,5.117 C4.540,4.456 4.938,3.869 5.552,3.656 C5.941,3.520 6.373,3.581 6.635,3.738 C6.906,3.899 7.091,4.155 7.177,4.516 C7.270,4.901 7.202,5.361 7.128,5.699 C6.961,6.460 6.741,7.032 6.542,7.767 C6.443,8.132 6.331,8.506 6.424,8.899 C6.509,9.261 6.697,9.510 6.953,9.696 C7.219,9.889 7.534,9.996 7.969,9.981 C8.736,9.954 9.269,9.464 9.626,9.001 C10.196,8.260 10.541,7.261 10.673,6.072 C10.715,5.689 10.746,5.248 10.716,4.813 C10.662,4.011 10.410,3.366 10.012,2.865 C9.633,2.389 9.096,2.009 8.442,1.796 C7.794,1.584 6.897,1.514 6.100,1.651 C4.652,1.899 3.630,2.722 3.028,3.858 C2.713,4.453 2.505,5.138 2.505,5.989 C2.505,6.646 2.667,7.155 2.929,7.552 C3.012,7.677 3.134,7.781 3.215,7.925 C3.331,8.129 3.197,8.433 3.140,8.653 C3.072,8.918 3.064,9.286 2.754,9.292 C2.626,9.294 2.464,9.200 2.356,9.140 C1.540,8.689 1.045,7.869 0.842,6.806 C0.718,6.160 0.719,5.406 0.842,4.781 C0.961,4.177 1.182,3.621 1.427,3.168 C1.936,2.229 2.682,1.479 3.589,0.942 C4.287,0.530 5.074,0.240 6.031,0.101 C6.349,0.055 6.678,0.036 7.034,0.018 C8.077,-0.031 9.025,0.206 9.738,0.525 C10.491,0.862 11.092,1.310 11.601,1.865 C12.124,2.438 12.505,3.103 12.747,3.934 C12.873,4.366 12.996,4.830 12.996,5.364 C12.996,5.899 12.882,6.372 12.803,6.844 C12.507,8.611 11.666,10.056 10.405,10.879 C10.099,11.079 9.728,11.263 9.308,11.385 C8.891,11.506 8.416,11.598 7.906,11.562 C7.412,11.528 7.007,11.394 6.667,11.202 C6.329,11.011 6.045,10.777 5.844,10.424 Z" />
                        </svg>
                      </a>
                      <a
                        href="#iconGoogle-plus"
                        className="subscribe-links__icon"
                        id="iconGoogle-plus"
                      >
                        <svg
                          className="subscribe-links__svg-icon subscribe-links_google-plus"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M13.500,3.717 L13.500,6.157 L12.500,6.157 L12.500,3.717 L10.000,3.717 L10.000,2.719 L12.500,2.719 L12.500,0.279 L13.500,0.279 L13.500,2.719 L16.000,2.719 L16.000,3.717 L13.500,3.717 ZM6.585,1.246 C7.473,1.737 7.993,2.534 7.993,3.577 C7.993,4.453 7.452,5.143 6.754,5.679 C6.073,6.201 5.944,6.421 5.944,6.865 C5.944,7.243 6.673,7.889 7.055,8.154 C8.169,8.928 8.499,9.647 8.499,10.847 C8.499,12.344 7.055,14.016 4.383,14.016 C2.039,14.016 -0.000,12.895 -0.000,11.398 C-0.000,9.878 1.866,8.411 4.209,8.411 C4.465,8.411 4.699,8.401 4.941,8.401 C4.620,8.094 4.367,7.713 4.367,7.250 C4.367,6.975 4.456,6.700 4.580,6.465 C4.453,6.474 4.323,6.453 4.189,6.453 C2.265,6.453 0.975,5.062 0.975,3.396 C0.975,1.765 2.756,0.263 4.648,0.263 C5.703,0.263 8.868,0.263 8.868,0.263 L7.923,1.246 L6.585,1.246 ZM4.656,8.799 C3.036,8.782 1.585,9.769 1.585,10.955 C1.585,12.164 2.755,13.049 4.374,13.049 C6.651,13.049 7.445,12.226 7.445,11.017 C7.445,10.871 7.427,10.728 7.393,10.589 C7.215,9.904 6.585,9.565 5.705,8.965 C5.386,8.863 5.034,8.804 4.656,8.799 ZM6.476,3.596 C6.287,2.194 5.207,1.068 4.120,1.037 C3.033,1.005 2.304,2.078 2.492,3.480 C2.680,4.883 3.713,6.046 4.800,6.077 C5.887,6.109 6.663,4.998 6.476,3.596 Z" />
                        </svg>
                      </a>
                      <a href="#iconYoutube" className="subscribe-links__icon" id="iconYoutube">
                        <svg
                          className="subscribe-links__svg-icon subscribe-links_youtube"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M13.537,0.523 L8.312,0.518 L2.883,0.523 C1.525,0.523 -0.000,1.429 -0.000,2.759 L-0.000,9.377 C-0.000,10.706 1.525,11.517 2.883,11.517 L8.415,11.517 L13.537,11.517 C14.896,11.517 15.996,10.706 15.996,9.377 L15.996,2.759 C15.996,1.429 14.896,0.523 13.537,0.523 ZM6.964,8.566 L6.932,3.526 L10.440,6.068 L6.964,8.566 Z" />
                        </svg>
                      </a>
                      <a href="#iconDribbble" className="subscribe-links__icon" id="iconDribbble">
                        <svg
                          className="subscribe-links__svg-icon subscribe-links_dribbble"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M15.837,6.404 C15.733,5.891 15.575,5.384 15.371,4.900 C15.171,4.425 14.922,3.969 14.633,3.541 C14.347,3.118 14.019,2.720 13.657,2.358 C13.295,1.996 12.897,1.668 12.473,1.381 C12.046,1.092 11.588,0.844 11.114,0.644 C10.631,0.440 10.125,0.282 9.611,0.177 C9.084,0.069 8.542,0.015 8.000,0.015 C7.458,0.015 6.916,0.069 6.389,0.177 C5.875,0.282 5.369,0.440 4.885,0.644 C4.411,0.844 3.954,1.092 3.526,1.381 C3.103,1.668 2.704,1.996 2.343,2.358 C1.981,2.720 1.653,3.118 1.367,3.541 C1.078,3.969 0.829,4.425 0.629,4.900 C0.424,5.384 0.267,5.891 0.162,6.404 C0.054,6.930 -0.000,7.473 -0.000,8.014 C-0.000,8.557 0.054,9.100 0.162,9.626 C0.267,10.140 0.424,10.646 0.629,11.129 C0.829,11.604 1.078,12.062 1.367,12.489 C1.653,12.913 1.981,13.310 2.343,13.672 C2.704,14.034 3.103,14.362 3.526,14.648 C3.954,14.937 4.411,15.186 4.885,15.386 C5.369,15.591 5.875,15.747 6.389,15.852 C6.916,15.961 7.458,16.016 8.000,16.016 C8.542,16.016 9.084,15.961 9.611,15.852 C10.125,15.747 10.631,15.591 11.114,15.386 C11.588,15.186 12.046,14.937 12.473,14.648 C12.897,14.362 13.295,14.034 13.657,13.672 C14.019,13.310 14.347,12.913 14.633,12.489 C14.922,12.062 15.171,11.604 15.371,11.129 C15.575,10.646 15.733,10.140 15.837,9.626 C15.946,9.100 16.000,8.557 16.000,8.014 C16.000,7.473 15.946,6.930 15.837,6.404 ZM14.830,7.947 C14.731,7.925 12.419,7.428 10.071,7.723 C10.023,7.606 9.975,7.489 9.924,7.370 C9.782,7.036 9.629,6.705 9.470,6.379 C12.168,5.278 13.264,3.693 13.277,3.675 C14.235,4.838 14.814,6.326 14.830,7.947 ZM12.513,2.888 C12.496,2.914 11.523,4.395 8.944,5.361 C7.776,3.215 6.493,1.510 6.390,1.375 C6.906,1.250 7.445,1.182 8.000,1.182 C9.730,1.182 11.309,1.827 12.513,2.888 ZM6.364,1.381 C6.363,1.381 6.362,1.382 6.362,1.382 C6.362,1.382 6.355,1.384 6.342,1.387 C6.349,1.384 6.356,1.383 6.364,1.381 ZM5.085,1.836 C5.176,1.957 6.439,3.671 7.622,5.772 C4.341,6.644 1.494,6.610 1.314,6.606 C1.758,4.490 3.179,2.736 5.085,1.836 ZM1.168,8.014 C1.168,7.942 1.171,7.870 1.173,7.798 C1.294,7.801 4.670,7.878 8.188,6.826 C8.384,7.208 8.571,7.598 8.742,7.986 C8.652,8.012 8.562,8.039 8.473,8.068 C4.786,9.260 2.916,12.578 2.916,12.578 C2.916,12.578 2.918,12.579 2.918,12.581 C1.830,11.370 1.168,9.770 1.168,8.014 ZM8.000,14.847 C6.346,14.847 4.830,14.260 3.648,13.281 C3.738,13.354 3.801,13.401 3.801,13.401 C3.801,13.401 5.111,10.544 9.163,9.133 C9.178,9.128 9.193,9.123 9.208,9.119 C10.169,11.617 10.566,13.709 10.667,14.307 C9.848,14.655 8.946,14.847 8.000,14.847 ZM11.818,13.682 C11.748,13.269 11.384,11.264 10.488,8.802 C12.694,8.449 14.605,9.053 14.746,9.100 C14.442,11.003 13.352,12.646 11.818,13.682 Z" />
                        </svg>
                      </a>
                      <a href="#iconTubmrl" className="subscribe-links__icon" id="iconTubmrl">
                        <svg
                          className="subscribe-links__svg-icon subscribe-links_tumblr"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path d="M10.009,15.145 C9.329,15.466 8.712,15.693 8.160,15.823 C7.608,15.953 7.012,16.018 6.371,16.018 C5.642,16.018 5.213,15.926 4.653,15.742 C4.094,15.557 3.617,15.292 3.222,14.952 C2.826,14.609 2.553,14.244 2.399,13.860 C2.247,13.474 2.171,12.916 2.171,12.183 L2.171,6.569 L0.007,6.569 L0.007,4.302 C0.633,4.098 1.358,3.805 1.803,3.423 C2.251,3.041 2.608,2.584 2.878,2.048 C3.148,1.514 3.335,0.835 3.436,0.008 L5.701,0.008 L5.701,3.712 L9.383,3.712 L9.383,6.569 L5.701,6.569 L5.701,10.674 C5.701,11.603 5.689,12.138 5.787,12.401 C5.884,12.663 6.128,12.935 6.394,13.092 C6.747,13.304 7.149,13.411 7.603,13.411 C8.409,13.411 9.211,13.147 10.009,12.620 L10.009,15.145 Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="subscribe-links__input _anim_items">
                      <input
                        type="email"
                        id="subscribe-links_email-input"
                        placeholder="Your Email..."
                      />
                      <input
                        type="button"
                        defaultValue="subscribe"
                        id="subscribe-links_subscribe-input"
                      />
                    </div>
                  </div>
                  <div className="links__blogs blogs-links links__item">
                    <div className="blogs-links__title _anim_items">Blogs</div>
                    <div className="blogs-links__item">
                      <div className="blogs-links__image _anim_items">
                        <img src="/mogo/css/img/links/blogs/blogs1.png" alt="photo" />
                      </div>
                      <div className="blogs-links__text-content">
                        <div className="blogs-links__text _anim_items">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </div>
                        <div className="blogs-links__lable _anim_items">Jan 9, 2016</div>
                      </div>
                    </div>
                    <div className="blogs-links__item">
                      <div className="blogs-links__image _anim_items">
                        <img src="/mogo/css/img/links/blogs/blogs2.png" alt="photo" />
                      </div>
                      <div className="blogs-links__text-content">
                        <div className="blogs-links__text _anim_items">
                          Consectetur adipiscing elit, sed do eiusmod tempor
                        </div>
                        <div className="blogs-links__lable _anim_items">Jan 9, 2016</div>
                      </div>
                    </div>
                    <div className="blogs-links__item">
                      <div className="blogs-links__image _anim_items">
                        <img src="/mogo/css/img/links/blogs/blogs3.png" alt="photo" />
                      </div>
                      <div className="blogs-links__text-content">
                        <div className="blogs-links__text _anim_items">
                          sed do eiusmod tempor incididunt ut labore
                        </div>
                        <div className="blogs-links__lable _anim_items">Jan 9, 2016</div>
                      </div>
                    </div>
                  </div>
                  <div className="links__instagram instagram-links links__item">
                    <div className="instagram-links__title _anim_items">instagram</div>
                    <div className="instagram-links__items">
                      <div className="instagram-links__item _anim_items">
                        <img src="/mogo/css/img/links/instagram/insta1.png" alt="photo" />
                        <img src="/mogo/css/img/links/instagram/insta2.png" alt="photo" />
                        <img src="/mogo/css/img/links/instagram/insta3.png" alt="photo" />
                      </div>
                      <div className="instagram-links__item _anim_items">
                        <img src="/mogo/css/img/links/instagram/insta4.png" alt="photo" />
                        <img src="/mogo/css/img/links/instagram/insta5.png" alt="photo" />
                        <img src="/mogo/css/img/links/instagram/insta6.png" alt="photo" />
                      </div>
                      <div className="instagram-links__item _anim_items">
                        <img src="/mogo/css/img/links/instagram/insta7.png" alt="photo" />
                        <img src="/mogo/css/img/links/instagram/insta8.png" alt="photo" />
                        <img src="/mogo/css/img/links/instagram/insta9.png" alt="photo" />
                      </div>
                    </div>
                    <a className="instagram-links__label _anim_items">View more photos</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="footer__row">
                <div className="footer__text">
                  <p>
                    © 2016 MoGo free PSD template by <span>Laaqiq</span>
                  </p>
                  <p>
                    © 2020 done by <span>Maksim Lukyan</span>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
};

export default Mogo;
