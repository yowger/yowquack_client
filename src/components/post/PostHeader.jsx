import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import IconButton from "@mui/material/IconButton"

function PostHeader({ name, avatarUrl, createdAt, handleMoreOptionsClick }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
                component={Link}
                to="/profile"
                sx={{ mr: 1 }}
                alt={name}
                src={avatarUrl}
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                    component={Link}
                    to="/profile"
                    variant="body1"
                    sx={{
                        fontWeight: 500,
                        color: "inherit",
                        textDecoration: "none",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    sx={{ color: (theme) => theme.palette.grey[500] }}
                    variant="body2"
                >
                    {createdAt}
                </Typography>
            </Box>

            <IconButton
                aria-label="More options"
                size="small"
                sx={{ marginLeft: "auto" }}
                onClick={handleMoreOptionsClick}
            >
                <MoreVertIcon />
            </IconButton>
        </Box>
    )
}

PostHeader.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    createdAt: PropTypes.PropTypes.string.isRequired,
    handleMoreOptionsClick: PropTypes.func,
}

export default PostHeader
