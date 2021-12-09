function About() {
  return (
    <section className="aboutMeSection">
      <div className="aboutMeLeftHalf">
      <h1 className="aboutMeH1">About me</h1>
        <p className="aboutPagePTop">
          My story starts in 2001, in a place called Harrogate England... I am
          kidding. I won't go back that far. Hey, I am Daniel Hill. I recently
          graduated from the Software Engineering Immersive course by General
          Assembly. It was 480 hours total, 40 hours a week, 3 months of
          constant learning. Right before that, I worked in customer service for
          2 years at a regular old grocery store.
        </p>
        <p className="aboutPagePBottom">
          On a more personal note, you may have noticed that a lot of my
          projects are built with a video game in mind. And thats because I love
          video games! I have grown up with video games my entire life. My favorite subject is math, and I love to ride bikes!
        </p>
      </div>
      <img className="aboutMePicture" src="/images/pic2.JPG" alt="" />
    </section>
  );
}

export default About;
