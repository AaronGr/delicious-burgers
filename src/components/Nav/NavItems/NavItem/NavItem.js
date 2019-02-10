import React from 'react';

import style from './NavItem.module.css';

const navItem = (props) => {
    return (
        <li className={style.NavigationItem}>
            <a 
                href={props.link} 
                className={props.active ? style.active : null}>{props.children}</a>
        </li>    
    )
}

export default navItem;
