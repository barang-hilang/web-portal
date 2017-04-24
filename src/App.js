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
var Register = require('./components/Register.js');
var SideBarAPI = require('./components/ApiPage/SideBar.js');
var ContentAPI = require('./components/ApiPage/Content.js');

var HomeRoute = React.createClass({
  render: function(){
    return(
      <div>
        <ImageBar page="Home"/>
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
        <ImageBar page="About"/>
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
            <Route path='/doc/api/home' component={ApiPageHome}/>
            <Route path='/doc/api/users' component={ApiPageUsers}/>
            <Route path='/doc/api/barang' component={ApiPageBarang}/>
            <Route path='/doc/api/pelaporan' component={ApiPagePelaporan}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route render={function (){return <div className="NotFound"><h1>404</h1><hr/><h1>Not Found</h1><hr/><h3>I'm Sorry, your looking page are not available.</h3></div>}}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
