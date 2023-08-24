import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import { Container } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import app_styles from "./app.style";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

    
    const {user} = useContext(AuthContext)
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={app_styles.body}
                maxWidth={false}
                disableGutters
            >
                {/* Header */}
                <NavBar />

                {/* Content */}
                <Container
                    disableGutters
                >
                    <Routes>
                        <Route path="/" element={user ? <Chat/> : <Navigate to="/login"/>} />
                        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />

                        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Container>
            </Container>
        </ThemeProvider>
    )
}

export default App
