export default function TrackRecord() {
  return (
    <section className="track-record">
      <h2>Our <span className="accent">Track Record</span> of Excellence</h2>
      <p>Delivering exceptional architectural solutions across Dubai and the UAE</p>
      <div className="track-record__grid">
        <div className="track-record__item">
          <span className="track-record__icon">🏗️</span>
          <span className="track-record__number">1000+</span>
          <span className="track-record__label">Projects</span>
        </div>
        <div className="track-record__item">
          <span className="track-record__icon">⏳</span>
          <span className="track-record__number">15+</span>
          <span className="track-record__label">Years</span>
        </div>
        <div className="track-record__item">
          <span className="track-record__icon">👷‍♂️</span>
          <span className="track-record__number">30+</span>
          <span className="track-record__label">Architects</span>
        </div>
        <div className="track-record__item">
          <span className="track-record__icon">🏆</span>
          <span className="track-record__number">25+</span>
          <span className="track-record__label">Awards</span>
        </div>
      </div>
    </section>
  );
} 