import React from "react";
import logo from "../../assets/images/logo.svg";

function Home() {
  return (
    <header className="App-header">
      <h1>Home</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.jsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Home;
