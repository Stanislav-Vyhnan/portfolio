import { StyleLayoutStyled } from './style-latyout.styles';

import './index.scss';

type Props = {
  projectClassName: string;
} & React.PropsWithChildren;

const StyleLayout = ({ projectClassName, children }: Props) => {
  return <StyleLayoutStyled id={projectClassName}>{children}</StyleLayoutStyled>;
};

export default StyleLayout;
