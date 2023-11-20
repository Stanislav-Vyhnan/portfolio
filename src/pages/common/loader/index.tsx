import { LoaderStyled } from './loader.styles';

interface LoaderProps {
  size?: number;
  borderSize?: number;
  className?: string;
}

const Loader = ({ size = 16, borderSize = 2, className }: LoaderProps) => {
  return <LoaderStyled $size={size} $borderSize={borderSize} className={className} />;
};

export default Loader;
