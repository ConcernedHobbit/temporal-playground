import { useState } from "react";
import "./App.css";
import CurrentTime from "./components/CurrentTime";
import DateExample from "./components/DateExample";
import TimestampExample from "./components/TimestampExample";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Temporal</h1>
        <h2>
          <CurrentTime />
        </h2>
      </header>

      <TimestampExample />

      <div className="demo">
        <DateExample />
      </div>
    </div>
  );
}

export default App;
