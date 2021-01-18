import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typograpy from '@material-ui/core/Typography';

 const NavBar = () => {
    return(
        <div>
            <AppBar position="static" className="menu_color" >
                <Toolbar>
                    <Typograpy variant="title" color="inherit"><h2>VisionX-Trello</h2></Typograpy>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;
