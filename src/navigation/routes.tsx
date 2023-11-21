import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// import ErrorPageNotFound from 'pages/errors/PageNotFound'

import Kallyas from 'src/pages/projects/kallyas';
import Mogo from 'src/pages/projects/mogo';
import Piroll from 'src/pages/projects/piroll';

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
];

export const Routes = () => {
  const routesList = useRoutes(routes);
  return <>{routesList}</>;
};
