import React from 'react';

import NavItem from './NavItem/NavItem';
import style from './NavItems.module.css';

const navItems = (props) => {
    return (
        <ul className={style.NavigationItems}>
            <NavItem link="/" active>Burger Builder</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>
    )
};

export default navItems;