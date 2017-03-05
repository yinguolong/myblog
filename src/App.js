import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Leftnav from "./Leftnav";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showLeftNav: false,
      title:"主页"
    }
  }
  componentWillMount(){
    this.setLeftNav();
    window.onresize = this.setLeftNav.bind(this)  //触发屏幕大小变化事件 onresize
    this.setTitle();
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title: this.props.router.isActive("/",true) ? "主页" :
            this.props.router.isActive("blog") ? "博客" :
            this.props.router.isActive("work") ? "工作" :
            this.props.router.isActive("about") ? "关于" : "文章"
    })
  }
  setLeftNav(){
    this.setState({showLeftNav:window.innerWidth>750 ? true : false})  //判断屏幕多大时改变布局
  }
  render () {
    console.log(this.state.title)
    return(
      <div className = "root">
        {this.state.showLeftNav ? <Leftnav title = {this.state.title}/> : <Header title = {this.state.title}/>}
        <div className = "mywrap">
          {this.props.children}
        </div>
        {this.state.showLeftNav ? null : <Footer />}
      </div>
    )
  }
}

export default App;
