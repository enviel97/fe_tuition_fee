import { praseMoney } from "@helpers/string";
import useAuthenticate from "@hooks/useAuthenticate";
import { GoPlus } from "react-icons/go";
import { navItemAnimationZoom } from "../Drawer/styles/variants/slide.variants";
import AvatarAnimation from "./components/Avatar";
import {
  UserRow,
  UserInfoContainer,
  UserIconButton,
} from "./styles/UserInfo.styles";

const UserInfoAnimate = () => {
  const { auth } = useAuthenticate();

  return (
    <UserInfoContainer variants={navItemAnimationZoom}>
      <AvatarAnimation />
      <span className='name'>
        {`${auth?.currentUser?.name.firstname ?? ""} ${
          auth?.currentUser?.name.lastname ?? ""
        } - ${auth?.currentUser?.friendlyId ?? "None"}`}
      </span>
      <UserRow>
        <span className='label'>Money: </span>
        <h6 className='value'>
          {praseMoney(auth?.currentUser?.amount ?? NaN)}
        </h6>
      </UserRow>
      <UserRow>
        <UserIconButton
          className='action'
          onClick={() => {}}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.98 }}
        >
          <GoPlus size={"0.5rem"} />
        </UserIconButton>
      </UserRow>
    </UserInfoContainer>
  );
};

export default UserInfoAnimate;
