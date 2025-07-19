import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please provide both in Email and Password.");
            return;
        }

        const userData = JSON.parse(localStorage.getItem("user"));

        if (!userData) {
            alert("User not found please Sign up first.");
            return;
        }

        if (userData.email !== email || userData.password !== password) {
            alert("Incorrect email or password.");
            return;
        }
        login(email, password); 
        setError("")
        navigate("/dashboard")
    }

    return (
        <form className="flex flex-col justify-center items-center text-center gap-4 m-10"
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="Email">Email:</label>
                <input className="border p-2 rounded ml-10" type="text"
                    placeholder="Enter your email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>

                <label htmlFor="Password">Password:</label>
                <input className="border p-2 rounded ml-10" type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer m-4">Submit</button>
            <div>
                New user? <Link to="/signup" className="text-blue-500">Sign Up</Link>
            </div>
        </form>
    )
}


export default LoginPage;