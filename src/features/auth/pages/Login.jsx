import { Link as RouterLink } from "react-router-dom"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import StyledPaper from "../../../components/common/StyledPaper"
import GoogleIcon from "../../../components/icons/GoogleIcon"

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

function Login() {
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
                            Sign in
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.grey[600],
                                mb: 4.5,
                                textAlign: "center",
                            }}
                        >
                            Join our community! Sign in to connect with others
                            and share your thoughts.
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <Button
                                component={RouterLink}
                                to="/"
                                // type="submit"
                                fullWidth
                                variant="outlined"
                                sx={{ py: 1, mb: 1.5 }}
                            >
                                Sign in as guest
                            </Button>

                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                sx={{ py: 1 }}
                                startIcon={<GoogleIcon />}
                            >
                                Sign in with Google
                            </Button>

                            <Typography
                                sx={{
                                    my: 3,
                                    textAlign: "center",
                                    color: (theme) => theme.palette.grey[600],
                                }}
                            >
                                or
                            </Typography>

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
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                size="small"
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                        defaultChecked
                                        size="small"
                                    />
                                }
                                label={
                                    <Typography
                                        sx={{
                                            color: (theme) =>
                                                theme.palette.grey[800],
                                        }}
                                    >
                                        Remember me
                                    </Typography>
                                }
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ py: 1, mt: 3, mb: 2 }}
                            >
                                Sign in
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>

                                <Grid item>
                                    <Link
                                        component={RouterLink}
                                        to="/register"
                                        variant="body2"
                                    >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </StyledPaper>
            </Box>

            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default Login
