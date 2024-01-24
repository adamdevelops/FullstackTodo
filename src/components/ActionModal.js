import { useState, useEffect } from 'react';
import React, { useCallback, useRef } from 'react';
// import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function ActionModal({todo, action, openActionModal, setOpenModal, EditTodo, DeleteTodo}){
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
      };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        console.log('handleOpen called')
        setOpen(true);
    }
    function handleClose () {
        console.log('handleClose called')
        setOpenModal(false);
    }

    const [todoType, setTodoType] = React.useState('');
    const [newTodo, setNewTodo] = React.useState('');
    const [todoInput, setTodoInput] = React.useState('');


    useEffect(() => {
        console.log('useEffect called')
        console.log('todo', todo)

        // Set inital value of input field to edit todo
        setTodoInput(todo.title)
        if(openActionModal){
            // Set TodoType so we can later modify which modal to display based on the action the user chose
            setTodoType(action)
            console.log('trigger useEffect open')
            handleOpen();
        }
    },[openActionModal])


    let title, body;
    
    function updateTodo(event) {
        setTodoInput(event.target.value)     
        console.log('edit todo change', todoInput)   
    }

    const handleEdit = useCallback((event) => {
        event.preventDefault();
        console.log('todoInput in handleedit', todoInput)
        let editted_todo = todo;
        editted_todo.title = todoInput;
        console.log('edit_todo', editted_todo)
        
        EditTodo(todo)

        handleClose()
    }, [todo, todoInput, open])

    const handleDelete = useCallback(() => {
        handleClose()
        DeleteTodo(todo.id)
    }, [todo])

    // const { register, handleSubmit, watch, formState: { errors } } = useForm<MyInputTypes>();


    if(todoType === "edit"){
        title = "Edit Todo";
        body = <form>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <input name="todo_area" defaultValue={todo.title} onChange={updateTodo} ></input>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleClose} type='button'>Cancel</button>
                    </Typography>
                </form>
    } else{
        title = "Delete Todo";
        body = <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Are you sure you want to delete todo?
                    <Button onClick={handleDelete}>Yes</Button><Button onClick={handleClose}>No</Button>
                </Typography>
    }
    

    return(
        <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
                </Typography>
                {body}
            </Box>
            </Modal>
        </div>
    )
}

export default ActionModal;