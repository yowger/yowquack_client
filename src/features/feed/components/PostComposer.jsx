import { useState, useRef } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"
import EmojiMenu from "../../../components/post/EmojiMenu"
import StyledPaper from "../../../components/common/StyledPaper"
import PreviewImage from "../../../components/form/PreviewImage"

const PostComposer = () => {
    const [postContent, setPostContent] = useState("")
    const [attachedImage, setAttachedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
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
    }

    const characterCount = postContent.length
    const charactersRemaining = 280 - characterCount

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <StyledPaper>
                <Box sx={{ padding: 2 }}>
                    <TextField
                        label="What's on your mind"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        value={postContent}
                        onChange={handleContentChange}
                        inputProps={{ maxLength: 280 }}
                    />

                    <Typography
                        variant="body2"
                        color={
                            charactersRemaining >= 0
                                ? "text.secondary"
                                : "error"
                        }
                        sx={{ mt: 1 }}
                    >
                        {charactersRemaining} characters remaining
                    </Typography>

                    <PreviewImage
                        src={imagePreview}
                        onClickRemove={handleRemoveImage}
                        sx={{ width: 220 }}
                    />

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

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={charactersRemaining < 0}
                            sx={{
                                alignSelf: "flex-center",
                            }}
                        >
                            Post
                        </Button>
                    </Box>
                </Box>
            </StyledPaper>
        </Box>
    )
}

export default PostComposer
