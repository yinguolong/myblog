import React from 'react';
import {Link} from "react-router";

class Leftnav extends React.Component {
  render () {
    return(
      <div className = "leftnav">
        <h1>我的{this.props.title}</h1>
        <Link to = "/" activeStyle= {{backgroundColor:"rgba(0,0,0,0.5)"}} onlyActiveOnIndex = {true} >
          <i className="fa fa-venus-mars" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;主页</Link>
        <Link to = "blog" activeStyle= {{backgroundColor:"rgba(0,0,0,0.5)"}}>
          <i className="fa fa-heartbeat" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;home</Link>
        <Link to = "work" activeStyle= {{backgroundColor:"rgba(0,0,0,0.5)"}}>
          <i className="fa fa-picture-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;相册</Link>
        <Link to = "about" activeStyle= {{backgroundColor:"rgba(0,0,0,0.5)"}}>
          <i className="fa fa-address-card-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;home</Link>
      </div>
    )
  }
}

export default Leftnav;
