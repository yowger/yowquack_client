import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"

function PreviewImage({ src, onClickRemove, ...restProps }) {
    if (!src) {
        return
    }

    return (
        <Box
            sx={{
                marginTop: 2,
                maxHeight: "39.9ch",
                width: "100%",
                position: "relative",
                overflow: "hidden",
                ...restProps?.sx,
            }}
        >
            <img
                src={src}
                alt="Attached Image Preview"
                style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "0.5rem",
                }}
            />

            <IconButton
                aria-label="Remove"
                size="small"
                sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    color: "#ffffff",
                    backgroundColor: "#333333",
                    "&:hover": {
                        backgroundColor: "#666666",
                    },
                }}
                onClick={onClickRemove}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>
    )
}

PreviewImage.propTypes = {
    src: PropTypes.string,
    onClickRemove: PropTypes.func.isRequired,
    restProps: PropTypes.object,
}

export default PreviewImage
