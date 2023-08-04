import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const PostContent = ({ content, imageUrl }) => (
    <Box>
        <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
            {content}
        </Typography>

        {imageUrl && (
            <Box sx={{ maxHeight: 720, width: "100%", overflow: "hidden" }}>
                <Box
                    component="img"
                    sx={{
                        width: "100%",
                    }}
                    alt="post image"
                    src={imageUrl}
                />
            </Box>
        )}
    </Box>
)

PostContent.propTypes = {
    content: PropTypes.string,
    imageUrl: PropTypes.string,
}

export default PostContent
