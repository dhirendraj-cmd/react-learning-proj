import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // we are sending data
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
        console.log("submitting....")
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username"/>
            {" "}
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter Password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
