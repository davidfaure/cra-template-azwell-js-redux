import React from "react";
import logo from "../../assets/images/logo.svg";

function Home() {
  return (
    <header className="App-header">
      <h1>Home</h1>
      <h2>Thanks for using my create react app template</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://davidfaure.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        David Faure
      </a>
    </header>
  );
}

export default Home;
