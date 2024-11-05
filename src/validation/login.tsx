import * as yup from "yup"
export const loginSchema = yup.object({
    username : yup.string().min(3, "This is not a valid username").required("Name is required"),
    password : yup.string().min(6, "This is not a valid password").max(12, "This is not a valid password").required("password in required")
})


export const registorCheck = yup.object({
    username : yup.string().required("This field is required"),
    email : yup.string().email("This not vaild email").required("This field is required"),
    password : yup.string().min(6, "set minimum 6 charactor").max(12, "maximum 12 charactor only accecptable").required("This field is required"),
    confirmPassword : yup.string().oneOf([yup.ref("password")], "Password not match").required("This field is required"),
    country : yup.string().required("This field is required"),
    state : yup.string().required("This field is required"),
    dob: yup.date().typeError("This field is required").max("2024-09-10", "min").required("This field is required")
 })