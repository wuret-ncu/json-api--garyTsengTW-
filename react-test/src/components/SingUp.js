import React, { useEffect, useState } from 'react';
import './SingUp.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Data(props) {
    const [data, setData] = useState("")
    const name = props.name;
    const accounts = props.accounts;
    const handleChange = props.handleChange;

    useEffect(() => {
        if (data)
            handleChange(name, data)
    }, [data])

    function valid(target){
        let legal = true;
        if(target == "暱稱"){
            for(let i = 0; i < props.accounts.length; i++){
                if(props.accounts[i].name == data)
                    legal = false;
            }
        }
        if(target == "帳號"){
            for(let i = 0; i < props.accounts.length; i++){
                if(props.accounts[i].account == data)
                    legal = false;
            }
        }
        if(target == "密碼"){
            if(data.length < 8)
                legal = false;
        }
        return legal;
    }

    return (
        <div className="singUpData">
            <span>{props.name}: </span>
            {props.name == "密碼"? <input type="password" onChange={(e) => { setData(e.target.value); }} /> 
                                : <input type="text" onChange={(e) => { setData(e.target.value); }} />}
            <span className="notice">{valid(props.name) ? "" : props.notice}</span>
        </div>
    )
}

function SingUp(props) {
    const [acc, setAcc] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [singUped, setSingUped] = useState(false);
    function handleChange(target, data) { //處理使用者輸入的資料
        target == "暱稱"? setName(data) 
        : target == "帳號"? setAcc(data)
        : setPwd(data);
    }
    // const handleChange = (name, data) =>{
    //     console.log(name + ":" + data)
    // }



    const dataList = props.name.map(value =>
        <Data key={value.name} name={value.name} notice={value.notice} handleChange={handleChange} accounts={props.accounts}/>)
    // useEffect(() => {
    //     return (() => {
    //         console.log("bye")
    //     });

    // }, []); 
    function handleValid(){ //驗證註冊帳密是否符合資格
        let legal = true;

        for(let i = 0; i < props.accounts.length; i++){
            if(props.accounts[i].account == acc)
                legal = false;
        }

        for(let i = 0; i < props.accounts.length; i++){
            if(props.accounts[i].name == name)
                legal = false;
        }

        if(pwd.length < 8)
                legal = false;

        if(legal){
            props.addAccount({name:name, account:acc, password:pwd});
            setSingUped(true);
        }
    }

    return (
        <div className="singUp">
            <div className="singUpTitle">
                <span>Sing Up</span>
                <Link to="singInPage" className="singUpLink" onClick={props.onClick}>已註冊</Link>
            </div>
            {dataList}
            <button type="submit" className="sumbitBtn" onClick={handleValid}>送出</button>
            {singUped? <span className="notice">註冊成功!</span> : <span></span>}
        </div>

    )
}

export default SingUp;