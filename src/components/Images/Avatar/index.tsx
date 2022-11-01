import styled from "styled-components";
import AvatarNull from "@assets/images/avatar.png";

const Image = styled.img`
  height: 100%;
`;

interface AvatarProps {
  src?: string;
}

const Avatar = (props: AvatarProps) => {
  return <Image src={!!props.src ? props.src : AvatarNull} loading='lazy' />;
};

export default Avatar;
