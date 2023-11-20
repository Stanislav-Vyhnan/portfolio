import avatarSrc from './avatar.jpeg';
import { AvatarWrapper, AvatarImgStyled, NameStyled } from './avatar.styles';
import Time from './time';

//18:26 PM UTC+2
const Avatar = () => {
  return (
    <AvatarWrapper>
      <AvatarImgStyled src={avatarSrc} />
      <NameStyled component="h1" fontSize={24} fontWeight={700} textAlign="center">
        Stanislav Vyhnan
      </NameStyled>
      <Time />
    </AvatarWrapper>
  );
};

export default Avatar;
