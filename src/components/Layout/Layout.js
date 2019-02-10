import React from 'react';

import Toolbar from '../Nav/Toolbar/Toolbar';
import './Layout.css';

const layout = (props) => (
    <>
    <Toolbar />
    <main className="Content">
        {props.children}
    </main>
    </>
);

export default layout;