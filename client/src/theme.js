import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary: {
            main: "#1976D2"
        }
    },
    typography:{
        fontFamily:"Nunito+Sans",
        fontWeightMedium:500,
        fontWeightLight: 400,
        fontWeightBold: 600
    }
})

export default theme