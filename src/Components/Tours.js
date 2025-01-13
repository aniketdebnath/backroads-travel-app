import { tourLinks } from "../data";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title="our" subtitle="tours" />
      </div>

      <div className="section-center featured-center">
        {tourLinks.map((link) => {
          return (
            <article className="tour-card" key={link.id}>
              <div className="tour-img-container">
                <img src={link.image} className="tour-img" alt={link.title} />
                <p className="tour-date">{link.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{link.title}</h4>
                </div>
                <p>{link.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {link.location}
                  </p>
                  <p>{link.days} days</p>
                  <p>${link.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
