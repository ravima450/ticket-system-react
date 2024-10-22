import * as yup from "yup"
export const loginSchema = yup.object({
    username : yup.string().min(3, "This is not a valid username").required("Name is required"),
    password : yup.string().min(6, "This is not a valid password").max(12, "This is not a valid password").required("password in required")
})
