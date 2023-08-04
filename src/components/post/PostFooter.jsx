import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Reactions from "../posts/Reactions"

const PostFooter = ({ reactions, totalComments }) => (
    <Box sx={{ display: "flex" }}>
        {reactions && <Reactions reactions={reactions} />}

        <Box sx={{ flexGrow: 1 }} />

        {totalComments > 0 && (
            <Typography
                variant="mediumText"
                sx={{ color: (theme) => theme.palette.grey[600] }}
            >
                {totalComments} comments
            </Typography>
        )}
    </Box>
)

PostFooter.propTypes = {
    reactions: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
        })
    ),
    totalComments: PropTypes.number.isRequired,
}

export default PostFooter
