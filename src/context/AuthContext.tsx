import {
  getLocalRefreshToken,
  getLocalUser,
  setLocalUser,
} from "@core/helper/localStore";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Auth {
  currentUser?: User;
  permission?: any;
}

interface AuthContextProps {
  auth?: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
  isAuthenticate?: boolean;
  setIsAuthenticate: Dispatch<SetStateAction<boolean>>;
}
const AuthContext = createContext<AuthContextProps>({
  auth: undefined,
  setAuth: () => {},
  isAuthenticate: undefined,
  setIsAuthenticate: () => {},
});

export const AuthProvider = (props: Components) => {
  const [auth, setAuth] = useState<Auth>({
    currentUser: getLocalUser(),
  });

  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(
    !!getLocalRefreshToken()
  );

  useEffect(() => {
    if (!!auth.currentUser) {
      setLocalUser(auth.currentUser);
    }
  }, [auth.currentUser]);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isAuthenticate, setIsAuthenticate }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
