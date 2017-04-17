const React = require('react');
var Link = require('react-router-dom').Link;

var Home = React.createClass({
  render:function(){
    return(
      <div className="slide story" id="slide-1" data-slide="1">
        <div className="container">
          <div id="home-row-1" className="row clearfix">
            <div className="col-12">
              <h1 className="font-semibold">Barang <span className="font-thin">Hilang</span></h1>
              <h4 className="font-thin">Penyedia<span className="font-semibold"> layanan data</span> barang hilang.</h4>
              <br/>
              <br/>
            </div>
          </div>
          <div id="home-row-2" className="row clearfix">
            <div className="col-12 col-sm-4"><div className="home-hover navigation-slide" data-slide="4"><img src="images/s02.png"/></div><span>PROFESSIONAL</span></div>
            <div className="col-12 col-sm-4"><div className="home-hover navigation-slide" data-slide="3"><img src="images/s01.png"/></div><span>FRIENDLY</span></div>
            <div className="col-12 col-sm-4"><div className="home-hover navigation-slide" data-slide="5"><img src="images/s03.png"/></div><span>SUITABLE</span></div>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = Home;
