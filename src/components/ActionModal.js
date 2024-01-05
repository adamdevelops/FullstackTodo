import { useState, useEffect } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function ActionModal({action, openActionModal}){
    
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

    // console.log('todoAction', props.action) 
    console.log('openActionModal', openActionModal) 

    const [open, setOpen] = React.useState(openActionModal);
    setOpen(openActionModal)
    console.log('initial open state', open)

    const handleOpen = () => {
        console.log('handleOpen called')
        // if(open === true){
        //     return;
        // }
        setOpen(true);
    }
    function handleClose () {
        console.log('handleClose called')
        // if(open === false){
        //     return;
        // }
        setOpen(false);
        console.log('open', open)
    }

    const [todoType, setTodoType] = React.useState(action);

    // Open Modal if button if one of buttons are clicked in the todo
    // if(openActionModal ){
    //     handleOpen();
    // }


    let title, body;
    

    if(todoType === "edit"){
        title = "Edit Todo";
        body = <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input></input>
                    <button>Edit</button>
                    <button>Cancel</button>
                </Typography>
    } else{
        title = "Delete Todo";
        body = <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Are you sure you want to delete todo?
                    <Button onClick={handleClose}>Yes</Button><Button onClick={() => handleClose()}>No</Button>
                </Typography>
    }

    return(
        <div>
            <Button onClick={handleOpen}>OPEN MODAL</Button>
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