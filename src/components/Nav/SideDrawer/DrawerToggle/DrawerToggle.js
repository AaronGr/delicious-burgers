import React from 'react';

import style from './DrawerToggle.module.css';

const drawerToggle = (props) => {
  return (
    // CSS file styles each div
      <div className={style.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}

export default drawerToggle;
