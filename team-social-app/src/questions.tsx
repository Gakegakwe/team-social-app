import React from "react";
import { BrowserRouter } from "react-router-dom";

function Question() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h3>Team Social Quiz App</h3>
        </header>
        <div>
          <h2>Questions</h2>
          <h3>This are your Questions</h3>;
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Question;
