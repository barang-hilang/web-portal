var React = require('react');
var axios = require('axios');
import Pace from 'react-pace-progress'

class Register  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password:'',isLoading:false};

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
    axios.post('https://barang-hilang.azurewebsites.net/api/v1/developers/',{
      headers:{
        'Content-Type' : 'application/json'
      },
      idrole: 2,
      email : this.state.email,
      password : this.state.password
    })
    .then((res)=>{
      console.log(res.data);
      this.setState({isLoading:false});
        if(res.data.message==="Developer Has Been Created"){
          alert("Success Daftar");
        }
        else {
          alert("Failed");

        }
      })
    .catch((e)=>{
      this.setState({isLoading:false});
      console.log(e.message);
      console.log(e.code);
      console.log(e.config);
      console.log(e.response);
        alert("Error");
    });

  }

  render(){
    return(
      <div className="container RegisterPage">
        <br/>
        <br/>
        <h2>Register for free</h2>
        <hr/>
        <p>If you're developer, you can sign-up here</p>
        <br/>
        <form onSubmit={this.loginCek.bind(this)}>
          <div className="form-group">
            <label for="usr">Email :</label>
            <input type="email" className="form-control" id="usr"
              data-error="Sorry, that email address is invalid"
              required
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd"
              data-minlength="6"
              required
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className="form-group">
            <label for="plan">Select Plan:</label>
            <select className="form-control" id="sel1">
              <option>Free</option>
              <option>Member (Not yet)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-warning">Sign-Up / Register</button>
        </form>
        <br/>
          {this.state.isLoading ? <Pace color="#7f7fff"/> : null}
        <hr/>
      </div>
    );
  }
};

module.exports = Register;
