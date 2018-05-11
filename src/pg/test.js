
var username = {
    "organizationId": 1,
    "username": "9-Nellie.Torphy",
    "password": "password"
};
json_version = JSON.stringify(username);

alert(json_version);


const api_login = (data) => {
    "use strict";

console.log("Running...");

var app = {
    title: "Indecision App",
    options: [],
    subtitle: "App's Subtitle"
};

function getOptions(options) {
    if (options && options.length > 0) {
        return "There are options";
    } else {
        return "There is no options!";
    }
}

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        newRenderFunction();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    newRenderFunction();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(option);
};

var appRoot = document.getElementById("app");

var newRenderFunction = function newRenderFunction() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            getOptions(app.options)
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "RemoveAll"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (haha) {
                return React.createElement(
                    "li",
                    { key: haha },
                    haha
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
newRenderFunction();

    var xhttp = new XMLHttpRequest();
    return xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            return this.responseText;
        }
    };
    xhttp.open("POST", "https://api.ottolearn-alpha.io/authenticate/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);
  
}



