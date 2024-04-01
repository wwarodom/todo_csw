'use client';

import { useEffect, useState } from "react"

export default function Todo() {

    const [todos, setTodos] = useState([
        { id: 1, name: "Go to Fitness", time: 1.5 },
        { id: 2, name: "Have lunch", time: 1 },
        { id: 3, name: "Writing code", time: 2 },
    ]);

    const [name, setName] = useState('');
    const [time, setTime] = useState(0);

    function addTodo() {
        // todos.push({ id: todos.length+1, name, time}); // Not work  
        const id = (todos.length)?todos[todos.length - 1].id + 1 : 1;
        setTodos([...todos, { id, name, time }]);
        console.log("Print:", todos);
    }

    function editTodos(id: number) { 
        const editId = todos.findIndex( (item) => ( +item.id === id )   )
        console.log("Edit id: ", editId);
        setName(todos[editId].name);
        setTime(todos[editId].time);
    }

    function deleteTodos(id: number) {
        setTodos(todos.filter((item) => (+item.id !== +id)))
    }


    return (
        <>
            <h1>Todo</h1>
            <ul>
                {
                    todos.map((item, index) => (
                        <li key={index}>{item.id}: {item.name} : {item.time}
                            <button className="border-2 border-black m-2"
                                onClick={() => editTodos(item.id)}
                            >
                                Edit
                            </button>
                            <button className="border-2 border-black m-2"
                                onClick={() => deleteTodos(item.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>

            <hr />
            <section className="w-80 m-auto">
                <h2 className="text-xl mt-4">Add todo</h2>
                <div>
                    <div>Name: </div>
                    <div className="border-2 border-black">
                        <input
                            className="w-72 h-8 p-2"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div>Time: </div>
                    <div className="border-2 border-black">
                        <input className="w-72 h-8 p-2"
                            type="number"
                            onChange={(e) => setTime(+e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button
                        className="border-2 border-black mt-4 p-2 rounded-lg text-xl"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>
            </section>

            <hr />
            <section className="w-80 m-auto">
                <h2 className="text-xl mt-4">Edit todo</h2>
                <div>
                    <div>Name: </div>
                    <div className="border-2 border-black">
                        <input
                            className="w-72 h-8 p-2"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            defaultValue={name}
                        />
                    </div>
                </div>
                <div>
                    <div>Time: </div>
                    <div className="border-2 border-black">
                        <input className="w-72 h-8 p-2"
                            type="number"
                            onChange={(e) => setTime(+e.target.value)}
                            defaultValue={time}
                        />
                    </div>
                </div>
                <div>
                    <button
                        className="border-2 border-black mt-4 p-2 rounded-lg text-xl"
                        onClick={addTodo}
                    >
                        Edit
                    </button>
                </div>
            </section>

        </>
    )
}



// function foo() {
//     console.log('foo');
// }

// const foo2 = () => {
//     console.log('foo');
// }