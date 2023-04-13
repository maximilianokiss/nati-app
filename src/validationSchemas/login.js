import * as yup from "yup"

export const loginValidationschema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required("Email is required"),
    password: yup
        .string()
        .min(5, 'Too short!')
        .max(100, 'Too long!')
        .required("Password is required")
})