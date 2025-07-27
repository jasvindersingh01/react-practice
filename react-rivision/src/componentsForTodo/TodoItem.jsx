import React from "react";

function TodoItem({ todo, deleteTodo, completeTodo, index}) {
    return (
        <div >
            <li className={` border-2 m-4 text-2xl p-1.5 pl-3 flex  justify-between items-center shadow ${todo.completed ? "line-through text-gray-400" : ""} `}>
                {todo.text}
                <div>
                <button onClick={() => deleteTodo(index)} 
                    className="cursor-pointer "
                    >❌</button>
                    <button onClick={() => completeTodo(index)} className="cursor-pointer">✅</button>
                    </div>
            </li>
        </div>
    )
}
export default TodoItem;