import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;

//     // {/* <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       hello
//     //     </a>
//     //   </header>
//     // </div> */}
