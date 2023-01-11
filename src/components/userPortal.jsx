import { Route,Routes } from "react-router-dom";
import Usernavbar from "./userNavbar";
import USerDashboard from "./userDashboard";
import BookList from "./booklist";
import ReadBook from "./readBook";
const UserPortal = () => {
    return ( 
        <div className="userportal">
            
               <Usernavbar/>
            <Routes>
        <Route path="/" element={<USerDashboard/>}  />
        <Route path="/book-list"  element={<BookList/>}/>
        <Route path="/book-list/:id" element={<ReadBook />}/>
            </Routes>
        </div>
     );
}
 
export default UserPortal;