function TodoItem({ item, index, deleteTodos, toggleCompleted}) {
    return (
                     <li key={index} style={{
                        textDecoration: item.completed ? "line-through" : "none",
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "2px solid white",
                        padding: "0.8rem 1rem",
                        borderRadius: "8px",
                        width: "500px",
                        backgroundColor: "#222",
                        color: "white"
                    }}>
                        {item.text}
                        <div>
                            <button onClick={() => deleteTodos(index)} style={{ cursor: "pointer" }}>❌</button>
                            <button onClick={() => toggleCompleted(index)} style={{ cursor: "pointer", marginLeft: "15px" }}>✅</button>
                        </div>
                    </li>
    )
}

export default TodoItem;