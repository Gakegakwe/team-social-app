import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Question from "./questions";

interface SignProps {
  name?: any;
  value?: any;
  history?:any;
}
interface SignState {
  username: string;

  errors: {
    username: string;
  };
}
export class RegisterForm extends React.Component<SignProps, SignState> {
  constructor(props: SignProps) {
    super(props);

    const intialState = {
      username: "",

      errors: {
        username: "",
      },
    };
    this.state = intialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;

    let errors = this.state.errors;
    if (value.length < 5) {
      errors.username = "Username must be at least 5 characters long!";
    } else if (value.length > 14) {
      errors.username = "Username must be at most 14 characters long!";
    } else if (value.length < 1) {
      errors.username = "Username cannnot be empty ";
    }

    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    let success = true;
   // const history = useHistory();
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (success = false)
    );
    if (success === true) {
      console.log("Game Starting");
     this.props.history.push('/questions')
    } else {
      console.log("Game failed to start");
     // history.push("/");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <BrowserRouter>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" onChange={this.handleChange} />

          <button disabled={false}>Start Game</button>
          <div>
            {errors.username.length > 0 && (
              <span style={{ color: "red" }}>{errors.username}</span>
            )}
          </div>
        </form>
        <Switch>
          <Route path="/Question">
            <Question />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RegisterForm;
