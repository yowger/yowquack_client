import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
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
import Copyright from "../../../components/common/Copyright"
import loginSchema from "../../../schemas/loginSchema"
import { useLoginMutation } from "../slices/authApiSlice"
import { useEffect, useRef } from "react"
import { handleFieldError } from "../../../utils/formUtils"
import { useDispatch } from "react-redux"
import { setCredentials } from "../slices/authSlice"

function Login() {
    const ERROR_INVALID_PASSWORD = 401
    const ERROR_EMAIL_NOT_REGISTERED = 404

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        handleSubmit,
        control,
        // getValues,
        // setFocus,
        setError,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        resolver: yupResolver(loginSchema),
    })

    const emailRef = useRef()
    const passwordRef = useRef()

    const [
        login,
        {
            isLoading: loginIsLoading,
            isSuccess: loginIsSuccess,
            isError: loginIsError,
            error: loginError,
        },
    ] = useLoginMutation()

    async function handleUserLogin({ email, password }) {
        const { accessToken } = await login({ email, password }).unwrap()
        dispatch(setCredentials({ accessToken }))
        navigate("/")
    }

    useEffect(() => {
        if (loginIsSuccess) {
            // Your navigation code here
            console.log("success")
        }
    }, [loginIsSuccess])

    useEffect(() => {
        if (loginError) {
            const { data, status } = loginError
            const { message } = data

            if (status === ERROR_INVALID_PASSWORD) {
                handleFieldError(passwordRef, "password", message, setError)
            }

            if (status === ERROR_EMAIL_NOT_REGISTERED) {
                handleFieldError(emailRef, "email", message, setError)
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginError])

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

                        <Button
                            component={RouterLink}
                            to="/"
                            // type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{ py: 1, mb: 1.5 }}
                        >
                            Continue as guest
                        </Button>

                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{ py: 1 }}
                            startIcon={<GoogleIcon />}
                        >
                            Continue with Google
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

                        <Box
                            component="form"
                            onSubmit={handleSubmit(handleUserLogin)}
                            noValidate
                        >
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Email"
                                        size="small"
                                        autoComplete="email"
                                        fullWidth
                                        inputRef={emailRef}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        sx={{ mb: 1.5 }}
                                    />
                                )}
                            />

                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        type="password"
                                        label="Password"
                                        size="small"
                                        fullWidth
                                        inputRef={passwordRef}
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                        sx={{ mb: 1.5 }}
                                    />
                                )}
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
                        </Box>

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
                </StyledPaper>
            </Box>

            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default Login
