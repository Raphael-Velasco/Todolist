import React, {Component} from 'react'
import "./App.css"

class ToDoList extends Component {

  state = {
    tarefa: "",
    lista: []
  }
  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    })
  }

  handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      this.add()
    }
  }
  add = () => {
    let {lista, tarefa} = this.state
    if (tarefa.length !== 0 || null) {
      this.setState({
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now()
        }),
        tarefa: ""
      })
    }
  }

  remove = (id) => {
    let {lista} = this.state
    this.setState({
      lista: lista.filter((item) => (
        item.id !== id
        ))
    })
  }

  render() {
    let {handleChange, add, remove, handleKeyDown} = this
    let {tarefa, lista} = this.state
    return (
        <div className="container">
        <div>
          <h1>ToDo List</h1>
            <input value = {tarefa} onKeyDown={handleKeyDown} onChange ={handleChange}/>  
            <button onClick = {add}>Add</button>
            {lista.map((item) => (
              <ul>
                <li> {item.tarefa} </li>
                <button onClick = {() => remove(item.id)}> x </button>   
              </ul>
            ))
            } 
          </div>
        </div>
      )
    }
  }

export default ToDoList;