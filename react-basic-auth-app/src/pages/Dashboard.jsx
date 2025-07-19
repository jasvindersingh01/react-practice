import { useAuth } from "../context/AuthContext";

function Dashboard() {

  const { user, logout, isDark, toggleTheme } = useAuth();

  return (
    <>
     <div className="min-h-screen justify-center p-6 bg-white text-black dark:bg-gray-900 dark:text-white">

        <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>
        <button onClick={toggleTheme} >
          Switch to {isDark ? "Light" : "Dark"} Mode
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer m-4" onClick={logout}>Logout</button>

      </div>
    </>
  );
}

export default Dashboard;