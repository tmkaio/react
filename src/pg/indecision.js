console.log("Running...");



var app = {
    title: "Indecision App",
    options: [],
    subtitle: "App's Subtitle"
}

function getOptions(options) {
    if(options && options.length > 0){
        return "There are options";
    }else {
        return "There is no options!";
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        newRenderFunction();
    }
};

const removeAll = () => {
    app.options = [];
    newRenderFunction();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
}

var appRoot = document.getElementById("app");

const newRenderFunction = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{getOptions(app.options)}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>RemoveAll</button>
            <ol>
                {
                    app.options.map((haha) => <li key={haha}>{haha}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>  
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}
newRenderFunction();
