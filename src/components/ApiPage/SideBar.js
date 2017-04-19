var React = require('react');
var NavLink = require('react-router-dom').NavLink;

var SideBar = React.createClass({
  render: function(){
    return (
    <div>
      <div id="sidebar-wrapper" >
           <ul className="sidebar-nav">
               <li className="sidebar-brand">
                 <NavLink exact to="/doc/api/home">
                    Lists of API Content
                 </NavLink>
               </li>
               <li>
                  <NavLink to="/doc/api/users">User</NavLink>
               </li>
               <li>
                 <NavLink to="/doc/api/barang">Barang</NavLink>
               </li>
               <li>
                 <NavLink to="/doc/api/pelaporan">Pelaporan</NavLink>
               </li>
           </ul>
       </div>
     </div>
    );
  }
});

module.exports=SideBar;
