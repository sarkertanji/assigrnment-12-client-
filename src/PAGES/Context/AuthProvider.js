import { createContext } from "react";
import useFirebase from "../../HOOKS/useFirebase";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allConstxt = useFirebase();
  return (
    <AuthContext.Provider value={allConstxt}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
