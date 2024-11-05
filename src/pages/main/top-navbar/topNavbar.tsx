import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { Switch } from "@mui/material"
import logo from "../../../assets/images/logo.png"
import { Link, Routes } from "react-router-dom"




export default function Navbar({children}:any){

    const {theme, toggleTheme} = useContext(ThemeContext)
    
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', current: true },
        { name: 'Users', href: '/users', current: true },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
      ]
      
      return <>
      
      <nav className={"w-full " + (theme == 'light' ? 'bg-slate-200 text-black' : 'bg-slate-900 text-white')}>
        <div className="flex justify-between">
            <div className="flex">
                <div>
        <img style={{width: '50px'}} src={logo} alt="logo" />
        </div>
            <div>
            <ul className="p-3"> 
            
            {navigation.map((res, index)=> (
                res.current && <li key={index} className="inline p-3">
                    <Link to={res.href}>{res.name}</Link>
                </li>
))}
           
        </ul>
            </div>
            </div>
            <div>
            <Switch onChange={toggleTheme}  defaultChecked   inputProps={{ 'aria-label': 'Theme' }} />
            <label className="capitalize" >{theme}</label>
            </div>
        </div>
      </nav>
      {children}
      </>
    }