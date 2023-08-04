import React from "react"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import PropTypes from "prop-types"

const CommentMenu = ({ menuAnchorEl, onClose, onEdit, onDelete }) => {
    const handleClose = () => {
        onClose()
    }

    const handleEditClick = () => {
        onEdit()
        handleClose()
    }

    const handleDeleteClick = () => {
        onDelete()
        handleClose()
    }

    return (
        <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleEditClick}>
                <ListItemIcon>
                    <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Edit</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleDeleteClick}>
                <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete</ListItemText>
            </MenuItem>
        </Menu>
    )
}

export default CommentMenu
