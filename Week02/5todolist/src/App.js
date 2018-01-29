import React, {Component} from 'react';
import './App.css';

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
                <div>
                    <table>
                        <tr>
                            <th>Description:</th>
                            <th>Date:</th>
                        </tr>
                        {this.state.toDos.map((item, index) =>
                            <tr key={index}>
                                <td>{item.description}</td>
                                <td>{item.date}</td>
                                <td><button onClick={this.delete} id={index} >Delete</button></td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        );
    }
}

export default App;