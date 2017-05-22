const React = require('react');

var Home = React.createClass({
  render:function(){
    return(
    <div className="HomePage">
      <h2>What is Barang Hilang ?</h2>
      <hr/>
      <p>Barang hilang is a web-service for everything that user post to our asset.
        The purpose is to help people whose lost their item to announce to public.
         So, the information can be centralized to this web service</p>
      <br/>
      <h2>What advantage can you get ?</h2>
      <hr/>
      <p>You can use our asset to make your own application to "HELP" whose lost their items.
      You can look for another information from the navigation bar</p>
    </div>
    );
  }
})

module.exports = Home;
