import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/adminLogin.css'
const AdminLogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let login = (x) => {
        x.preventDefault();
        let data = { email, password }
        console.log(data);

        //admi validates
        if (email == "usha@gmail.com" && password == "usha1234") {
            navigate('/admin/')
        } else {
            alert(`invalid login credentialsl`)
        }

    }

    return (
        <div className="adminlogin">
            <div className="formcontainer">
                {/* <h1 style={{  }}>Login as Admin</h1> */}
                <div className="forminput">
                    <form action="" onSubmit={login}>
                        <div className="formlabinp">
                             <h1 style={{ fontSize:"30px" }}>Login as Admin</h1>
                            <div className="email">
                                <input type="email" value={email} placeholder="Enter Email address" onChange={(x) => setEmail(x.target.value)} required />
                            </div>
                            <div className="password">
                                <input type="password" value={password} placeholder="Enter Password" onChange={(x) => setPassword(x.target.value)} required />
                            </div>
                            <div className="btnn"> <button className="btn">Login</button></div>
                        </div>


                    </form>
                </div>
            </div>

        </div>
    )
}
export default AdminLogin