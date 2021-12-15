import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

function Main() {
  const [projects, setProjects] = useState(null);

  const URL = "https://backend-portfolioapp.herokuapp.com/projects";

  const getProjects = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => getProjects(), []);

  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Index projects={projects} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
