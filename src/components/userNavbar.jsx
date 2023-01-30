import { Link } from "react-router-dom";
import '../styles/userNav.css'
const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
          <div className="navbar">
      {/* <h1>AdminPortal</h1> */}
      <img width="50px" height="50px" src="/images/logo.jpg" alt="" />
      <div className="pages">
        <ul>
            <Link to="/user/">Dashboard</Link>
            
            <Link to="/user/book-list">Book List</Link>
            
            <Link to="/">Logout</Link>  
        </ul>
      </div>
         
      </div>
        </div>
     );
}
 
export default UserNavbar;