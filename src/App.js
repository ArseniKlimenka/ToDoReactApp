import './App.css';
import React from 'react'
//import ButtonElement from './components/buttomElement/buttonElement'
import TaskCreationForm from './components/taskForm/taskForm'
import TaskCard from './components/taskElement/taskCard'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItem: {
        taskName: '',
        firstName: '',
        lastName: '',
        email: '',
        fromName: '',
        toName: '',
        type: '',
        priority: 'low',
        comment: '',
        report: false,
      },
      toDoList: [{
        id: 1607933895330,
        item: {
          comment: "{toDoItem: {…}, toDoList: Array(0)}↵App.js:54 state {toDoItem: {…}, toDoList: Array(0)}↵",
          email: "a.klimenko@vironit.co.uk",
          firstName: "Arseni",
          fromName: "21421",
          lastName: "Klimenka",
          report: false,
          taskName: "Web dev",
          toName: "213",
          type: "It",
          priority: 'medium'
        }
      }]
    };
  }
  inputChangeHandler = (event) => {
    const toDoItem = { ...this.state.toDoItem };
    toDoItem[event.target.id] = event.target.value;
    this.setState({ toDoItem })
  }
  handeCheckBox = (event) => {
    const toDoItem = { ...this.state.toDoItem };
    toDoItem[event.target.id] = event.target.checked;
    this.setState({ toDoItem })
}


  formSubmit = (event) => {
    event.preventDefault();
    if (this.state.toDoItem.firstName
       && this.state.toDoItem.lastName 
       && this.state.toDoItem.taskName 
       && this.state.toDoItem.type 
       && this.state.toDoItem.email
       && this.state.toDoItem.fromName
       && this.state.toDoItem.toName) {
      const newtoDoList = [
        ...this.state.toDoList,
        { item: this.state.toDoItem, id: Date.now() }
      ];
      const newToDoItem = {
        taskName: '',
        firstName: '',
        lastName: '',
        email: '',
        fromName: '',
        toName: '',
        type: '',
        priority: 'low',
        comment: '',
        report: false,
      };
      this.setState({ toDoList: newtoDoList, toDoItem: newToDoItem })
    }
  }


  render() {
    console.log('state', this.state);
    return (
      <div className="App">
        <br />
        <header className="App-header">
          {this.state.toDoList.map((List) => (<TaskCard data={List} />))}

          <br />
          <TaskCreationForm data={this.state.toDoItem} checkboxHandler={this.handeCheckBox} handler={this.inputChangeHandler} submit={this.formSubmit} />


        </header>
      
      </div>


    )
  }
}

export default App;
