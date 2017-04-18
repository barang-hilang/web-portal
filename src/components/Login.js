var React = require('react');

var Login = React.createClass({
  render: function(){
    return(
      <div className="container LoginPage">
        <h2>Login</h2>
        <p>Login ini diperuntukkan untuk pengembang / developer yang ingin menggunakan api Barang Hilang.</p>
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

    module.exports = Login;
