//jshint esversion: 6
import React from "react";
import Header from "./Header/Header.jsx";
import "../App.css";
import SimpleBottomNavigation from "./MainNav.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Trending from "../Pages/Trending/Trending.jsx";
import Movies from "../Pages/Movies/Movies.jsx";
import Series from "../Pages/Series/Series.jsx";
import Search from "../Pages/Search/Search.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" exact component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
};
export default App;
