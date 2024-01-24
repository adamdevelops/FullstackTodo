import { useState, useEffect } from 'react';
import React from 'react';
import ToDoList from './ToDoList';

function ToDoHome(){
    const todoItems = [
        { title: 'new todo!', user: "adam", id: 1 },
        { title: 'new todo!', user: "bob", id: 2 },
        { title: 'new todo!', user: "ralph", id: 3 }
      ]; 
    

    const [items, setItems] = useState(todoItems);
    const [inputText, setInputText] = useState();
    const [editText, setEditText] = useState();

    // useEffect(() => {
    //     if (todoItems) 
    //         setItems([todoItems]);    
    //   }, []);   



    function handleTextareaChange(e){
        setInputText(e.target.value)
    }

    function submit(e){
        const newtodo = { title: inputText, user: "jason", id: 4 }
        setItems(items => [...items, newtodo])
        e.preventDefault();        
    }

    function EditTodo(Todo){
        // console.log('edit')

        console.log('id to edit', Todo)

        const nextTodo = items.map((item, i) => {
            if (i+1 === Todo.id) {
                // Edit chosen item
                let editItem = item;
                editItem.title = Todo.title
                return editItem;
            } else {
                // The rest haven't changed
                return item;
            }
          });
          setItems(nextTodo);
    }

    function DeleteTodo(TodoId){
        // console.log('delete')

        console.log('id to delete', TodoId)

        setItems(items.filter(item => item.id !== TodoId))
        console.log('items', items)
    }


    return (
        <div>
            <h1>TO DOS:</h1>

            <form onSubmit={submit}>
                <input value={inputText} placeholder='enter a new todo here' onChange={handleTextareaChange}/>
                <button>Submit</button>
            </form>

            <ToDoList todos={items} EditTodo={EditTodo} DeleteTodo={DeleteTodo} />
        </div>
    )
}



export default ToDoHome;