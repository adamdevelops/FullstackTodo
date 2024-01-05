
import React from 'react';
import ToDoItem from './ToDoItem';


function ToDoList(params){
    
    // const handleDelete = useCallback(() => params.DeleteTodo(params.todo.id), [params])


    const todoItems = params.todos.map( todo_item => 
            <ToDoItem key={todo_item.id} todo={todo_item} EditTodo={params.EditTodo} DeleteTodo={params.DeleteTodo} />
        )

    return(
        <ul>
            {todoItems}
        </ul>
    )
}

export default ToDoList;