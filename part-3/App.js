const App = () => {
    return (
      <div>
        <Person name="Mason" age={21} hobbies={["Coding","Gaming","Tennis"]} />
            <Person name="Chloe" age={20} hobbies={['Reading','Watching scary movies','Shopping']} />
            <Person name="Addyson" age={14} hobbies={['Vollyball','Playing on her phone','Being sassy']} />
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));