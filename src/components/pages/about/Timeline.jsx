import "../../../styles/components/Timeline.css";

const timelineData = [
  {
    date: "2022 - 2026",
    title: "B.E. Computer Science",
    subtitle: "Anna University",
    desc: "Focusing on Data Structures, Algorithms, and Web Engineering. Lead developer for the college tech club.",
  },
  {
    date: "2020 - 2022",
    title: "Higher Secondary (HSC)",
    subtitle: "State Board",
    desc: "Specialized in Mathematics and Computer Science. Graduated with distinction.",
  },
];

const Timeline = () => {
  return (
    <section className="timeline-section section-pad">
      <div className="container">
        <div className="section-title center">
          <h3>My Journey</h3>
          <h2>Education & Experience</h2>
        </div>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
