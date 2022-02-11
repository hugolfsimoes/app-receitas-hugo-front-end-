import axios from 'axios';

const ALL_MEALS_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ALL_MEALS_CATEGORIES_API = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const ALL_MEALS_AREAS_API = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const ALL_MEALS_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const GET_MEAL_BY_ID = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";


export const getAllMeals = async () => {
  const { data } = await axios.get(ALL_MEALS_API);
  return data;
};
export const getAllCategories = async () => {
  const { data } = await axios.get(ALL_MEALS_CATEGORIES_API);
  return data;
};
export const getAllAreas = async () => {
  const { data } = await axios.get(ALL_MEALS_AREAS_API);
  return data;
};
export const getAllIngredients = async () => {
  const { data } = await axios.get(ALL_MEALS_INGREDIENTS);
  return data;
};

export const getMealById = async (mealId) => {
  const { data } = await axios.get(`${GET_MEAL_BY_ID}${mealId}`);
  return data;
};