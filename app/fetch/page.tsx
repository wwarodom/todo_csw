'use client';

import { useEffect, useState } from "react"

export default function Todo() {

    const [title, setTitle] = useState('');
    const [id, setId] = useState(0);
    const [userId, setUserId] = useState(0);
    const [completed, setCompleted] = useState(false);

    function fetchTodo() {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}` )
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                const {completed, id, title,userId} = json;
                setCompleted(completed);
                setId(id);
                setTitle(title);
                setUserId(userId); 
            });  
    }
 

    return (
        <>
            <h1>Todo:  </h1>
            <div>User id: {userId}</div>
            <h2>title: {title} </h2>
            <div>  
                {(completed)?(
                 <input type="checkbox" name="complete" value="complete"  checked="checked" /> 
                ):(
                 <input type="checkbox" name="complete" value="complete"  checked=""  />   
                )}
                <label htmlFor="complete"> complete </label>              
            </div>
            
            <input
                className="p-2 border-black border-2" 
                type="number" onChange={ (e) => setId(+e.target.value) } />

            <button 
                className="p-2 border-black border-2"
                onClick={fetchTodo}
                >Fetch</button>
        </>
    )
}
