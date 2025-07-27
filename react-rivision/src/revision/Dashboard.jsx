import React from "react";

function Dashboard({onLogout, name}) {
    return (
        <div>
            <h1>Welcome to Dashboard {name}</h1>
            <button onClick={onLogout} className="m-10 px-6 py-2 bg-blue-400 text-white cursor-pointer" >Logout</button>
        </div>
    )
}

export default Dashboard;