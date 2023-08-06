import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import PostComposer from "../../../components/profile/PostComposer"
import Post from "../../../components/post/Post"
import Sidebar from "../../../components/layouts/social/Sidebar"
import PostWrapper from "../../../components/posts/PostWrapper"
import { useGetPostQuery, useSendPostMutation } from "../slices/postApiSlice"
import { useState } from "react"

// todo future, put observer last element -3
// redo scrolling
// check libs -
// https://github.com/bvaughn/react-window
// https://tanstack.com/virtual/v3

function Feed() {
    const theme = useTheme()
    const isMediumScreenAndBelow = useMediaQuery(theme.breakpoints.down("md"))
    const [page, setpage] = useState(1)

    const {
        data: postApiData,
        isLoading: isPostLoading,
        isSuccess: isPostSuccess,
        isError: isPostError,
        error: postError,
    } = useGetPostQuery({ page })

    const [
        sendPost,
        {
            isLoading: sendPostIsLoading,
            isSuccess: sendPostIsSuccess,
            isError: sendPostIsError,
            error: sendPostError,
        },
    ] = useSendPostMutation()

    async function handleClickPost({ content, image }) {
        const formData = new FormData()

        formData.append("content", content)
        formData.append("file", image)

        await sendPost(formData).unwrap()
    }

    console.log("post api data ", postApiData)

    return (
        <Grid container>
            <Grid item xs={12} md={8}>
                <PostWrapper>
                    <PostComposer
                        onClick={handleClickPost}
                        isLoading={sendPostIsLoading}
                        isSuccess={sendPostIsSuccess}
                    />

                    {isPostLoading ? (
                        <p>loading posts...</p>
                    ) : postApiData ? (
                        postApiData.data.posts.map((post, index) => {
                            return (
                                <Post
                                    key={index}
                                    id={post._id}
                                    author={post.author}
                                    content={post.content}
                                    image={post.image}
                                    comments={post.comments}
                                    totalComments={post.totalComments}
                                    maxCommentPreview={1}
                                    reactions={post.reactions}
                                    createdAt={post.createdAt}
                                />
                            )
                        })
                    ) : (
                        <p>No post available at this time.</p>
                    )}
                </PostWrapper>
            </Grid>

            <Grid
                item
                md={4}
                sx={{ display: isMediumScreenAndBelow && "none" }}
            >
                <Sidebar />
            </Grid>
        </Grid>
    )
}

export default Feed
