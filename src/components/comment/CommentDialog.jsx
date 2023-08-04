import PropTypes from "prop-types"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"

const CommentDialog = ({
    openDeleteDialog,
    handleCloseDeleteDialog,
    handleClickDeleteComment,
}) => {
    return (
        <Dialog
            open={openDeleteDialog}
            onClose={handleCloseDeleteDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Delete Comment?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Once deleted, it can no longer be recovered.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
                <Button
                    variant="contained"
                    onClick={handleClickDeleteComment}
                    autoFocus
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

CommentDialog.propTypes = {
    openDeleteDialog: PropTypes.bool.isRequired,
    handleCloseDeleteDialog: PropTypes.func.isRequired,
    handleClickDeleteComment: PropTypes.func.isRequired,
}

export default CommentDialog
