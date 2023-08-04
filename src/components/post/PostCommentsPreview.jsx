import React from "react"
import Box from "@mui/material/Box"
import Comment from "../comment/Comment"
import Link from "@mui/material/Link"

const PostCommentPreview = ({ comments, totalComments }) => {
    if (comments?.length === 0) return

    return (
        <Box sx={{ px: 2, mt: 2 }}>
            {comments.map((comment, index) => {
                const { _id, user, content, image, createdAt } = comment
                const { url: imageUrl } = image || {}

                return (
                    <Comment
                        key={index}
                        id={_id}
                        author={user}
                        content={content}
                        image={imageUrl}
                        createdAt={createdAt}
                    />
                )
            })}

            {comments.length < totalComments && (
                <Box sx={{ px: 2, py: 1, cursor: "pointer" }}>
                    <Link variant="mediumText" underline="hover">
                        View More Comments
                    </Link>
                </Box>
            )}
        </Box>
    )
}

export default PostCommentPreview
