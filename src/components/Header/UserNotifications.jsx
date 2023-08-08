import MailIcon from "@mui/icons-material/Mail"
import NotificationsIcon from "@mui/icons-material/Notifications"
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"

function UserNotifications() {
    return (
        <>
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
        </>
    )
}

export default UserNotifications
