import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    description: "",
    URL: "",
  });

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createProjects(newForm);
    setNewForm({
      name: "",
      image: "",
      description: "",
      URL: "",
    });
  };

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.URL}
          name="URL"
          placeholder="URL"
          onChange={handleChange}
        />
        <input type="submit" value="Create Project.... -.-" />
      </form>
      {props.projects ? loaded() : loading()}
    </section>
  );
}

export default Index;
