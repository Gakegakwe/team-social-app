import { Route, useHistory, Redirect, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Question from "./questions";

export default function App() {
  const history = useHistory();

  function handleSubmit(event: any) {
    history.push("/questions");

    console.log("starting");
    event.preventDefault();
    return <Redirect to="/login" />;
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    console.log(name, value);

    

  if (value.length<5) {
    console.log('Your Nickname cant be less than 5 characters')
    errors.Name = 'Your Nickname cant be less than 5 characters';
    console.log(errors.Name)
  } else if (value.length > 14) {
    console.log('Name cannot exceed 20 characters')
    errors.Name = 'Name cannot exceed 20 characters';
  }

return errors;
  }

  return (
    
    <div className="App">
      <Router>
        <h1> Team Social Quiz App</h1>
        <form>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" onChange={handleChange} />
          {console.log(errors.Name)}
          <button onClick={handleSubmit}>Start Game</button>
        </form>
<div/>
        <Route path="/questions" component={Question} />
      </Router>
    </div>
  );
}
