import { useState, useRef, useEffect } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"
import EmojiMenu from "../posts/EmojiMenu"
import StyledPaper from "../common/StyledPaper"
import PreviewImage from "../form/PreviewImage"
import CircularProgress from "@mui/material/CircularProgress"

// future# , useHook for reusability,
function PostComposer({ onClick, isLoading, isSuccess }) {
    const [postContent, setPostContent] = useState("")
    const [attachedImage, setAttachedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [displayError, setDisplayError] = useState(false)
    const fileInputRef = useRef(null)

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

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!postContent && !attachedImage) {
            setDisplayError(true)

            return
        }

        if (displayError) {
            setDisplayError(false)
        }

        onClick({ content: postContent, image: attachedImage })
    }

    const characterCount = postContent.length
    const charactersRemaining = 280 - characterCount

    useEffect(() => {
        setPostContent("")
        handleRemoveImage()
    }, [isSuccess])

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <StyledPaper>
                <Box sx={{ padding: 2 }}>
                    <TextField
                        label="What's on your mind"
                        multiline
                        rows={4}
                        fullWidth
                        value={postContent}
                        onChange={handleContentChange}
                        inputProps={{ maxLength: 280 }}
                    />

                    <Box
                        sx={{
                            mt: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            variant="body2"
                            color={
                                charactersRemaining >= 0
                                    ? "text.secondary"
                                    : "error"
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

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageAttach}
                        style={{ display: "none" }}
                        ref={fileInputRef}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 2,
                        }}
                    >
                        <IconButton
                            color="primary"
                            aria-label="Choose File"
                            component="span"
                            onClick={handleChooseFile}
                        >
                            <InsertPhotoIcon />
                        </IconButton>

                        <EmojiMenu onSelect={handleEmojiSelect} />

                        <Box sx={{ flexGrow: 1 }} />

                        <Box>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={charactersRemaining < 0 || isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <CircularProgress
                                            sx={{ mr: 1 }}
                                            size={16}
                                        />
                                        Posting...
                                    </>
                                ) : (
                                    <>Post</>
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
            </StyledPaper>
        </Box>
    )
}

export default PostComposer
