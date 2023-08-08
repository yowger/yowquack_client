import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import Avatar from "@mui/material/Avatar"
import { MenuList, Paper } from "@mui/material"

function UserMenu({ anchorElUser, handleCloseUserMenu, settings }) {
    return (
        <Menu
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
            sx={{ mt: "45px", width: 500 }}
        >
            <MenuList>
                {settings?.map((setting, index) => (
                    <MenuItem key={index} onClick={setting.event}>
                        {setting.menuItem}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default UserMenu
