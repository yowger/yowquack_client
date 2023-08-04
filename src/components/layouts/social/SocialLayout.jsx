import { Outlet } from "react-router-dom"
import Container from "@mui/material/Container"
import Header from "../social/Header"
import Toolbar from "@mui/material/Toolbar"

function SocialLayout() {
    return (
        <Container maxWidth="lg">
            <Header />

            <Toolbar sx={{ mb: 2 }} />

            <Outlet />
        </Container>
    )
}

export default SocialLayout
