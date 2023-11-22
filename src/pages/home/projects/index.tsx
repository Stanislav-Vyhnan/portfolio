import { useEffect, useState } from 'react';

import { Typography } from 'src/pages/common/typography';
import { scrollSettings } from 'src/constants/scroll.settings';
import { useCardsAnimationContext } from 'src/context/cardsAnimation.context';
import { LocalStorageKeys } from 'src/constants/localStorageKeys';

import { CardsContainer, ProjectsWrapper } from './projects.styles';
import Card from './card';
import { cards } from './projects.settings';

const Projects = () => {
  const { enableCardsAnimation } = useCardsAnimationContext();

  const [idCardWithAnimation, setIdCardWithAnimation] = useState<number | null>(null);
  const [firstCardRef, setFirstCardRef] = useState<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const cardAnimation = () => {
      let index = 0;
      const maxLength = cards.length;

      setIdCardWithAnimation(index++);

      const intervalId = setInterval(() => {
        if (index === maxLength) {
          window.clearInterval(intervalId);
          firstCardRef!.scrollIntoView(scrollSettings);
          sessionStorage.setItem(LocalStorageKeys.enableAnimation, 'showed');
        }

        setIdCardWithAnimation(index);
        index++;
      }, 300);
    };

    if (firstCardRef && enableCardsAnimation) cardAnimation();
  }, [firstCardRef, enableCardsAnimation]);

  return (
    <ProjectsWrapper>
      <Typography component="h2" fontSize={28} fontWeight={700} textAlign="center">
        Projects
      </Typography>
      <CardsContainer>
        {cards.map(({ link, id, title, styles, logoSrc, backgroundColor }) => (
          <Card
            key={id}
            id={id}
            setFirstCardRef={setFirstCardRef}
            enableAnimation={id === idCardWithAnimation}
            link={link}
            title={title}
            logoSrc={logoSrc}
            styles={styles}
            backgroundColor={backgroundColor}
          />
        ))}
      </CardsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
