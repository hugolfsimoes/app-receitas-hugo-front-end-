import React, { useEffect, useState } from 'react';
import { getAllMeals, getMealById } from '../../service/serviceApi';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function MealsBoard() {
  const navigate = useNavigate();
  const [allMeals, setAllMeals] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    if (!token) {
      navigate('/login');
    }
    const getMealsApi = async () => {
      const { meals } = await getAllMeals();
      setAllMeals(meals);
    };
    getMealsApi();
  }, []);

  const handleClickMeal = async (idMeal) => {
    navigate(`/detail/${idMeal}`);
  };

  return (
    <div className='board'>
      {
        allMeals?.map(meal => {
          return (
            <div key={meal.idMeal} className='meal-card' onClick={() => handleClickMeal(meal.idMeal)}>
              <img className='meal-img' src={meal.strMealThumb} alt="Ilustrate meal" />
              <h1>{meal.strMeal}</h1>
              <p>Category: {meal.strCategory}</p>
              <p></p>
            </div>
          );
        })
      }
    </div>
  );
}
