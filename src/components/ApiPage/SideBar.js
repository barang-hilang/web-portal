var React = require('react');
var NavLink = require('react-router-dom').NavLink;

var SideBar = React.createClass({
  render: function(){
    return (
    <div>
      <div id="sidebar-wrapper" >
           <ul className="sidebar-nav">
               <li className="sidebar-brand">
                 <NavLink exact to="/api/home">
                    Lists of API Content
                 </NavLink>
               </li>
               <li>
                  <NavLink to="/api/users">User</NavLink>
               </li>
               <li>
                 <NavLink to="/api/barang">Barang</NavLink>
               </li>
               <li>
                 <NavLink to="/api/pelaporan">Pelaporan</NavLink>
               </li>
           </ul>
       </div>
     </div>
    );
  }
});

module.exports=SideBar;
