var React = require('react');

var HomeDiv = <div>
    <h1>Barang Hilang API Documentation</h1>
    <hr/>
    <h3>Guide For Request Application</h3>
    <p><bold>First Thing First</bold> you need to sign-up as developer</p>
    <p>Then you can log-in to barang-hilang developer page, and see your Api Key</p>
    <p>After that you can use the api key within your header http request, see example below </p>
    <hr/>
    <h3>Base URI</h3>
    <p><code><a href="https://barang-hilang.azurewebsites.net/api/v1/">barang-hilang.azurewebsites.net/api/v1</a></code></p>
    <hr/>
    <h3>Base Response</h3>
    {/* <p><code>status: HTTP_STATUS</code></p>
    <p><code>message: HTTP_STATUS_MESSAGE</code></p> */}
    <pre>
      <code className="language-javascript hljs">
        status: HTTP_STATUS,<br/>
        message: HTTP_STATUS_MESSAGE,<br/>
        result: &#91; &#123; Object Result &#125; &#93;<br/>
        link : relSelfLink
      </code>
    </pre>
    <hr/>
    <h3>Request Header</h3>
    {/* <p><code>apiKey:<italic> YOUR_TOKEN_apiKey,</italic></code></p>
    <p><code>Application-Context: application/json</code></p> */}
    <pre>
      <code className="language-javascript hljs">
        apiKey: YOUR_TOKEN_apiKey,<br/>
        Content-Type: application/json
      </code>
    </pre>
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
            <td>apiKey</td>
            <td>[a-z1-9]+</td>
            <td>Your authentication token</td>
          </tr>
          <tr>
            <td>Content-Type</td>
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
  </div>
;

var User =(
  <div>
    <h1>Users Content</h1>
    <p>Users are the data of person that assign / sign-up to your app as a person that want to post something lost</p>
    <hr/>
    <h3>Get All Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
        	&nbsp;status: 200,<br/>
        	&nbsp;message: success,
          <br/>
          &nbsp;result:	&#91;
          <br/>         &#123;
          <br/>            idUser:"1",
          <br/>            idDeveloper:"2",
          <br/>            email:"something@mail.com",
          <br/>            username:"something",
          <br/>            address:"something",
          <br/>            telp:"something",
          <br/>            apiKey:apiKey
          <br/>         &#125;,
          <br/>         &#123;
          <br/>            idUser:"2",
          <br/>            idDeveloper:"1",
          <br/>            email:"something@mail.com",
          <br/>            username:"something",
          <br/>            address:"something",
          <br/>            telp:"something",
          <br/>            apiKey:apiKey
          <br/>         &#125;
          <br/>
          	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#93;
          <br/>
          	&#125;
      </code>
    </pre>

    <hr/>
    <h3>Get User</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users/find/id">http://barang-hilang.azurewebsites.net/api/v1/users/find/id</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: &#123;
          <br/>            idUser:"1",
          <br/>            idDeveloper:"2",
          <br/>            email:"something@mail.com",
          <br/>            username:"something",
          <br/>            address:"something",
          <br/>            telp:"something",
          <br/>            apiKey:apiKey
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Auth Login</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users/auth">http://barang-hilang.azurewebsites.net/api/v1/users/auth</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       email="registered_email@mail.com",
          <br/>       password="1234
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: &#123;
          <br/>            idDeveloper:"1",
          <br/>            email:"something@mail.com",
          <br/>            username:"something",
          <br/>            address:"something",
          <br/>            telp:"something",
          <br/>            apiKey:apiKey
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Insert New Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       idUser:"1",
          <br/>       idDeveloper:"2",
          <br/>       email:"something@mail.com",
          <br/>       username:"something",
          <br/>       address:"something",
          <br/>       telp:"something",
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: "Add Success"
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Update Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>PUT</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       idUser:"1",
          <br/>       idDeveloper:"2",
          <br/>       email:"something@mail.com",
          <br/>       username:"something",
          <br/>       address:"something",
          <br/>       telp:"something",
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: "Success Update"
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Delete User</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>DELETE</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id:"1"
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: "Success Delete"
          <br/>
            &#125;
      </code>
    </pre>


  </div>
);

