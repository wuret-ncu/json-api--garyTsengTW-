import React from 'react';
import './ToDoList.css'


function Data(props) {
    return(
        <div className="toDoListDiv">
            <input type="checkbox" name={props.id} id={props.id+"a"} onChange={props.changeCheckbox} checked = {props.completed? true:false} />
            <label for={props.id+"a"}>{props.name}</label>
            <button>Edit</button>
            <button id={props.id} onClick={props.findAndDelete}>Delete</button>
        </div>
    )
}

function ToDoList(props){
    const dataList = props.name.map(value =>
        <Data key={value.id} name={value.name} id={value.id} completed={value.completed} findAndDelete={props.findAndDelete} changeCheckbox={props.changeCheckbox}/>)
    return(
        <div>
            {dataList}
        </div>
    )
}

export default ToDoList;