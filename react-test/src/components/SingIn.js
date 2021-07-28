import React from 'react';
import './SingIn.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { useEffect, useState } from 'react';

function Data(props) {
    
    return (
        <div className="singInData">
            <span>{props.name}: </span>
            {props.name == "帳號"? <input type="text" onChange={ (e) => {props.handleLoginInform("acc", e.target.value)} }  /> 
                                : <input type="password" onChange={ (e) => {props.handleLoginInform("pwd", e.target.value)} }/>}
            <br />
        </div>
    )
}

function SingIn(props) {
    const [acc, setAcc] = useState("");
    const [pwd, setPwd] = useState("");
    const [valid, setValid] = useState(false);
    const [warning, setWarning] = useState(false);
    const dataList = props.name.map(value =>
        <Data key={value} name={value} handleLoginInform={handleLoginInform} />);

    function handleLoginInform(target, value) { //取得使用者輸入的帳號密碼
        target == "acc"? setAcc(value) : setPwd(value);
    }

    function handleValid(){ //驗證帳密
        setWarning(true);
        for(let i = 0; i < props.accounts.length; i++){
            if(props.accounts[i].account == acc)
                if(props.accounts[i].password == pwd)
                    setValid(true);
        }
    }
    
    return (
        <div className="singIn">
            <div className="singInTitle">
                <span>Sing In</span>
                <Link to="singUpPage" className="singInLink">未註冊</Link>
            </div>
            {dataList}
            {valid? < Redirect from="singInPage" to="toDoListPage" />
             : warning? [<button type="submit" className="sumbitBtn" onClick={handleValid} >登入</button>, <span className="notice">帳號或密碼錯誤</span>]
             : <button type="submit" className="sumbitBtn" onClick={handleValid} >登入</button>}
        </div>
    )
}

export default SingIn;