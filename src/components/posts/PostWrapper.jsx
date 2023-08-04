import { Box } from "@mui/material"

function PostWrapper({ children }) {
    return (
        <Box
            component="main"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: "65ch",
            }}
        >
            {children}
        </Box>
    )
}

export default PostWrapper
