import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import SingIn from './components/SingIn.js'
import SingUp from './components/SingUp.js'
import ToDoListComponent from './components/ToDoListComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      singUp:[{name:"暱稱", notice:"暱稱重複"},{name:"帳號",notice:"帳號重複"}, {name:"密碼", notice:"請混合使用 8 個字元以上的英文字母、數字和符號"}],
      singIn:["帳號", "密碼"],
      accounts:[{name:"YT", account:"WULAB", password:"123"}]
    };
    this.addAccount = this.addAccount.bind(this);
  }

  addAccount(newAccount){
    let joined = this.state.accounts.concat(newAccount);
    this.setState({ accounts: joined })
  }
  //lifecycle
  // componentDidMount(){
  //   console.log("Welcome~~")
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.check !==this.state.check)
  //     console.log(prevState.check)
  //     // console.log("Update")
  // }

  render(){
    return (
      <Router>
        <div className="outline">
          <Switch>
            <Route exact={true} path="/">
              <Nav text={"Welcome!"}/>
              <SingIn name={this.state.singIn} accounts={this.state.accounts} />
            </Route>
            <Route exact={true} path="/singInPage">
              <Nav text={"Welcome!"}/>
              <SingIn name={this.state.singIn} accounts={this.state.accounts}/>
            </Route>
            <Route exact={true} path="/singUpPage">
              <Nav text={"Welcome!"}/>
              <SingUp name={this.state.singUp} accounts={this.state.accounts} addAccount={this.addAccount}/>
            </Route>
            <Route exact={true} path="/toDoListPage">
              <ToDoListComponent/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;