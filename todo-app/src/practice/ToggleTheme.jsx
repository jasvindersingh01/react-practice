import { useState } from "react";

function ToggleTheme() {
    const [isDark, setIsDark] = useState(false);

    const themeToggle = () => {
        setIsDark(!isDark);
    };

    const pageStyle = {
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        height: "100%",
        padding: "2rem",
        textAlign: "center"
    };
    return (
        <div style={pageStyle}>
        <h1>{isDark ? "Dark Mode 🌙" : "Light Mode 🌞"}</h1>
        <button onClick={themeToggle}>
       switch to  {isDark ? "Light" : "Dark"} Mode
        </button>
    </div>
)
};

export default ToggleTheme;