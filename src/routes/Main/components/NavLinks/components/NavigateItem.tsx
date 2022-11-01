import { navItemAnimationSlide } from "../../Drawer/styles/variants/slide.variants";
import { GoPrimitiveDot } from "react-icons/go";
import { cloneElement } from "react";
import {
  Link,
  navAnimation,
  NavLinkContainer,
} from "../styles/NavLinks.styles";

interface NavItemProps {
  href: string;
  text?: string;
  icon?: JSX.Element;
}

const NavItem = (props: NavItemProps) => {
  const { href, text, icon = <GoPrimitiveDot /> } = props;

  return (
    <NavLinkContainer
      variants={navItemAnimationSlide}
      whileHover={navAnimation.hover}
      whileTap={navAnimation.tap}
    >
      <Link className='navItem' to={href}>
        {cloneElement(icon, {
          className: "icon",
          size: 24,
        })}
        <div className='text'>{text ?? href}</div>
      </Link>
    </NavLinkContainer>
  );
};

export default NavItem;
