import { Box } from "@mui/material"
import googleIconSrc from "../../assets/icons/google.png"

function GoogleIcon({ ...props }) {
    return (
        <Box
            component="img"
            alt="google icon"
            src={googleIconSrc}
            sx={{
                width: 16,
            }}
            {...props}
        />
    )
}

export default GoogleIcon
