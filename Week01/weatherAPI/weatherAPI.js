class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', weather: ''};
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=31fe7dfceb5ca14e5920f5320102ed4b&units=metric')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    temperature: responseData.main.temp,
                    weather: "http://openweathermap.org/img/w/" + responseData.weather[0].icon + ".png"
                });
            });
    }

    render() {
        return (
            <div>
                <div>Temperature: {this.state.temperature}</div>
                <div><img src={this.state.weather} /></div>
            </div>
        );
    }
}

ReactDOM.render(<Weather />, document.getElementById('root'));