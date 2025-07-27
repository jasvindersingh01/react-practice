import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, completeTodo}) {
    if (todos.length === 0) {
        return (
            <div className="flex justify-center mt-4">No Todos yet..</div>
        )
    }
    else {
        return (
            <div className="max-w-lg w-full mx-auto mt-4">
                <ul className="space-y-2 mt-10"   >
                    {todos.map((todo, index) => (
                        <TodoItem key={index}
                        index={index}
                         todo={todo}
                         deleteTodo={deleteTodo}
                         completeTodo={completeTodo}
                         />
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoList;