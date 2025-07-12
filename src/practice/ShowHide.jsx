import { useState } from "react";

function ShowHide() {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <h1>ShowHide Messaeges...!!</h1>
            <button onClick={() => setVisible(!visible)}>
                {visible? "Hide" : "Show"}
            </button>
            {visible && <p>This is an Hiiden Meassage Vro...</p>}
        </div>
    )
}

export default ShowHide;