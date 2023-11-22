import React, { useState, useEffect, useRef } from 'react';

import { CardsAnimationContext } from 'src/context/cardsAnimation.context';
import { LocalStorageKeys } from 'src/constants/localStorageKeys';
import { letters } from 'src/constants/intro';

import { Intro, IntroContainer, IntroTextStyled } from './intro.styles';
import { introAnimation } from './intro.helper';

const IntroLayout = ({ children }: React.PropsWithChildren) => {
  const [enableCardsAnimation, setEnableCardsAnimation] = useState<boolean>(false);
  const [enableIntro, setEnableIntro] = useState(true);

  const setFunc = (value: boolean) => {
    setEnableCardsAnimation(value);
  };

  const introRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cb = () => {
      const isShowCardsAnimation = !sessionStorage.getItem(LocalStorageKeys.enableAnimation);
      setEnableIntro(false);
      setEnableCardsAnimation(isShowCardsAnimation);
    };
    if (enableIntro && introRef.current) introAnimation(introRef.current!, cb);
  }, [introRef]);

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
