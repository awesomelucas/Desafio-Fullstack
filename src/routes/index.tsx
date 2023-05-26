import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { ProtectedRoutes } from './ProtectedRoutes';
import Cadastro from '../pages/Cadastro';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/register" element={<Cadastro />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}