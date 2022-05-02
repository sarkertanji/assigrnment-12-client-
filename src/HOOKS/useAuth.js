import { useContext } from "react";
import { AuthContext } from "../PAGES/Context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
