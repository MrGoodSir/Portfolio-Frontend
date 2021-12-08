import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
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
  );
}

export default Header;
