import React, { Component } from 'react';
<<<<<<< HEAD

import { Switch, Route,Redirect } from "react-router-dom";
import "./styles.css";
import _ from "lodash";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import NavBar from "./components/NavBar";
import TrelloBoard from "./components/TrelloBoard";
import Home from './components/Home';
=======
import { Switch, Route,Redirect } from "react-router-dom";
import "./components/Home/Home";
import _ from "lodash";
import NavBar from "./components/Home/NavBar";
import Home from './components/Home/Home';
>>>>>>> 9884584 (2nd commit)


function App() {
  
  return (
  
      <div>
        <NavBar/>
        <Switch>
<<<<<<< HEAD
            <Route path="/boards/:boardID" component={TrelloBoard} />
        
            <Route path="/home" component={Home} />
=======
            
        
            <Route path="/Home" component={Home} />
>>>>>>> 9884584 (2nd commit)
            <Redirect from="/" to="/home" />
          </Switch>
       
      </div>
  
  

    );
}

export default App;
