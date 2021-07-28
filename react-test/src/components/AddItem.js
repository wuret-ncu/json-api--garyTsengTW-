import React, {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import './Additem.css'

function AddItem(props){
    const [inputData, setData]=useState("");
    useEffect(() => { //修改部分
        async function fetchData(){ //
            let res = await fetch("http://localhost:3001/json"); //
            let data = await res.json(); // 
            for(let i = 0; i < data.length; i++) //
                props.changeItem(data[i]); //
            console.log(data); //
        } //

        fetchData(); //
    }, []) //
    return(
        <div className="addItemDiv">
            <input  type="text" onChange={(e)=>{setData(e.target.value);}} />
            <button onClick={() => props.changeItem({id:nanoid(), name:inputData, completed:false})}>新增</button>
            <br />
        </div>
    )
}

export default AddItem;