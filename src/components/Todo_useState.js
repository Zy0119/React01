import React, { useState } from 'react'

const Todo_useState = () => {
    const [todos, setTodos] = useState([])

    const [input, setInput] = useState('')

    const addTodo = () => {
        if (input.trim() !== '') {
            setTodos([input, ...todos])
            setInput('')
        }
    }
    const delTodo = (index) => {
        setTodos(todos.filter(todo => todo !== index))
    }
    return (
        <div>
            <h1>Todo-List</h1>
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ここに入力してください"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => delTodo(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo_useState