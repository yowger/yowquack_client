import * as Yup from "yup"

const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])/
// Password must contain at least one uppercase letter

const specialCharsFormat = /^[-@.\w]*$/
// Password cannot contain special characters other than _ @ . -

const registerSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(30, "Name must be at most 30 characters")
        .matches(
            /^[a-zA-Z\s]+$/,
            "Invalid name format. Only letters and spaces are allowed"
        ),
    email: Yup.string()
        .required("Your email is required")
        .email("Invalid email format"),
    password: Yup.string()
        .required("password is required")
        .min(5, "Password must be at least 5 characters")
        .max(20, "Password cannot be more than 20 characters")
        .test(
            "special-chars",
            "Password cannot contain special characters other than _ @ . -",
            function (value) {
                return specialCharsFormat.test(value)
            }
        )
        .matches(
            passwordFormat,
            "Password must contain at least one uppercase letter"
        ),
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Your password do not match."),
})

export default registerSchema
