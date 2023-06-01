import theme from "../../theme"

const login_styles = {
    body:{
        // backgroundColor: "pink",
        width:"30vw",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    },
    title:{
        fontSize: "30px",
        fontFamily: "fontFamily",
        fontWeight: "fontWeightBold",
        color: "black"
    },
    titleContainer:{
        flex: "nones",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    formContainer:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        marginBottom: 2,
        width: "100%",
        // backgroundColor: "aqua",
    },
    submitContainer:{
        flex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        
    },
    btn: {
        width: "100%"

    }
}

export default login_styles