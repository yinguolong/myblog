import React from 'react';
import axios from "axios";
import {Link} from "react-router";

class Blog extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/yinguolong/myblog/master/blogs/blogs.json")
    .then( res => this.setState({data:res.data}))
  }
  render () {
    return(
      <div style = {{width:"100%"}}>
        {this.state.data.length==0 ? "等等我马上就好" : this.state.data.map((item,i) =>
        <div key={i} className = "card">
          <div className = "blog-index">{i}</div>
          <div className = "blog-desc">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <Link to={`post/${item.url}`}>阅读更多</Link>
            <span>{item.date}</span>
          </div>
        </div>
      )}
      </div>
    )
  }
}

export default Blog;
