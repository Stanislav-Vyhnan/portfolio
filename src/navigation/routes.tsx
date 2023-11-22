import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// import ErrorPageNotFound from 'pages/errors/PageNotFound'

import Kallyas from 'src/pages/projects/kallyas';
import Mogo from 'src/pages/projects/mogo';
import Piroll from 'src/pages/projects/piroll';
import Plumber from 'src/pages/projects/plumber';
import StartUpAgency from 'src/pages/projects/start-up-agency';
import TheHam from 'src/pages/projects/the-ham';
import Vibo from 'src/pages/projects/vibo';

import { AppRouterProps } from './types';
import paths from './paths';
import NavBarLayout from './nav-bar';

enum ProjectClasses {
  Kallyas = 'kallyas',
  Mogo = 'mogo',
  Piroll = 'piroll',
  Plumber = 'plumber',
  StartUpAgency = 'start-up-agency',
  TheHam = 'the-ham',
  Vibo = 'vibo',
}

const Home = lazy(() => import('../pages/home/'));

const routes: AppRouterProps[] = [
  {
    path: paths.home,
    element: <Home />,
  },
  {
    path: paths.kallyas,
    element: (
      <NavBarLayout projectClassName={ProjectClasses.Kallyas}>
        <Kallyas />
      </NavBarLayout>
    ),
  },
  {
    path: paths.mogo,
    element: (
      <NavBarLayout projectClassName={ProjectClasses.Mogo}>
        <Mogo />
      </NavBarLayout>
    ),
  },
  {
    path: paths.piroll,
    element: (
      <NavBarLayout projectClassName={ProjectClasses.Piroll}>
        <Piroll />
      </NavBarLayout>
    ),
  },
  {
    path: paths.plumber,
    element: (
      <NavBarLayout projectClassName={ProjectClasses.Plumber}>
        <Plumber />
      </NavBarLayout>
    ),
  },
  {
    path: paths.startUpAgency,
    element: (
      <NavBarLayout projectClassName={ProjectClasses.StartUpAgency}>
        <StartUpAgency />
      </NavBarLayout>
    ),
  },
  {
    path: paths.theHame,
    element: (
      <NavBarLayout projectClassName={ProjectClasses.TheHam}>
        <TheHam />
      </NavBarLayout>
    ),
  },
  {
    path: paths.vibo,
    element: (
      <NavBarLayout projectClassName={ProjectClasses.Vibo}>
        <Vibo />
      </NavBarLayout>
    ),
  },
];

export const Routes = () => {
  const routesList = useRoutes(routes);
  return <>{routesList}</>;
};
