import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavbarComp from './Component/Functional/NavbarComp';
import HomePage from './Component/Functional/HomePage';
import AboutComp from './Component/Functional/AboutComp';
import DetailComp from './Component/Functional/DetailComp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutComp}/>
          <Route exact path="/detail/:id" component={DetailComp}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
