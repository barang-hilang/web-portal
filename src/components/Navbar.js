var React = require('react');
var NavLink = require('react-router-dom').NavLink;

var Navbar = React.createClass({
  render: function(){
    return (
      <div className="navbar">
        <nav className="navbar navbar-default navbar-fixed-top">
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
                <li><NavLink to="/doc/api/home">API</NavLink></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink exact to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
              </ul>
              {/* <form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                    <button type="submit" className="btn btn-default">Cari</button>
                </div>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports=Navbar;
