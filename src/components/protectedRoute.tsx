import { Navigate } from "react-router-dom"
import Dashboard from "../pages/main/dashboard/dashboard";

const Protected = ({children}:any)=>{
    let userLogin = localStorage.getItem('userLogin')
console.log(userLogin)
    return userLogin ?  children : <Navigate to='/login'/>;
}

export default Protected