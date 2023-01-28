import React, { useState } from "react"
import Card from "./Card"
function Modal(props) {




    return (
        <div className="modal" id="modalId" onClick={(e) => { if (e.target.id === 'modalId') props.closedModal(false) }}>
            <Card className="cardModal">
                {props.children}
            </Card>
        </div>
    )
}

export default Modal