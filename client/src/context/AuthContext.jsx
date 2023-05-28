import { createContext, useState, useCallback, useEffect } from "react";
import { register } from "../services/auth.service"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUSer] = useState(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(null);

    console.log("user: ", user);
    useEffect(()=>{
        const userStr = localStorage.getItem('user');
        setUSer(JSON.parse(userStr));
    },[])
    

    // register
    const registerUser = useCallback(async (e) => {
        // console.log("register info: ", registerInfo);
        e.preventDefault()
        setIsRegisterLoading(true);
        setRegisterError(null);
        try {
            const user = await register("/register", registerInfo);
            setIsRegisterLoading(false)

            localStorage.setItem("user", JSON.stringify(user));
            setUSer(user);
        }
        catch (error) {
            setIsRegisterLoading(false);
            console.log("error from request: ", error)
            setRegisterError(error.data)
        }
    }, [registerInfo, user, registerError])


    const updateRegisterInfo = useCallback((info) => {
        console.log("info", info);
        setRegisterInfo(info);
    }, [])



    // login 

    const togglePasswordVisible = useCallback(async (e) => {
        e.preventDefault()
        setIsPasswordVisible(!isPasswordVisible);
    }, [isPasswordVisible])


    return (
        <AuthContext.Provider
            value={{
                user,
                registerInfo,
                isRegisterLoading,
                registerError,
                isPasswordVisible,
                updateRegisterInfo,
                registerUser,
                togglePasswordVisible,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}