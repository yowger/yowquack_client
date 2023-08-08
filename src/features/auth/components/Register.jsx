import { Link as RouterLink } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import StyledPaper from "../../../components/common/StyledPaper"
import registerSchema from "../../../schemas/registerSchema"
import Copyright from "../../../components/common/Copyright"
import { useRegisterMutation } from "../slices/authApiSlice"
import { useEffect, useRef } from "react"
import { handleFieldError } from "../../../utils/formUtils"

function Register() {
    const ERROR_DUPLICATE_EMAIL = 409

    const {
        handleSubmit,
        control,
        setError,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        resolver: yupResolver(registerSchema),
    })

    const emailRef = useRef()

    const [
        register,
        {
            isLoading: registerIsLoading,
            isSuccess: registerIsSuccess,
            isError: registerIsError,
            error: registerError,
        },
    ] = useRegisterMutation()

    async function handleUserRegister({ name, email, password }) {
        await register({ name, email, password }).unwrap()
    }

    useEffect(() => {
        if (registerIsSuccess) {
            // Your navigation code here
            console.log("success")
        }
    }, [registerIsSuccess])

    useEffect(() => {
        if (registerError) {
            const { data, status } = registerError
            const { message } = data

            if (status === ERROR_DUPLICATE_EMAIL) {
                handleFieldError(emailRef, "email", message, setError)
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [registerError])

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
                            onSubmit={handleSubmit(handleUserRegister)}
                            noValidate
                        >
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Name"
                                        size="small"
                                        autoFocus
                                        fullWidth
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                        sx={{ mb: 1.5 }}
                                    />
                                )}
                            />

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
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                        sx={{ mb: 1.5 }}
                                    />
                                )}
                            />

                            <Controller
                                name="confirmPassword"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        type="password"
                                        label="Confirm Password"
                                        fullWidth
                                        size="small"
                                        error={!!errors.confirmPassword}
                                        helperText={
                                            errors.confirmPassword?.message
                                        }
                                    />
                                )}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ py: 1, mt: 3, mb: 2 }}
                            >
                                Sign up
                            </Button>

                            <Link
                                component={RouterLink}
                                to="/login"
                                variant="body2"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {"Already have an account? Sign In"}
                            </Link>
                            {/* </Box> */}
                        </Box>
                    </Box>
                </StyledPaper>
            </Box>

            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default Register
