class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtTitle = "Put your life in the hands of a computer";
        const options = ["Thing 1", "Thing 2", "Thing 3","Thing 4"];
        return (
            <div>
                <Header title={title} subtiitle={subtTitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtiitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('mah oi');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {     
        return (
            <div>
                <br />
                There are {this.props.options.length} items on the list
                <ol>
                    { 
                       this.props.options.map((option) => <Option key={option} optionsText={option} />)
                    }
                </ol>
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionsText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        if(option) {
            alert('Added');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" /><button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));