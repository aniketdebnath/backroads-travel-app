import aboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <Title title="about" subtitle="us" />
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At Backroads, we believe that travel is more than just visiting new
            places—it's about creating memories that last a lifetime. Our tours
            are designed to offer unique experiences that combine adventure,
            relaxation, and cultural immersion.
          </p>
          <p>
            Whether you're trekking through the mountains of Tibet, savoring the
            flavors of Java, or marveling at the beauty of the Taj Mahal, every
            journey with us is thoughtfully crafted to inspire and delight.
          </p>
          {/* <a href="#" className="btn">
            read more
          </a> */}
        </article>
      </div>
    </section>
  );
};
export default About;
