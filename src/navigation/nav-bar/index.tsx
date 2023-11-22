import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography } from 'src/pages/common/typography';

import paths from '../paths';

import { BackButton, NavBar, NavBarIcon, NavBarLayoutStyled } from './nav-bar.styles';

type Props = {
  projectClassName: string;
} & React.PropsWithChildren;

const NavBarLayout = ({ projectClassName, children }: Props) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const onShowNavBar = () => {
    setIsShow(!isShow);
  };

  const onBack = () => {
    navigate(paths.home);
    navigate(0);
  };

  return (
    <NavBarLayoutStyled id={projectClassName}>
      <NavBar $isShow={isShow}>
        <BackButton onClick={onBack}>
          <Typography fontSize={24} fontWeight={600}>
            Back
          </Typography>
        </BackButton>
        <NavBarIcon $enableAnimation={!isShow} onClick={onShowNavBar} />
      </NavBar>
      {children}
    </NavBarLayoutStyled>
  );
};

export default NavBarLayout;
