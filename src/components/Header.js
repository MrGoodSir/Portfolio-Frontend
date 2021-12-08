import { Link } from "react-router-dom";

function Header(props) {
  return (
    <body className="nav">
      <section className="navBar">
        <nav className="navBarLeft">
          <h1>placeholder</h1>
        </nav>

        <nav className="navBarRight">
          <div className="navButtonSpot">
            <Link className="navLink" to="/">
              <div className="navButton">
                <div>Home</div>
              </div>
            </Link>
          </div>

          <div className="navButtonSpot">
            <Link className="navLink" to="/projects">
              <div className="navButton">
                <div>Projects</div>
              </div>
            </Link>
          </div>

          <div className="navButtonSpot">
            <Link className="navLink" to="/about">
              <div className="navButton">
                <div>About</div>
              </div>
            </Link>
          </div>

          <div className="navButtonSpot">
            <Link className="navLink" to="/contact">
              <div className="navButton">
                <div>Contact</div>
              </div>
            </Link>
          </div>
        </nav>
      </section>
    </body>
  );
}

export default Header;
