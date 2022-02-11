import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import MealDetail from './pages/MealDetail';
import Register from './pages/Register';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<MealDetail />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};