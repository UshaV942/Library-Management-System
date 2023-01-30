import { useState,useEffect } from "react";
import '../styles/userlist.css'
const UserList = () => {
    let [users,setUser]=useState([])
    useEffect(()=>
    {
        let fetchdata=(async()=>
        {
           let response=await fetch("http://localhost:30001/users")
           let data=await response.json()
           setUser(data)
        })
        fetchdata()
    },[users])
    let  handleDelete=(id,name)=>
    {
          fetch(`http://localhost:30001/users/${id}`,
         { 
            method:"DELETE"
        })
        alert(`${name} has been deleted`)
    }
    return ( 
        <div   className="userlist">
           <div className="section1">
           <h1 className="listheadding" style={{textAlign:"center"}}>User List</h1>
           <div className="usersection">
            {
                users.map((data)=>(
                    <div className="users">
                        <h2>User name: {[data.name]}</h2>
                        <h2>Age: {data.age}</h2>
                        <h2>Email: {data.email}</h2>
                        <h2>PhoneNumber: {data.phoneNumber}</h2>
                        <button className="userbtn" onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                        
                    </div>
                )
                )

            }
           </div>
           </div>
        </div>
     );
}
 
export default UserList;