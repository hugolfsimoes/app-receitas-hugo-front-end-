import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  getAllCategories,
  getAllAreas,
  getAllIngredients
} from '../../service/serviceApi';




export default function FilterMeal() {

  const [allCategories, setAllCategories] = useState([]);
  const [allAreas, setAllAreas] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);

  const getAllCategoriesApi = async () => {
    const { categories } = await getAllCategories();
    setAllCategories(categories);
  };

  const getAllAreasApi = async () => {
    const { meals } = await getAllAreas();
    setAllAreas(meals);
  };

  const getAllIngredientsApi = async () => {
    const { meals } = await getAllIngredients();
    setAllIngredients(meals);
  };

  useEffect(() => {
    getAllCategoriesApi();
    getAllAreasApi();
    getAllIngredientsApi();
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
