import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    description: "",
    URL: "",
  });

  const loaded = () => {
    return props.projects.map((project) => (
      <div key={project._id} className="project">
        <Link to={project.URL}>
          <h1>{project.name}</h1>
        </Link>

        <img src={project.image} alt={project.name} />
        <h3>{project.description}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading Projects...</h1>;
  };

  return (
    <section>
      {props.projects ? loaded() : loading()}
    </section>
  );
}

export default Index;
