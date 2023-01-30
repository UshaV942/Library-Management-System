import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adduser.css'
const AddUser = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [age, setAge] = useState("")
    let [phoneNumber, setphoneNumber] = useState("")

    let navigate = useNavigate()
    let handlesub = (x) => {
        x.preventDefault()
        let data = { name, email, age, phoneNumber }
        fetch(`http://localhost:30001/users`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)

            })
        alert("User Added Successfully")
        navigate('/admin/user-list')
       
    }

    return (
        <div className="adduser">
            <div className="section">
                <h1 style={{ textAlign: "center" }}>Add New User</h1>
                <form action="" className="form1" onSubmit={handlesub}>
                    <div className="name">
                        <input type="text" placeholder="Name of the user" value={name} onChange={(x) => setName(x.target.value)} />
                    </div>
                    <div className="email">
                        <input type="text" placeholder="Email-id" value={email} onChange={(x) => setEmail(x.target.value)} />
                    </div>
                    <div className="age">
                        <input type="number" placeholder="Age of the user" min={6} value={age} onChange={(x) => setAge(x.target.value)} />
                    </div>
                    <div className="phoneNumber">
                        <input type="tel" placeholder="Phone number" minLength={10} maxLength={10} value={phoneNumber} onChange={(x) => setphoneNumber(x.target.value)} />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;