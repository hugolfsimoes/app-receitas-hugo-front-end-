import React, { useEffect, useState } from 'react';
import FilterMeal from '../../components/FilterMeal';
import Header from '../../components/Header';
import logo from '../../images/logo.png';

export default function MainPage() {
  const [allMeals, setAllMeals] = useState([]);

  const getAllRecipes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const { meals } = await response.json();
    setAllMeals(meals);
  };

  useEffect(() => {
    getAllRecipes();
  }, []);



  return (
    <>
      <Header />
      <FilterMeal />
      <div style={{ display: "flex", flexWrap: "wrap", width: '100%', height: "100vhs" }}>
        {
          allMeals.map(meal => {
            return (
              <div key={meal.idMeal} style={{ display: "flex", flexDirection: "column", width: "100px", height: "200px", alignItems: "center" }}>
                <img style={{ width: "80%" }} src={meal.strMealThumb} alt="Ilustrate meal" />
                <h1>{meal.strMeal}</h1>
                <p>{meal.strCategory}</p>
                <p></p>
              </div>
            );
          })
        }
      </div>
    </>
  );
}
