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


                                                                                         
                                                                        
                                                                                        
//Dokumentasi Bagian User                
var User =(
  <div>
    <h1>Users Content</h1>
    <p>Users are the data of person that assign / sign-up to your app as a person that lost something and want to post.</p>
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
          <br/>            "idUser": 1,
          <br/>            "email": "aldi@gmail.com",
          <br/>            "username": "aldi",
          <br/>            "password": "1234"      
          <br/>            "alamat": "alamat",
          <br/>            "noHp": "089660553886",
          <br/>            "apiKey": "wakowakowakowa",
          <br/>            "apiKkey": "wakowakowakowa",
          <br/>            "links": &#91;
          <br/>              &#123;
          <br/>                 "rel": "self"
          <br/>                 "href": "http://barang-hilang.azurewebsites.net/api/v1/users"
          <br/>              &#125;   
          <br/>            &#93;
          <br/>         &#125;,
          <br/>         &#123;
          <br/>            "idUser": 2,
          <br/>            "email": "angganv@gmail.com",
          <br/>            "username": "Yoanes Satrio Dewanggs",
          <br/>            "password": "1234",      
          <br/>            "alamat": "Jalan Babarsari Sebrlah Atma",
          <br/>            "noHp": "089631782001",
          <br/>            "apiKey": null,
          <br/>            "apiKkey": null,
          <br/>            "links": &#91;
          <br/>              &#123;
          <br/>                 "rel": "self"
          <br/>                 "href": "http://barang-hilang.azurewebsites.net/api/v1/users"
          <br/>              &#125;   
          <br/>            &#93;
          <br/>          &#125;
          <br/> 
          <br/>         &#93;,
          <br/>         "httpStatus": "ACCEPTED",              
          <br/>         "links": &#91;
          <br/>           &#123;
          <br/>             "rel": "self"
          <br/>             "href": "http://barang-hilang.azurewebsites.net/api/v1/users"
          <br/>           &#125;   
          <br/>         &#93;
                                                                                         
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
          &nbsp;result:	&#91;
          <br/>         &#123;
          <br/>            "idUser": 1,
          <br/>            "email": "aldi@gmail.com",
          <br/>            "username": "aldi",
          <br/>            "password": "1234"      
          <br/>            "alamat": "alamat",
          <br/>            "noHp": "089660553886",
          <br/>            "apiKey": "wakowakowakowa",
          <br/>            "apiKkey": "wakowakowakowa",
          <br/>            "links": &#91;
          <br/>              &#123;
          <br/>                 "rel": "self"
          <br/>                 "href": "http://barang-hilang.azurewebsites.net/api/v1/users"
          <br/>              &#125;   
          <br/>            &#93;
          <br/>         &#125;
          <br/>         &#93;,
          <br/>         "httpStatus": "ACCEPTED",              
          <br/>         "links": &#91;
          <br/>           &#123;
          <br/>             "rel": "self"
          <br/>             "href": "http://barang-hilang.azurewebsites.net/api/v1/users"
          <br/>           &#125;   
          <br/>         &#93;
          <br/>&#125;                                                                                 
                                                                                       
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
          <br/>       "email": "aldi@gmail.com",
          <br/>       "password"="1234"
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
          <br/>            "idUser": 1,
          <br/>            "email": "aldi@gmail.com",
          <br/>            "username": "aldi",
          <br/>            "password": "1234"      
          <br/>            "alamat": "alamat",
          <br/>            "noHp": "089660553886",
          <br/>            "apiKey": "wakowakowakowa",
          <br/>            "apiKkey": "wakowakowakowa",
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
          <br/>            "email": "willyuto@gmail.com",
          <br/>            "username": "William",
          <br/>            "password": "123456"      
          <br/>            "alamat": "Dirgantara 2",
          <br/>            "noHp": "089609840999",
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
          <br/>            "idUser": 3,
          <br/>            "email": "willyuto@gmail.com",
          <br/>            "username": "William",
          <br/>            "password": "123456"      
          <br/>            "alamat": "Dirgantara 2",
          <br/>            "noHp": "089609840999",
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
          <br/>       "idUser":3
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

//Dokumentasi Bagian Role              
var Role =(
  <div>
    <h1>Role Content</h1>
    <p>Role indicates the level of usage by the user. Can be Admin, Developer, etc</p>
    <hr/>
    <h3>Get All Roles</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/roles">http://barang-hilang.azurewebsites.net/api/v1/roles</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
            <br/>&#91;
            <br/>  &#123;
            <br/>    "idRole": 1,
            <br/>    "role": "Admin",
            <br/>    "links": &#91;
            <br/>      &#123;
            <br/>        "rel": "self",
            <br/>        "href": "http://barang-hilang.azurewebsites.net/api/v1/roles/find/1"
            <br/>      &#125;
            <br/>    &#93;
            <br/>  &#125;,
            <br/>  &#123;
            <br/>    "idRole": 2,
            <br/>    "role": "Developer",
            <br/>    "links": &#91;
            <br/>      &#123;
            <br/>        "rel": "self",
            <br/>        "href": "http://barang-hilang.azurewebsites.net/api/v1/roles/find/2"
            <br/>      &#125;
            <br/>    &#93;
            <br/>  &#125;,
            <br/>  &#123;
            <br/>    "idRole": 3,
            <br/>    "role": "SuperDeveloper",
            <br/>    "links": &#91;
            <br/>      &#123;
            <br/>        "rel": "self",
            <br/>        "href": "http://barang-hilang.azurewebsites.net/api/v1/roles/find/3"
            <br/>      &#125;
            <br/>    &#93;
            <br/>&#93;
      </code>
    </pre>

    <hr/>
    <h3>Get a Role</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/roles/find/id">http://barang-hilang.azurewebsites.net/api/v1/roles/find/id</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
            <br/>&#123;
            <br/>   "idRole": 1,
            <br/>   "role": "Admin",
            <br/>   "links": &#91;
            <br/>     &#123;
            <br/>        "rel": "self",
            <br/>        "href": "http://barang-hilang.azurewebsites.net/api/v1/roles/find/1"
            <br/>     &#125;
            <br/>    &#93;
            <br/>&#125;,
      </code>
    </pre>

    <hr/>
    <h3>Insert New Role</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/roles">http://barang-hilang.azurewebsites.net/api/v1/roles</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>      "role": "Manager",
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
    <h3>Update Roles</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/roles">http://barang-hilang.azurewebsites.net/api/v1/roles</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>PUT</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>       "idRole": "1",
          <br/>       "idDeveloper": "2"
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
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/roles">http://barang-hilang.azurewebsites.net/api/v1/roles</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>DELETE</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
            &#123;
          <br/>     "idRole": "4"
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


//Dokumentasi Pelaporan
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
            <br/>&#123;
            <br/>      "barang": &#123;
            <br/>        "kategoriBarang": &#123;
            <br/>          "jenis": "Elektronik",
            <br/>          "idKategoriBarang": 1,
            <br/>          "links": &#91;&#93;
            <br/>        &#125;,
            <br/>        "user": &#123;
            <br/>          "idUser": 1,
            <br/>          "email": "aldi@gmail.com",
            <br/>          "username": "aldi",
            <br/>          "password": "1234",
            <br/>          "alamat": "alamat",
            <br/>          "noHp": "089660553886",
            <br/>          "apiKey": "wakowakowakowa",
            <br/>          "apiKkey": "wakowakowakowa",
            <br/>          "links": &#91;&#93;
            <br/>        &#125;,
            <br/>        "nama": "Iphone 7",
            <br/>        "status": "lost",
            <br/>        "jumlah": 1,
            <br/>        "url_image": "https://cnet2.cbsistatic.com/img/CXq-MuOMDvpuhYOfgpmsHWbYdxg=/830x467/2016/09/12/9a3ba000-7c14-4f55-b685-92ffa90f353c/septus-02.jpg",
            <br/>        "idBarang": 1,
            <br/>        "links": &#91;&#93;
            <br/>      &#125;,
            <br/>      "pelapor": &#123;
            <br/>        "idUser": 1,
            <br/>        "email": "aldi@gmail.com",
            <br/>        "username": "aldi",
            <br/>        "password": "1234",
            <br/>        "alamat": "alamat",
            <br/>        "noHp": "089660553886",
            <br/>        "apiKey": "wakowakowakowa",
            <br/>        "apiKkey": "wakowakowakowa",
            <br/>        "links": &#91;&#93;
            <br/>      &#125;,
            <br/>      "penemu": null,
            <br/>      "keterangan": "Bagi yang menemukan akan dapat hadiah",
            <br/>      "tempatHilang": "Jalan Babarsari No.46, Yogyakarta",
            <br/>      "tanggalHilang": 1495486692688,
            <br/>      "tempatDitemukan": null,
            <br/>      "tanggalDitemukan": null,
            <br/>      "idPelaporan": 1,
            <br/>      "links": &#91;&#93;
            <br/>    &#125;,
            <br/>    &#123;
            <br/>      "barang": &#123;
            <br/>        "kategoriBarang": &#123;
            <br/>          "jenis": "Keperluan Pribadi",
            <br/>          "idKategoriBarang": 2,
            <br/>          "links": &#91;&#93;
            <br/>        &#125;,
            <br/>        "user": &#123;
            <br/>          "idUser": 1,
            <br/>          "email": "aldi@gmail.com",
            <br/>          "username": "aldi",
            <br/>          "password": "1234",
            <br/>          "alamat": "alamat",
            <br/>          "noHp": "089660553886",
            <br/>          "apiKey": "wakowakowakowa",
            <br/>          "apiKkey": "wakowakowakowa",
            <br/>          "links": &#91;&#93;
            <br/>        &#125;,
            <br/>        "nama": "Dompet",
            <br/>        "status": "lost",
            <br/>        "jumlah": 2,
            <br/>        "url_image": "http://id-live-03.slatic.net/p/7/blackkelly-mens-wallet-dompet-pria-magnum-lcp-567-brown-6482-2528209-62c0917126ac62374beb48df14d2eed2.jpg",
            <br/>        "idBarang": 2,
            <br/>        "links": &#91;&#93;
            <br/>      &#125;,
            <br/>      "pelapor": &#123;
            <br/>        "idUser": 1,
            <br/>        "email": "aldi@gmail.com",
            <br/>        "username": "aldi",
            <br/>        "password": "1234",
            <br/>        "alamat": "alamat",
            <br/>        "noHp": "089660553886",
            <br/>        "apiKey": "wakowakowakowa",
            <br/>        "apiKkey": "wakowakowakowa",
            <br/>        "links": &#91;&#93;
            <br/>      &#125;,
            <br/>      "penemu": null,
            <br/>      "keterangan": "Bagi yang menemukan akan dapat hadiah",
            <br/>      "tempatHilang": "Jalan Babarsari No.46, Yogyakarta",
            <br/>      "tanggalHilang": 1495486692767,
            <br/>      "tempatDitemukan": null,
            <br/>      "tanggalDitemukan": null,
            <br/>      "idPelaporan": 2,
            <br/>      "links": &#91;&#93;
            <br/>    &#125;,
            <br/>  &#93;,
            <br/>  "httpStatus": "ACCEPTED",
            <br/>  "links": &#91;
            <br/>    &#123;
            <br/>      "rel": "self",
            <br/>      "href": "http://barang-hilang.azurewebsites.net/api/v1/pelaporan"
            <br/>    &#125;
            <br/>  &#93;    
            <br/>&#125;
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
            <br/>&#123;
            <br/>      "barang": &#123;
            <br/>        "kategoriBarang": &#123;
            <br/>          "jenis": "Keperluan Pribadi",
            <br/>          "idKategoriBarang": 2,
            <br/>          "links": &#91;&#93;
            <br/>        &#125;,
            <br/>        "user": &#123;
            <br/>          "idUser": 1,
            <br/>          "email": "aldi@gmail.com",
            <br/>          "username": "aldi",
            <br/>          "password": "1234",
            <br/>          "alamat": "alamat",
            <br/>          "noHp": "089660553886",
            <br/>          "apiKey": "wakowakowakowa",
            <br/>          "apiKkey": "wakowakowakowa",
            <br/>          "links": &#91;&#93;
            <br/>        &#125;,
            <br/>        "nama": "Dompet",
            <br/>        "status": "lost",
            <br/>        "jumlah": 2,
            <br/>        "url_image": "http://id-live-03.slatic.net/p/7/blackkelly-mens-wallet-dompet-pria-magnum-lcp-567-brown-6482-2528209-62c0917126ac62374beb48df14d2eed2.jpg",
            <br/>        "idBarang": 2,
            <br/>        "links": &#91;&#93;
            <br/>      &#125;,
            <br/>      "pelapor": &#123;
            <br/>        "idUser": 1,
            <br/>        "email": "aldi@gmail.com",
            <br/>        "username": "aldi",
            <br/>        "password": "1234",
            <br/>        "alamat": "alamat",
            <br/>        "noHp": "089660553886",
            <br/>        "apiKey": "wakowakowakowa",
            <br/>        "apiKkey": "wakowakowakowa",
            <br/>        "links": &#91;&#93;
            <br/>      &#125;,
            <br/>      "penemu": null,
            <br/>      "keterangan": "Bagi yang menemukan akan dapat hadiah",
            <br/>      "tempatHilang": "Jalan Babarsari No.46, Yogyakarta",
            <br/>      "tanggalHilang": 1495486692767,
            <br/>      "tempatDitemukan": null,
            <br/>      "tanggalDitemukan": null,
            <br/>      "idPelaporan": 2,
            <br/>      "links": &#91;&#93;
            <br/>    &#125;,
            <br/>  &#93;,
            <br/>  "httpStatus": "ACCEPTED",
            <br/>  "links": &#91;
            <br/>    &#123;
            <br/>      "rel": "self",
            <br/>      "href": "http://barang-hilang.azurewebsites.net/api/v1/pelaporan"
            <br/>    &#125;
            <br/>  &#93;    
            <br/>&#125;
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
            <br/>            "idBarang": 2,
            <br/>            "idPelapor": 3,
            <br/>            "idUserPenemu": 4,
            <br/>            "keterangan": "Jatuh daerah tangga",
            <br/>            "tempatHilang": "Kantor Pos Babarsari",
            <br/>            "tanggalHilang": "20/05/2017",
            <br/>            "tempatDitemukan": "Petraco Babarsari",
            <br/>            "tanggalDitemukan": "22/05/2017",
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
            <br/>            "idPelaporan": "1",
            <br/>            "idBarang": 2,
            <br/>            "idUserPelapor": 3,
            <br/>            "idUserPenemu": 4,
            <br/>            "keterangan": "Jatuh dekat tangga",
            <br/>            "tempatHilang": "Kantor Pos Babarsari",
            <br/>            "tanggalHilang": "20/05/2017",
            <br/>            "tempatDitemukan": "23/05/2017",
            <br/>            "tanggalDitemukan": "Bank Mandiri Babarsari",
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
          <br/>       "idPelaporan": 10
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


//Dokumentasi Log //belum
var Log =(
  <div>
    <h1>Log Content</h1>
    <p>From the log we can see the history of activities that have been done</p>
    <hr/>
    <h3>Get All Log</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/log">http://barang-hilang.azurewebsites.net/api/v1/log</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#91;   
        <br/>  .
        <br/>  .
        <br/>  .
        <br/>  &#123;
        <br/>    "idLog": 171,
        <br/>    "timeRequest": 1495495845933,
        <br/>    "status": "Get",
        <br/>    "apiKey": "wakowakowakowa",
        <br/>    "links": &#91;&#93;
        <br/>  &#125;,
        <br/>  &#123;
        <br/>    "idLog": 172,
        <br/>    "timeRequest": 1495496079244,
        <br/>    "status": "Get",
        <br/>    "apiKey": "wakowakowakowa",
        <br/>    "links": &#91;&#93;
        <br/>  &#125;,
        <br/>  &#123;
        <br/>    "idLog": 173,
        <br/>    "timeRequest": 1495498642496,
        <br/>    "status": "Post",
        <br/>    "apiKey": "wakowakowakowa",
        <br/>    "links": &#91;&#93;
        <br/>  &#125;
        <br/>&#93;
      </code>
    </pre>

    <hr/>
    <h3>Get Log</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/log/find/id">http://barang-hilang.azurewebsites.net/api/v1/log/find/id</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
            <br/>&#123;
            <br/>  "idLog": 3,
            <br/>  "timeRequest": 1495486888203,
            <br/>  "status": "Post",
            <br/>  "apiKey": "wakowakowakowa",
            <br/>  "links": &#93;
            <br/>    &#123;
            <br/>      "rel": "self",
            <br/>      "href": "http://barang-hilang.azurewebsites.net/api/v1/log"
            <br/>    &#125;
            <br/>  &#93;
            <br/>&#125;
      </code>
    </pre>

    <hr/>
    <h3>Add Log</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/log">http://barang-hilang.azurewebsites.net/api/v1/log</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>POST</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
          <br/>&#123;
          <br/>         "timeRequest":"1",
          <br/>         "status":"Post",
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
    <h3>Delete Log</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/log">http://barang-hilang.azurewebsites.net/api/v1/log</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>DELETE</code></p>
    <p>Request Body : (Example)</p>
    <pre>
      <code className="language-javascript hljs">
          <br/>&#123;
          <br/>       "idLog": "174"
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



//Dokumentasi Barang
var Barang =(
  <div>
    <h1>Barang Content</h1>
    <p>Barang are the Lost Object that can be manage in this webservice, we can do CRUD (Create, Read, Update, Delete) method for Barang.</p>
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
          <br/>     &#123;
          <br/>         "kategoriBarang": &#123;
          <br/>            "jenis": "Elektronik",
          <br/>            "idKategoriBarang": 1,
          <br/>            "links": &#91;&#93;
          <br/>         &#125;,
          <br/>         "user":&#123; 
          <br/>            "idUser": 1,
          <br/>            "email": "aldi@gmail.com",
          <br/>            "username": "aldi",
          <br/>            "password": "1234"      
          <br/>            "alamat": "alamat",
          <br/>            "noHp": "089660553886",
          <br/>            "apiKey": "wakowakowakowa",
          <br/>            "apiKkey": "wakowakowakowa",
          <br/>            "links": &#91;&#93;
          <br/>         &#125;,
          <br/>         "nama": "Iphone 7",
          <br/>         "status": "Lost",
          <br/>         "jumlah": 1,
          <br/>         "url_image": "https://cnet2.cbsistatic.com/img/CXq-MuOMDvpuhYOfgpmsHWbYdxg=/830x467/2016/09/12/9a3ba000-7c14-4f55-b685-92ffa90f353c/septus-02.jpg",
          <br/>         "idBarang": 1,      
          <br/>            "links": &#91;
          <br/>              &#123;
          <br/>                 "rel": "self"
          <br/>                 "href": "http://barang-hilang.azurewebsites.net/api/v1/barang"
          <br/>              &#125;   
          <br/>            &#93;
          <br/>         &#125;,
          <br/>     &#123;
          <br/>         "kategoriBarang": &#123;
          <br/>            "jenis": "Keperluan Pribadi",
          <br/>            "idKategoriBarang": 2,
          <br/>            "links": &#91;&#93;
          <br/>         &#125;,
          <br/>         "user":&#123; 
          <br/>            "idUser": 1,
          <br/>            "email": "aldi@gmail.com",
          <br/>            "username": "aldi",
          <br/>            "password": "1234"      
          <br/>            "alamat": "alamat",
          <br/>            "noHp": "089660553886",
          <br/>            "apiKey": "wakowakowakowa",
          <br/>            "apiKkey": "wakowakowakowa",
          <br/>            "links": &#91;&#93;
          <br/>         &#125;,
          <br/>         "nama": "Dompet",
          <br/>         "status": "Lost",
          <br/>         "jumlah": 2,
          <br/>         "url_image": "http://id-live-03.slatic.net/p/7/blackkelly-mens-wallet-dompet-pria-magnum-lcp-567-brown-6482-2528209-62c0917126ac62374beb48df14d2eed2.jpg",
          <br/>         "idBarang": 2,      
          <br/>            "links": &#91;
          <br/>              &#123;
          <br/>                 "rel": "self"
          <br/>                 "href": "http://barang-hilang.azurewebsites.net/api/v1/barang"
          <br/>              &#125;   
          <br/>            &#93;
          <br/>         &#125;
          <br/>         &#93;,
          <br/>         "httpStatus": "FOUND",             
          <br/>         "links": &#91;
          <br/>           &#123;
          <br/>             "rel": "self"
          <br/>             "href": "http://barang-hilang.azurewebsites.net/api/v1/barang"
          <br/>           &#125;   
          <br/>         &#93;
          <br/>&#125;  
      </code>
    </pre>

    <hr/>
    <h3>Get Barang</h3>
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
          <br/>     &#123;
          <br/>         "kategoriBarang": &#123;
          <br/>            "jenis": "Elektronik",
          <br/>            "idKategoriBarang": 1,
          <br/>            "links": &#91;&#93;
          <br/>         &#125;,
          <br/>         "user":&#123; 
          <br/>            "idUser": 1,
          <br/>            "email": "aldi@gmail.com",
          <br/>            "username": "aldi",
          <br/>            "password": "1234"      
          <br/>            "alamat": "alamat",
          <br/>            "noHp": "089660553886",
          <br/>            "apiKey": "wakowakowakowa",
          <br/>            "apiKkey": "wakowakowakowa",
          <br/>            "links": &#91;&#93;
          <br/>         &#125;,
          <br/>         "nama": "Honda Beat",
          <br/>         "status": "Lost",
          <br/>         "jumlah": 5,
          <br/>         "url_image": "http://s.kaskus.id/images/2016/04/24/2229201_20160424010013.jpg",
          <br/>         "idBarang": 3,
          <br/>            "links": &#91;
          <br/>              &#123;
          <br/>                 "rel": "self"
          <br/>                 "href": "http://barang-hilang.azurewebsites.net/api/v1/barang"
          <br/>              &#125;   
          <br/>            &#93;
          <br/>         &#125;
          <br/>         &#93;,
          <br/>         "httpStatus": "FOUND",             
          <br/>         "links": &#91;
          <br/>           &#123;
          <br/>             "rel": "self"
          <br/>             "href": "http://barang-hilang.azurewebsites.net/api/v1/barang"
          <br/>           &#125;   
          <br/>         &#93;
          <br/>&#125; 
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
          <br/>         "nama":"Charger Iphone",
          <br/>         "idUser":3,
          <br/>         "idKategoriBarang":"1",
          <br/>         "status":"Lost",
          <br/>         "jumlah":1,
          <br/>         "url_image": "https://nguoivietphone.com/images/file/UUW_qxl50QgBAE1F/ban-co-the-sac-iphone-voi-bo-sac-khong-phai-cua-iphone-2.jpg"
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp; status: 200,<br/>
          &nbsp; message: success,
          <br/>
          &nbsp; result: "Add Success"
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
          <br/>         "idBarang": 15,
          <br/>         "nama": "Charger Iphone",
          <br/>         "idUser": 3,
          <br/>         "idKategoriBarang": 1,
          <br/>         "status": "Lost",
          <br/>         "jumlah": 1,
          <br/>         "url_image": "https://nguoivietphone.com/images/file/UUW_qxl50QgBAE1F/ban-co-the-sac-iphone-voi-bo-sac-khong-phai-cua-iphone-2.jpg"
          <br/>&#125;
      </code>
    </pre>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
          &nbsp; status: 200,<br/>
          &nbsp; message: success,
          <br/>
          &nbsp; result: "Success Update"
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
          <br/>      "idBarang": 15
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

//Dokumentasi Untuk Kategori Barang
var KategoriBarang =(
  <div>
    <h1>Kategori Barang Content</h1>
    <p>In Kategori Barang developers can see categories of objects in Barang-Hilang</p>
    <hr/>
    <h3>Get All Kategori Barang</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/kategori/barang">http://barang-hilang.azurewebsites.net/api/v1/kategori/barang</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
          &#91;
          <br/>        &#123;
          <br/>           "jenis": "Elektronik",
          <br/>           "idKategoriBarang": 1,
          <br/>           "links": &#91;&#93;
          <br/>        &#125;,
          <br/>        &#123;
          <br/>           "jenis": "Keperluan Pribadi",
          <br/>           "idKategoriBarang": 2,
          <br/>           "links": &#91;&#93;
          <br/>        &#125;,
          <br/>        &#123;
          <br/>           "jenis": "Uang",
          <br/>           "idKategoriBarang": 3,
          <br/>           "links": &#91;&#93;
          <br/>        &#125;,
          <br/>        &#123;
          <br/>           "jenis": "Surat",
          <br/>           "idKategoriBarang": 4,
          <br/>           "links": &#91;&#93;
          <br/>        &#125;,
          <br/>        &#123;
          <br/>           "jenis": "Kendaraan",
          <br/>           "idKategoriBarang": 5,
          <br/>           "links": &#91;&#93;
          <br/>        &#125;,
          <br/>&#93;
      </code>
    </pre>

    <hr/>
    <h3>Get Kategori Barang</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/kategori/barang/find/id">http://barang-hilang.azurewebsites.net/api/v1/barang/find/id</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        <br/>&#123;
        <br/>    "jenis": "Uang",
        <br/>    "idKategoriBarang": 3,
        <br/>    "links": &#91;
        <br/>      &#123;
        <br/>         "rel": "self",
        <br/>         "href": "http://barang-hilang.azurewebsites.net/api/v1/users"
        <br/>       &#125;
        <br/>     &#93;
        <br/>&#125;
      </code>
    </pre>

  </div>
);


//Dokumentasi Untuk Developer
var Developer =(
  <div>
    <h1>Developer Content</h1>
    <p>People can see developer profile with limited.</p>
    <hr/>
    <h3>Get All Developers</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/developers">http://barang-hilang.azurewebsites.net/api/v1/developers</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
        &nbsp;status: 200,<br/>
        &nbsp;message: "Success",
        <br/>
        &nbsp;result:	&#91;
        <br/>      &#123;
        <br/>          "idDeveloper": 1,
        <br/>          "role": &#123;
        <br/>            "idRole": 2,
        <br/>            "role": "Developer",
        <br/>            "links": &#91;&#93;
        <br/>          &#125;,
        <br/>          "secretKey": "tes1",
        <br/>          "token": "wakowakowakowa",
        <br/>          "email": "apn@gmail.com",
        <br/>          "password": "1234",
        <br/>          "links": &#91;&#93;
        <br/>            &#123;
        <br/>              "rel": "self",
        <br/>              "href": "http://barang-hilang.azurewebsites.net/api/v1/developers/find/1"
        <br/>            &#125;,
        <br/>            &#123;
        <br/>              "rel": "role",
        <br/>              "href": "http://barang-hilang.azurewebsites.net/api/v1/roles/find/2"
        <br/>            &#125;
        <br/>          &#93;
        <br/>      &#125;,
        <br/>      &#123;
        <br/>          "idDeveloper": 2,
        <br/>          "role": &#123;
        <br/>          "idRole": 2,
        <br/>          "role": "Developer",
        <br/>          "links": &#91;&#93;
        <br/>        &#125;,
        <br/>        "secretKey": "tes2",
        <br/>        "token": "wakowakowakowa2",
        <br/>        "email": "aldi@gmail.com",
        <br/>        "password": "1234",
        <br/>        "links": &#91;
        <br/>          &#123;
        <br/>            "rel": "self",
        <br/>            "href": "http://barang-hilang.azurewebsites.net/api/v1/developers/find/2"
        <br/>          &#125;,
        <br/>          &#123;
        <br/>            "rel": "role",
        <br/>            "href": "http://barang-hilang.azurewebsites.net/api/v1/roles/find/2"
        <br/>          &#125;
        <br/>        &#93;
        <br/>     &#125;
        <br/>   &#93;,
        <br/>   "httpStatus": "OK",
        <br/>   "links": &#91;
        <br/>     &#123;
        <br/>      "rel": "self",
        <br/>      "href": "http://barang-hilang.azurewebsites.net/api/v1/developers"
        <br/>     &#125;
        <br/>   &#93;
        <br/>&#125;
      </code>
    </pre>

    <hr/>
    <h3>Get Developer</h3>
    <p>URI : <code><a href="http://barang-hilang.azurewebsites.net/api/v1/developers/find/id">http://barang-hilang.azurewebsites.net/api/v1/developers/find/id</a></code></p>
    <p>Request Header : <br/><code>apiKey: YOUR_TOKEN_apiKey, <br/>content-type: application/json</code></p>
    <p>Request Param : <code>none</code></p>
    <p>Request Method : <code>GET</code></p>
    <p>Request Body : <code>none</code></p>
    <br/><p><block>Example Response</block></p>
    <pre>
      <code className="language-javascript hljs">
        &#123;<br/>
        &nbsp;status: 200,<br/>
        &nbsp;message: "Active",
        <br/>
        &nbsp;result: &#91;
        <br/>      &#123;
        <br/>          "idDeveloper": 2,
        <br/>          "role": &#123;
        <br/>          "idRole": 2,
        <br/>          "role": "Developer",
        <br/>          "links": &#91;&#93;
        <br/>        &#125;,
        <br/>        "secretKey": "tes2",
        <br/>        "token": "wakowakowakowa2",
        <br/>        "email": "aldi@gmail.com",
        <br/>        "password": "1234",
        <br/>        "links": &#91;
        <br/>          &#123;
        <br/>            "rel": "self",
        <br/>            "href": "http://barang-hilang.azurewebsites.net/api/v1/developers/find/2"
        <br/>          &#125;,
        <br/>          &#123;
        <br/>            "rel": "role",
        <br/>            "href": "http://barang-hilang.azurewebsites.net/api/v1/roles/find/2"
        <br/>          &#125;
        <br/>        &#93;
        <br/>     &#125;
        <br/>   &#93;,
        <br/>   "httpStatus": "OK",
        <br/>   "links": &#91;
        <br/>     &#123;
        <br/>      "rel": "self",
        <br/>      "href": "http://barang-hilang.azurewebsites.net/api/v1/developers"
        <br/>     &#125;
        <br/>   &#93;
        <br/>&#125;
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
    else if(this.state.content==="role")
        Result = Role;
    else if(this.state.content==="pelaporan")
        Result = Pelaporan;
    else if(this.state.content==="log")
        Result = Log;
    else if(this.state.content==="barang")
        Result = Barang;
    else if(this.state.content==="kategoribarang")
        Result = KategoriBarang;
    else if(this.state.content==="developer")
        Result = Developer;

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
