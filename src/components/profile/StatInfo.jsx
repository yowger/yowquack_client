import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

function StatInfo({ text = "", count = 0, onClick }) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 600,
                    lineHeight: "inherit",
                    fontSize: 15,
                }}
            >
                {count}
            </Typography>
            <Typography
                sx={{ fontSize: 15, color: (theme) => theme.palette.grey[600] }}
            >
                {text}
            </Typography>
        </Box>
    )
}

StatInfo.propTypes = {
    text: PropTypes.string,
    count: PropTypes.number,
    onClick: PropTypes.func,
}

export default StatInfo
