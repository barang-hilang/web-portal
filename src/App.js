var axios = require('axios');
import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./components/Home.js');
var About = require('./components/About.js');
var Navbar = require('./components/Navbar.js');
var ImageBar = require('./components/ImageBar.js');
var Footer = require('./components/Footer.js');
var AuthLogin = require('./components/AuthLogin.js');
var Register = require('./components/Register.js');
var SideBarAPI = require('./components/ApiPage/SideBar.js');
var ContentAPI = require('./components/ApiPage/Content.js');
// var auth = require('./components/lib/Auth.js');

var TestRoute = React.createClass({
  getInitialState: function(){
    return {
      message:[],
       items: [],
       authenticated: false
    }
  },

  componentDidMount() {
      //yang jalan ini
      var _this = this;
      axios.get('http://127.0.0.1:8080/api/v1/users',{
        headers:{
          'apiKey':'wakowakowakowa',
          // 'Access-Control-Allow-Origin':'*'
        }
      })
      .then(function(res){
          _this.setState({
            items: res.data.message
          });
        })
      .catch(function(e) {
        console.log(e.message);
        console.log(e.code); // Not always specified
        console.log(e.config); // The config that was used to make the request
        console.log(e.response); // Only available if response was received from the server
      })
  },


  render : function(){
    // const renderItems = this.state.items.map(function(item, i) {
    //   return <li key={i}>{item.title}</li>
    // });

    return (
      <div>
         <ImageBar page="Home"/>
         <ul className="App">
           {this.state.items}

         </ul>
        <Footer/>
     </div>
   );
  }
});

var HomeRoute = React.createClass({
  render: function(){
    return(
      <div>
        <ImageBar page="Home"/>
        <Home/>
        <Footer/>
      </div>
    );
  }
});

var AboutRoute = React.createClass({
  render: function(){
    return(
      <div>
        <ImageBar page="About"/>
        <About/>
        <Footer/>
      </div>
    );
  }
});

var ApiPageHome = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI value="home"/>
      </div>
    );
  }
});

var ApiPageUsers = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI value="users"/>
      </div>
    );
  }
});

var ApiPageBarang = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI value="barang"/>
      </div>
    );
  }
});

var ApiPagePelaporan = React.createClass({
  render: function(){
    return(
      <div id="wrapper" className="toggled">
        <SideBarAPI/>
        <ContentAPI value="pelaporan"/>
      </div>
    );
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={HomeRoute}/>
            <Route path='/about' component={AboutRoute}/>
            <Route path='/doc/api/home' component={ApiPageHome}/>
            <Route path='/doc/api/users' component={ApiPageUsers}/>
            <Route path='/doc/api/barang' component={ApiPageBarang}/>
            <Route path='/doc/api/pelaporan' component={ApiPagePelaporan}/>
            <Route path='/test' component={TestRoute}/>
            <Route exact path="/login" component={AuthLogin}/>
            <Route exact path="/register" component={Register}/>
            <Route render={function (){return <div className="NotFound"><h1>404</h1><hr/><h1>Not Found</h1><hr/><h3>Im Sorry, your looking page are not available.</h3></div>}}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
// fetch('http://localhost:8080/api/v1/users',{
//   headers:{
//     'Access-Control-Allow-Origin':'*',
//     'apiKey':'wakowakowakowa'
//   }
// })
//   .then(function(response) {
//     return response.json()
//   })

// axios
//   .get('http://localhost:8080/api/v1/users',{
    // headers:{
    //   'apiKey':'wakowakowakowa',
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json'
    // }
//   })
//   .then(res => this.setState({ message: res.message }))
//   .catch(err => console.log(err))

  // axios.get('http://127.0.0.1:8080/api/v1/users',{
  //   mode: "no-cors",
  //   headers:{
  //     'apiKey':'wakowakowakowa',
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  // })
  // .then(res => this.setState({ message: res.data.result }))
  // .then(response => console.log(response))
  // .catch(err => console.log(err))

  // var _this = this;
  // axios.get("https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow")
  // .then(function(res){
  //     _this.setState({
  //       items: res.data.items
  //     });
  //   })
  // .catch(function(e) {
  // console.log("ERROR ", e);
  // })
  //
  // axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1';
  // axios.defaults.headers.common['apiKey'] = "wakowakowakowa";
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
  // axios.get('/users')
  // .then(res => this.setState({ message: res.data }))
  // .catch(err => console.log(err))
// render: function(){
//   return(
//     <div>
//       <ImageBar page="Home"/>
//       <div>
//         {this.state.items.data.items}
//       </div>
//       <Footer/>
//     </div>
//   );
// }
