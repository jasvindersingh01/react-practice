function TodoItem({ item, index, deleteTodos, taskCompleted, editTodos}) {
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
                        width: "600px",
                        backgroundColor: "#222",
                        color: "white"
                    }}>
                        {item.text}
                        <div>
                            <button onClick={() => deleteTodos(index)} style={{ cursor: "pointer" }}>❌</button>
                            <button onClick={() => taskCompleted(index)} style={{ cursor: "pointer", marginLeft: "10px" }}>✅</button>
                            <button onClick={() => editTodos(index)} style={{cursor:"pointer", marginLeft:"10px"}}>✏️</button>
                        </div>
                    </li>
    )
}

export default TodoItem;