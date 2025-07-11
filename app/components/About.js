
export default function About() {
  return (
    <section className="about-section">
      <div className="about-card about-card-wide">
        <div className="about-left">
          <span className="about-label">Who we are</span>
          <h2 className="about-title">Building Tomorrow's Dubai</h2>
          <p className="about-desc">
            At Global Vision, we specialize in creating architectural masterpieces that define Dubai's skyline. Our team of expert architects and engineers bring innovative design solutions to life.
          </p>
          <ul className="about-list">
            <li><span className="about-dot" />Premier architectural design services across the UAE</li>
            <li><span className="about-dot" />Sustainable building solutions for modern Dubai</li>
            <li><span className="about-dot" />Award-winning projects since 2015</li>
          </ul>
        </div>
        <div className="about-right about-right-wide">
          <div className="about-media-wrapper">
            <video 
              src="/video/2.mp4" 
              className="about-media-video-wide" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
            <div className="about-badge about-badge-wide">
              <span className="about-badge-title">Transforming</span><br />
              <span className="about-badge-sub">Dubai's Skyline</span><br />
              <span className="about-badge-year">Since 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 