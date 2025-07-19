function TodoForm({ task, setTask, addTodos, searchTerm, setSearchTerm, isEditing, setIsEditing, setEditIndex }) {
    return (
        <div>

            <form onSubmit={addTodos} style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
                gap: "10px",
            }}>
                <input
                    type="text"
                    placeholder="Write Your Task here..."
                    autoFocus
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{
                        fontSize: "1.5rem", padding: "1rem", width: "500px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                    }}
                />
                <button style={{ fontSize: "1rem", margin: ".5rem", padding: "1rem 2rem", cursor: "pointer" }} type="submit">{isEditing ? "Update" : "Add"}</button>

            </form>
            <input
                type="text"
                placeholder="Search Your Task.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    fontSize: "1.2rem", padding: "1rem", width: "400px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                }}
            />

        </div>
    );
}

export default TodoForm;