import React from "react";
import { useDispatch } from "react-redux";
import Card from "./Card";
import { changeDone, deleteItem } from "./../actions/listAction"

function DoneImg(props) {
    if (props.done) {
        return (<img src="./assets/doneon.png" alt="done"></img>)
    } else {
        return (<img src="./assets/doneoff.png" alt="undone"></img>)
    }
}

function ListItem(props) {


    const dispatch = useDispatch()
    return (


        < li id={props.item.id} >
            <Card className={props.item.done ? "done item" : "item"}>
                <div> {props.item.text}</div>
                <div>
                    <button onClick={() => dispatch(changeDone(props.item.id))}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => dispatch(deleteItem(props.item.id))}><img style={{ width: '100%', height: '100%' }} src="./assets/bin.png" alt="delete"></img> </button>
                </div>
            </Card>
        </li >

    )
}

export default ListItem

