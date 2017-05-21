var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var axios = require('axios');
import Pace from 'react-pace-progress'

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      status:'',
      apiKey:'',
      totalReq:'',
      isLoading: false
    };

    this.getDataProfile = this.getDataProfile.bind(this);
  }

  getDataProfile(){
    this.setState({isLoading: true})
    axios.get('http://localhost:8080/api/v1/developers/find/'+localStorage.getItem("idDeveloper"),{
      headers:{
        'Content-Type' : 'application/json',
        'apiKey':localStorage.getItem('apiKey')
      },
    })
    .then((res)=>{
        console.log(res.data.result[0]);
        console.log(res.data.result[1]);
        this.setState({isLoading:false});
        this.state.email=res.data.result[0].email;
        this.state.password=res.data.result[0].password;
        this.state.status=res.data.message;
        this.state.apiKey=res.data.result[0].token;
        this.state.totalReq=res.data.result[1];
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

  render() {
    if(localStorage.getItem('authenticated')!=-1){
      return(
        <div className="profilPage">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Profile Page</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className=" col-md-12 col-lg-9 ">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>Email: </td>
                      <td>{this.state.email}</td>
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td>{this.state.password}</td>
                    </tr>
                    <tr>
                      <td>apiKey</td>
                      <td>{this.state.apiKey}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{this.state.status}</td>
                    </tr>
                    <tr>
                      <td>Total Request</td>
                      <td>{this.state.totalReq}</td>
                    </tr>
                  </tbody>
                  <br/>
                  <input type="button" className="btn btn-warning" value="Refresh Data" onClick={this.getDataProfile}/>
                </table>
              </div>
            </div>
          </div>
        </div>
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
