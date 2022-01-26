import React, { useEffect } from 'react';
import logo from '../../images/logo.png';

export default function MainPage() {

  const getAllRecipes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const allRecipes = await response.json();
    console.log(allRecipes);
  };

  useEffect(() => {
    getAllRecipes();

  }, []);



  return (
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src={ logo } width="112" height="28" alt='logo recipe app' />
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Name
          </a>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
