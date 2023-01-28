import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./../actions/listAction"

function TodoForm(props) {

    const dispatch = useDispatch()
    const [text, setText] = useState("");


    function handleChange(event) {
        let t = event.target.value;

        setText(t);

    }
    function addItemEvent(event) {
        event.preventDefault();

        if (text) {
            dispatch(addItem(text))
            setText("");
            props.closedModal(false)
        }
    }

    return (
        <form action="">
            <input type="text" onChange={handleChange} value={text}></input>
            <button type="submit" className="" onClick={addItemEvent}>Add</button>
        </form>
    )
}

export default TodoForm;