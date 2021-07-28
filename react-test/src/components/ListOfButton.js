import React from 'react';
import './ListOfButton.css'


function ListOfButton(props){
    return(
        <div className="listOfButtonDiv">
            <button onClick={props.showAll} >全部</button>
            <button onClick={props.showCompleted} >已完成</button>
            <button onClick={props.showNotCompleted}>未完成</button>
        </div>
    )
}

export default ListOfButton;