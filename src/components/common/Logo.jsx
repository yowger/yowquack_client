import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography"

function Logo() {
    return (
        <Link to="/" style={{ textDecoration: "none", color: "unset" }}>
            <Typography
                variant="h6"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
            >
                QUACK
            </Typography>
        </Link>
    )
}

export default Logo
