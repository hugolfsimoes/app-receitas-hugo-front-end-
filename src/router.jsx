import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Register from './pages/Register';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/" element={ <MainPage /> } />
      </Routes>
    </BrowserRouter>
  );
};