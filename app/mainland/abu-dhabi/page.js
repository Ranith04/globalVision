import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FAQList from '../../components/FAQList';
import Navbar from '../../components/Navbar';

export default function AbuDhabiMainlandPage() {
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
            Abu Dhabi Mainland<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Abu Dhabi Mainland, regulated by the Abu Dhabi Department of Economic Development (ADDED), is a premier business hub offering companies unrestricted access to local and international markets. With its robust infrastructure, investor-friendly regulations, and flexible licensing options, it caters to startups, SMEs, and global enterprises alike. The region provides a stable economic environment, competitive operational costs, and access to a skilled workforce, making it ideal for businesses across sectors such as technology, finance, healthcare, and logistics. Its strategic location and supportive ecosystem position Abu Dhabi Mainland as a top destination for sustainable business growth.
            </p>
          </div>
        </div>
      </section>
      {/* Why Invest Section */}
      <section style={{ background: '#f8f9fa', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 40 }}>
            Why Invest in Abu Dhabi Mainland?
          </h2>
          <div
            className="why-invest-row"
          >
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 21 12 17.27 7.82 21 9 12.91l-5-3.64 5.91-.91z" fill="#1ec6b6"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>Strategic Location</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Abu Dhabi offers strategic location, stable environment, world-class infrastructure, skilled workforce, and global market access.
              </p>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>Strong Economy</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Absolutely the best place to set up a company with a strong economy and supportive government policies.
              </p>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><text x="6" y="22" fontSize="20" fontWeight="bold" fill="#1ec6b6">$</text></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>Business Friendly</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                100% foreign ownership allowed with competitive setup costs and streamlined processes across mainland and free zones.
              </p>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, flex: '1 1 220px', maxWidth: 270, minWidth: 220, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1ec6b6" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="#1ec6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>Tax Benefits</h3>
              <p style={{ color: '#555', fontSize: 15 }}>
                Attractive tax structure with corporate tax exemptions in free zones and competitive rates in mainland operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Types of Business Entities Section */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10 }}>
            What are the Types of Business Entities in Abu Dhabi?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 40 }}>
            Choose the right business structure that aligns with your goals and operational requirements in Abu Dhabi.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Mainland Region */}
            <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 400, border: '1.5px solid #1ec6b6', borderRadius: 16, padding: 28, marginBottom: 24, background: '#f8f9fa' }}>
              <h3 style={{ color: '#1ec6b6', fontWeight: 600, fontSize: '1.15rem', marginBottom: 12 }}>Mainland Region</h3>
              <p style={{ color: '#222', marginBottom: 12 }}>Covers expenses related to setting up a business in the heart of Abu Dhabi mainland. Includes trade license fees, office space costs, and government charges.</p>
              <ul style={{ color: '#222', paddingLeft: 18, margin: 0, fontSize: 15 }}>
                <li>Tailored trade license</li>
                <li>Office setup assistance</li>
                <li>Government fee handling</li>
                <li>Full UAE market access</li>
              </ul>
            </div>
            {/* Free Zones */}
            <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 400, border: '1.5px solid #1ec6b6', borderRadius: 16, padding: 28, marginBottom: 24, background: '#f8f9fa' }}>
              <h3 style={{ color: '#1ec6b6', fontWeight: 600, fontSize: '1.15rem', marginBottom: 12 }}>Free Zones</h3>
              <p style={{ color: '#222', marginBottom: 12 }}>Details on setting up in free zones like ADGM (Abu Dhabi Global Market) and Masdar City. Information includes license fees, visa costs, and 100% ownership incentive.</p>
              <ul style={{ color: '#222', paddingLeft: 18, margin: 0, fontSize: 15 }}>
                <li>100% foreign ownership</li>
                <li>Tax exemptions</li>
                <li>ADGM & Masdar City options</li>
                <li>Limited trading outside zone</li>
              </ul>
            </div>
            {/* Offshore Setup */}
            <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 400, border: '1.5px solid #1ec6b6', borderRadius: 16, padding: 28, marginBottom: 24, background: '#f8f9fa' }}>
              <h3 style={{ color: '#1ec6b6', fontWeight: 600, fontSize: '1.15rem', marginBottom: 12 }}>Offshore Setup</h3>
              <p style={{ color: '#222', marginBottom: 12 }}>Guidance on registering offshore companies in Abu Dhabi. Advises on registration fees, legal requirements, and benefits for international operations.</p>
              <ul style={{ color: '#222', paddingLeft: 18, margin: 0, fontSize: 15 }}>
                <li>International operations</li>
                <li>Competitive rates</li>
                <li>Legal compliance</li>
                <li>Global business structure</li>
              </ul>
            </div>
            {/* Mainland vs Free Zone */}
            <div style={{ flex: '1 1 340px', minWidth: 300, maxWidth: 400, border: '1.5px solid #1ec6b6', borderRadius: 16, padding: 28, marginBottom: 24, background: '#f8f9fa' }}>
              <h3 style={{ color: '#1ec6b6', fontWeight: 600, fontSize: '1.15rem', marginBottom: 12 }}>Mainland vs Free Zone</h3>
              <p style={{ color: '#222', marginBottom: 12 }}>Mainland offers full UAE market access; free zones provide 100% ownership but have trading limitations outside the zone.</p>
              <ul style={{ color: '#222', paddingLeft: 18, margin: 0, fontSize: 15 }}>
                <li>Market access comparison</li>
                <li>Ownership structures</li>
                <li>Trading restrictions</li>
                <li>Tax implications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Process of Business Setup Section */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)', padding: '60px 0', color: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Georgia, serif', color: '#fff' }}>
            Process of Business Setup in Abu Dhabi Mainland
          </h2>
          <p style={{ textAlign: 'center', color: '#b2f0e9', marginBottom: 40, fontSize: 18, fontFamily: 'Inter, Arial, sans-serif' }}>
            Our streamlined 6-step process includes selecting activity, legal structure, trade name, initial approvals, MOA drafting, document notarization, and licensing.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginBottom: 24 }}>
            {/* Step 1 */}
            <div style={{ background: '#fff', color: '#222', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 28, flex: '1 1 300px', minWidth: 260, maxWidth: 340, margin: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 14, fontFamily: 'Inter, Arial, sans-serif' }}>01</span>
                <span style={{ fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>Business Activity</span>
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Inter, Arial, sans-serif' }}>
                Define your core operations and select appropriate business activities for Abu Dhabi mainland registration.
              </div>
            </div>
            {/* Step 2 */}
            <div style={{ background: '#fff', color: '#222', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 28, flex: '1 1 300px', minWidth: 260, maxWidth: 340, margin: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 14, fontFamily: 'Inter, Arial, sans-serif' }}>02</span>
                <span style={{ fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>Legal Structure</span>
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Inter, Arial, sans-serif' }}>
                Choose the right legal structure - LLC, sole establishment, or partnership based on your business needs.
              </div>
            </div>
            {/* Step 3 */}
            <div style={{ background: '#fff', color: '#222', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 28, flex: '1 1 300px', minWidth: 260, maxWidth: 340, margin: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 14, fontFamily: 'Inter, Arial, sans-serif' }}>03</span>
                <span style={{ fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>Trade Name</span>
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Inter, Arial, sans-serif' }}>
                Reserve a compliant and unique company name with Abu Dhabi Department of Economic Development (ADDED).
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            {/* Step 4 */}
            <div style={{ background: '#fff', color: '#222', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 28, flex: '1 1 300px', minWidth: 260, maxWidth: 340, margin: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 14, fontFamily: 'Inter, Arial, sans-serif' }}>04</span>
                <span style={{ fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>Initial Approvals</span>
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Inter, Arial, sans-serif' }}>
                Obtain preliminary clearance and documentation requirements from relevant authorities.
              </div>
            </div>
            {/* Step 5 */}
            <div style={{ background: '#fff', color: '#222', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 28, flex: '1 1 300px', minWidth: 260, maxWidth: 340, margin: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 14, fontFamily: 'Inter, Arial, sans-serif' }}>05</span>
                <span style={{ fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>MOA & Documentation</span>
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Inter, Arial, sans-serif' }}>
                Prepare and notarize Memorandum of Association, Articles of Association, and submit required documents.
              </div>
            </div>
            {/* Step 6 */}
            <div style={{ background: '#fff', color: '#222', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 28, flex: '1 1 300px', minWidth: 260, maxWidth: 340, margin: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginRight: 14, fontFamily: 'Inter, Arial, sans-serif' }}>06</span>
                <span style={{ fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>License Issuance</span>
              </div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Inter, Arial, sans-serif' }}>
                Pay government fees, complete registration process, and receive your official Abu Dhabi trade license.
              </div>
            </div>
          </div>
        </div>
      </section>
       
      {/* Documents Required Section */}
      <section style={{ background: '#f7fafb', padding: '56px 0 48px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.55rem', marginBottom: 6, fontFamily: 'Georgia, serif', color: '#222', letterSpacing: '-0.5px' }}>
            Documents Required for Company Registration in Abu Dhabi
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7a86', marginBottom: 38, fontSize: 15, fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400 }}>
            Ensure you have all necessary documentation ready for a smooth and efficient registration process in Abu Dhabi.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, justifyContent: 'center' }}>
            {/* Personal Documents */}
            <div style={{ background: '#fff', border: '1.5px solid #e3f7f5', borderRadius: 14, padding: '26px 28px 22px 28px', minWidth: 240, maxWidth: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ background: '#e3f7f5', color: '#1ec6b6', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, marginRight: 10 }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.05rem', fontFamily: 'Georgia, serif', color: '#1ec6b6' }}>Personal Documents</span>
              </div>
              <ul style={{ color: '#222', fontSize: 15, margin: 0, padding: '0 0 0 0', fontFamily: 'Inter, Arial, sans-serif', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Valid passport copies of all shareholders</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Passport-size photographs</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>No Objection Certificate (if applicable)</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Educational certificates for professional licenses</li>
              </ul>
            </div>
            {/* Business Documents */}
            <div style={{ background: '#fff', border: '1.5px solid #e3f7f5', borderRadius: 14, padding: '26px 28px 22px 28px', minWidth: 240, maxWidth: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ background: '#e3f7f5', color: '#1ec6b6', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, marginRight: 10 }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.05rem', fontFamily: 'Georgia, serif', color: '#1ec6b6' }}>Business Documents</span>
              </div>
              <ul style={{ color: '#222', fontSize: 15, margin: 0, padding: '0 0 0 0', fontFamily: 'Inter, Arial, sans-serif', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Memorandum of Association</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Articles of Association</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Office lease agreement</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Business plan and activity description</li>
              </ul>
            </div>
            {/* Corporate Documents */}
            <div style={{ background: '#fff', border: '1.5px solid #e3f7f5', borderRadius: 14, padding: '26px 28px 22px 28px', minWidth: 240, maxWidth: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ background: '#e3f7f5', color: '#1ec6b6', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, marginRight: 10 }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="3" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.05rem', fontFamily: 'Georgia, serif', color: '#1ec6b6' }}>Corporate Documents</span>
              </div>
              <ul style={{ color: '#222', fontSize: 15, margin: 0, padding: '0 0 0 0', fontFamily: 'Inter, Arial, sans-serif', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Board resolution for company formation</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Power of attorney</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Shareholder agreements</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Company incorporation certificate</li>
              </ul>
            </div>
            {/* Additional Requirements */}
            <div style={{ background: '#fff', border: '1.5px solid #e3f7f5', borderRadius: 14, padding: '26px 28px 22px 28px', minWidth: 240, maxWidth: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ background: '#e3f7f5', color: '#1ec6b6', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, marginRight: 10 }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#1ec6b6" strokeWidth="2"/></svg>
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.05rem', fontFamily: 'Georgia, serif', color: '#1ec6b6' }}>Additional Requirements</span>
              </div>
              <ul style={{ color: '#222', fontSize: 15, margin: 0, padding: '0 0 0 0', fontFamily: 'Inter, Arial, sans-serif', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Trade name reservation certificate</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Initial approval from ADDED</li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Special approvals for regulated activities</li>
                <li style={{ display: 'flex', alignItems: 'center' }}><span style={{ color: '#1ec6b6', marginRight: 7 }}>&#10003;</span>Bank reference letters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section style={{ background: '#fafbfc', padding: '60px 0 80px 0', marginTop: 0 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 8, fontFamily: 'Georgia, serif', color: '#222' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7a86', marginBottom: 38, fontSize: 16, fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400 }}>
            Get answers to common questions about business setup in Abu Dhabi Mainland and Free Zones.
          </p>
          <FAQList
            faqs={[
              {
                question: 'Is Abu Dhabi a good place to set up a company?',
                answer: 'Yes, Abu Dhabi is a stable and growing market with strong government support for businesses.'
              },
              {
                question: 'What is the cost of setup?',
                answer: 'Setting up a company in Abu Dhabi Mainland typically starts from AED 15,000 to AED 25,000.'
              },
              {
                question: 'How do I start a small business in Abu Dhabi?',
                answer: 'Choose your activity, reserve a trade name, get initial approval, lease office space, and apply for a trade license.'
              },
              {
                question: "What's the difference between Mainland vs Free Zone?",
                answer: 'Mainland companies can operate across the UAE, while Free Zone companies are limited to their zone or international trade.'
              },
              {
                question: 'What are the steps for forming a mainland company?',
                answer: 'Submit your business activity, get approvals, draft MOA, lease office, and apply for the license.'
              },
              {
                question: 'Are there tax benefits for free zones?',
                answer: 'Yes, Free Zones in the UAE offer 0% corporate tax and full repatriation of profits.'
              },
              {
                question: 'Can Global Vision help with licensing?',
                answer: 'Yes, Global Vision handles all legal and documentation work for smooth company registration in Abu Dhabi.'
              }
            ]}
          />
        </div>
      </section>
      {/* Contact Section */}
      <ContactLeadSection /> {/* Footer Section - Exact Match */}
      <footer style={{ background: '#151b26', color: '#e5e7eb', padding: '56px 0 0 0', fontSize: '1rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 32px' }}>
          {/* Logo & Description */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <img src="/images/footerlogo.png" alt="Global Vision Logo" style={{ width: 180, height: 'auto', objectFit: 'contain', display: 'block', background: 'transparent' }} />
            </div>
            <div style={{ color: '#bfc6d1', fontSize: '0.98rem', marginBottom: 12 }}>
              Your trusted partner for Abu Dhabi mainland<br/>company formation and business setup<br/>services.
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Office number 205, Ontario Tower, Business Bay, Dubai</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 50 419 3507</div>
            <div style={{ color: '#e5e7eb' }}>info@www.globalvisionuae.com</div>
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