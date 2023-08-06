import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import SearchInput from "../form/SearchInput"
import PropTypes from "prop-types"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"
import Tooltip from "@mui/material/Tooltip"
import Avatar from "@mui/material/Avatar"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MailIcon from "@mui/icons-material/Mail"
import NotificationsIcon from "@mui/icons-material/Notifications"

const drawerWidth = 240
const navItems = ["Home", "About", "Contact"]

function Header(props) {
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
        { label: "Profile", event: handleClickProfileItem },
        { label: "Log out", event: handleClickLogOutItem },
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

                        <Link
                            to="/"
                            style={{ textDecoration: "none", color: "unset" }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    display: {
                                        xs: "none",
                                        sm: "block",
                                    },
                                }}
                            >
                                QUACK
                            </Typography>
                        </Link>

                        <SearchInput />

                        <Box sx={{ flexGrow: 1 }} />
                        <Box
                            sx={{
                                flexGrow: 0,
                                display: "flex",
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                            >
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>

                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>

                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://picsum.photos/200/200"
                                    />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={setting.event}
                                    >
                                        <Typography textAlign="center">
                                            {setting.label}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

Header.propTypes = {
    window: PropTypes.func,
}

export default Header
