import CallbackForm from '../../components/CallbackForm';
import ContactLeadSection from '../../components/ContactLeadSection';
import FAQList from '../../components/FAQList';
import Navbar from '../../components/Navbar';

export default function SharjahMainlandPage() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ position: 'relative', minHeight: '100vh', padding: 0, background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)' }}>
        {/* Background Image under gradient */}
        <img
          src="/images/Background-services.jpg"
          alt="Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />
        {/* Overlay (optional cityscape image) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'url(/images/hero-bg.jpg) center/cover no-repeat',
          opacity: 0.25,
          zIndex: 1
        }} />
        <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1200, margin: '0 auto', padding: '0 40px', minHeight: '100vh' }}>
          <div className="hero-content" style={{ flex: 1, color: '#fff', textAlign: 'left', paddingRight: 20, maxWidth: 600 }}>
            <h1 className="hero-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.2rem', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 18 }}>
              Business Setup in<br />Sharjah Mainland
            </h1>
            <p className="hero-subtitle" style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.25rem', color: '#d1d5db', marginBottom: 36, fontWeight: 400 }}>
              Your trusted partner for establishing and growing your business in the UAE's most dynamic market.
            </p>
            <a href="#contact" className="hero-cta-btn" style={{ background: '#1ec6b6', color: '#fff', padding: '14px 38px', borderRadius: 30, fontWeight: 700, fontSize: '1.15rem', textDecoration: 'none', display: 'inline-block', marginTop: 10 }}>Start Your Company</a>
          </div>
          <div style={{ minWidth: 350, maxWidth: 400 }}>
            <CallbackForm />
          </div>
        </div>
      </section>
      {/* Why Invest Section */}
      <section style={{ background: '#f8f9fa', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 40 }}>
            Why Invest in Sharjah Mainland?
          </h2>
          <div className="why-invest-row" style={{ display: 'flex', flexWrap: 'nowrap', gap: 24, justifyContent: 'center' }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4 17l6-6 4 4 6-6" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, fontFamily: 'Georgia, serif' }}>Economic Stability</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Sharjah offers a stable and growing economy with excellent infrastructure and business-friendly policies.
              </p>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V7a8 8 0 1 0-16 0v5c0 6 8 10 8 10z" stroke="#1ec6b6" strokeWidth="2"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, fontFamily: 'Georgia, serif' }}>Strategic Infrastructure</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Access to world-class ports, airports, and logistics networks connecting you to global markets.
              </p>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><text x="6" y="22" fontSize="20" fontWeight="bold" fill="#1ec6b6">$</text></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, fontFamily: 'Georgia, serif' }}>Business Friendly</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                100% foreign ownership allowed with competitive setup costs and streamlined processes.
              </p>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="16" cy="8" r="2" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 22s8-4 8-10V7a8 8 0 1 0-16 0v5c0 6 8 10 8 10z" stroke="#1ec6b6" strokeWidth="2"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8, fontFamily: 'Georgia, serif' }}>Tax Benefits</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Attractive tax structure with 9% corporate tax only on profits above AED 375,000.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Types of Business Entities Section */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>
            What are the Types of Business Entities in Sharjah?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>
            Choose the right business structure that aligns with your goals and operational requirements.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* LLC */}
            <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 400, border: '1.5px solid #1ec6b6', borderRadius: 16, padding: 28, marginBottom: 24, background: '#fff' }}>
              <h3 style={{ color: '#1ec6b6', fontWeight: 700, fontSize: '1.15rem', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>LLC</h3>
              <p style={{ color: '#222', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>Suitable for most business activities with 2–50 shareholders. Full UAE and international market access.</p>
              <ul style={{ color: '#1ec6b6', paddingLeft: 18, margin: 0, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>
                <li>2–50 shareholders</li>
                <li>Limited liability</li>
                <li>Flexible structure</li>
              </ul>
            </div>
            {/* Sole Establishment */}
            <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 400, border: '1.5px solid #1ec6b6', borderRadius: 16, padding: 28, marginBottom: 24, background: '#fff' }}>
              <h3 style={{ color: '#1ec6b6', fontWeight: 700, fontSize: '1.15rem', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>Sole Establishment</h3>
              <p style={{ color: '#222', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>Single-owner setup perfect for professionals and consultants.</p>
              <ul style={{ color: '#1ec6b6', paddingLeft: 18, margin: 0, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>
                <li>Single ownership</li>
                <li>Professional services</li>
                <li>Quick setup</li>
              </ul>
            </div>
            {/* Branch Office */}
            <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 400, border: '1.5px solid #1ec6b6', borderRadius: 16, padding: 28, marginBottom: 24, background: '#fff' }}>
              <h3 style={{ color: '#1ec6b6', fontWeight: 700, fontSize: '1.15rem', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>Branch Office</h3>
              <p style={{ color: '#222', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>Expansion option for foreign companies looking to establish presence in UAE.</p>
              <ul style={{ color: '#1ec6b6', paddingLeft: 18, margin: 0, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>
                <li>Foreign company expansion</li>
                <li>Parent company liability</li>
                <li>Local presence</li>
              </ul>
            </div>
            {/* Partnership Firm */}
            <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 400, border: '1.5px solid #1ec6b6', borderRadius: 16, padding: 28, marginBottom: 24, background: '#fff' }}>
              <h3 style={{ color: '#1ec6b6', fontWeight: 700, fontSize: '1.15rem', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>Partnership Firm</h3>
              <p style={{ color: '#222', marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>Requires UAE partner with shared legal responsibility and profits.</p>
              <ul style={{ color: '#1ec6b6', paddingLeft: 18, margin: 0, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400 }}>
                <li>Shared responsibility</li>
                <li>UAE partner required</li>
                <li>Joint liability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Process of Business Setup Section */}
      <section style={{ background: '#f3f7fa', padding: '60px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 48 }}>
          <div style={{ flex: '1 1 380px', minWidth: 320, maxWidth: 480 }}>
            <h2 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 8, textAlign: 'left' }}>
              Process of Business Setup in Sharjah Mainland
            </h2>
            <p style={{ color: '#6b7a86', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 32, textAlign: 'left' }}>
              Our streamlined 6-step process ensures your business is established efficiently and compliantly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Step 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 17, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 2 }}>01</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>Business Activity</div>
                  <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Define your core operations and validate with SEDO's approved activity list.</div>
                </div>
              </div>
              {/* Step 2 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 17, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 2 }}>02</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>Trade Name</div>
                  <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Reserve a compliant and unique company name with SEDO approval.</div>
                </div>
              </div>
              {/* Step 3 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 17, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 2 }}>03</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>Initial Approval</div>
                  <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Obtain preliminary clearance and documentation requirements.</div>
                </div>
              </div>
              {/* Step 4 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 17, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 2 }}>04</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>Documentation</div>
                  <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Prepare and notarize MOA/AA, submit passports and lease agreements.</div>
                </div>
              </div>
              {/* Step 5 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 17, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 2 }}>05</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>Special Approvals</div>
                  <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Obtain external approvals for regulated business activities.</div>
                </div>
              </div>
              {/* Step 6 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 17, fontFamily: 'Montserrat, Arial, sans-serif', marginTop: 2 }}>06</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222' }}>License</div>
                  <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Pay government fees and receive your official trade license.</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 420, display: 'flex', justifyContent: 'center' }}>
            <img src="/images/sharjah-m1.jpg" alt="Sharjah Process" style={{ width: '100%', borderRadius: 18, objectFit: 'cover', maxHeight: 340 }} />
          </div>
        </div>
      </section>
      {/* Packages Section */}
      <section style={{ background: '#f3f7fa', padding: '60px 0 40px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#222', textAlign: 'center', marginBottom: 8 }}>
            Setup Your Business with Global Vision
          </h2>
          <p style={{ color: '#6b7a86', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center', marginBottom: 40 }}>
            Choose from our carefully crafted packages designed to meet different business needs and budgets.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {/* Starter Package */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 16, padding: '32px 28px', minWidth: 270, maxWidth: 320, flex: '1 1 270px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <div style={{ fontWeight: 600, fontSize: '1.18rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222', marginBottom: 10 }}>Starter Package</div>
              <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 26, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>AED 10,999</div>
              <ul style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: '18px 0 24px 0', padding: 0, listStyle: 'none', textAlign: 'center', lineHeight: 1.7 }}>
                <li>Perfect for single activity businesses</li>
                <li>Commercial license (single activity)</li>
                <li>Initial setup and registration</li>
                <li>3-month shared office</li>
                <li>SEDD compliance support</li>
              </ul>
              <button style={{ background: '#fff', color: '#1ec6b6', border: '1.5px solid #1ec6b6', borderRadius: 24, padding: '8px 32px', fontWeight: 600, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, cursor: 'pointer', transition: 'background 0.2s', marginTop: 'auto' }}>Get Started</button>
            </div>
            {/* Growth Package (Most Popular) */}
            <div style={{ background: '#fff', border: '2.5px solid #1ec6b6', borderRadius: 16, padding: '38px 28px 32px 28px', minWidth: 270, maxWidth: 320, flex: '1 1 270px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 16px rgba(30,198,182,0.10)', position: 'relative', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)', background: '#1ec6b6', color: '#fff', fontWeight: 600, fontSize: 14, borderRadius: 16, padding: '3px 18px', fontFamily: 'Montserrat, Arial, sans-serif', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Most Popular</div>
              <div style={{ fontWeight: 600, fontSize: '1.18rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222', marginBottom: 10, marginTop: 10 }}>Growth Package</div>
              <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 26, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>AED 18,999</div>
              <ul style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: '18px 0 24px 0', padding: 0, listStyle: 'none', textAlign: 'center', lineHeight: 1.7 }}>
                <li>Ideal for expanding businesses</li>
                <li>Multi-activity license</li>
                <li>1 investor visa application</li>
                <li>Bank account support</li>
                <li>Sharjah Islamic Bank support</li>
                <li>Legal consultation</li>
              </ul>
              <button style={{ background: '#fff', color: '#1ec6b6', border: '1.5px solid #1ec6b6', borderRadius: 24, padding: '8px 32px', fontWeight: 600, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, cursor: 'pointer', transition: 'background 0.2s', marginTop: 'auto' }}>Get Started</button>
            </div>
            {/* Professional Package */}
            <div style={{ background: '#fff', border: '1.5px solid #1ec6b6', borderRadius: 16, padding: '32px 28px', minWidth: 270, maxWidth: 320, flex: '1 1 270px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <div style={{ fontWeight: 600, fontSize: '1.18rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#222', marginBottom: 10 }}>Professional Package</div>
              <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 26, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>AED 25,999</div>
              <ul style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: '18px 0 24px 0', padding: 0, listStyle: 'none', textAlign: 'center', lineHeight: 1.7 }}>
                <li>Comprehensive solution for enterprises</li>
                <li>Sector-specific license</li>
                <li>6-month dedicated office</li>
                <li>Ministry approvals included</li>
                <li>Legal documentation support</li>
                <li>Priority customer service</li>
              </ul>
              <button style={{ background: '#fff', color: '#1ec6b6', border: '1.5px solid #1ec6b6', borderRadius: 24, padding: '8px 32px', fontWeight: 600, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, cursor: 'pointer', transition: 'background 0.2s', marginTop: 'auto' }}>Get Started</button>
            </div>
          </div>
        </div>
      </section>
      {/* Documents Required Section */}
      <section style={{ background: 'linear-gradient(135deg, #19e2c0 0%, #0b6a7c 100%)', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#173c4f', textAlign: 'center', marginBottom: 8 }}>
            Documents Required for Company Registration in Sharjah
          </h2>
          <p style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center', marginBottom: 40 }}>
            Ensure you have all necessary documentation ready for a smooth and efficient registration process.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, maxWidth: 950, margin: '0 auto' }}>
            {/* Personal Documents */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px 22px 28px', boxShadow: '0 2px 12px rgba(30,198,182,0.07)', display: 'flex', flexDirection: 'column', minHeight: 210 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 26, marginRight: 10 }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm3 2v2h6V6H9zm0 4v2h6v-2H9zm0 4v2h4v-2H9z" fill="#1ec6b6"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#173c4f' }}>Personal Documents</span>
              </div>
              <ul style={{ color: '#173c4f', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Valid passport copies of all shareholders</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Passport-size photographs</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>No Objection Certificate (if applicable)</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Educational certificates for professional licenses</li>
              </ul>
            </div>
            {/* Business Documents */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px 22px 28px', boxShadow: '0 2px 12px rgba(30,198,182,0.07)', display: 'flex', flexDirection: 'column', minHeight: 210 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 26, marginRight: 10 }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" fill="#1ec6b6"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#173c4f' }}>Business Documents</span>
              </div>
              <ul style={{ color: '#173c4f', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Memorandum of Association (MOA)</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Articles of Association (AOA)</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Office lease agreement (Ejari)</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Business plan and activity description</li>
              </ul>
            </div>
            {/* Corporate Documents */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px 22px 28px', boxShadow: '0 2px 12px rgba(30,198,182,0.07)', display: 'flex', flexDirection: 'column', minHeight: 210 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 26, marginRight: 10 }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" fill="#1ec6b6"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#173c4f' }}>Corporate Documents</span>
              </div>
              <ul style={{ color: '#173c4f', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Board resolution for company formation</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Power of attorney (if applicable)</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Shareholder agreements</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Company incorporation certificate</li>
              </ul>
            </div>
            {/* Additional Requirements */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px 22px 28px', boxShadow: '0 2px 12px rgba(30,198,182,0.07)', display: 'flex', flexDirection: 'column', minHeight: 210 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ color: '#1ec6b6', fontSize: 26, marginRight: 10 }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#1ec6b6"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.08rem', fontFamily: 'Montserrat, Arial, sans-serif', color: '#173c4f' }}>Additional Requirements</span>
              </div>
              <ul style={{ color: '#173c4f', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', margin: 0, padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Trade name reservation certificate</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Initial approval from SEDD</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Special approvals for regulated activities</li>
                <li><span style={{ color: '#1ec6b6', fontWeight: 700, marginRight: 7 }}>✔</span>Bank reference letters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section style={{ background: '#fafbfc', padding: '60px 0 80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#222', textAlign: 'center', marginBottom: 8 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#6b7a86', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'center', marginBottom: 36 }}>
            Get answers to common questions about business setup in Sharjah Mainland.
          </p>
          {/* FAQList component for accordion */}
          <FAQList
            faqs={[
              {
                question: 'What is the timeline for business setup in Sharjah?',
                answer: 'The timeline varies depending on the business activity and documentation, but typically ranges from 1 to 3 weeks.'
              },
              {
                question: 'Is local sponsorship required?',
                answer: 'For certain business activities, a local sponsor or service agent may be required as per Sharjah regulations.'
              },
              {
                question: 'Can I expand my business after setup?',
                answer: 'Yes, you can add activities, open branches, or upgrade your license as your business grows.'
              },
              {
                question: 'What are the tax implications?',
                answer: 'Sharjah Mainland businesses are subject to UAE corporate tax laws. VAT registration may also be required.'
              },
              {
                question: 'How many visas can I get?',
                answer: 'The number of visas depends on your office size, business activity, and license type.'
              },
              {
                question: 'What are the ongoing compliance requirements?',
                answer: 'Annual license renewal, maintaining proper accounting records, and adhering to regulatory requirements are necessary.'
              }
            ]}
          />
        </div>
      </section>
      {/* Take the First Step Contact Section */}
      <ContactLeadSection></ContactLeadSection>
       {/* Footer Section - Exact Match */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for Sharjah mainland<br/>company formation and business setup<br/>services.
            </div>
          </div>
          {/* Services */}
          <div style={{ flex: '1 1 160px', minWidth: 160, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Services</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Company Formation</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Business License</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Bank Account Opening</div>
            <div style={{ color: '#e5e7eb' }}>Visa Services</div>
          </div>
          {/* Resources */}
          <div style={{ flex: '1 1 160px', minWidth: 160, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Resources</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Blog</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>FAQ</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Contact</div>
            <div style={{ color: '#e5e7eb' }}>Support</div>
          </div>
          {/* Contact Info */}
          <div style={{ flex: '1 1 200px', minWidth: 200, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Contact Info</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Al Majaz Tower, Sharjah, UAE</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 6 123 4567</div>
            <div style={{ color: '#e5e7eb' }}>sharjah@globalvisionservices.com</div>
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: '32px auto 0 auto', borderTop: '1px solid #232b39', padding: '18px 32px 18px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#bfc6d1', fontSize: '0.98rem' }}>
          <div>© 2024 Global Vision Services. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          </div>
        </div>
      </footer>
      
    </>
  );
} 