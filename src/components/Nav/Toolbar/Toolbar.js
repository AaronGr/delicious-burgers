import React from 'react';
import Logo from '../../Logo/Logo'

import style from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={style.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    )
}

export default toolbar;