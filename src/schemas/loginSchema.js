import * as Yup from "yup"

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    password: Yup.string().required("password is required"),
})

export default loginSchema
