import { useState } from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"

const StyledTypography = (props) => (
    <Typography variant="body2" sx={{ fontSize: 18 }}>
        {props.children}
    </Typography>
)

const ReactionMenu = ({ onClick, renderButton }) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const reactions = [
        { type: "like", emoji: "❤️" },
        { type: "haha", emoji: "😆" },
        { type: "wow", emoji: "😲" },
        { type: "sad", emoji: "😢" },
        { type: "angry", emoji: "😠" },
    ]

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
                    {reactions.map(({ type, emoji }) => (
                        <Button
                            key={type}
                            onClick={() => handleReactionClick({ type })}
                        >
                            <StyledTypography>{emoji}</StyledTypography>
                        </Button>
                    ))}
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
