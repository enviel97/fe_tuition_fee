import DividerAnimation from "../DividerAnimation";
import { navItemAnimationSlide } from "../Drawer/styles/variants/slide.variants";
import LogoutButton from "./components/LogoutButton";
import { ActionsContainer } from "./styles/Actions.styles";

const Actions = () => {
  return (
    <ActionsContainer variants={navItemAnimationSlide}>
      <DividerAnimation label='actions' />
      <LogoutButton />
      {/* <div>TODO: Icon helper</div> */}
    </ActionsContainer>
  );
};

export default Actions;
