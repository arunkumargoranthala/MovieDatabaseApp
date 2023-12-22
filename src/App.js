/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import PopularMovies from './PopularMovies';
import TopRated from './TopRated';
import Upcomming from './Upcomming';

const App = () => (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={PopularMovies} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/upcoming" component={Upcomming} />
      </Switch>
    </Router>
  );

export default App;
