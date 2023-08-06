import { useState } from "react"
import { useTheme } from "@emotion/react"
import { Avatar, Box, Grid, Typography, useMediaQuery } from "@mui/material"
import PostComposer from "../../../components/profile/PostComposer"
import Post from "../../../components/post/Post"
import ProfileInfo from "../../../components/profile/ProfileInfo"
import StyledPaper from "../../../components/common/StyledPaper"
import { Link } from "react-router-dom"
import StatInfo from "../../../components/profile/StatInfo"
import PostWrapper from "../../../components/posts/PostWrapper"
import { useGetPostQuery } from "../../feed/slices/postApiSlice"

const followers = [
    { name: "Roger Pantil" },
    { name: "Naruto Uzumaki" },
    { name: "Sasuke Uchiha" },
    { name: "Buroto Uzumaki" },
]

const following = [
    { name: "Choi Kyu" },
    { name: "Kim Chu" },
    { name: "Kimberly Aneston" },
]

function Profile() {
    // const theme = useTheme()
    // const isMediumScreenAndBelow = useMediaQuery(theme.breakpoints.down("md"))
    const [page, setpage] = useState(1)

    const {
        data: postApiData,
        isLoading: isPostLoading,
        isSuccess: isPostSuccess,
        isError: isPostError,
        error: postError,
    } = useGetPostQuery({ page })

    return (
        <Box sx={{ display: "flex" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7} lg={8}>
                    <Box
                        sx={{
                            maxWidth: "65ch",
                            mb: 2,
                        }}
                    >
                        <ProfileInfo
                            name="Roger Pantil"
                            avatarUrl="https://picsum.photos/200/200?random=30"
                        />
                    </Box>

                    <PostWrapper>
                        <PostComposer />

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
            </Grid>
        </Box>
    )
}

export default Profile
