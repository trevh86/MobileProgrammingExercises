import React, {Component} from 'react';
import './App.css';
import TodoTable from "./TodoTable";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {description: '', date: '', toDos: []}
    }

    inputChanged = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    addTodo = (event) => {
        event.preventDefault();
        let toDoObject = {};
        toDoObject.description = this.state.description;
        toDoObject.date = this.state.date;
        this.setState({
            toDos: [...this.state.toDos, toDoObject]
        });
    };

    delete = (event) => {
        const index = parseInt(event.target.id);
        this.setState({
            toDos: this.state.toDos.filter((toDo, i) => i !== index)
        })
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Simple To-do list</h2>
                </div>
                <div>
                    <form onSubmit={this.addTodo}>
                        <input type="text" onChange={this.inputChanged}
                               name="description" value={this.state.description}/>
                        <input type="text" onChange={this.inputChanged}
                               name="date" value={this.state.date}/>
                        <input type="submit" value="Add"/>
                    </form>
                </div>
                <TodoTable toDos={this.state.toDos} delete={this.delete}/>
            </div>
        );
    }
}

export default App;