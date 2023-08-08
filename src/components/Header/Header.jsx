import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import SearchInput from "../form/SearchInput"
import PropTypes from "prop-types"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"
import Avatar from "@mui/material/Avatar"
import useAuth from "../../hooks/useAuth"
import Logo from "../common/Logo"
import UserNotifications from "./UserNotifications"
import UserMenu from "./UserMenu"
import UserDrawer from "./UserDrawer"
import Button from "@mui/material/Button"
import { ListItemIcon } from "@mui/material"

const drawerWidth = 240
const navItems = ["Home", "About", "Contact"]

function Header(props) {
    const { avatar, name, isUser } = useAuth()
    const navigate = useNavigate()
    const { window } = props

    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleClickProfileItem = () => {
        navigate("/profile")
        setAnchorElUser(null)
    }

    const handleClickLogOutItem = () => {
        console.log("clicked log out item")
    }

    const settings = [
        {
            menuItem: <ListItemText>Profile</ListItemText>,
            event: handleClickProfileItem,
        },
        {
            menuItem: <ListItemText>Log out</ListItemText>,
            event: handleClickLogOutItem,
        },
    ]

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <>
            <AppBar component="nav" elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Logo />

                        <SearchInput />

                        <Box sx={{ flexGrow: 1 }} />

                        {isUser ? (
                            <>
                                {/* <UserNotifications /> */}

                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu}>
                                        <Avatar
                                            alt="profile picture"
                                            src={avatar}
                                        />
                                    </IconButton>
                                </Tooltip>

                                <UserMenu
                                    anchorElUser={anchorElUser}
                                    handleCloseUserMenu={handleCloseUserMenu}
                                    settings={settings}
                                />
                            </>
                        ) : (
                            <Button
                                component={Link}
                                to="/login"
                                color="inherit"
                            >
                                Login
                            </Button>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <UserDrawer
                container={container}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                drawerWidth={drawerWidth}
                drawer={drawer}
            />
        </>
    )
}

Header.propTypes = {
    window: PropTypes.func,
}

export default Header
