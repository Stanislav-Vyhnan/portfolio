import React, { useState, useEffect, useRef } from 'react';

import { CardsAnimationContext } from 'src/context/cardsAnimation.context';
import { theme } from 'src/theme';
import { LocalStorageKeys } from 'src/constants/localStorageKeys';

import { Intro, IntroContainer, IntroTextStyled } from './intro.styles';

const letters = [
  'S',
  't',
  'a',
  'n',
  'i',
  's',
  'l',
  'a',
  'v',
  '\xa0',
  '•',
  `\xa0`,
  'P',
  'o',
  'r',
  't',
  'f',
  'o',
  'l',
  'i',
  'o',
];

const letterAnimationSpeed = 100;
const bgHideAnimationSpeed = 1000;

const IntroLayout = ({ children }: React.PropsWithChildren) => {
  const [enableCardsAnimation, setEnableCardsAnimation] = useState<boolean>(false);
  const [enableIntro, setEnableIntro] = useState(true);

  const setFunc = (value: boolean) => {
    setEnableCardsAnimation(value);
  };

  const introRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const introAnimation = () => {
      const isShowCardsAnimation = !sessionStorage.getItem(LocalStorageKeys.enableAnimation);
      const textLength = 441;
      let index = 0;
      const maxLength = letters.length;
      const windowWidth = window.innerWidth;

      let leftPosition = windowWidth / 2 - textLength / 2;

      const intervalId = setInterval(() => {
        if (index === maxLength) {
          setTimeout(() => {
            introRef.current!.style.transition = `opacity ${bgHideAnimationSpeed}ms ease-in-out`;
            introRef.current!.style.opacity = `0%`;

            setTimeout(() => {
              setEnableIntro(false);
              setEnableCardsAnimation(isShowCardsAnimation);
            }, bgHideAnimationSpeed - 200);
          }, bgHideAnimationSpeed * 2);

          window.clearInterval(intervalId);
          return;
        }

        const letterElement = document.getElementById(
          `animated-letter-${index}`
        ) as HTMLSpanElement;

        const newLeftPosition = leftPosition + 22;
        leftPosition = newLeftPosition;

        letterElement.style.transition = theme.mixins.transition('left', 'top')
          .transition as string;

        letterElement.style.left = `${newLeftPosition}px`;
        letterElement.style.top = '0px';

        index++;
      }, letterAnimationSpeed);
    };

    if (enableIntro) introAnimation();
  }, []);

  return (
    <CardsAnimationContext.Provider
      value={{ enableCardsAnimation, setEnableCardsAnimation: setFunc }}
    >
      <IntroContainer>
        {enableIntro && (
          <Intro ref={introRef}>
            <IntroTextStyled component="div" fontSize={36} fontWeight={700}>
              {letters.map((letter, index) => (
                <span key={index} id={`animated-letter-${index}`}>
                  {letter}
                </span>
              ))}
            </IntroTextStyled>
          </Intro>
        )}
        {children}
      </IntroContainer>
    </CardsAnimationContext.Provider>
  );
};

export default IntroLayout;
