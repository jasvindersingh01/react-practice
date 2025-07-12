import { useEffect, useState } from "react";

function RandomeUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        fetch("https://randomuser.me/api/?results=20")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Users can't Fetch at this moment..! Try again later")
                }
                return res.json();
            })
            .then(data => {
                setUsers(data.results);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filteredUsers = users.filter(user =>
        `${user.name.first} ${user.name.last}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    if (loading) return <p>Loading Users...!</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Randome Users</h2>

            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ padding: "0.5rem", width: "300px", marginBottom: "1rem" }}
            />

            {filteredUsers.length === 0 ? (
                <p>No results found 😕</p>
            ) : (
                    filteredUsers.map((user, index) => (
                        <div key={index} style={{ margin: "10px 0" }}>
                            <img style={{ width: "150px" }} src={user.picture.medium} alt="User" />
                            <p>{user.name.first}{user.name.last}</p>
                        </div>
                    ))
                )}
        </div>
    );
}

export default RandomeUsers;