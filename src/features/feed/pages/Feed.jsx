import { Grid } from "@mui/material"
import Header from "../components/Header"
import PostComposer from "../components/PostComposer"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Post from "../../../components/post/Post"

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

function Feed() {
    return (
        <Container maxWidth="lg">
            <Header />
            <Box component="main">
                <Toolbar />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        maxWidth: "65ch",
                        padding: 2,
                    }}
                >
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
                </Box>

                <Grid></Grid>
            </Box>
        </Container>
    )
}

export default Feed
