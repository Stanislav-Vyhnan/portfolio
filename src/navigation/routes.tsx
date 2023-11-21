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

const Home = lazy(() => import('../pages/home/'));

const routes: AppRouterProps[] = [
  {
    path: paths.home,
    element: <Home />,
  },
  {
    path: paths.kallyas,
    element: (
      <NavBarLayout>
        <Kallyas />
      </NavBarLayout>
    ),
  },
  {
    path: paths.mogo,
    element: (
      <NavBarLayout>
        <Mogo />
      </NavBarLayout>
    ),
  },
  {
    path: paths.piroll,
    element: (
      <NavBarLayout>
        <Piroll />
      </NavBarLayout>
    ),
  },
  {
    path: paths.plumber,
    element: (
      <NavBarLayout>
        <Plumber />
      </NavBarLayout>
    ),
  },
  {
    path: paths.startUpAgency,
    element: (
      <NavBarLayout>
        <StartUpAgency />
      </NavBarLayout>
    ),
  },
  {
    path: paths.theHame,
    element: (
      <NavBarLayout>
        <TheHam />
      </NavBarLayout>
    ),
  },
  {
    path: paths.vibo,
    element: (
      <NavBarLayout>
        <Vibo />
      </NavBarLayout>
    ),
  },
];

export const Routes = () => {
  const routesList = useRoutes(routes);
  return <>{routesList}</>;
};
