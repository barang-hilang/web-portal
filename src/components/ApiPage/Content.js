var React = require('react');

var HomeDiv = <div>
    <h1>Barang Hilang API Documentation</h1>
    <hr/>
    <h3>Guide For Request Application</h3>
    <br/>
    <p><bold>First Thing First</bold> you need to sign-up as developer</p>
    <p>Then you can log-in to barang-hilang developer page, and see your Api Key</p>
    <p>After that you can use the api key within your header http request, see example below </p>
    <h2>Base URI</h2>
    <p><code><a href="barang-hilang.azurewebsites.net/api/v1">barang-hilang.azurewebsites.net/api/v1</a></code></p>
    <br/>
    <p>Request Header</p>
    <p><code>X-Auth-Token:<italic> YOUR_TOKEN_API_KEY,</italic></code></p>
    <p><code>Application-Context: application/json</code></p>
    <br/>
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Header-Name</th>
            <th>Possible Values</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X-Auth-Token</td>
            <td>[a-z1-9]+</td>
            <td>Your authentication token</td>
          </tr>
          <tr>
            <td>Application-Context</td>
            <td>application/json</td>
            <td>Request method, for requesting JSON for response API</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br/>
    <p>We also try to use HTTP Method Request GET,PUT,DELETE,POST for CRUD function in one base uri path</p>
    <p>Example, if you want to add user in your app you just need one uri : <code>BASE_URI/users</code> then use method what you need.</p>
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Method Request</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>For Find / Find all data from barang-hilang web services</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>For Insert data from barang-hilang web services</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>For Update data from barang-hilang web services</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>For Delete data from barang-hilang web services</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr/>
    <h4>List Of Content</h4>
    <ul>
      <li>User</li>
      <li>Barang</li>
      <li>Pelaporan</li>
    </ul>
    <hr/>
    <h4>User</h4>
    <p>We provides table users on our database. This users are belong to who are register in developers app , so developers don't have to make your own database to save the users data.</p>
    <br/>
    <h4>Barang</h4>
    <p>Barang are things that users belong. Its contain name, lost of date, reason, etc (<italic> Details are on Barang's Content</italic>)</p>
    <br/>
    <h4>Pelaporan</h4>
    <p>This is for make the report for the lost things.</p>
    <br/>
    <hr/>
    <h3>Barang Hilang's Diagram</h3>
    <p>for more details please look this life-cycle diagram for Barang-Hilang.</p>
  </div>
;

var User =(
  <div>
    <h1>Users Content</h1>
  </div>
);

var Barang =(
  <div>
    <h1>Barang Content</h1>
  </div>
);

var Pelaporan =(
  <div>
    <h1>Pelaporan Content</h1>
  </div>
);

var Content = React.createClass({
  getInitialState: function(){
    return{
      "content":this.props.value
    }
  },

  render: function(){
    var Result;
    if(this.state.content==="home")
      Result = HomeDiv;
    else if(this.state.content==="users")
      Result = User;
      else if(this.state.content==="barang")
        Result = Barang;
        else if(this.state.content==="pelaporan")
          Result = Pelaporan;

    return (
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {Result}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports=Content;