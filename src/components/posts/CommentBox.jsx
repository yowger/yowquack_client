import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    TextField,
    Typography,
} from "@mui/material"
import { useEffect, useRef, useState } from "react"
import EmojiPickerButton from "./EmojiMenu"
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"
import PreviewImage from "../form/PreviewImage"

function CommentBox({ onClick, isLoading, isSuccess }) {
    const [postContent, setPostContent] = useState("")
    const [attachedImage, setAttachedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [displayError, setDisplayError] = useState(false)
    const fileInputRef = useRef(null)

    const characterCount = postContent.length
    const charactersRemaining = 280 - characterCount

    const handleContentChange = (e) => {
        const content = e.target.value.slice(0, 280)
        setPostContent(content)
    }

    const handleImageAttach = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setAttachedImage(file)
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = () => {
        setAttachedImage(null)
        setImagePreview(null)
    }

    const handleEmojiSelect = (emoji) => {
        const updatedPostContent = postContent + emoji.native
        setPostContent(updatedPostContent)
    }

    const handleChooseFile = () => {
        fileInputRef.current.click()
    }

    const handleSubmit = () => {
        if (!postContent && !attachedImage) {
            setDisplayError(true)

            return
        }

        if (displayError) {
            setDisplayError(false)
        }

        onClick({ content: postContent, image: attachedImage })
    }

    useEffect(() => {
        setPostContent("")
        handleRemoveImage()
    }, [isSuccess])

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                px: 2,
                my: 1,
                justifyContent: "center",
            }}
        >
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Add a comment"
                value={postContent}
                onChange={handleContentChange}
                inputProps={{ maxLength: 280 }}
            />

            <Box
                sx={{
                    my: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="body2"
                    color={
                        charactersRemaining >= 0 ? "text.secondary" : "error"
                    }
                >
                    {charactersRemaining} characters remaining
                </Typography>

                {displayError && (
                    <Typography variant="body2" color="error">
                        A content or image is required.
                    </Typography>
                )}
            </Box>

            <Box sx={{ display: "flex" }}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageAttach}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                />

                <IconButton
                    color="primary"
                    aria-label="Choose File"
                    component="span"
                    onClick={handleChooseFile}
                >
                    <InsertPhotoIcon />
                </IconButton>

                <EmojiPickerButton onSelect={handleEmojiSelect} />
                <Box sx={{ flexGrow: 1 }} />

                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={charactersRemaining < 0 || isLoading}
                    >
                        {isLoading ? (
                            <>
                                <CircularProgress sx={{ mr: 1 }} size={16} />
                                commenting...
                            </>
                        ) : (
                            <>Comment</>
                        )}
                    </Button>
                </Box>
            </Box>

            <PreviewImage
                src={imagePreview}
                onClickRemove={handleRemoveImage}
                sx={{ width: 220 }}
            />
        </Box>
    )
}

export default CommentBox
