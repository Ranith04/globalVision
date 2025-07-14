export default function Mission() {
  return (
    <section className="mission-section">
      <div className="main-container card-section mission-card">
        <div className="mission__media">
          <video
            src="/video/ourmission.mp4.mp4"
            className="mission-media-video"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="mission__text">
          <h2 className="split-heading">
            Our Mission<br />
            <span className="accent split-amp">&amp;</span> <span className="split-vision">Vision</span>
          </h2>
          <p>Our mission is to revolutionize Dubai's architectural landscape through innovative design, sustainable practices, and exceptional craftsmanship. We envision a future where every building tells a story of excellence.</p>
          <p>From luxury residential complexes to iconic commercial towers, we bring together cutting-edge technology and timeless design principles to create structures that stand the test of time.</p>
          <p>With over 150 successful projects completed across the UAE, we continue to push the boundaries of what's possible in modern architecture.</p>
        </div>
      </div>
    </section>
  );
} 