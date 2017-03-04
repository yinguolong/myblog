import React from 'react';
import {Link} from "react-router";

class Footer extends React.Component {
  render () {
    return(
      <footer>
        <Link to = "/" activeStyle= {{color:"#af879a"}} onlyActiveOnIndex = {true} >
          <i className="fa fa-venus-mars" aria-hidden="true"></i><br/>主页</Link>
        <Link to = "blog" activeStyle= {{color:"#af879a"}}>
          <i className="fa fa-heartbeat" aria-hidden="true"></i><br/>home</Link>
        <Link to = "work" activeStyle= {{color:"#af879a"}}>
          <i className="fa fa-picture-o" aria-hidden="true"></i><br/>相册</Link>
        <Link to = "about" activeStyle= {{color:"#af879a"}}>
          <i className="fa fa-address-card-o" aria-hidden="true"></i><br/>home</Link>
      </footer>
    )
  }
}

export default Footer;
