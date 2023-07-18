import { useState } from "react"
import PropTypes from "prop-types"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

const Comment = ({ author, content, image }) => {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null)

    const handleMoreOptionsClick = (event) => {
        setMenuAnchorEl(event.currentTarget)
    }

    const handleEditPost = () => {
        setMenuAnchorEl(null)
    }

    const handleDeletePost = () => {
        setMenuAnchorEl(null)
    }

    const handleCloseOptionsMenu = () => {
        setMenuAnchorEl(null)
    }

    return (
        <Box
            sx={{
                display: "flex",
                mb: 1,
                width: "100%",
            }}
        >
            <Avatar alt={author.name} src={author.avatarUrl} sx={{ mr: 1 }} />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "fit-content",
                        backgroundColor: (theme) => theme.palette.grey[200],
                        borderRadius: 3,
                        px: 1.5,
                        py: 1,
                    }}
                >
                    <Typography
                        variant="mediumText"
                        sx={{
                            fontWeight: 500,
                        }}
                    >
                        {author.name}
                    </Typography>
                    <Typography
                        variant="mediumText"
                        component="p"
                        sx={{ display: "inline-block" }}
                    >
                        {content}
                    </Typography>
                </Box>

                {image && (
                    <Box sx={{ mt: 0.5 }}>
                        <img
                            src={image}
                            alt="comment image"
                            style={{
                                width: "100%",
                                maxWidth: "220px",
                                height: "auto",
                                maxHeight: "100%",
                                objectFit: "contain",
                                borderRadius: "4px",
                            }}
                        />
                    </Box>
                )}

                <Typography
                    variant="mediumText"
                    component="span"
                    sx={{ color: (theme) => theme.palette.grey[500] }}
                >
                    1h ago
                </Typography>
            </Box>

            <IconButton
                aria-label="More options"
                size="small"
                sx={{ height: "fit-content", alignSelf: "center" }}
                onClick={handleMoreOptionsClick}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleCloseOptionsMenu}
            >
                <MenuItem onClick={handleEditPost}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleDeletePost}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    )
}

Comment.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
}

export default Comment
