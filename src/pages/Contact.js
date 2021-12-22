function Contact() {
  return (
    <section className="contactPageSection">
      <section className="contactPageIcons">
        <a
          className="contactFlexContainer"
          href="https://www.facebook.com/daniel.hill.73932646"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contactMeIcon" src="/images/facebook.png" alt="" />
        </a>
        <a
          className="contactFlexContainer"
          href="https://github.com/MrGoodSir"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contactMeIcon" src="/images/github.png" alt="" />
        </a>
        <a
          className="contactFlexContainer"
          href="https://www.linkedin.com/in/daniel-hill-242152217/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contactMeIcon" src="/images/linkedin.png" alt="" />
        </a>
        <a
          className="contactFlexContainer"
          href="mailto:daniel.s.hill01@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contactMeIcon" src="/images/gmail.png" alt="" />
        </a>
      </section>
      <h1>
        Lets keep this simple. Pick your prefered way of contact, and lets talk!
      </h1>
    </section>
  );
}

export default Contact;
