import { useContext } from "react";
import AuthContext from "@context/AuthContext";

const useAuthenticate = () => {
  return useContext(AuthContext);
};

export default useAuthenticate;
