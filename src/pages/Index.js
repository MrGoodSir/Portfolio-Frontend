function Index(props) {

  const loaded = () => {
    return props.projects.map((project) => (
        <div key={project._id} className="projectList">
          <div className="projectListLeft">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="projectListRight">
            <div className="projectListRightTop">
              <h1>{project.name}</h1>
              <h3>{project.description}</h3>
            </div>
            <div className="projectListRightBottom">
              <a className="projectLink" href={project.URL} target="_blank" rel="noreferrer">
                Check it out
              </a>
            </div>
          </div>
        </div>
    ));
  };

  const loading = () => {
    return <h1>Loading Projects...</h1>;
  };

  return (
    <section className="indexSection">
      <h1 className="indexH1">My Projects</h1>
      {props.projects}
    </section>
  );
}

export default Index;
