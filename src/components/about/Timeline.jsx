import "@/styles/components/Timeline.css";
import { FaCalendarDays } from "react-icons/fa6";

const timelineData = [
  {
    date: "2022 - 2026",
    icon: <FaCalendarDays />,
    title: "B.E. Computer Science and Engineering",
    subtitle: "Anna University",
    desc: "Focusing on Data Structures, Algorithms, and Web Engineering. Lead developer for the college tech club.",
  },
  {
    date: "2020 - 2022",
    icon: <FaCalendarDays />,
    title: "Higher Secondary (HSC)",
    subtitle: "State Board",
    desc: "Specialized in Mathematics and Computer Science. Graduated with distinction.",
  },
  {
    date: "2015 - 2020",
    icon: <FaCalendarDays />,
    title: "SSLC",
    subtitle: "State Board",
    desc: "Specialized in Mathematics and Computer Science. Graduated with distinction.",
  },
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="section-title">
          <h3>My Journey</h3>
          <h2>Education & Experience</h2>
        </div>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <div className="timeline-dateaicon">
                  <span className="timeline-icon"> {item.icon}</span>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
