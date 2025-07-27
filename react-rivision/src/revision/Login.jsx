import React from "react";

function Login({ onLogin }) {
    return (
        <div>
            <h1>Please Login first to continue...</h1>
            <button onClick={onLogin} className="m-10 px-6 py-2 bg-blue-400 text-white cursor-pointer" >Login</button>
        </div>
    )
}

export default Login;