import { useState, useEffect } from "react";

function TodoApp() {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos && storedTodos !== "[]") {
            const parsedTodos = JSON.parse(storedTodos);
            try {

                if (Array.isArray(parsedTodos)) {
                    setTodoList(parsedTodos);
                }
            } catch (error) {
                console.log("Failed to parse todos!", error)
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

    const taskSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        setTodoList([...todoList, { text: task, completed: false }]);
        setTask("");
    }

    const handleDelete = (index) => {
        const newList = todoList.filter((_, i) => i !== index);
        setTodoList(newList);
    }

    const toggleCompleted = (index) => {
        const update = todoList.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setTodoList(update);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>📝 Todo List</h1>
            <form onSubmit={taskSubmit} style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
                gap: "10px",
            }}>
                <input
                    type="text"
                    placeholder="Write Your Task here..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{
                        fontSize: "1.5rem", padding: "1rem", width: "500px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                    }}
                />
                <button style={{ fontSize: "1rem", margin: ".5rem", padding: "1rem 2rem", cursor: "pointer" }} type="submit">Add</button>
            </form>

            <ul style={{
                listStyle: "none", padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px"
            }}>
                {todoList.map((item, index) => (
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
                            <button onClick={() => handleDelete(index)} style={{ cursor: "pointer" }}>❌</button>
                            <button onClick={() => toggleCompleted(index)} style={{cursor:"pointer", marginLeft:"10px"}}>✅</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;