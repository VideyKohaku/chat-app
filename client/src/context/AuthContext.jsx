import { createContext, useState, useCallback, useEffect } from "react";
import { register, login } from "../services/auth.service"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUSer] = useState(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(null);

    useEffect(() => {
        const userStr = localStorage.getItem('user');
        setUSer(JSON.parse(userStr));
    }, [])


    // register
    const registerUser = useCallback(async (e) => {
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
            console.log("error from register: ", error);
            setRegisterError(error.data);
            
        }
    }, [registerInfo, user, registerError])


    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, [])


    const togglePasswordVisible = useCallback(async (e) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    },[isPasswordVisible])



    // login    
    const loginUser = useCallback(async (e) => {
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);
        try {
            const user = await login("/login", loginInfo);
            setIsLoginLoading(false);

            localStorage.setItem('user', JSON.stringify(user));
            setUSer(user);
        } catch (error) {
            setIsLoginLoading(false);
            console.log("error in request: ", error);
            setLoginError(error.data);
        }
    }, [loginInfo, user, loginError])


    const updateLoginInfo = useCallback((info) => {
        console.log("info", info);
        setLoginInfo(info);
    }, [])


    // logout
    const logoutUser = useCallback(async () => {
        localStorage.removeItem("user");
        setUSer(null);
    }, [])


    return (
        <AuthContext.Provider
            value={{
                user,
                registerInfo,
                isRegisterLoading,
                registerError,
                updateRegisterInfo,
                registerUser,
                loginInfo,
                isLoginLoading,
                loginError,
                updateLoginInfo,
                loginUser,
                isPasswordVisible,
                togglePasswordVisible,
                logoutUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}