import React from "react";

const LogoutPage = () => {
    
    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');
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