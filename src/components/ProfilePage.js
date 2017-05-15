var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class ProfilePage extends React.Component {
  render() {
    if(localStorage.getItem('authenticated')!=-1){
      return(
        <div className="container profilPage">
          <h2>Your Profile</h2>
          <hr/>
        </div>
      );
    }
    else{
      return(
        <div className="NotFound">
          <h1>403</h1>
          <hr/>
          <h1>You Are Not Logged In</h1>
          <hr/>
          <h3>Im Sorry, your looking page are not available. Please Login First</h3>
        </div>
      );
    }
  }
}

module.exports = ProfilePage;
