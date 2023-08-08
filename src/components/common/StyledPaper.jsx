import PropTypes from "prop-types"
import Paper from "@mui/material/Paper"

const StyledPaper = (props) => (
    <Paper
        sx={{
            border: 1,
            borderColor: (theme) => theme.palette.grey[200],
            position: "relative",
            boxShadow: "1px 2px 1px rgba(0, 0, 0, 0.025);",
            ...props.sx,
        }}
    >
        {props.children}
    </Paper>
)

StyledPaper.propTypes = {
    children: PropTypes.node,
}

export default StyledPaper
