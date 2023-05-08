import React from "react";
import './TodoList.css'

interface TodoListProps {
    items: {id: string, text: string}[]
    onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return(
        <ul>
            {props.items.map(todo => {
                return(
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DEL</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList