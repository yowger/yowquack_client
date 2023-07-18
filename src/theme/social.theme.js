import { createTheme } from "@mui/material"

const socialTheme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#3b5998",
        },
        secondary: {
            main: "#6d84b4",
        },
        background: {
            default: "#f5f5f5",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "unset",
                },
            },
        },
    },
    shape: {
        borderRadius: 3,
    },
    typography: {
        mediumText: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
        },
    },
})

export default socialTheme
