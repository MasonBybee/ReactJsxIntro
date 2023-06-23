const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name='Mason'/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));