import { GoHistory, GoHome, GoNote } from "react-icons/go";
import DividerAnimation from "../DividerAnimation";
import NavigateItem from "./components/NavigateItem";
import { NavLinksContainer } from "./styles/NavLinks.styles";

const navItem = [
  {
    text: "Home",
    href: "home",
    icon: <GoHome />,
  },
  {
    text: "Fee",
    href: "fee",
    icon: <GoNote />,
  },
  {
    text: "History",
    href: "history",
    icon: <GoHistory />,
  },
];
const NavLinks = () => {
  return (
    <NavLinksContainer>
      <DividerAnimation label='feature' />
      {navItem.map((item, index) => (
        <NavigateItem
          key={`${item.text}_${index}`}
          text={item.text}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </NavLinksContainer>
  );
};

export default NavLinks;
