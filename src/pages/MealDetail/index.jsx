import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { getMealById } from '../../service/serviceApi';
import './style.css';
import Footer from '../../components/Footer';

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
    <main>
      <Header />
      <div className='container-details'>
        <div className='meal-info'>
          <h2 className='meal-title'>{meal[0]?.strMeal}</h2>
          <img src={meal[0]?.strMealThumb} alt="Meal" className='meal-image' />
          <div>
            <p>Category: {meal[0]?.strCategory}</p>
            <p>Area: {meal[0]?.strArea}</p>
          </div>
        </div>
        <div className='container-prepare'>

          <div className='container-ingredient-video'>
            <div>
              <h3>Ingredients</h3>
              <ul>
                {ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>{meal[0][ingredient]} - {meal[0][measures[index]]}</li>
                  );
                })}
              </ul>
            </div>
            <iframe className='video'
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={`https://www.youtube.com/embed/${meal[0]?.strYoutube.split('v=')[1]}`}>
            </iframe>
          </div>

          <h3>Preparation</h3>
          <p>{meal[0]?.strInstructions}</p>
        </div>

      </div>
      <Footer />
    </main>
  );
}
