
import { ChangeEvent, FormEvent, useState } from 'react'
import '../login/login.css';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import countriesData from '../../../constants/countryandState';
import './register.css'
import { registorCheck } from '../../../validation/login'

class registor {
    username: string = ''
    email: string = ''
    password: string = ''
    confirmPassword: string = ''
    country: string = ''
    state: string = ''
    dob: string = ''
}
class stateList {
    name?: string
    value?: string
}


export function Register() {

    const Navigate = useNavigate()


    const login = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await registorCheck.validate(registorform, { abortEarly: false })
            setErrors(defaultValue)
            alert("Form Submited successfully")
            
        } catch (error: any) {
            let errorthrow: any = {}
            error.inner.forEach((err: any) => {
                errorthrow[err.path] = err.message
            })
            setErrors(errorthrow)
        }
    }



    const defaultValue = new registor()
    const [registorform, updateRegistorform] = useState<registor>(defaultValue);
    const [errors, setErrors] = useState<registor | null>(null);
    const [statesList, setStatesList] = useState<stateList[] | null>(null)

    const statelistUpdate = (val: string) => {
        let dd = countryList.filter(res => res.value == val)[0]?.states
        setStatesList(dd)
        updateRegistorform(a => { return { ...a, state: '' } })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // const fieldvalue = e.target.value;
        name == 'country' && statelistUpdate(value)
        console.log(name)
        updateRegistorform((a: registor) => {
            setErrors(defaultValue)
            return { ...a, [name]: value }
        })
    }
    const countryList = countriesData



    return <>
        <div className="bg">
            <div>
            <div className="input_card glass_effect">
                <div className="font-bold text-2xl  text-center text-white	mb-7">Create a Account</div>
                <form onSubmit={login}>
                    <div className="relative">
                        <input
                            value={registorform.username}
                            onChange={handleChange}
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Username"
                            className=" mt-8block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-10  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                        />
                        {errors?.username && <div className="form_error">{errors.username}</div>}
                    </div>
                    
                    <div className='grid grid-cols-1 gap-2'>
                        
                            <div className="relative">
                                <input
                                    value={registorform.email}
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    className=" mt-8 block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-10  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                                />
                                {errors?.email && <div className="form_error">{errors.email}</div>}
                            </div>
                            
                        
                            <div className="relative">
                                <input
                                    value={registorform.dob}
                                    onChange={handleChange}
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    id="dob"
                                    name="dob"
                                    max="2023-12-30"
                                    type="text"
                                    placeholder="Date of Birth"
                                    className=" mt-8 block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-10  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                                />
                                {errors?.dob && <div className="form_error">{errors.dob}</div>}
                            </div>
                            
                        
                    


                    <div className="relative">
                        <select
                            value={registorform.country}
                            onChange={handleChange}
                            id="country"
                            name="country"
                            className=" mt-8 block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-10  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2  focus:white-600 sm:text-sm sm:leading-6">
                            <option value="" disabled>Select a Country</option>
                            {countryList.map(res => {
                                return <option value={res.value} key={res.value}>{res.value}</option>
                            })}
                        </select>
                        {errors?.country && <div className="form_error">{errors?.country}</div>}
                    </div>
                    

                    <div className="relative">
                        <select
                            value={registorform.state}
                            onChange={handleChange}
                            id="state"
                            name="state"
                            className="mt-8 block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-10  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2  focus:white-600 sm:text-sm sm:leading-6">
                            <option value="" disabled>Select a State</option>
                            {statesList && statesList.map(res => {
                                return <option value={res.value} key={res.value}>{res.name}</option>
                            })}
                        </select>
                        {errors?.state && <div className="form_error">{errors.state}</div>}
                    </div>
                    </div>
                    

                    <div className="relative">
                        <input
                            value={registorform.password}
                            onChange={handleChange}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="password"
                            className="mt-8 block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-10  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                        />
                    {errors?.password && <div className="form_error">{errors.password}</div>}
                    </div>
                    <div className="relative">
                        <input
                            value={registorform.confirmPassword}
                            onChange={handleChange}
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="confirmPassword"
                            className="mt-8 block w-full rounded-full border-0 bg-transparent py-1.5 pl-4 pr-10  text-white ring-1 ring-inset ring-gray-300 placeholder:text-[#ffffffba] focus:ring-2 focus:ring-transparent focus:white-600 sm:text-sm sm:leading-6"
                        />
                        {errors?.confirmPassword && <div className="form_error">{errors.confirmPassword}</div>}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <button type="submit" className="focus:outline-none w-full text-gray-950 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-500 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>
                    </div>
                    <div className='text-end'>
                    <button type='button' className='underline  decoration-1 text-underline text-sm text-white' onClick={() => Navigate('/login')}>Go to login</button>
                    </div>
                </form>

            </div>
            </div>
        </div>
    </>

}