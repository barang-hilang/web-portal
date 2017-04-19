var React = require('react');

var Register = React.createClass({
  render: function(){
    return(
      <div className="container RegisterPage">
        <h2>Register for free</h2>
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
          <div className="form-group">
            <label for="plan">Select Plan:</label>
            <select className="form-control" id="sel1">
              <option>Free</option>
              <option>Member</option>
            </select>
          </div>
          <button type="submit" className="btn btn-warning">Sign-Up / Register</button>
        </form>
        <br/>
        <hr/>
        <h2>Notes for developer</h2>
        <p>This WebService are free, but for free developers, there are limiation :</p>
        <ul>
          <li>Api Call rate : max 50 call/min.</li>
        </ul>
        <p>Soon we will add membership / donation for premium member that will provides no limitation for api request</p>
        <hr/>
      </div>
    );
  }
});

module.exports = Register;
