class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne() {           
        this.setState((previsouState) => {
            return {
                count: previsouState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((previsouState) => {
            return {
                count: previsouState.count - 1
            }
        });
    }
    handleReset() {
        this.setState((previsouState) => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));