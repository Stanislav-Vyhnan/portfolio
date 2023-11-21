import { Typography } from 'src/pages/common/typography';

import { CardsContainer, ProjectsWrapper } from './projects.styles';
import Card from './card';
import { cards } from './projects.settings';

const Projects = () => {
  // const [height, setHeight] = useState<number | null>(null);

  // const cardsContainerRef = useRef<HTMLUListElement | null>(null);

  // useEffect(() => {
  //   if (cardsContainerRef.current) {
  //     window.addEventListener('resize', () => {
  //       if (window.innerWidth < mobileWidth) {
  //         const windowHeight = window.innerHeight;
  //         const offsetHeight = cardsContainerRef.current!.offsetTop;
  //         const cardsContainerHeight =
  //           windowHeight - offsetHeight - outsidePaddingBottom - insidePaddingBottom;
  //         console.log(cardsContainerHeight);
  //         setHeight(cardsContainerHeight);
  //       }
  //     });
  //   }
  // });

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
