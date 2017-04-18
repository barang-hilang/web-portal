var React = require('react');

var Content = React.createClass({
  render: function(){
    return (
      <div id="page-content-wrapper">
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-lg-12">
                         <h1>Barang Hilang API Documentation (Ver 1)</h1>
                         <h3>Guide For Request Application</h3>
                         <p><bold>First Thing First</bold> you need to sign-up as developer</p>
                         <p>Then you can log-in to barang-hilang developer page, and see your Api Key</p>
                         <p>After that you can use the api key within your header http request, see example below </p>
                         <p><code>wakowaowkaowokaowkaowka</code></p>
                     </div>
                 </div>
             </div>
         </div>
    );
  }
});

module.exports=Content;
