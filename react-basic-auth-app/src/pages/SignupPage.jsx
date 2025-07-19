import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password.length >= 6) {
      const user = { email, password };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
    else {
      alert("Please provide a valid email and password..");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );

}

export default SignupPage;