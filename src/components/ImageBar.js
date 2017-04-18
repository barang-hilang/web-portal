var React = require('react');

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
    return(
      <div className="ImageBar" style={ImageBarStyle}>
        <h1>{this.state.page}</h1>
      </div>
    );
  }
});

module.exports=ImageBar;
