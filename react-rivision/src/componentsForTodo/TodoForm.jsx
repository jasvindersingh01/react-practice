import React from "react";
import { useState } from "react";

function TodoForm({ onAddTodos }) {
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() === "") return;
        onAddTodos(inputText);
        setInputText("");
    }
    return (
<div>
    <form className="flex justify-center items-center mt-25">
        <input 
            type="text"
            placeholder="Write your Todos..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="text-2xl p-4 w-full max-w-md rounded-md border-2 border-gray-300"
        />
        <button 
            onClick={handleSubmit} 
            className="px-6 py-3.5 border-2 ml-3 text-2xl rounded-md cursor-pointer text-white hover:bg-blue-600 transition-colors"
        >
            Add
        </button>
    </form>
</div>
    )
}
export default TodoForm;