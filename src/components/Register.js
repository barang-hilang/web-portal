var React = require('react');
var axios = require('axios');

class Register  extends React.Component {
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

    axios.post('http://localhost:8080/api/v1/developers/',{
      headers:{
        'Content-Type' : 'application/json'
      },
      idrole: 2,
      email : this.state.email,
      password : this.state.password
    })
    .then((res)=>{
      console.log(res.data);

        if(res.data.message==="Developer Has Been Created"){
          alert("Success Daftar");
        }
        else {
          alert("Failed");

        }
      })
    .catch(function(e) {
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
        <h2>Register for free</h2>
        <hr/>
        <p>If you're developer, you can sign-up here</p>
        <form onSubmit={this.loginCek.bind(this)}>
          <div className="form-group">
            <label for="usr">Username/Email :</label>
            <input type="text" className="form-control" id="usr"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
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
};

module.exports = Register;
