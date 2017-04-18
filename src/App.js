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

var ApiPage = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI/>
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
            <Route path='/api' component={ApiPage}/>
            <Route exact path="/login" component={Login}/>
            <Route render={function (){return <p>Not Found</p>}}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
