import { useNavigate } from "react-router-dom";

const UserLogin = () => {
   let navigate= useNavigate()
    let handlelogin = () =>
    {
        navigate('/user/')
        
    }

    return ( 
        <div className="userlogin">
            <div className="formcontainer">
                {/* <h1>Login!</h1> */}
                <div className="forminput">
                    <form action=""  onSubmit={handlelogin}>
                     
                       <div className="formlabinp">
                       <h1 style={{ fontSize:"30px" }}>Login as User</h1>
                       <div className="email">
                        <input type="email"    placeholder="Email address"   required/>
                        </div>
                        <div className="password">
                            <input type="password"   placeholder="Password"  required />
                        </div>
                       <div className="btnn"> 
                          <button className="btn">Login</button>
                       </div>
                       </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;