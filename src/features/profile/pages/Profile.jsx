import { useTheme } from "@emotion/react"
import { Avatar, Box, Grid, Typography, useMediaQuery } from "@mui/material"
import PostComposer from "../../feed/components/PostComposer"
import Post from "../../../components/post/Post"
import ProfileInfo from "../components/ProfileInfo"
import StyledPaper from "../../../components/common/StyledPaper"
import { Link } from "react-router-dom"
import FollowerInfo from "../components/FollowerInfo"
import FollowerHeader from "../components/FollowerHeader"
import PostWrapper from "../../../components/posts/PostWrapper"
import FollowList from "../components/FollowList"

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

const posts = [
    {
        id: 1,
        author: {
            name: "John Doe",
            avatarUrl: "https://picsum.photos/200/200?random=6",
        },
        content:
            "Ex eiusmod excepteur proident enim pariatur ad incididunt fugiat eiusmod pariatur proident. Cupidatat occaecat laboris reprehenderit enim consectetur cillum ut nulla amet magna consequat ut id. Labore amet eu et in sunt. Lorem velit laboris do nisi pariatur ea",
        image: "https://picsum.photos/600/400?random=1",
        comments: [
            {
                id: 1,
                author: {
                    name: "John Doe",
                    avatarUrl: "https://picsum.photos/200/200?random=6",
                },
                content: "Quis tempor sit dolor voluptate dolor.",
                image: "https://picsum.photos/200/200?random=11",
            },
            {
                id: 2,
                author: {
                    name: "Roger Pantil",
                    avatarUrl: "https://picsum.photos/200/200?random=26",
                },
                content: "Quis tempor sit dolor voluptate dolor.",
            },
        ],
        totalComments: 2,
        reactions: {
            like: 7,
            haha: 0,
            wow: 2,
            sad: 0,
            angry: 1,
        },
    },
    {
        id: 2,
        author: {
            name: "Jane Smith",
            avatarUrl: "https://picsum.photos/200/200?random=6",
        },
        content:
            "Irure pariatur Lorem do nostrud. Amet consectetur laboris incididunt laboris nostrud veniam deserunt sunt laborum aute aute dolor cillum. Magna dolor est nostrud nisi eiusmod cillum ut excepteur veniam irure duis. Aliquip eu labore consequat consequat eu adipisicing et culpa eiusmod tempor pariatur",
        comments: [
            {
                id: 1,
                author: {
                    name: "John Doe",
                    avatarUrl: "https://picsum.photos/200/200?random=6",
                },
                content:
                    "Id pariatur duis do consectetur elit occaecat. Lorem labore do dolor ex officia velit nulla id in. Cupidatat do consequat sunt aliqua sunt quis elit veniam ad nisi aliqua officia. Ipsum cillum",
                image: "https://picsum.photos/200/200?random=12",
            },
        ],
        totalComments: 2,
        reactions: {
            like: 10,
            haha: 5,
            wow: 0,
            sad: 0,
            angry: 0,
        },
    },
    {
        id: 4,
        author: {
            name: "Super Mario",
            avatarUrl: "https://picsum.photos/200/200?random=7",
        },
        content: "This is the third post.",
        totalComments: 0,
    },
    {
        id: 5,
        author: {
            name: "Naruto Uzumaki",
            avatarUrl: "https://picsum.photos/200/200?random=8",
        },
        content: "This is the third post.",
        comments: [
            {
                id: 1,
                author: {
                    name: "John Doe",
                    avatarUrl: "https://picsum.photos/200/200?random=20",
                },
                content: "Laborum dolore do ut eu do excepteur.",
            },
        ],
        totalComments: 2,
        reactions: {
            like: 10,
            haha: 5,
            wow: 4,
            angry: 1,
        },
    },
]

function Profile() {
    // const theme = useTheme()
    // const isMediumScreenAndBelow = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Box sx={{ display: "flex" }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    sm={12}
                    md={5}
                    lg={4}
                    // sx={{ display: isMediumScreenAndBelow && "none" }}
                >
                    <Box
                        sx={{
                            maxWidth: "65ch",
                        }}
                    >
                        <StyledPaper>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    padding: 2,
                                }}
                            >
                                <ProfileInfo
                                    name="John Doe"
                                    avatarUrl="https://picsum.photos/200/200?random=30"
                                    bio="I am a web developer passionate about creating user-friendly and efficient applications."
                                />

                                <div>
                                    <FollowerHeader />

                                    <FollowList users={followers} />
                                </div>

                                <div>
                                    <FollowerHeader />

                                    <FollowList users={following} />
                                </div>
                            </Box>
                        </StyledPaper>
                    </Box>
                </Grid>

                <Grid item xs={12} md={7} lg={8}>
                    <PostWrapper>
                        <PostComposer />

                        {posts.map((post) => (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                image={post.image}
                                comments={post.comments}
                                totalComments={post.totalComments}
                                maxCommentPreview={1}
                                reactions={post.reactions}
                            />
                        ))}
                    </PostWrapper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile
