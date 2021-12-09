import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeBackground">
      <body className="homePageBody">
        <section className="homePageRight">
          <h1 className="homeH1">
            <div className="homeHey">Hey! </div>I am
          </h1>
          <h1 className="homeName">Daniel Hill</h1>
          <p className="homePageP">
            I am a 20 year old Software Engineer with a family full of
            developers and a background in customer service.
          </p>
          <div className="homePageRightButtons">
            <Link className="homePageProjectsLink" to="/projects">
              Check out my work
            </Link>
            <Link className="homePageContactLink" to="/contact">
              Contact Me
            </Link>
          </div>
        </section>

        <section className="homePageLeft">
          <img className="profilePicture" src="/images/pic.png" alt="" />
        </section>
      </body>
    </div>
  );
}

export default Home;
