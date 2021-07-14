import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Notes from './components/pages/Notes/Notes'
import Costs from './components/pages/Costs/Costs'

function App() {
  return (
      <>
          <Router>
              <Navbar/>
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/notes' exact component={Notes}/>
                  <Route path='/costs' exact component={Costs}/>
              </Switch>
          </Router>

          </>
  );
}

export default App;