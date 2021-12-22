function Index(props) {
  const loaded = () => {
    return props.projects.map((project) => (
      <div key={project._id} className="projectList">
        <div className="projectListLeft">
          <img src={project.image} alt={project.name} />
        </div>
        <div className="projectListRight">
          <div className="projectListRightTop">
            <h1 style={{fontSize: "45px"}}>{project.name}</h1>
            <h3 className="indexDescription">{project.description}</h3>
          </div>
          <div className="projectListRightBottom">
            <div className="indexButton">
              <a
                className="projectRepoLink projectButton"
                href={project.gitHubURL}
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </div>
            <div className="indexButton">
              <a
                className="projectLink projectButton"
                href={project.URL}
                target="_blank"
                rel="noreferrer"
              >
                Project Site
              </a>
            </div>
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
      {props.projects ? loaded() : loading()}
    </section>
  );
}

export default Index;
