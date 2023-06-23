const Person = (props) => {
    return (
      <div>
        <p>Learn some more information about this person</p>
        <ul>
          <li>Name: {props.name.slice(0, 6)}</li>
          <li>Age: {props.age}</li>
        </ul>
        <h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
        <ul>
          Hobbies:
          {props.hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    );
}