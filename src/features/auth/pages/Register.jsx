import { Link as RouterLink } from "react-router-dom"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import StyledPaper from "../../../components/common/StyledPaper"

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            Roger Pantil {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        })
    }

    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    mt: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <StyledPaper>
                    <Box
                        sx={{
                            px: { xs: 4, md: 8 },
                            py: 8,
                            maxWidth: 500,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 1,
                                color: (theme) => theme.palette.grey[800],
                                fontWeight: 500,
                            }}
                        >
                            Sign up
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.grey[600],
                                mb: 4.5,
                                textAlign: "center",
                            }}
                        >
                            Join Us and Grow Together: Sign up and be a part of
                            our thriving community.
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <TextField
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                size="small"
                                sx={{ mb: 1.5 }}
                            />

                            <TextField
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                size="small"
                                sx={{ mb: 1.5 }}
                            />

                            <TextField
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                size="small"
                                sx={{ mb: 1.5 }}
                            />

                            <TextField
                                fullWidth
                                name="confirmPassword"
                                label="Confirm password"
                                type="password"
                                id="comfirmPassword"
                                size="small"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ py: 1, mt: 3, mb: 2 }}
                            >
                                Sign up
                            </Button>

                            <Box sx={{ textAlign: "center" }}>
                                <Link
                                    component={RouterLink}
                                    to="/login"
                                    variant="body2"
                                >
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </StyledPaper>
            </Box>

            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default Register
