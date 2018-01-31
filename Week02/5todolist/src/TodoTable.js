import React, {Component} from 'react';
import './App.css';

class TodoTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Description:</th>
                        <th>Date:</th>
                    </tr>
                    {this.props.toDos.map((item, index) =>
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <td>
                                <button onClick={this.props.delete} id={index}>Delete</button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        );
    }
}

export default TodoTable;