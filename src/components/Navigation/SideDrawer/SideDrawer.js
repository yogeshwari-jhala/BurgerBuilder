import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';
import './SideDrawer.css';
const SideDrawer = (props) => {
    return (
        
    <Auxi>
        <Backdrop show/>
        <div className="SideDrawer">
                    <Logo height="11%"/>
                <nav>
                    <NavigationItems/>
                </nav>
        </div>
    </Auxi>
    );
};
export default SideDrawer;