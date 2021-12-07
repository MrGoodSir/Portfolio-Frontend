import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import About from "../pages/About"
import Contact from "../pages/Contact"

function Main(props) {
    const [projects, setProjects] = useState(null);

    const URL = "http://loaclhost:3001/projects/"

    const getProjects = async => {
        const response = await fetch(URL);
        const data = await response.json();
        setProjects(data);
    }

    useEffect(() => getProjects(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/projects">
                    <Index />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </main>
    )
}

export default Main;