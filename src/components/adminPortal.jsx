import AdminNavbar from "./adminNavbar";
import AdminDashboard from "./adminDashboard";
import { Routes, Route } from "react-router-dom";
import BookList from "./booklist";4
import UserList from "./userList";
import ReadBook from "./readBook";
import AddBook from "./addBook";
import AddUser from "./addUser";
import Error from "./errorpage";
const AdminPortal = () => {
    return (
        <div className="adminportal">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashboard/>} />
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook />}/>  
                
                {/* readbook component  about when you  click the read more button that is declared on the booklist component
                  uses the useParams hook method in readbook  */}
                   {/* and connection between the booklist and readbook is navigate hook n uses id ex:navigate(`/admin/book-list/${id}`) */}
                   <Route path="/add-book" element={<AddBook />}/> 
                   <Route path="/add-user" element={<AddUser/>}/>
                   <Route path="/*"  element={<Error/>}/>

            </Routes>


        </div>
    );
}

export default AdminPortal;