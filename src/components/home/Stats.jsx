import "@/styles/components/Stats.css";
import { useEffect, useRef } from "react";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__grid">
          <div className="stats__item">
            <h2 className="stats__value">4+</h2>
            <p className="stats__label">Real World Projects</p>
          </div>

          <div className="stats__item">
            <h2 className="stats__value">100%</h2>
            <p className="stats__label">Job Success Score</p>
          </div>

          <div className="stats__item">
            <h2 className="stats__value">500+</h2>
            <p className="stats__label">Commits this Year</p>
          </div>

          <div className="stats__item">
            <h2 className="stats__value">24/7</h2>
            <p className="stats__label">Open for Work</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
