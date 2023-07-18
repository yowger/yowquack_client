import { useState } from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import Divider from "@mui/material/Divider"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import StyledPaper from "../common/StyledPaper"
import ReactionMenu from "./ReactionMenu"
import Comment from "./Comment"
import Reactions from "./Reactions"
import { TextField } from "@mui/material"
import EmojiMenu from "./EmojiMenu"

const Post = ({
    author,
    content,
    image,
    comments,
    totalComments,
    reactions,
}) => {
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

    const handleReactionClick = () => {
        console.log("Reacted")
    }

    return (
        <StyledPaper
            sx={{ marginBottom: (theme) => theme.spacing(2) }}
            elevation={3}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    px: 2,
                    pt: 2,
                    pb: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{ mr: 1 }}
                        alt={author.name}
                        src={author.avatarUrl}
                    />

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            sx={{ fontWeight: 500 }}
                            variant="body1"
                            component="span"
                        >
                            {author.name}
                        </Typography>
                        <Typography
                            sx={{ color: (theme) => theme.palette.grey[500] }}
                            variant="body2"
                            component="span"
                        >
                            1h ago
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

                <Typography variant="body1">{content}</Typography>
                {image && <img src={image} />}

                <Box sx={{ display: "flex" }}>
                    {reactions && <Reactions reactions={reactions} />}

                    <Box sx={{ flexGrow: 1 }} />

                    {totalComments > 0 && (
                        <Typography
                            variant="mediumText"
                            sx={{ color: (theme) => theme.palette.grey[600] }}
                        >
                            {totalComments} comments
                        </Typography>
                    )}
                </Box>
            </Box>

            <Divider />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    py: 0.5,
                }}
            >
                <ReactionMenu
                    onClick={handleReactionClick}
                    renderButton={(props) => (
                        <Button
                            aria-label="reaction button"
                            {...props}
                            startIcon={<FavoriteIcon />}
                            fullWidth
                        >
                            React
                        </Button>
                    )}
                />

                <Button
                    aria-label="comment button"
                    startIcon={<ChatBubbleIcon />}
                    fullWidth
                >
                    Comment
                </Button>
            </Box>

            {comments && <Divider />}

            {/* add comment */}
            {/* <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    px: 2,
                    mt: 1,
                }}
            >
                <TextField
                    sx={{ mb: 1 }}
                    fullWidth
                    variant="outlined"
                    placeholder="Add a comment"
                />
                <Box sx={{ display: "flex" }}>
                    <EmojiMenu
                    // onSelect={handleEmojiSelect}
                    />
                    <Box sx={{ flexGrow: 1 }} />

                    <Button
                        variant="contained"
                        color="primary"
                        // onClick={handleAddComment}
                    >
                        Comment
                    </Button>
                </Box>
            </Box> */}
            {/* add comment end */}

            {comments && (
                <Box sx={{ px: 2, mt: 2 }}>
                    {comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            author={comment.author}
                            content={comment.content}
                            image={comment.image}
                        />
                    ))}

                    {comments.length < totalComments && (
                        <Box sx={{ px: 2, py: 1, cursor: "pointer" }}>
                            <Link variant="mediumText" underline="hover">
                                View More Comments
                            </Link>
                        </Box>
                    )}
                </Box>
            )}
        </StyledPaper>
    )
}

Post.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                avatarUrl: PropTypes.string.isRequired,
            }).isRequired,
            content: PropTypes.string.isRequired,
            image: PropTypes.string,
        })
    ),
    totalComments: PropTypes.number.isRequired,
    reactions: PropTypes.shape({
        like: PropTypes.number,
        haha: PropTypes.number,
        wow: PropTypes.number,
        sad: PropTypes.number,
        angry: PropTypes.number,
    }),
}

export default Post

{
    /* comment box start*/
}
{
    /* <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <TextField
                    sx={{}}
                    fullWidth
                    variant="outlined"
                    placeholder="Add a comment"
                    value={comment}
                    onChange={handleCommentChange}
                />
                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        // onClick={handleAddComment}
                    >
                        Comment
                    </Button>
                </Box>
            </Box> */
}
{
    /* comment box end */
}
