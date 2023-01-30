import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
 
      <div className="navbar">
      {/* <h1>AdminPortal</h1> */}
      <img width="50px" height="50px" src="/images/logo.jpg" alt="" />
      <div className="pages">
        <ul>
            <Link to="/admin/">Dashboard</Link>
            <Link to="/admin/add-book">Add Books</Link>
            <Link to="/admin/add-user">Add Users</Link>
            <Link to="/admin/book-list">Book List</Link>
            <Link to="/admin/user-list">Users List</Link>
            <Link to="/">Logout</Link>  
        </ul>
      </div>
         
      </div>
        </div>
     );
}

export default AdminNavbar;