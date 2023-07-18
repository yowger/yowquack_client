import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

const Reactions = ({ reactions }) => {
    const reactionsArray = Object.entries(reactions)

    const emoticons = {
        like: "❤️",
        haha: "😆",
        wow: "😲",
        sad: "😢",
        angry: "😠",
    }

    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            {reactionsArray.map(([reaction, count]) =>
                count > 0 ? (
                    <Typography
                        key={reaction}
                        variant="body2"
                        sx={{ color: (theme) => theme.palette.grey[500] }}
                    >
                        {emoticons[reaction]} {count}
                    </Typography>
                ) : null
            )}
        </Box>
    )
}

Reactions.propTypes = {
    reactions: PropTypes.shape({
        like: PropTypes.number,
        haha: PropTypes.number,
        wow: PropTypes.number,
        sad: PropTypes.number,
        angry: PropTypes.number,
    }),
}

export default Reactions
