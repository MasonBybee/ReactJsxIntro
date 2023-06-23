const Tweet = ({ username, name, date, message }) => {
    return (
      <div>
        <b>
          {name}
        </b>
         ({username})({date})
        <p>{message}</p>
      </div>
    );

}