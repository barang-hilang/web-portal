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

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar/>
          <ImageBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route exact path="/login" component={Login}/>
            <Route render={function (){return <p>Not Found</p>}}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
