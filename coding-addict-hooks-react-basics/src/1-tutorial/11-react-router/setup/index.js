import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';

//NavBar
import Navbar from './Navbar';

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/about">
          <Navbar />
          <About />
        </Route>
        <Route path="/people">
          <Navbar />
          <People />
        </Route>
        <Route path="/person/:id">
          <Person />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default Index;
