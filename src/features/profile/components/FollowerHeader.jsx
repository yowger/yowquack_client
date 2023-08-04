import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function FollowerHeader() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Typography>Following</Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 500,
                        lineHeight: "inherit",
                        textAlign: "center",
                    }}
                >
                    31
                </Typography>
            </Box>

            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: (theme) => theme.palette.primary,
                }}
            >
                <Typography>see all</Typography>
            </Link>
        </Box>
    )
}

export default FollowerHeader
