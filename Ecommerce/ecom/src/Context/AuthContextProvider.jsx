import React from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
  const [isauth, setIsauth] = React.useState(false);
  const history = useHistory();
  const handleAuth = ({ email, password }) => {
    if (email === "ashish" && password === "123") {
      setIsauth(true);
      history.push("/cart");
    } else {
      alert("Please Enter correct email or password");
    }
  };

  const value = { isauth, handleAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
