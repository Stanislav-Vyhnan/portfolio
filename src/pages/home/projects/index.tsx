import { Typography } from 'src/pages/common/typography';

import { CardsContainer, ProjectsWrapper } from './projects.styles';
import Card from './card';
import { cards } from './projects.settings';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Typography component="h2" fontSize={28} fontWeight={700} textAlign="center">
        Projects
      </Typography>
      <CardsContainer>
        {cards.map(({ link, title, styles, logoSrc, backgroundColor }, index) => (
          <Card
            key={index}
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