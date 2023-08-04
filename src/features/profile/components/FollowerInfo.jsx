import { Avatar, Box, Typography } from "@mui/material"

function FollowerInfo({ name }) {
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    gap: 0.5,
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar
                    src=""
                    alt="Roger Pantil"
                    sx={{
                        width: 48,
                        height: 48,
                    }}
                />
                <Typography
                    sx={{
                        fontSize: 14,
                        textAlign: "center",
                    }}
                >
                    {name}
                </Typography>
            </Box>
        </div>
    )
}

export default FollowerInfo
