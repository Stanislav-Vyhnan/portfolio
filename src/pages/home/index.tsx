import Avatar from './avatar';
import { Container, HomeWrapper } from './home.styles';
import Projects from './projects';

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <Avatar />
        <Projects />
      </Container>
    </HomeWrapper>
  );
};

export default Home;
