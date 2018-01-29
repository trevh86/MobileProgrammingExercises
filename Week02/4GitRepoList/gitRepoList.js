class GitRepoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listItems: []};
    }

    componentDidMount(){
        fetch('https://api.github.com/search/repositories?q=react')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    listItems: responseData["items"],
                })
            })
    }

    inputChanged = (event) => {
        fetch('https://api.github.com/search/repositories?q=' + document.getElementById('input').value)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    listItems: responseData["items"],
                })
            })
    };

    render() {
        const itemRows = this.state.listItems.map((APIs) =>
        <tr key={APIs.id}>
            <td>{APIs.name}</td>
            <td>{APIs.url}</td>
        </tr>
        );

        return (
            <div>
                <h2>API's</h2>
                <input type="text" value={this.state.name} id='input'/>
                <button onClick={this.inputChanged}>Search</button>
                <table>
                    <tbody>
                    <tr><th>Name</th><th>URL</th></tr>
                    {itemRows}
                    </tbody>
                </table>
            </div>
        );
    }


}

ReactDOM.render(<GitRepoList />, document.getElementById('root'));