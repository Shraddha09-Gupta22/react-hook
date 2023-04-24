import React, { useState } from "react";

function App() {
  setInterval(click, 1000);
  let [time, getTime] = useState(new Date().toLocaleTimeString("en-GB"));

  function click() {
    getTime(new Date().toLocaleTimeString("en-GB"));
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={click}>Get Time</button>
    </div>
  );
}

export default App;
