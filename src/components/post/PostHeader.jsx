import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import IconButton from "@mui/material/IconButton"

const PostHeader = ({ name, avatarUrl, createdAt, handleMoreOptionsClick }) => (
    <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ mr: 1 }} alt={name} src={avatarUrl} />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
                sx={{ fontWeight: 500 }}
                variant="body1"
                component="span"
            >
                {name}
            </Typography>
            <Typography
                sx={{ color: (theme) => theme.palette.grey[500] }}
                variant="body2"
                component="span"
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

PostHeader.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    createdAt: PropTypes.PropTypes.string.isRequired,
    handleMoreOptionsClick: PropTypes.func,
}

export default PostHeader
