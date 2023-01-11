import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
          <div className="navbar">
      {/* <h1>AdminPortal</h1> */}
      <img width="80px" height="80px" src="/images/logo.jpg" alt="" />
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