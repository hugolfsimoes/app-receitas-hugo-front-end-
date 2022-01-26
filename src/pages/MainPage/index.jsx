import React from 'react';
import logo from '../../images/logo.png';

export default function MainPage() {


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
