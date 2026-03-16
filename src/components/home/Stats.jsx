import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import "../../styles/components/home/Stats.css";

const STATS = [
  { value: "10+", label: "Projects Built" },
  { value: "500+", label: "GitHub Commits" },
  { value: "1+", label: "Years of Learning" },
  { value: "24/7", label: "Open for Work" },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className={`stats ${inView ? "stats--visible" : ""}`} ref={ref}>
      <div className="stats__container">
        <div className="ghs__header">
          <h3 className="ghs__title">Stats</h3>
        </div>

        <div className="stats__grid">
          {STATS.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <h2 className="stats__value">{stat.value}</h2>
              <p className="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
