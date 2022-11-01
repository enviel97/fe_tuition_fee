import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props: Components) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.getElementById("app")?.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return props.children;
};
export default ScrollToTop;
