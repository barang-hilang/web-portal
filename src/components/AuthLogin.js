var React = require('react');
var Redirect = require('react-router');
var axios = require('axios');
var auth = require('./lib/Auth.js');
var App = require('../App.js');
import { browserHistory } from 'react-router';
import Pace from 'react-pace-progress'
import swal from 'sweetalert2'

class AuthLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      authenticated: false,
      isLoading:false
    };

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
    this.setState({isLoading:true});

    axios.post('http://localhost:8080/api/v1/developers/auth',{
      headers:{
        'Content-Type' : 'application/json'
      },
      email : this.state.email,
      password : this.state.password
    })
    .then((res)=>{
      this.setState({isLoading: false})

      console.log(res.data);
      console.log(res.data.result[0].idDeveloper);

        if(res.data.httpStatus==="FOUND"){
          alert("Success Login");
          this.state.authenticated=true;

          localStorage.setItem('authenticated',res.data.result[0].email);
          alert(localStorage.getItem('authenticated'));
          console.log(localStorage.getItem('authenticated'));

          window.location="http://localhost:3000/";
        }
        else {
          alert("Failed");
        }
      })
    .catch((e) => {
      this.setState({isLoading: false})
      console.log(e.message);
      console.log(e.code);
      console.log(e.config);
      console.log(e.response);
        alert("Error");
    });
  }

  render() {
    if(localStorage.getItem('authenticated')==-1){
    return(
      <div className="container LoginPage">

        <h2>Login</h2>
        <hr/>
        <p>If you're developer, you can login here</p>
        <form onSubmit={this.loginCek.bind(this)}>

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
            <br/>
            <br/>
            <br/>
              {this.state.isLoading ? <Pace color="#7f7fff"/> : null}
              <hr/>
      </div>
        );
      }
      else if(localStorage.getItem('authenticated')!=-1){
        return(
          <div>
            <h2>You already logged in</h2>
          </div>
        );
      }
      }
    }

  module.exports = AuthLogin;
