import Drawer from "@mui/material/Drawer"

function CustomDrawer({
    container,
    mobileOpen,
    handleDrawerToggle,
    drawerWidth,
    drawer,
}) {
    return (
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
    )
}

export default CustomDrawer
