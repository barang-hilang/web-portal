var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

var Navbar = React.createClass({
  render: function(){
    return (
      <div className="navbar">
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">
             <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
               </button>
               <a className="navbar-brand" href="#">Barang Hilang</a>
             </div>

             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav">
                 <li><NavLink exact to="/">Home</NavLink></li>
                 <li><NavLink to="/about">About</NavLink></li>
               </ul>
             </div>
           </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports=Navbar;
