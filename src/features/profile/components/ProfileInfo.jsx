import { Avatar, Box, Button, Typography } from "@mui/material"
import PropTypes from "prop-types"

function ProfileInfo({ name, avatarUrl, bio }) {
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Avatar
                    src={avatarUrl}
                    alt={`${name}'s Avatar`}
                    sx={{ width: 56, height: 56 }}
                />

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography variant="h6">{name}</Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: (theme) => theme.palette.grey[600] }}
                        >
                            3 hours ago
                        </Typography>
                    </Box>

                    <Box sx={{ lineHeight: "inherit" }}>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{ lineHeight: "inherit" }}
                        >
                            Follow
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Typography>{bio}</Typography>
        </Box>
    )
}

ProfileInfo.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
}

export default ProfileInfo
