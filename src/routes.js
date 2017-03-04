import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from "react-router";
import App from "./App";
import Home from "./Home";
import Blog from "./Blog";
import Work from "./Work";
import About from "./About";

class routes extends React.Component {
  render () {
    return(
      <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
          <IndexRoute component = {Home}/>
          <Route path = "blog" component = {Blog}/>
          <Route path = "work" component = {Work}/>
          <Route path = "about" component = {About}/>
        </Route>
      </Router>
    )
  }
}

export default routes;
