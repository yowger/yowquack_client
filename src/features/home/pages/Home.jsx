import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import GitHubIcon from "@mui/icons-material/GitHub"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Header from "../components/Header"
import MainFeaturedPost from "../components/MainFeaturedPost"
import FeaturedPost from "../components/FeaturedPost"
import Main from "../components/Main"
import Sidebar from "../components/Sidebar"
import Post from "../components/Post"
import { Divider, Typography } from "@mui/material"
// import Footer from "./Footer"

const sections = [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
]

const mainFeaturedPost = {
    title: "Title of a longer featured blog post",
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageText: "main image description",
    linkText: "Continue reading…",
}

const featuredPosts = [
    {
        title: "Featured post",
        date: "Nov 12",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random?wallpapers",
        imageLabel: "Image Text",
    },
    {
        title: "Post title",
        date: "Nov 11",
        description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random?wallpapers",
        imageLabel: "Image Text",
    },
]

const sidebar = {
    title: "About",
    description:
        "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    archives: [
        { title: "March 2020", url: "#" },
        { title: "February 2020", url: "#" },
        { title: "January 2020", url: "#" },
        { title: "November 1999", url: "#" },
        { title: "October 1999", url: "#" },
        { title: "September 1999", url: "#" },
        { title: "August 1999", url: "#" },
        { title: "July 1999", url: "#" },
        { title: "June 1999", url: "#" },
        { title: "May 1999", url: "#" },
        { title: "April 1999", url: "#" },
    ],
    social: [
        { name: "GitHub", icon: GitHubIcon },
        { name: "Twitter", icon: TwitterIcon },
        { name: "Facebook", icon: FacebookIcon },
    ],
}

function Home() {
    return (
        <Container maxWidth="lg">
            <Header sections={sections} title="YowQuack" />
            <main>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} />
                    ))}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                            "& .markdown": {
                                py: 3,
                            },
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            <p>Fire from the firehouse</p>
                        </Typography>
                        <Divider />
                        {featuredPosts.map((post) => (
                            <Post key={post.title} post={post} />
                        ))}
                    </Grid>

                    <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        archives={sidebar.archives}
                        social={sidebar.social}
                    />
                </Grid>
            </main>
        </Container>
    )
}

export default Home
