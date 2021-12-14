function Header(props) {

  return (
    <body className="nav">
      <section className="navBar">
        <nav className="navBarLeft">
          <a href="/">
            <img className="logoIcon" src="/images/logo.jpg" alt="" />
          </a>
        </nav>
        <nav className="navBarRight">
          <ul className="navMenu">
            <li className="navItem glowButton">
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem glowButton">
              <a href="/projects" className="navLink">
                Projects
              </a>
            </li>
            <li className="navItem glowButton">
              <a href="/about" className="navLink">
                About
              </a>
            </li>
            <li className="navItem glowButton">
              <a href="/contact" className="navLink">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </body>
  );
}

export default Header;
