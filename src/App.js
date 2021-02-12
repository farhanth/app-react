import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavbarComp from './Component/Functional/NavbarComp';
import HomePage from './Component/Functional/HomePage';
import AboutComp from './Component/Functional/AboutComp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutComp}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
