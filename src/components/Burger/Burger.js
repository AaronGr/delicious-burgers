import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient.js/BurgerIngredient';

const burger = (props) => {
    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="lettuce" />
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
};

export default burger;