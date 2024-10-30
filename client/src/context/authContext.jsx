import { createContext,useCallback,useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>
{
    const[user,setUser] = useState(null);
    const[registerInfo,setRegisterInfor] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    );

    console.log("registerInfo",registerInfo);
    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfor(info);
    },[]);
    return(
        <AuthContext.Provider value = {{user, registerInfo, updateRegisterInfo}}>
            {children}
        </AuthContext.Provider>
    );
};