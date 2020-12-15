import './App.css';
import React from 'react'
import ButtonElement from './components/buttomElement/buttonElement'
import TaskCreationForm from './components/taskForm/taskForm'
import TaskCard from './components/taskElement/taskCard'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
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
          type: "Design",
          priority: 'medium'
        }
      }],
      editId: '',
    };
  }

  openModalHandler = (event) => {
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }));
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

  deleteTask = (id) => {
    const items = this.state.toDoList.filter(item => item.id !== id);
    this.setState({ toDoList: items });
  }

  editTask = (id) => {
    const index = this.state.toDoList.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.setState({ toDoItem: this.state.toDoList[index].item, editId: this.state.toDoList[index].id })
      console.log('toDiItem', this.state.toDoItem);
      console.log('editId', this.state.editId);
      console.log('toDoList', this.state.toDoList[index].id);
      this.openModalHandler();
    }
  }

  formSubmit = (event, id) => {
    event.preventDefault();
    id = this.state.editId
    if (this.state.toDoItem.firstName
      && this.state.toDoItem.lastName
      && this.state.toDoItem.taskName
      && this.state.toDoItem.type
      && this.state.toDoItem.email
      && this.state.toDoItem.fromName
      && this.state.toDoItem.toName) {
      if (id) {     
        const index = this.state.toDoList.findIndex((item) => item.id === id);
        const newList =[...this.state.toDoList]
        newList.splice(index, 1, { item: this.state.toDoItem, id: Date.now() })
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
        }
        this.setState({ toDoList: newList, toDoItem: newToDoItem, editId: '' })
        this.openModalHandler()
      } else {
        console.log('this is new');
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
        this.openModalHandler()
      }
    }
  }


  render() {
    console.log('state', this.state);
    return (
      <div className="App">
        <br />
        <br />
        {this.state.openModal ? <TaskCreationForm
          data={this.state.toDoItem}
          checkboxHandler={this.handeCheckBox}
          handler={this.inputChangeHandler}
          submit={this.formSubmit}
          close={this.openModalHandler}
        />
          : <>
            <div className='open-modal'>
              <ButtonElement className='modal-button' onClick={this.openModalHandler} />
            </div>
            {this.state.toDoList.map((List) => (
              <TaskCard
                deleteButton={this.deleteTask}
                editButton={this.editTask}
                data={List} />))}
          </>}
      </div>


    )
  }
}

export default App;
