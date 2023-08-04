import { useState } from "react"
import PropTypes from "prop-types"
import { IconButton, Popover } from "@mui/material"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"
import Picker from "@emoji-mart/react"

const EmojiPickerButton = ({ onSelect }) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleEmojiPickerOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleEmojiPickerClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? "emoji-popover" : undefined

    return (
        <>
            <IconButton
                color="primary"
                aria-describedby={id}
                aria-label="Insert Emoji"
                onClick={handleEmojiPickerOpen}
            >
                <EmojiEmotionsIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                onClose={handleEmojiPickerClose}
                anchorEl={anchorEl}
            >
                <Picker
                    set="apple"
                    onEmojiSelect={onSelect}
                    title="Pick your emoji"
                    emoji="point_up"
                    style={{
                        position: "absolute",
                        bottom: "75px",
                        right: "5px",
                        zIndex: 1,
                    }}
                />
            </Popover>
        </>
    )
}

EmojiPickerButton.propTypes = {
    onSelect: PropTypes.func,
}

export default EmojiPickerButton
