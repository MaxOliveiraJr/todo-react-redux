import React, { useEffect, useState } from "react";
import Item from "./components/Item"
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import "./Todo.css"
import Modal from "./components/Modal";

import { createStore } from "redux";
import { Provider } from "react-redux";
import listReducer from "./reducers/listReducer";



const SAVED_ITEMS = "savedItems"

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

function LoadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState) {
        return JSON.parse(actualState);
    } else {
        return [];
    }
}

const store = createStore(listReducer, LoadState());

store.subscribe(() => {

    console.log('oi')
    persistState(store.getState());
})

function App() {

    const [showModal, setShowModal] = useState(false);



    return (
        <div className="container">
            <Provider store={store}>
                <header>
                    <h1>
                        Todo
                    </h1>
                    <button className="addButton" onClick={() => setShowModal(true)}>
                        +
                    </button>
                </header>


                <List ></List>
                {showModal && <Modal closedModal={setShowModal}> <TodoForm closedModal={setShowModal}></TodoForm></Modal>}
            </Provider>
        </div>
    )
}

export default App;
