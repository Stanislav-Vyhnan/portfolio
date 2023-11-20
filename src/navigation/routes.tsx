import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// import ErrorPageNotFound from 'pages/errors/PageNotFound'

import { AppRouterProps } from './types';
import paths from './paths';

const Home = lazy(() => import('../pages/home/'));

const routes: AppRouterProps[] = [
  {
    path: paths.home,
    element: <Home />,
  },
];

export const Routes = () => {
  const routesList = useRoutes(routes);
  return <>{routesList}</>;
};
