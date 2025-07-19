import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }
    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
          localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const login = (email, password) => {
        const userData = { email, password };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    }

    const logout = (userData) => {
        setUser(null)
    }

    const value = {
        user,
        login,
        logout,
        isAuthenticate: !!user,
        loading,
        isDark,
        toggleTheme
    }

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, [])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthContext, AuthProvider, useAuth };