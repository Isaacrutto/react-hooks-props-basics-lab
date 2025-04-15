import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Pass this data down as props to the child component(s) that need it!
import { username, city, bio, github, linkedin } from "../data/user"; // Assuming user is exported as named exports

console.log({ username, city, bio, github, linkedin });

function App() {
  return (
    <div>
      <NavBar />
      <Home name={username} city={city} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
