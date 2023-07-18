import React from "react"
import { Box, Avatar, Typography, Divider } from "@mui/material"

const Sidebar = () => {
    return (
        <Box
            sx={{
                width: "300px",
                height: "100vh",
                backgroundColor: "#f0f2f5",
                padding: 2,
                mt: 2,
                // ml: 1,
                position: "fixed",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                }}
            >
                <Avatar
                    src="https://picsum.photos/200/200"
                    alt="Profile Picture"
                    sx={{ width: 40, height: 40, marginRight: 2 }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    John Doe
                </Typography>
            </Box>
            <Divider />
            <Box>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                    Pages
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                    }}
                >
                    {/* Page Icon */}
                    <Typography>Page 1</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                    }}
                >
                    {/* Page Icon */}
                    <Typography>Page 2</Typography>
                </Box>
            </Box>
            <Divider />
            <Box>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                    Groups
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                    }}
                >
                    {/* Group Icon */}
                    <Typography>Group 1</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                    }}
                >
                    {/* Group Icon */}
                    <Typography>Group 2</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar
