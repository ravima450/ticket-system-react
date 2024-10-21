import logo from './logo.svg';
import './App.css';
import { Login } from './pages/auth/login/login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Register } from './pages/auth/registor/registor';
import Protected from './components/protectedRoute';
import Dashboard from './pages/main/dashboard/dashboard';


function App() {
  return (
    <div>

      <Routes>
        <Route  path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="*" element={<Navigate to='/login' />}/>
        <Route path='dashboard' element={
          <Protected>
                  <Dashboard/>
          </Protected>
        } />
      </Routes>
      
    </div>
  );
}

export default App;
