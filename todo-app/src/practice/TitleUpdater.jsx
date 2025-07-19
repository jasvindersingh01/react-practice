import { useEffect, useState } from "react";

function TitleUpdater() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Title updated to", count)
    }, [count]);
    return (
        <div style={{textAlign : "center"}}>
            <h1>Check the page title 👆</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default TitleUpdater;