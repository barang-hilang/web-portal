var React = require('react');

var Register = React.createClass({
  render: function(){
    return(
      <div className="container LoginPage">
        <h2>Register</h2>
        <hr/>
        <p>If you're developer, you can sign-up here</p>
        <form>
          <div className="form-group">
            <label for="usr">Username/Email :</label>
            <input type="text" className="form-control" id="usr"/>
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        );
      }
    });

    module.exports = Register;
