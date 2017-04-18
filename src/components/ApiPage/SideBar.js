var React = require('react');

var SideBar = React.createClass({
  render: function(){
    return (
      <div id="sidebar-wrapper" >
           <ul className="sidebar-nav">
               <li className="sidebar-brand">
                   <a href="#">
                    barang-hilang / api / v1
                   </a>
               </li>
               <li>
                   <a href="#">User</a>
               </li>
               <li>
                   <a href="#">Barang</a>
               </li>
               <li>
                   <a href="#">Pelaporan</a>
               </li>
           </ul>
       </div>
    );
  }
});

module.exports=SideBar;
