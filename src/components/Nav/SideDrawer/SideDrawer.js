import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import style from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let attachedClasses = [style.SideDrawer, style.Close];
    if (props.open) {
        attachedClasses = [style.SideDrawer, style.Open];
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={style.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </>
    )
};

export default sideDrawer;