var React = require('react');



module.exports=TestPage;

// class TestResultUser{
//   static getAllUsers(){
//     return fetch('localhost:8080/api/v1/users.json',{
//       method:'GET',
//       headers:{
//         'apiKey' : 'wakowakowakowa',
//       }
//     })
//    .then(response => {
//        return response.json();
//    })
//    .then(data => {
//        return data;
//    })
//    .catch(error => {
//        return error;
//    });
//   }
// }
//
// const TestResultUser = () => {
//   return (dispatch) => {
//     return fetch('localhost:8080/api/v1/users.json', {
//       method: 'GET',
//       headers: {
//         'apiKey': 'wakowakowakowa'
//       }
//     })
//     .then( (response) => {
//       console.log('Actions - fetchJobs - received response: ', response)
//       return response.json();
//     })
//     .then( (jobs) => {
//       console.log('Actions - fetchJobs - received jobs: ', jobs)
//       // dispatch(receiveJobs(jobs))
//     })
//     .catch( (error) => {
//       console.warn('Actions - fetchJobs - recreived error: ', error)
//     })
//   }
// }
//
// export default TestResultUser;

// var TestPage = React.createClass({
//   getInitialState: function(){
//     return {
//       'data':[]
//     }
//   },
//
//   componentDidMount() {
//     fetch('localhost:8080/api/v1/users', {
//           method: 'GET',
//           headers: {
//             'apiKey': 'wakowakowakowa'
//           }
//         })
//         .then( (response) => {
//           console.log('Actions - fetchJobs - received response: ', response)
//           return response.json();
//         })
//         .then( (json) => {
//             this.setState({data: json});
//         });
//    },
//
//    render: function(){
//      return (
//        <div>
//         {this.state.data}
//        </div>
//      )
//    }
// })
