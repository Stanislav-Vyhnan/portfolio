export interface RouteParams {
  component: JSX.Element;
}

export interface AppRouterProps {
  path: string;
  element: JSX.Element;
  rest?: Record<string, unknown>;
}
