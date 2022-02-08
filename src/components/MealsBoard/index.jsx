import React, { useEffect, useState } from 'react';
import { getAllMeals } from '../../service/serviceApi';
import './style.css';

export default function MealsBoard() {
  const [allMeals, setAllMeals] = useState([]);

  /* const getAllRecipes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const { meals } = await response.json();
    setAllMeals(meals);
  }; */

  useEffect(() => {
    const getMealsApi = async () => {
      const { meals } = await getAllMeals();
      setAllMeals(meals);
    };
    getMealsApi();
  }, []);

  return (
    <div className='board'>
      {
        allMeals?.map(meal => {
          return (
            <div key={meal.idMeal} className='meal-card'>
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
