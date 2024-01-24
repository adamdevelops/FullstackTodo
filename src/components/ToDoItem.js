import React, { useCallback } from 'react';
import ActionModal from './ActionModal';



function ToDoItem(params){    

    //const handleDelete = useCallback(() => params.DeleteTodo(params.todo.id), [params])

    const [todoAction, setTodoAction] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);


    // onClick={() => params.EditTodo(params.todo.id)}

    return(
        <div>
            <li>
                <p>{params.todo.title} by {params.todo.user} , ID: {params.todo.id}</p>
                <span>Time created: 11/14/23 11:29PM</span>
                <button onClick={() => {
                    setTodoAction('edit'); 
                    setOpenModal(true) }}>Edit</button>
                    <button onClick={() => {
                    setTodoAction('delete'); 
                    setOpenModal(true) }}>Delete</button>
            </li>

            <ActionModal todo={params.todo} action={todoAction} openActionModal={openModal} setOpenModal={setOpenModal} EditTodo={params.EditTodo} DeleteTodo={params.DeleteTodo} />
        </div>
        
    )
}

export default ToDoItem;