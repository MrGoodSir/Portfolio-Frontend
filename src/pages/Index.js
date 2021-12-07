import { Link } from "react-router-dom";

function Index(props) {
  const loaded = () => {
    return props.projects.map((project) => (
      <div className="project">
        <Link to={project.URL}>
          <h1>{project.name}</h1>
        </Link>

        <img src={project.image} alt={project.image} />
        <h3>{project.description}</h3>
      </div>
    ));
  };

  const loading = () => {
      return <h1>Loading Projects...</h1>;
  }

  return props.projects ? loaded() : loading();
}

export default Index;
