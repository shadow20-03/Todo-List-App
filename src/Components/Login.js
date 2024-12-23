import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function validateUser(email, password) {
        if(email === "test@test.com" && password === "123456"){
            alert("Login Successful");
            setEmail("");
            setPassword("");
            navigate('/todo');
        }
    }
    return(
        <>
            <div className="container">
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <input type="button" value="Submit" onClick={validateUser(email, password)}/>
            </form>
            </div>
        </>
    );
}

export default Login;