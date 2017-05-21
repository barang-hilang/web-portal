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
    {/* <p><code>X-Auth-Token:<italic> YOUR_TOKEN_API_KEY,</italic></code></p>
    <p><code>Application-Context: application/json</code></p> */}
    <pre>
      <code className="language-javascript hljs">
        apiKey: YOUR_TOKEN_API_KEY,<br/>
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
    <h3>Find All Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
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
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;,
          <br/>         &#123;
          <br/>            id_user:"2",
          <br/>            id_dev:"1",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
          	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#93;
          <br/>
          	&#125;
      </code>
    </pre>

    <hr/>
    <h3>Find One Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users/find/id_user">http://barang-hilang.azurewebsites.net/api/v1/users/find/id_user</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Insert New Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1",
          <br/>       id_dev:"2",
          <br/>       email_user:"something@mail.com",
          <br/>       username_user:"something",
          <br/>       address_user:"something",
          <br/>       telp_user:"something",
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Update Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>PUT</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1",
          <br/>       id_dev:"2",
          <br/>       email_user:"something@mail.com",
          <br/>       username_user:"something",
          <br/>       address_user:"something",
          <br/>       telp_user:"something",
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Delete User</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>DELETE</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1"
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>


  </div>
);

var Barang =(
  <div>
    <h1>Barang Content</h1>
    <p>Barang are the data of person that assign / sign-up to your app as a person that want to post something lost</p>
    <hr/>
    <h3>Find All Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
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
          &nbsp;users:	&#91;
          <br/>         &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;,
          <br/>         &#123;
          <br/>            id_user:"2",
          <br/>            id_dev:"1",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
          	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#93;
          <br/>
          	&#125;
      </code>
    </pre>

    <hr/>
    <h3>Find One Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users/find/id_user">http://barang-hilang.azurewebsites.net/api/v1/users/find/id_user</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Insert New Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1",
          <br/>       id_dev:"2",
          <br/>       email_user:"something@mail.com",
          <br/>       username_user:"something",
          <br/>       address_user:"something",
          <br/>       telp_user:"something",
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Update Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>PUT</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1",
          <br/>       id_dev:"2",
          <br/>       email_user:"something@mail.com",
          <br/>       username_user:"something",
          <br/>       address_user:"something",
          <br/>       telp_user:"something",
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Delete User</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>DELETE</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1"
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>


  </div>
);

var Pelaporan =(
  <div>
    <h1>Pelaporan Content</h1>
    <p>Pelaporan are the data of person that assign / sign-up to your app as a person that want to post something lost</p>
    <hr/>
    <h3>Find All Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
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
          &nbsp;users:	&#91;
          <br/>         &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;,
          <br/>         &#123;
          <br/>            id_user:"2",
          <br/>            id_dev:"1",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
          	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#93;
          <br/>
          	&#125;
      </code>
    </pre>

    <hr/>
    <h3>Find One Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users/find/id_user">http://barang-hilang.azurewebsites.net/api/v1/users/find/id_user</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Insert New Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1",
          <br/>       id_dev:"2",
          <br/>       email_user:"something@mail.com",
          <br/>       username_user:"something",
          <br/>       address_user:"something",
          <br/>       telp_user:"something",
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Update Users</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>PUT</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1",
          <br/>       id_dev:"2",
          <br/>       email_user:"something@mail.com",
          <br/>       username_user:"something",
          <br/>       address_user:"something",
          <br/>       telp_user:"something",
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
          <br/>
            &#125;
      </code>
    </pre>

    <hr/>
    <h3>Delete User</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/users">http://barang-hilang.azurewebsites.net/api/v1/users</a></code></p>
    <p>Request Header : <br/><code>X-Auth-Token: YOUR_TOKEN_API_KEY, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>DELETE</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       id_user:"1"
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
          &nbsp;user: &#123;
          <br/>            id_user:"1",
          <br/>            id_dev:"2",
          <br/>            email_user:"something@mail.com",
          <br/>            username_user:"something",
          <br/>            address_user:"something",
          <br/>            telp_user:"something",
          <br/>            api_key:API_KEY_USER
          <br/>         &#125;
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
