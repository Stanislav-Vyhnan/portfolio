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

import paths from './paths';
import StyleLayout from './style-layout';
import IntroLayout from './intro';
import { AppRouterProps } from './types';

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
    element: (
      <IntroLayout>
        <Home />
      </IntroLayout>
    ),
  },
  {
    path: paths.kallyas,
    element: (
      <StyleLayout projectClassName={ProjectClasses.Kallyas}>
        <Kallyas />
      </StyleLayout>
    ),
  },
  {
    path: paths.mogo,
    element: (
      <StyleLayout projectClassName={ProjectClasses.Mogo}>
        <Mogo />
      </StyleLayout>
    ),
  },
  {
    path: paths.piroll,
    element: (
      <StyleLayout projectClassName={ProjectClasses.Piroll}>
        <Piroll />
      </StyleLayout>
    ),
  },
  {
    path: paths.plumber,
    element: (
      <StyleLayout projectClassName={ProjectClasses.Plumber}>
        <Plumber />
      </StyleLayout>
    ),
  },
  {
    path: paths.startUpAgency,
    element: (
      <StyleLayout projectClassName={ProjectClasses.StartUpAgency}>
        <StartUpAgency />
      </StyleLayout>
    ),
  },
  {
    path: paths.theHame,
    element: (
      <StyleLayout projectClassName={ProjectClasses.TheHam}>
        <TheHam />
      </StyleLayout>
    ),
  },
  {
    path: paths.vibo,
    element: (
      <StyleLayout projectClassName={ProjectClasses.Vibo}>
        <Vibo />
      </StyleLayout>
    ),
  },
];

export const Routes = () => {
  const routesList = useRoutes(routes);
  return <>{routesList}</>;
};
