const React = require('react');
var Blablablablabla = "Tes git";
var About = React.createClass({
  render:function(){
    return(
    <div className="AboutPage">
      <h1>Barang Hilang</h1>
      <hr/>
      <p>Is Our Project for PLBTW</p>
      <br/>
      <h2>Who We Are ?</h2>
      <hr/>
      <p>
        <ul>
          <li>Chrysant Meike</li>
          <li>Ignatius Aldi Pradana</li>
          <li>Reo Ramalika</li>
          <li>William Yuto</li>
        </ul>
      </p>
    </div>
    );
  }
})

module.exports = About;
