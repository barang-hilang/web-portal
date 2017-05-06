var React = require('react');
var axios = require('axios');
// var {  isLogged,
//   getUser,
//   login,
//   logout} = require('./lib/Auth.js');

const API_BARANG_HILANG_PATH = 'http://127.0.0.1:8080/api/v1/';

class AuthLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password:''};
    this.loginCek = this.loginCek.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.password);
    event.preventDefault();
  }

  loginCek(event){
    //agar bisa akses beda port, event normal/default dibatalkan
    event.preventDefault();

    axios.post('http://localhost:8080/api/v1/developers/auth',{
      headers:{
        'Content-Type' : 'application/json'
      },
      email : this.state.email,
      password : this.state.password
    })
    .then(function(res){
      console.log(res.data);
        if(res.data.httpStatus==="FOUND"){
          alert("Success Login");
          // this.setState({email:"ketemu"})
        }
        else {
          alert("Failed");
          // this.setState({email:"ga ada"})
        }
      })
    .catch(function(e) {
      console.log(e.message);
      console.log(e.code); // Not always specified
      console.log(e.config); // The config that was used to make the request
      console.log(e.response); // Only available if response was received from the server
        alert("Error");
        // this.setState({email:"error"})
    })

  }


  render() {
    return(
      <div className="container LoginPage">
        <h2>Login</h2>
        <hr/>
        <p>If you're developer, you can login here</p>
        <form onSubmit={this.loginCek}>

          <div className="form-group">
            <label>Username/Email :</label>
            <input type="text" className="form-control" id="usr"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" id="pwd"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
            </form>
      </div>
        );
      }
    }

  module.exports = AuthLogin;
