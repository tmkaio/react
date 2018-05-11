let show = false;

const showHide = () => {
    show = !show;
    render();
};



const appRoot = document.getElementById("app");
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showHide}>{ show ? "Show Details" : "Hide Details"}</button>

            {show ? <div><p>Run!</p></div> : false}
        </div>
    )
    ReactDOM.render(template, appRoot);
}
render();