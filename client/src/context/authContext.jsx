import { createContext, useCallback, useEffect, useState } from "react";
import { baseURL, postRequest } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [logInError, setLogInError] = useState(null);
  const [isLogInLoading, setIsLogInLoading] = useState(false);
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: "",
  });
  
  console.log("User", user);
  console.log("logInInfo", logInInfo);
  
  useEffect(() => {
    const user = localStorage.getItem("User");
    setUser(JSON.parse(user));
  }, []);

  //console.log("registerInfo", registerInfo);
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);
  const updateLogInInfo = useCallback((info) => {
    setLogInInfo(info);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(
        `${baseURL}/users/register`,
        JSON.stringify(registerInfo)
      );
      //console.log(await response.message);

      setIsRegisterLoading(false);

      if (response.error) return setRegisterError(response);

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [registerInfo]
  );

  const logInUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLogInLoading(true);
      setLogInError(null);

      const response = await postRequest(
        `${baseURL}/users/login`,
        JSON.stringify(logInInfo)
      );
      
      setIsLogInLoading(false);
      
      if (response.error) return setLogInError(response);

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);

    },
    [logInInfo]
  );

  const logOutUser = useCallback(() => {
    localStorage.removeItem("User");
    localStorage.removeItem("logInInfo");
    setUser(null);
    setLogInInfo(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logInInfo,
        updateLogInInfo,
        logInUser,
        logInError,
        isLogInLoading,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
