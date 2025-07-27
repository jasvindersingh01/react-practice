import React from "react";
import { useState, useEffect } from "react";
import TodoForm from "./componentsForTodo/TodoForm";
import TodoList from "./componentsForTodo/TodoList";
import TodoItem from "./componentsForTodo/TodoItem";

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const saveTodos = localStorage.getItem("todos")
        if (saveTodos) {
            try {
                setTodos(JSON.parse(saveTodos))
            }
            catch (error) {
                console.log("Invalid JSON...", error);
                setTodos([])
            }
        }
    }, [])

    useEffect(() => {
        if (todos.length > 0) {
        localStorage.setItem("todos", JSON.stringify(todos))
        }
        else {
            localStorage.removeItem(todos)
        }
    }, [todos])


    const handleAddTodos = (newTodoWork) => {
        const newTodo = { text: newTodoWork, completed: false };
        console.log("SAved todos is local :", newTodo)
        setTodos([...todos, newTodo]);
    }

    const deleteTodo = (index) => {
        const updateTodos = todos.filter((_, i) =>
            i !== index
        )
        setTodos(updateTodos);
    }
    const completeTodo = (index) => {
        const complete = todos.map((item, i) =>
            i === index
                ? { ...item, completed: !item.completed }
                : item
        );
        setTodos(complete)
    }

    return (
        <div>
            <TodoForm onAddTodos={handleAddTodos} />
            <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        </div>
    )
}

export default App;















// import { useState, useEffect } from "react";
// import Dashboard from "./revision/Dashboard";
// import Login from "./revision/Login";


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function toggleLogin() {
//     setIsLoggedIn(!isLoggedIn);
//   }
//   useEffect(() => {
//     document.title = isLoggedIn ? "Welcome back Jasvinder" : "Please log in first"
//   }, [isLoggedIn])

//   return (
//     <div>
//       {isLoggedIn ? (
//         < Dashboard onLogout={() => setIsLoggedIn(false)} /> 
//       ) : (
//         < Login onLogin={() => setIsLoggedIn(true)} />
//       )
//     }
//     </div>
//   )
// }

// export default App;