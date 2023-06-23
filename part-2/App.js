const App = () => {
    return (
      <div>
        <Tweet
          username="TheBigJoe"
          name="Joe Smith"
          date="01/31/22"
          message="This version of Twitter is very lame"
        />
        <br />
        <Tweet
          username="Rocketman"
          name="Elon Musk"
          date="04/24/23"
          message="I like Rockets"
        />
        <br />
        <Tweet
          username="NuclearRocketman"
          name="Kim Jong Un"
          date="04/25/23"
          message="My rockets are cooler than Elon's"
        />
      </div>
    );
}
ReactDOM.render(<App />, document.querySelector("#root"));