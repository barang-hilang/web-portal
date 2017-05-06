var axios = require('axios');

const BASE_PATH = "http://localhost:8080/api/v1/";

const LoginRequest =(email,password) =>{
    var _this = this;
    axios.post({BASE_PATH}+'/developers/auth',{
      // headers:{
      //   'apiKey':'wakowakowakowa',
      // }
    })
    .then(function(res){
        if(res.data.message==="SUCCESS")
          alert("Success Login");
        else {
          alert("Failed");
        }
      })
    .catch(function(e) {
      console.log(e.message);
      console.log(e.code); // Not always specified
      console.log(e.config); // The config that was used to make the request
      console.log(e.response); // Only available if response was received from the server
    })
}

export default{
  LoginRequest
}