var Barang =(
  <div>
    <h1>Barang Content</h1>
    <p>Barang are the stuffs that can be CRUD in this webservice</p>
    <hr/>
    <h3>Get All Barang</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/barang">http://barang-hilang.azurewebsites.net/api/v1/barang</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
        	&nbsp;status: 200,<br/>
        	&nbsp;message: success,
          <br/>
          &nbsp;result:	&#91;
          <br/>         &#123;
          <br/>            idBarang:"1",
          <br/>            idKategori:"2",
          <br/>            idUser:"1",
          <br/>            nama:"Barang Hilang",
          <br/>            status:"Hilang",
          <br/>            jumlah:"1",
          <br/>            url_image:"URL_IMAGE"
          <br/>         &#125;,
          <br/>         &#123;
          <br/>            idBarang:"2,
          <br/>            idKategori:"2",
          <br/>            idUser:"1",
          <br/>            nama:"Barang Hilang 2",
          <br/>            status:"Hilang",
          <br/>            jumlah:"1",
          <br/>            url_image:"URL_IMAGE"
          <br/>         &#125;
          <br/>
          	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#93;
          <br/>
          	&#125;
      </code>
    </pre>

    <hr/>
    <h3>get Barang</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/barang/find/id">http://barang-hilang.azurewebsites.net/api/v1/barang/find/id</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: &#123;
          <br/>            idBarang:"1",
          <br/>            idKategori:"2",
          <br/>            idUser:"1",
          <br/>            nama:"Barang Hilang",
          <br/>            status:"Hilang",
          <br/>            jumlah:"1",
          <br/>            url_image:"URL_IMAGE"
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Add Barang Hilang</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/barang">http://barang-hilang.azurewebsites.net/api/v1/barang</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>            idKategori:"2",
          <br/>            idUser:"1",
          <br/>            nama:"Barang Hilang",
          <br/>            status:"Hilang",
          <br/>            jumlah:"1",
          <br/>            url_image:"URL_IMAGE"
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: "Add Success"
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Update Barang</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/barang">http://barang-hilang.azurewebsites.net/api/v1/barang</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>PUT</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>            idBarang:"1",
          <br/>            idKategori:"2",
          <br/>            idUser:"1",
          <br/>            nama:"Barang Hilang",
          <br/>            status:"Hilang",
          <br/>            jumlah:"1",
          <br/>            url_image:"URL_IMAGE"
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: "Success Update"
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Delete Barang Hilang</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/barang">http://barang-hilang.azurewebsites.net/api/v1/barang</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>DELETE</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       idBarang:"1"
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: "Success Delete"
          <br/>
            &#125;
      </code>
    </pre>


  </div>
);

var Pelaporan =(
  <div>
    <h1>Pelaporan Content</h1>
    <p>Pelaporan is look-like reporting about stuff that lost-found</p>
    <hr/>
    <h3>Get All Pelaporan</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/pelaporan">http://barang-hilang.azurewebsites.net/api/v1/pelaporan</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
        	&nbsp;status: 200,<br/>
        	&nbsp;message: success,
          <br/>
          &nbsp;result:	&#91;
          <br/>         &#123;
          <br/>            idPelaporan:"1",
          <br/>            idBarang:"2",
          <br/>            idUserPelapor:"something@mail.com",
          <br/>            idUserPenemu:"something",
          <br/>            keterangan:"something",
          <br/>            tempatHilang:"date_time",
          <br/>            tanggalHilang:"place_name",
          <br/>            tempatDitemukan:"date_time",
          <br/>            tanggalDitemukan:"place_name",
          <br/>         &#125;,
          <br/>         &#123;
          <br/>            idPelaporan:"3",
          <br/>            idBarang:"2",
          <br/>            idUserPelapor:"something@mail.com",
          <br/>            idUserPenemu:"something",
          <br/>            keterangan:"something",
          <br/>            tempatHilang:"date_time",
          <br/>            tanggalHilang:"place_name",
          <br/>            tempatDitemukan:"date_time",
          <br/>            tanggalDitemukan:"place_name",
          <br/>         &#125;
          <br/>
          	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#93;
          <br/>
          	&#125;
      </code>
    </pre>

    <hr/>
    <h3>Get Pelaporan</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/pelaporan/find/id">http://barang-hilang.azurewebsites.net/api/v1/pelaporan/find/id</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: &#123;
          <br/>            idPelaporan:"1",
          <br/>            idBarang:"2",
          <br/>            idUserPelapor:"something@mail.com",
          <br/>            idUserPenemu:"something",
          <br/>            keterangan:"something",
          <br/>            tempatHilang:"date_time",
          <br/>            tanggalHilang:"place_name",
          <br/>            tempatDitemukan:"date_time",
          <br/>            tanggalDitemukan:"place_name",
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Add Pelaporan</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/pelaporan">http://barang-hilang.azurewebsites.net/api/v1/pelaporan</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
            <br/>            idBarang:"2",
            <br/>            idUserPelapor:"something@mail.com",
            <br/>            idUserPenemu:"something",
            <br/>            keterangan:"something",
            <br/>            tempatHilang:"date_time",
            <br/>            tanggalHilang:"place_name",
            <br/>            tempatDitemukan:"date_time",
            <br/>            tanggalDitemukan:"place_name",
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result:"Add Success"
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Update Pelaporan</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/pelaporan">http://barang-hilang.azurewebsites.net/api/v1/pelaporan</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>PUT</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
            <br/>            idPelaporan:"1",
            <br/>            idBarang:"2",
            <br/>            idUserPelapor:"something@mail.com",
            <br/>            idUserPenemu:"something",
            <br/>            keterangan:"something",
            <br/>            tempatHilang:"date_time",
            <br/>            tanggalHilang:"place_name",
            <br/>            tempatDitemukan:"date_time",
            <br/>            tanggalDitemukan:"place_name",
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: "Success Update"
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Delete Pelaporan</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/pelaporan">http://barang-hilang.azurewebsites.net/api/v1/pelaporan</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>DELETE</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       idPelaporan:"1"
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp;status: 200,<br/>
          &nbsp;message: success,
          <br/>
          &nbsp;result: "Success Delete"
          <br/>
            &#125;
      </code>
    </pre>


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
