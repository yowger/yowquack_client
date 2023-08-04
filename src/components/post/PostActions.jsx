import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import ReactionMenu from "../posts/ReactionMenu"

const PostActions = ({ handleReactionClick, handleCommentClick }) => {
    return (
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
                onClick={handleCommentClick}
                aria-label="comment button"
                startIcon={<ChatBubbleIcon />}
                fullWidth
            >
                Comment
            </Button>
        </Box>
    )
}

PostActions.propTypes = {
    handleReactionClick: PropTypes.func.isRequired,
    handleCommentClick: PropTypes.func.isRequired,
}

export default PostActions
