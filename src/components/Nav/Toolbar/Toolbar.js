import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../../Nav/NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

import style from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <header className={style.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={style.Logo}>
                <Logo />
            </div>
            <nav className={style.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
    )
}

export default toolbar;