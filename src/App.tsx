import logo from './logo.svg';
import './App.css';
import { Login } from './pages/auth/login/login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Register } from './pages/auth/register/register';
import Protected from './components/protectedRoute';
import Dashboard from './pages/main/dashboard/dashboard';
import ThemeProvider from './themeProvider';
import Navbar from './pages/main/top-navbar/topNavbar'
import UserIndex from './pages/main/User/userCreate'

function App() {

  return (
    
    <ThemeProvider>
      <Routes>
        <Route  path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="*" element={<Navigate to='/login' />}/>
        <Route path='dashboard' element={
          <Protected>
            <Navbar>
                  <Dashboard/>
            </Navbar>
          </Protected>
        } />
         <Route path='users' element={
          <Protected>
            <Navbar>
                  <UserIndex/>
            </Navbar>
          </Protected>
        } />
      </Routes>
      </ThemeProvider>
      
    
    
  );
}

export default App;
