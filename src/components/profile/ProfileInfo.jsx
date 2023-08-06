import { Avatar, Box, Button, Typography } from "@mui/material"
import PropTypes from "prop-types"
import StyledPaper from "../common/StyledPaper"
import StatInfo from "./StatInfo"

function ProfileInfo({ name, avatarUrl }) {
    return (
        <StyledPaper>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    pb: "33.33%",
                }}
            >
                <Box
                    component="img"
                    src="https://picsum.photos/500/600"
                    alt="cover photo"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            <Box
                sx={{
                    px: 2,
                    mb: 2.5,
                    height: 50,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Avatar
                    src={avatarUrl}
                    alt={`${name}'s Avatar`}
                    sx={{
                        width: 120,
                        height: 120,
                        border: 4,
                        borderColor: "white",
                        transform: "translateY(-18%)",
                    }}
                />

                <Box sx={{ lineHeight: "inherit", alignItems: "flex-end" }}>
                    <Button variant="outlined" sx={{ lineHeight: "inherit" }}>
                        Follow
                    </Button>
                </Box>
            </Box>

            <Box sx={{ px: 2, pb: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {name}
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <StatInfo count={29} text="Followers" />
                    <StatInfo count={50} text="Following" />
                </Box>
            </Box>
        </StyledPaper>
    )
}

ProfileInfo.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
}

export default ProfileInfo
