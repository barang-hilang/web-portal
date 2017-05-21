var React = require('react');
var TypeWriter = require('react-typewriter');

var ImageSrc=[
  'images/bg1.jpg',
  'images/bg2.jpg'
];

var ImageBar = React.createClass({
  getInitialState: function(){
    return{
      "page":this.props.page
    };
  },

  render: function(){
    var ImageBarStyle;
    if(this.state.page==="Home")
      ImageBarStyle={
        backgroundImage: "url(" + ImageSrc[0] + ")",
         color: 'gray',
      };
    else if(this.state.page==="About")
      ImageBarStyle={
        backgroundImage: "url(" + ImageSrc[1] + ")",
         color: 'white',
      };
    if(this.state.page==="Home")
    return(
      <div className="ImageBar" style={ImageBarStyle}>
          <TypeWriter typing={0.8} onTypingEnd reset><h1>Welcome to Barang Hilang WebService</h1></TypeWriter>
      </div>
    );
    else if(this.state.page==="About")
    return(
      <div className="ImageBar" style={ImageBarStyle}>
          <TypeWriter typing={0.8} onTypingEnd reset><h1>This is our information of Barang Hilang</h1></TypeWriter>
      </div>
    );
  }
});

module.exports=ImageBar;
