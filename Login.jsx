import React, { useState } from 'react'

const Login = () => {

    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    var message = "";

    if (username == "" || password == "")
        message = "";

    else if (password.length < 5)
        message = "Password Length Must Be Greater Than 5";

    else
        message = "Validation Success";

    return (
        <div>
          <h2>Login</h2>
          <br/>
          <label>Enter Username   </label> 
            <input
                type="text"
                value={username}
                placeholder="username"
                onChange={handleUsername}
            />
            <br />
            <label>Enter Password   </label>
                <input
                type="password"
                value={password}
                placeholder="password"
                onChange={handlePassword}
            />


            <p>{message}</p>
            <br/>
            <button type="submit">Submit</button>

        </div>
    )
}

export default Login