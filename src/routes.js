import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from "react-router";
import App from "./App";
import Home from "./Home";
import Blog from "./Blog";
import Work from "./Work";
import About from "./About";
import Post from "./Post";

class routes extends React.Component {
  render () {
    return(
      <Router history = {hashHistory}>
        <Route path = "/" component = {App}>
          <IndexRoute component = {Home}/>
          <Route path = "blog" component = {Blog}/>
          <Route path = "work" component = {Work}/>
          <Route path = "about" component = {About}/>
          <Route path = "post/:title" component = {Post}/>
        </Route>
      </Router>
    )
  }
}

export default routes;
