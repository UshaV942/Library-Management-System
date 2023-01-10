import { Link } from "react-router-dom";
import '../styles/landingpage.css';
const LandingPage = () => {
    return (


        <div className="landingpage">
            <div className="body">
            <div className="selectlogintype">
                <h1 style={{color:"gray"}}>Library Management System</h1>


                <div className="btn">
                    <div className="img1">
                        <img width="70px" height="70px" src="img1.webp" alt="" />
                    </div>
                    <div className="btn1">
                        <button><Link to="/admin-login">Admin Login</Link></button>
                    </div>
                    <div className="img2">
                        <img src="img1.webp" width="70px" height="70px" alt="" />
                    </div>
                    <div className="btn2">
                        <button><Link to="/user-login">User Login</Link></button>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default LandingPage;