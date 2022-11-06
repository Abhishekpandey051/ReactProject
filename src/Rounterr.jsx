import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Rounterr() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <linl to="/">Home</linl>
              </li>
              <li>
                <linl to="about">About</linl>
              </li>
              <li>
                <linl to="services">Services</linl>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="about">
            <About />
          </Route>
          <Route path="services">
            <Services />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function Home() {
  return <h1>Home</h1>;
}
function Services() {
  return <h1>Services</h1>;
}
function About() {
  return <h1>About</h1>;
}
