import { Global } from '@emotion/react';

import Avatar from './avatar';
import { globalStyles } from './global.styles';
import { Container, HomeWrapper } from './home.styles';
import Projects from './projects';

const Home = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <HomeWrapper>
        <Container>
          <Avatar />
          <Projects />
        </Container>
      </HomeWrapper>
    </>
  );
};

export default Home;
