import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./components/Home.js');
var About = require('./components/About.js');
var Navbar = require('./components/Navbar.js');
var ImageBar = require('./components/ImageBar.js');
var Footer = require('./components/Footer.js');
var Login = require('./components/Login.js');
var SideBarAPI = require('./components/ApiPage/SideBar.js');
var ContentAPI = require('./components/ApiPage/Content.js');

var HomeRoute = React.createClass({
  render: function(){
    return(
      <div>
        <ImageBar/>
        <Home/>
        <Footer/>
      </div>
    );
  }
});

var AboutRoute = React.createClass({
  render: function(){
    return(
      <div>
        <ImageBar/>
        <About/>
        <Footer/>
      </div>
    );
  }
});

var ApiPageHome = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI value="home"/>
      </div>
    );
  }
});

var ApiPageUsers = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI value="users"/>
      </div>
    );
  }
});

var ApiPageBarang = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI value="barang"/>
      </div>
    );
  }
});

var ApiPagePelaporan = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI value="pelaporan"/>
      </div>
    );
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={HomeRoute}/>
            <Route path='/about' component={AboutRoute}/>
            <Route path='/api/home' component={ApiPageHome}/>
            <Route path='/api/users' component={ApiPageUsers}/>
            <Route path='/api/barang' component={ApiPageBarang}/>
            <Route path='/api/pelaporan' component={ApiPagePelaporan}/>
            <Route exact path="/login" component={Login}/>
            <Route render={function (){return <h1>Not Found</h1>}}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
