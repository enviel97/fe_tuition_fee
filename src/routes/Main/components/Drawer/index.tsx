import { useCycle } from "framer-motion";
import { useRef } from "react";
import ToggleMenuButton from "./components/ToggleMenuButton";
import { useDimensions } from "./hooks/useDimensions";
import useBreakpoint from "@hooks/useBreakpoint";
import {
  DrawerBackground,
  DrawerContainer,
} from "./styles/decorates/drawer.styles";
import { sidebar } from "./styles/variants/slide.variants";
import Navigation from "./components/Navigation";

const Drawer = () => {
  const [isOpen, toggle] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const isDevice = useBreakpoint();

  return (
    <DrawerContainer
      initial={false}
      animate={isDevice.up("laptop") ? "open" : isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <DrawerBackground variants={sidebar} />
      <Navigation />
      {isDevice.down("laptop") && <ToggleMenuButton toggle={toggle} />}
    </DrawerContainer>
  );
};

export default Drawer;
