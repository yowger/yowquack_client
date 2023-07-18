import { useState } from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"

const StyledTypography = (props) => (
    <Typography variant="body2" sx={{ fontSize: 16 }}>
        {props.children}
    </Typography>
)

const ReactionMenu = ({ onClick, renderButton }) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleReactionClick = (reaction) => {
        onClick(reaction)
        setAnchorEl(null)
    }

    const handleReactionPickerOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleReactionPickerClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? "reaction-popover" : undefined
    return (
        <>
            {renderButton({
                onClick: handleReactionPickerOpen,
            })}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleReactionPickerClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                sx={{ display: "flex" }}
            >
                <Box sx={{ display: "flex" }}>
                    <Button onClick={() => handleReactionClick("❤️")}>
                        <StyledTypography>❤️</StyledTypography>
                    </Button>
                    <Button onClick={() => handleReactionClick("😆")}>
                        <StyledTypography>😆</StyledTypography>
                    </Button>
                    <Button onClick={() => handleReactionClick("😲")}>
                        <StyledTypography>😲</StyledTypography>
                    </Button>
                    <Button onClick={() => handleReactionClick("😢")}>
                        <StyledTypography>😢</StyledTypography>
                    </Button>
                    <Button onClick={() => handleReactionClick("😠")}>
                        <StyledTypography>😠</StyledTypography>
                    </Button>
                </Box>
            </Popover>
        </>
    )
}

StyledTypography.propTypes = {
    children: PropTypes.node.isRequired,
}

ReactionMenu.propTypes = {
    onClick: PropTypes.func,
    renderButton: PropTypes.func.isRequired,
}

export default ReactionMenu
