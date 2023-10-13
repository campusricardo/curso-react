import React from "react";
import { useAuth } from "./auth";
const LogoutPage = () => {
    const auth = useAuth();
    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    };

    return (
        <>
        <h1> Logout </h1>
        <form onSubmit={logout}>
         <label> Are you sure you wanna leave? </label>

             <button type="submit"> Leave </button>
        </form>
        </>
     )
};

export { LogoutPage }