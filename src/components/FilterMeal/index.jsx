import React, { useState } from 'react';
import { useEffect } from 'react';




export default function FilterMeal() {

  const [allCategories, setAllCategories] = useState([]);
  const [allAreas, setAllAreas] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);

  const getAllCategories = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const { categories } = await response.json();
    setAllCategories(categories);
  };

  const getAllAreas = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const { meals } = await response.json();
    setAllAreas(meals);
  };

  const getAllIngredients = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const { meals } = await response.json();
    setAllIngredients(meals);
  };

  useEffect(() => {
    getAllCategories();
    getAllAreas();
    getAllIngredients();
  }, []);
  return (
    <form>
      <input type="text" />Meal:
      <select>
        {
          allCategories?.map(category => {
            return (
              <option key={category.idCategory}>{category.strCategory}</option>
            );
          })
        }
      </select>
      <select>
        {
          allAreas?.map(area => {
            return (
              <option key={area.strArea}>{area.strArea}</option>
            );
          })
        }
      </select>

      <select>
        {
          allIngredients?.map(ingredient => {
            return (
              <option key={ingredient.idIngredient}>{ingredient.strIngredient}</option>
            );
          })
        }
      </select>
    </form>);
}
