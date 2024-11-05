import React, { ChangeEvent, FormEvent, useContext, useState } from "react"
import purpleImage from '../../../assets/images/3d-purple.jpg';
import './login.css';
import {useNavigate} from "react-router-dom"
import * as yup from "yup"
import {loginSchema} from '../../../validation/login'
import { ThemeContext } from "../../../context/ThemeContext";
export function Login() {

    const Navigate = useNavigate()
    const {theme, toggleTheme} = useContext(ThemeContext)

    const defaultModel = { username : '', password : '' }

     const [formData, setFormData] = useState(defaultModel)
     const [loginError, setError] = useState(defaultModel)


    const login = async (e:FormEvent)=>{
        e.preventDefault()
        try{
            await loginSchema.validate(formData, {abortEarly: false})
            setError(defaultModel)
            if(await loginSchema.isValid(formData)){
                alert("sd")
            }
        }catch(error:any){
            const newError:any={}
            console.log(error)
            error.inner.forEach((err:any)=>{
                newError[err.path] = err.message
            })
            console.log(newError)

            setError(newError)
            console.log(loginError)
        }
        
    }
    const updateValue = (e:ChangeEvent<HTMLInputElement>)=>{
        setError(defaultModel)
        let fieldname = e.target.name
        let fieldValue = e.target.value        
        setFormData(a=> {            
            return {...a, [fieldname] : fieldValue}
        })
    }
    const registerPage = ()=>{
        Navigate('/register')
    }

    return <>
        <div className="bg">
            {theme}
            <button  type="button" onClick={toggleTheme}> {theme}</button>
            <div className="input_card glass_effect">
                <div className="font-bold text-2xl  text-center text-white	">Login</div>
                <form  onSubmit={login}>
                <div className="mt-8 relative">
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-white sm:text-sm "><i className="fa fa-user"></i></span>
                    </div>
                    <input
                    onChange={updateValue}
                    value={formData.username}
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-20  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                    />
                </div>
                {loginError.username && <div className="form_error">{loginError.username}</div>}
                <div className="mt-8 relative">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <span className="text-white sm:text-sm "><i className="fa fa-lock"></i></span>
                    </div>
        
                    <input
                     onChange={updateValue}
                     value={formData.password}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        className="block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-20  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                    />
                </div>
                {loginError.password && <div className="form_error">{loginError.password}</div>}
                <div className="mt-8 text-center">
                    <button type="submit" className="focus:outline-none w-full text-gray-950 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-500 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>
                </div>
                <div className='text-end'>
                    <button type='button' className='underline  decoration-1 text-underline text-sm text-white' onClick={registerPage}>Create a new account</button>
                    </div>
                </form>

            </div>
        </div>
    </>
}