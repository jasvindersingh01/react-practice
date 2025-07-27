import React from "react";

function Message({isLoggedIn}) {
    return (
    <h1>{isLoggedIn ? "Welcome Jasvinder" : "Please log in first"}</h1>
    )
}
export default Message;
