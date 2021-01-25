// import React from "react";
import React, { useState, useEffect } from 'react'
import buttonCss from "./Css/button.css"

export default function TableData() {

    const [todo, setTodo] = useState([
        {
            name: "Ankit",
            todo: "Hi ankit last task"
        },
        {
            name: "Ankur",
            todo: "Hi Ankur last task"
        },
    ])
    const [name, setName] = useState(null)
    const [ntodo, setNTodo] = useState(null)

    const deleteTodo = (e) => {
        let newState = todo.filter((item, index) => index != e.target.name)
        setTodo(
            newState
        )
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeTodo = (e) => {
        setNTodo(e.target.value)
    }

    const addTodo = (e) => {
        let obj = {}
        obj.name = name
        obj.todo = ntodo
        console.log(obj)
        setTodo(
            [...todo, obj]
        )
        setName('')
        setNTodo('')
    }

    // useEffect(() => {
    //     setName(null)
    //     setNTodo(null)
    // }, [])

    let data = todo.map((item, index) =>
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.todo}</td>
            <td><button class="button button1" name={index} onClick={deleteTodo}>-</button></td>
        </tr>
    )

    return <> { data}

        <tr key={33}>
            <td>
                <input type="text" name="name" value={name} onChange={handleChangeName} />
            </td>
            <td>
                <input type="text" name="ntodo" value={ntodo} onChange={handleChangeTodo} />
            </td>
            <td><button class="button button1" onClick={addTodo}>+</button></td>
        </tr>

    </>

}