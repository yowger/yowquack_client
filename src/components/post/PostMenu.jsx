import PropTypes from "prop-types"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
// import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

const PostMenu = ({ anchorEl, open, onClose, onDeleteClick }) => {
    return (
        <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
            {/* <MenuItem onClick={onEditClick}>
            <ListItemButton> </ListItemButton>
                <ListItemIcon>
                    <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Edit</ListItemText>
            </MenuItem> */}
            <MenuItem onClick={onDeleteClick}>
                <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete</ListItemText>
            </MenuItem>
        </Menu>
    )
}

PostMenu.propTypes = {
    anchorEl: PropTypes.object,
    open: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])]),
    onClose: PropTypes.func.isRequired,
    // onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
}

export default PostMenu
