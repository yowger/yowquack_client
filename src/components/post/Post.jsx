import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import StyledPaper from "../common/StyledPaper"
import CommentBox from "../posts/CommentBox"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import PostContent from "./PostImage"
import PostActions from "./PostActions"
import PostCommentPreview from "./PostCommentsPreview"
import PostMenu from "./PostMenu"
import PostDialog from "./PostDialog"
import {
    useAddCommentMutation,
    useAddReactionMutation,
    useDeletePostMutation,
} from "../../features/feed/slices/postApiSlice"

const Post = ({
    id,
    author,
    content,
    image,
    comments,
    totalComments,
    reactions,
    createdAt,
}) => {
    const { name, avatar } = author
    const { url: avatarUrl } = avatar || {}
    const { url: postImageUrl } = image || {}
    const [hasReacted, setHasReacted] = useState(false)
    const [menuAnchorEl, setMenuAnchorEl] = useState(null)
    const [showCommentBox, setShowCommentBox] = useState(false)
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

    const [
        addComment,
        {
            isLoading: addCommentIsLoading,
            isSuccess: addCommentIsSuccess,
            // isError: addCommentIsError,
            // error: addCommentError,
        },
    ] = useAddCommentMutation()

    const [
        deletePost,
        {
            // isLoading: deletePostIsLoading,
            isSuccess: deletePostIsSuccess,
            // isError: deletePostIsError,
            // error: deletePostError,
        },
    ] = useDeletePostMutation()

    const [
        addReaction,
        // {
        //     isLoading: addReactionIsLoading,
        //     isSuccess: addReactionIsSuccess,
        //     isError: addReactionIsError,
        //     error: addReactionError,
        // },
    ] = useAddReactionMutation()

    function handleMoreOptionsClick(event) {
        setMenuAnchorEl(event.currentTarget)
    }

    // function handleEditPost() {
    //     setMenuAnchorEl(null)
    // }

    function handleMenuItemDelete() {
        setMenuAnchorEl(null)
        setOpenDeleteDialog(true)
    }

    function handleCloseDeleteDialog() {
        setOpenDeleteDialog(false)
    }

    function handleCloseOptionsMenu() {
        setMenuAnchorEl(null)
    }

    async function handleReactionClick(reaction) {
        await addReaction({ id, reaction })

        setHasReacted(true)
    }

    function handleCommentClick() {
        setShowCommentBox(true)
    }

    async function handleClickAddComment({ content, image }) {
        if (!content && !image) return

        const formData = new FormData()

        formData.append("content", content)
        formData.append("file", image)

        await addComment({ id, formData }).unwrap()
    }

    async function handleDeletePost() {
        await deletePost(id)
    }

    useEffect(() => {
        setOpenDeleteDialog(false)
    }, [deletePostIsSuccess])

    return (
        <>
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
                    <PostHeader
                        name={name}
                        avatarUrl={avatarUrl}
                        createdAt={createdAt}
                        handleMoreOptionsClick={handleMoreOptionsClick}
                    />

                    <PostContent content={content} imageUrl={postImageUrl} />

                    <PostFooter
                        reactions={reactions}
                        totalComments={totalComments}
                    />
                </Box>

                <Divider />

                <PostActions
                    hasReacted={hasReacted}
                    handleReactionClick={handleReactionClick}
                    handleCommentClick={handleCommentClick}
                />

                {(comments?.length > 0 || showCommentBox) && <Divider />}

                {showCommentBox && (
                    <CommentBox
                        onClick={handleClickAddComment}
                        isLoading={addCommentIsLoading}
                        isSuccess={addCommentIsSuccess}
                    />
                )}

                <PostCommentPreview
                    comments={comments}
                    totalComments={totalComments}
                />
            </StyledPaper>

            <PostMenu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleCloseOptionsMenu}
                onDeleteClick={handleMenuItemDelete}
            />

            <PostDialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                onConfirmDelete={handleDeletePost}
                title={"Delete Post?"}
                contentText={" Once deleted, it can no longer be recovered."}
            />
        </>
    )
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
            url: PropTypes.string,
        }),
    }),
    content: PropTypes.string,
    image: PropTypes.shape({
        url: PropTypes.string,
    }),
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            user: PropTypes.shape({
                name: PropTypes.string.isRequired,
                avatar: PropTypes.shape({
                    url: PropTypes.string,
                }),
            }),
            content: PropTypes.string.isRequired,
            image: PropTypes.shape({
                url: PropTypes.string,
            }),
            createdAt: PropTypes.string.isRequired,
        })
    ),
    totalComments: PropTypes.number.isRequired,
    reactions: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
        })
    ),
    createdAt: PropTypes.string.isRequired,
}

export default Post
