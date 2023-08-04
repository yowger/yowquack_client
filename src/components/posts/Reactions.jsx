import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

const Reactions = ({ reactions }) => {
    const emoticons = {
        like: "❤️",
        haha: "😆",
        wow: "😲",
        sad: "😢",
        angry: "😠",
    }

    const reactionOrder = ["like", "haha", "wow", "sad", "angry"]

    const sortedReactions = [...reactions]?.sort((a, b) => {
        return reactionOrder.indexOf(a.type) - reactionOrder.indexOf(b.type)
    })

    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            {sortedReactions?.map(({ count, type }, index) => {
                return count > 0 ? (
                    <Typography
                        key={index}
                        variant="body2"
                        sx={{
                            fontSize: 15,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        {emoticons[type]} {count}
                    </Typography>
                ) : null
            })}
        </Box>
    )
}

// Reactions.propTypes = {
//     reactions: PropTypes.shape({
//         like: PropTypes.number,
//         haha: PropTypes.number,
//         wow: PropTypes.number,
//         sad: PropTypes.number,
//         angry: PropTypes.number,
//     }),
// }

export default Reactions
