import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Home from "./Pages/Home";
import DetailView from "./Pages/DetailView";
import PageNotFound from "./Pages/PageNotFound";
import TvShows from "./Pages/TvShows";
import Movies from "./Pages/Movies";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tvshows" component={TvShows} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movie/:movieId" component={DetailView} />
        <Route exact path="/tvshow/:tvshowId" component={DetailView} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
