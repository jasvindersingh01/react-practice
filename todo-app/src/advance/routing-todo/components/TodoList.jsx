import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("todos") || "[]");
        setTodos(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodos = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;

        if (isEditing) {
            todos[editIndex].text = task;
            setTodos([...todos]);
            setIsEditing(false);
            setEditIndex(null);
            setTask("");
        }
        else
        {
            setTodos([...todos, { text: task, completed: false }]);
            setTask("");
        }
    };

    const deleteTodos = (index) => {
        const update = todos.filter((_, i) =>
            i !== index
        );
        setTodos(update)
    }

    const taskCompleted = (index) => {
        const done = todos.map((item, i) =>
            i === index
                ? { ...item, completed: !item.completed }
                : item
        );
        setTodos(done)
    }
    const editTodos = (index) => {
        setTask(todos[index].text);
        setIsEditing(true);
        setEditIndex(index);
    }

    const filteredTodos = todos.filter((item) =>
        item.text.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    return (
        <div style={{ textAlign: "center" }}>
            <h1>📝 Todo List</h1>
            <TodoForm
                task={task}
                setTask={setTask}
                addTodos={addTodos}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                isEditing={isEditing}
            />

            <ul style={{
                listStyle: "none", padding: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px"
            }}>
                {
                    filteredTodos.length === 0 && searchTerm.trim() !== "" ? (
                        <p>No Todos Found..</p>
                    ) : (
                        filteredTodos.map((item, index) => (
                            <TodoItem
                                key={index}
                                item={item}
                                index={index}
                                deleteTodos={deleteTodos}
                                taskCompleted={taskCompleted}
                                editTodos={editTodos}
                            />
                        )
                        ))}
            </ul>
        </div>
    );
}

export default TodoList;