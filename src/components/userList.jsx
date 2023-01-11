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
    },[])
    let  handleDelete=(id,name)=>
    {
          setUser(users.filter((a)=>a.id !== id))
          alert(`${name} has been deleted`)
    }
    return ( 
        <div   className="userlist">
           <div className="section1">
           <h1 style={{textAlign:"center"}}>User List</h1>
           <div className="usersection">
            {
                users.map((data)=>(
                    <div className="users">
                        <h2>User name: {[data.name]}</h2>
                        <h2>Age: {data.age}</h2>
                        <h2>Email: {data.email}</h2>
                        <h2>PhoneNumber: {data.phoneNumber}</h2>
                        <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                        
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