import theme from "../../theme"

const navbar_styles = {
    body: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        margin: 0,
        padding: 0,

        position: "fixed",
        top: 0,

        height: "62px",
        minHeight: "62px",
        width: "100%",
        // background: "#F4A7B9",  
        // borderBottom: "2px solid",
        boxShadow:  "0px 0.5px 3px 2px rgba(0, 0, 0, .1)",
        zIndex:1
    },
    title: {
        fontWeight: "fontWeightBold",
        fontSize: "34px"
    },
    titleLink: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid"
    },
    auth: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid"
    },
    typo: {
        fontFamily: "fontFamily",
        fontSize: "20px",
        fontWeight: "fontWeightMedium",
        color: theme.palette.primary.light
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.main,
    },
    statusBox: {
        flex: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
}

export default navbar_styles