import { useEffect, useState } from "react"
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
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material"
import { useDeleteCommentMutation } from "../../features/feed/slices/postApiSlice"

const Comment = ({ id, author, content, image, createdAt }) => {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null)
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

    const [
        deleteComment,
        {
            isLoading: deleteCommentIsLoading,
            isSuccess: deleteCommentIsSuccess,
            isError: deleteCommentIsError,
            error: deleteCommentError,
        },
    ] = useDeleteCommentMutation()

    const handleMoreOptionsClick = (event) => {
        setMenuAnchorEl(event.currentTarget)
    }

    const handleEditPost = () => {
        setMenuAnchorEl(null)
    }

    const handleClickMenuDelete = () => {
        setMenuAnchorEl(null)

        setOpenDeleteDialog(true)
    }

    function handleCloseDeleteDialog() {
        setOpenDeleteDialog(false)
    }

    const handleCloseOptionsMenu = () => {
        setMenuAnchorEl(null)
    }

    async function handleClickDeleteComment() {
        await deleteComment(id).unwrap()
    }

    useEffect(() => {
        setOpenDeleteDialog(false)
    }, [deleteCommentIsSuccess])

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    px: 2,
                    pb: 1,
                    width: "100%",
                }}
            >
                <Avatar
                    sx={{ mr: 1 }}
                    alt={author.name}
                    src={author?.avatar?.url}
                />

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
                            sx={{
                                fontWeight: 500,
                            }}
                            variant="mediumText"
                        >
                            {author.name}
                        </Typography>
                        <Typography
                            variant="mediumText"
                            component="p"
                            sx={{
                                wordBreak: "break-word",
                                display: "inline-block",
                            }}
                        >
                            {content}
                        </Typography>
                    </Box>

                    {image && (
                        <Box>
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
                        sx={{ color: (theme) => theme.palette.grey[500] }}
                        variant="mediumText"
                        component="span"
                    >
                        {/* 1h ago */}
                        {createdAt}
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
                    <MenuItem onClick={handleClickMenuDelete}>
                        <ListItemIcon>
                            <DeleteIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Delete</ListItemText>
                    </MenuItem>
                </Menu>
            </Box>

            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Comment?"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Once deleted, it can no longer be recovered.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog}>Cancel</Button>

                    <Button
                        variant="contained"
                        onClick={handleClickDeleteComment}
                        autoFocus
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

Comment.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
}

export default Comment
