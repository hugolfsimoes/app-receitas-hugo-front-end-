import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../../service/serviceApi';

export default function MealDetail(pops) {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);



  useEffect(() => {
    const getMealDetail = async () => {
      const { meals } = await getMealById(id);
      setMeal(meals);

      setIngredients(Object.keys(meals[0]).filter(key => key.includes('strIngredient') && meals[0][key]));
      setMeasures(Object.keys(meals[0]).filter(key => key.includes('strMeasure') && meals[0][key]));
    };
    getMealDetail();

  }, []);

  return (
    <div>
      {console.log(meal[0])}
      <h2>{meal[0]?.strMeal}</h2>
      <img src={meal[0]?.strMealThumb} alt="Meal" />
      <p>{meal[0]?.strCategory}</p>
      <p>{meal[0]?.strArea}</p>
      <ul>
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index}>{meal[0][ingredient]} - {meal[0][measures[index]]}</li>
          );
        })}
      </ul>
      <p>{meal[0]?.strInstructions}</p>

      <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://www.youtube.com/embed/${meal[0]?.strYoutube.split('v=')[1]}`}>
      </iframe>
    </div>
  );
}
