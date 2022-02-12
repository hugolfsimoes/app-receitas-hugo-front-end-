import React, { useEffect, useState } from 'react';
import FilterMeal from '../../components/FilterMeal';
import Header from '../../components/Header';
import MealsBoard from '../../components/MealsBoard';

export default function MainPage() {

  return (
    <>
      <Header />
      <MealsBoard />
    </>
  );
}
