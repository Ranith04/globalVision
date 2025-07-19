import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function VisaPage() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)',
        position: 'relative',
        padding: '80px 0 0 0' 
      }}>
        {/* Background cityscape overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(/images/Background-services.jpg) center/cover no-repeat',
          opacity: 0.35,
          zIndex: 1
        }} />
         <div style={{
           position: 'relative',
           zIndex: 2,
           display: 'flex',
           justifyContent: 'flex-start',
           alignItems: 'center',
           width: '100%',
           maxWidth: 1200,
           margin: '0 auto',
           padding: '0 60px',
        }}>
           {/* Left-aligned: Heading and Description */}
           <div style={{ color: '#fff', textAlign: 'left', maxWidth: 900 }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 40 }}>
              UAE Visa Services
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Your trusted partner for all visa requirements.
             From UAE entry visas to global travel documents, we manage the entire process with expertise, accuracy, and personalized care. Whether you're applying for tourist, business, residency, or work visas, our dedicated team ensures smooth processing and full compliance — giving you confidence every step of the way.
             </p>
          </div>
        </div>
      </section>

      {/* Gateway Section */}
      <section style={{ background: '#E0E3EA', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Complete Visa Service</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <img src="/images/Background-Border-Shadow-3.png" alt="Dubai Skyline" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>
      <div style={{ background: '#fff', padding: '64px 0 0 0', textAlign: 'center' }}>
        <div style={{ marginBottom: 18, color: '#7b8a9c', fontWeight: 500, fontSize: 15, letterSpacing: 0.2 }}>Our Services</div>
        <h1 style={{ fontWeight: 700, fontSize: '2.4rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Professional Visa Solutions
        </h1>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 48, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          We provide comprehensive visa services for UAE entry and international travel, ensuring smooth and hassle-free processing for all your travel needs.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto 56px auto',
          justifyItems: 'center',
        }}>
          {/* Business Visa Card */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="7" width="18" height="13" rx="3"/><path d="M16 3v4M10 3v4"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Business Visa</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Comprehensive business visa services for entrepreneurs and corporate professionals.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ Investor visa</li>
              <li>✔ Employment visa</li>
              <li>✔ Mission visa</li>
              <li>✔ Conference visa</li>
            </ul>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 2 }}><b>Duration:</b> <span style={{ color: '#222' }}>1-6 months validity</span></div>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 18 }}><b>Processing:</b> <span style={{ color: '#222' }}>5-10 days</span></div>
            <button style={{ background: '#1ec6b6', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              Apply Now <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
          {/* Family Visa Card */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="10" r="4"/><path d="M21 21c0-4-4-6-8-6s-8 2-8 6"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Family Visa</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Reunite with your loved ones through our family visa and sponsorship services.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ Spouse visa</li>
              <li>✔ Children visa</li>
              <li>✔ Parents visa</li>
              <li>✔ Dependent visa</li>
            </ul>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 2 }}><b>Duration:</b> <span style={{ color: '#222' }}>Based on sponsor visa</span></div>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 18 }}><b>Processing:</b> <span style={{ color: '#222' }}>2-3 weeks</span></div>
            <button style={{ background: '#1ec6b6', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              Apply Now <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
          {/* Student Visa Card */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M21 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><path d="M7 19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18, marginBottom: 6 }}>Student Visa</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 12 }}>Educational visa support for students pursuing studies in top universities worldwide.</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, marginBottom: 18, paddingLeft: 18, listStyle: 'none' }}>
              <li>✔ University admission</li>
              <li>✔ Student permit</li>
              <li>✔ Research visa</li>
              <li>✔ Exchange programs</li>
            </ul>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 2 }}><b>Duration:</b> <span style={{ color: '#222' }}>Course duration</span></div>
            <div style={{ color: '#7b8a9c', fontSize: 15, marginBottom: 18 }}><b>Processing:</b> <span style={{ color: '#222' }}>3-4 weeks</span></div>
            <button style={{ background: '#1ec6b6', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              Apply Now <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* All Types of UAE Visas Section */}
      <section style={{ background: '#fff', padding: '32px 0 0 0', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 48, maxWidth: 1400, margin: '0 auto' }}>
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 540 }}>
          <div style={{ background: '#1ec6b6', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 16, display: 'inline-block', padding: '6px 18px', marginBottom: 18 }}>
            UAE Entry Visas
          </div>
          <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 12, fontFamily: 'Playfair Display, serif' }}>
            All Types of UAE Visas
          </h2>
          <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 32, maxWidth: 500, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Whether you're visiting for tourism, business, or planning to work in the UAE, we provide comprehensive visa services for all categories.
          </p>
          {/* Visa Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {/* Tourist Visa */}
            <div style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '18px 20px', marginBottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: 0 }}>
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 8 }}>Tourist Visa</div>
                <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, paddingLeft: 18, listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                  <li style={{ marginBottom: 2 }}>• 30-day single entry</li>
                  <li style={{ marginBottom: 2 }}>• 30-day multiple entry</li>
                  <li style={{ marginBottom: 2 }}>• 90-day single entry</li>
                  <li style={{ marginBottom: 2 }}>• 90-day multiple entry</li>
                </ul>
              </div>
              <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginLeft: 24, minWidth: 120, textAlign: 'center', border: '1.2px solid #e3f6f4' }}>
                AED 300 - 1,200
              </div>
            </div>
            {/* Transit Visa */}
            <div style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '18px 20px', marginBottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: 0 }}>
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 8 }}>Transit Visa</div>
                <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, paddingLeft: 18, listStyle: 'none' }}>
                  <li style={{ marginBottom: 2 }}>• 48-hour transit</li>
                  <li style={{ marginBottom: 2 }}>• 96-hour transit</li>
                  <li style={{ marginBottom: 2 }}>• Airport transit</li>
                </ul>
              </div>
              <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginLeft: 24, minWidth: 100, textAlign: 'center', border: '1.2px solid #e3f6f4' }}>
                AED 200 - 500
              </div>
            </div>
            {/* Employment Visa */}
            <div style={{ background: '#fff', borderRadius: 20, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '18px 20px', marginBottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: 0 }}>
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 8 }}>Employment Visa</div>
                <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, paddingLeft: 18, listStyle: 'none' }}>
                  <li style={{ marginBottom: 2 }}>• 2-year work visa</li>
                  <li style={{ marginBottom: 2 }}>• 3-year work visa</li>
                  <li style={{ marginBottom: 2 }}>• Mission visa</li>
                </ul>
              </div>
              <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginLeft: 24, minWidth: 120, textAlign: 'center', border: '1.2px solid #e3f6f4' }}>
                AED 2,000 - 5,000
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Image */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/images/UAE Visa Services.png" alt="UAE Visa Documents" style={{ width: '100%', borderRadius: 24, objectFit: 'cover', maxHeight: 370, boxShadow: '0 2px 16px rgba(30,198,182,0.08)', marginTop: '250px' }} />
        </div>
      </section>

      {/* Simple Visa Application Process Section */}
      <section style={{ background: '#fafbfc', padding: '56px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Simple Visa Application Process
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Our streamlined process makes visa applications quick and stress-free, with expert support at every step.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Step 1 */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
            </div>
            <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>01</div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Document Assessment</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>Review requirements and assess your documents for completeness.</div>
          </div>
          {/* Step 2 */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
            </div>
            <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>02</div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Application Preparation</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>Complete visa application forms with accurate information.</div>
          </div>
          {/* Step 3 */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
            </div>
            <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>03</div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Submission & Tracking</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>Submit application and track progress with regular updates.</div>
          </div>
          {/* Step 4 */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="16" height="20" rx="3"/><path d="M9 8h10M9 12h10M9 16h6"/></svg>
            </div>
            <div style={{ color: '#1ec6b6', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>04</div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Visa Collection</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>Secure collection of your approved visa documents.</div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Visa Services Section */}
      <section style={{ background: '#fff', padding: '56px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Why Choose Our Visa Services?
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Professional expertise, proven track record, and personalized service for all your visa requirements.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Expert Team */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="10" r="4"/><path d="M21 21c0-4-4-6-8-6s-8 2-8 6"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Expert Team</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Experienced visa consultants with deep knowledge of immigration laws</div>
            <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
              10+ Years Experience
            </div>
          </div>
          {/* Fast Processing */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="10"/><path d="M13 7v6l4 2"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>Fast Processing</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Quick turnaround times with expedited services available</div>
            <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
              95% On-Time Delivery
            </div>
          </div>
          {/* High Success Rate */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="10"/><path d="M9 13l2 2 4-4"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>High Success Rate</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Proven track record with excellent visa approval rates</div>
            <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
              98% Approval Rate
            </div>
          </div>
          {/* 24/7 Support */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 24px', textAlign: 'center', minWidth: 0, border: '1.5px solid #e8f1f7', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#1ec6b6', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
              <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 16.09 8.26 22 9.27 17 14.14 18.18 21.02 13 17.77 7.82 21.02 9 14.14 4 9.27 9.91 8.26 13 2"/></svg>
            </div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 16, marginBottom: 4 }}>24/7 Support</div>
            <div style={{ color: '#6b7683', fontSize: 15, marginBottom: 18 }}>Round-the-clock customer support for all your queries</div>
            <div style={{ background: '#f6fafd', color: '#222', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '7px 18px', marginTop: 'auto', minWidth: 0, display: 'inline-block', border: '1.2px solid #e3f6f4' }}>
              24/7 Availability
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section style={{ background: '#fafbfc', padding: '56px 0 64px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Common questions about our visa services
        </p>
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* FAQ 1 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '22px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 6 }}>What documents do I need for a UAE tourist visa?</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>
              Passport (valid 6+ months), passport photos, confirmed hotel booking, return flight ticket, and bank statements.
            </div>
          </div>
          {/* FAQ 2 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '22px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 6 }}>How long does visa processing take?</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>
              Processing times vary: Tourist visas 2-5 days, Business visas 5-10 days, Family visas 2-3 weeks.
            </div>
          </div>
          {/* FAQ 3 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '22px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 6 }}>Can I extend my UAE visa?</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>
              Yes, tourist visas can be extended for 30 days. Visit and business visas have different extension rules.
            </div>
          </div>
          {/* FAQ 4 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #f0f3f7', boxShadow: '0 2px 8px rgba(30,198,182,0.04)', padding: '22px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, color: '#222', fontSize: 16, marginBottom: 6 }}>Do you provide visa insurance?</div>
            <div style={{ color: '#6b7683', fontSize: 15 }}>
              Yes, we offer comprehensive travel insurance packages that meet UAE visa requirements.
            </div>
          </div>
        </div>
      </section>

      {/* Need Professional Visa Assistance Section */}
      <section style={{ background: '#fff', padding: '64px 0 64px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Need Professional Visa Assistance?
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 24, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Get expert help with your visa application. Our team provides personalized service to ensure your visa process is smooth and successful.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 900,
          margin: '0 auto 32px auto',
          justifyItems: 'center',
        }}>
          {/* Feature 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M13 7v6l4 2"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Fast processing times</span>
          </div>
          {/* Feature 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M7 11l2 2 4-4"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Secure document handling</span>
          </div>
          {/* Feature 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M11 7v4l3 2"/><circle cx="11" cy="16" r="1.5"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Expert consultation team</span>
          </div>
        </div>
      </section>
      {/* Trust Bar (bottom) */}
      <div style={{ background: '#1ec6b6', color: '#fff', fontSize: 17, fontWeight: 500, textAlign: 'center', padding: '28px 0', letterSpacing: 0.1, margin: 0 }}>
        Your trusted partner for professional visa services. Making travel dreams reality with expert guidance.
      </div>

      <ContactLeadSection />
      {/* Footer Section */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for Dubai mainland<br/>company formation and business setup<br/>services.
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}> Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 50 419 3507</div>
            <div style={{ color: '#e5e7eb' }}> info@www.globalvisionuae.com</div>
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