import React from "react";
import { useAuth } from "./auth";

const LoginPage = () => {

    const auth = useAuth();

    const [username, setUsername] = React.useState('');
    
    const login = (e) => {
        e.preventDefault();
       auth.login({ username });
    };

    return (
       <>
       <h1> Login </h1>
       <form onSubmit={login}>
        <label> Put your username: </label>
        <input 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />
            <button type="submit"> Enter </button>
       </form>
       </>
    )
};

export { LoginPage }