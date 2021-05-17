import React from 'react';
import Auxi from '../../hoc/Auxi';
import './Layout.css';
const Layout = (props) => (
    <Auxi>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className="Content">
        {props.children}
    </main>
    </Auxi>
);
export default Layout;