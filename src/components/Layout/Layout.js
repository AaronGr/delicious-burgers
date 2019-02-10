import React, {Component} from 'react';

import Toolbar from '../Nav/Toolbar/Toolbar';
import SideDrawer from '../Nav/SideDrawer/SideDrawer';

import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {    
    // When depends on old state
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (  
            <>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
            <main className="Content">
                {this.props.children}
            </main>
            </>
        )
    }   
};

export default Layout;