import React from "react";
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  useHistory,
  Redirect,
  Link,
} from "react-router-dom";
import Question from "./questions";
 
export default function App() {
  const history = useHistory(); 

  
  function handleSubmit(event: any) {
    
    console.log("starting");
    history.push("./questions");
    return <Link to="/Question">Start</Link>;
    
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    console.log(name, value);
  }

  return (
   
    <Router>
      <div className='App'>
        <h1> Team Social Quiz App</h1>
        <form>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" onChange={handleChange} />

          <button onClick={handleSubmit}>Start Game</button>
        </form>
        
      </div>

      
      <Switch>
      <Route path="/question" exact component={Question} />
         </Switch>
        </Router>
        
  );
}
