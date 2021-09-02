import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import Question from "./questions";

export default function App() {
  const history = useHistory();

  function handleSubmit(event: any) {
    history.push("./questions");

    console.log("starting");
    event.preventDefault();
    return <Redirect to="/login" />;
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    console.log(name, value);
  }

  return (
    
    <Router>
      <div className="App">
        <h1> Team Social Quiz App</h1>
        <form>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" onChange={handleChange} />

          <button onClick={handleSubmit}>Start Game</button>
        </form>
      </div>

      <Route path="/question" exact component={Question} />
    </Router>
  );
}
