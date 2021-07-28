import React from 'react';
import './ToDoListComponent.css';
import Nav from './Nav.js'
import AddItem from './AddItem.js'
import ListOfButton from './ListOfButton.js'
import ToDoList from './ToDoList.js'
import {nanoid} from 'nanoid';

class toDoListComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      task:[{id:nanoid(), name:"跑步", completed:false},
            {id:nanoid(), name:"洗浴室", completed:false},
            {id:nanoid(), name:"讀書", completed:false}],
      taskCompleted:[],
      taskNotCompleted:[],
      showState:"all",
    };
    this.changeItem = this.changeItem.bind(this);
    this.findAndDelete = this.findAndDelete.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
    this.showNotCompleted = this.showNotCompleted.bind(this);
    this.showAll = this.showAll.bind(this)
  }
  //lifecycle
  // componentDidMount(){
  //   console.log("Welcome~~")
  // }
  // componentDidUpdate() {
  //   console.log("Update")
  // }

  changeItem(newTask){ //新增to-do list item
    var joined = this.state.task.concat(newTask);
    this.setState({ task: joined })
    //this.setState({ task: [...this.state.task, newTask] });
    //this.setState({task:this.state.task});
    if(this.state.showState == "completed"){
      joined = joined.filter(item => item.completed == true);
      this.setState({taskCompleted : joined});
    }
    else if(this.state.showState == "notCompleted"){
      joined = joined.filter(item => item.completed == false);
      this.setState({taskNotCompleted : joined});
    }
  }

  findAndDelete(e){ //找到要刪除的object並且刪除
    let targetIndex;
    for(let i = 0; i < this.state.task.length; i++)
    {
      if(this.state.task[i].id == e.target.id)
      {
        targetIndex = i;
      }
    }
    let array = [...this.state.task];
    array.splice(targetIndex, 1);
    this.setState({ task: array });
    if(this.state.showState == "completed"){
      array = array.filter(item => item.completed == true);
      this.setState({taskCompleted : array});
    }
    else if(this.state.showState == "notCompleted"){
      array = array.filter(item => item.completed == false);
      this.setState({taskNotCompleted : array});
    }
  }
  
  changeCheckbox(e){ //改變completed為true或false
    console.log(e.target.name);
    let targetIndex;
    for(let i = 0; i < this.state.task.length; i++) //找到目標index
    {
      if(this.state.task[i].id == e.target.name)
      {
        targetIndex = i;
      }
    }
    let array = [...this.state.task]; //複製
    array[targetIndex].completed = e.target.checked;
    this.setState({ task: array });
  }

  showCompleted(){ //把原task陣列filter，由taskCompleted接收
    let array = this.state.task.filter(item => item.completed == true);
    this.setState({taskCompleted : array});
    this.setState({showState:"completed"});
  }

  showNotCompleted(){ //把原task陣列filter，由taskNotCompleted接收
    let array = this.state.task.filter(item => item.completed == false);
    this.setState({taskNotCompleted : array});
    this.setState({showState:"notCompleted"});
  }

  showAll(){
    this.setState({showState:"all"});
  }

  render(){
    return (
      <div className="outline">
        <Nav text={"To-Do-List!"}/>
        <AddItem name={this.state.task} changeItem={this.changeItem} />
        <ListOfButton showCompleted={this.showCompleted} showNotCompleted={this.showNotCompleted} showAll={this.showAll}/>
        {
          this.state.showState == "all"?
          <ToDoList name={this.state.task} findAndDelete={this.findAndDelete} changeCheckbox={this.changeCheckbox}/>
          :this.state.showState == "completed"?
            <ToDoList name={this.state.taskCompleted} findAndDelete={this.findAndDelete} changeCheckbox={this.changeCheckbox}/>
            :<ToDoList name={this.state.taskNotCompleted} findAndDelete={this.findAndDelete} changeCheckbox={this.changeCheckbox}/>
        } 
      </div>
    );
  }
}

export default toDoListComponent;