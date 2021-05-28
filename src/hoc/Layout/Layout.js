import React, { Component } from 'react';
import Auxi from '../Auxi/Auxi';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';

class Layout extends Component{
    state={
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () =>{
        this.setState({showSideDrawer: false})
    };
    sideDrawerToggleHandler =() =>{
        this.setState((prevState) =>{
                return {showSideDrawer: !prevState.showSideDrawer};
        })
    }
    render(){
        return(
            <Auxi>
                 <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/> 
                 <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className="Content">
                     {this.props.children}
                </main>
            </Auxi>
        )
    }
}
export default Layout;