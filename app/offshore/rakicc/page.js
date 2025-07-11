import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function RAKICCOffshorePage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"RAKICC Offshore Company"}
        description={"Establish your RAK International Corporate Centre (RAKICC) offshore company for asset protection, confidentiality, and international business flexibility."}
        ctaText="Start RAKICC Company"
        ctaHref="#callback-form"
         backgroundImage="/images/Background-services.jpg"
      />
      {/* 2nd Section */}
      <section style={{ background: '#eafcf8', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          {/* Left: Heading, features, buttons */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontWeight: 800, fontSize: '2.1rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26', lineHeight: 1.13, textAlign: 'left' }}>
              RAK ICC<br /><span style={{ color: '#19c39c', fontWeight: 800 }}>Offshore Formation</span>
            </h2>
            <div style={{ display: 'flex', gap: 24, margin: '0 0 22px 0', color: '#151b26', fontSize: 15, fontWeight: 500, fontFamily: 'Montserrat, Arial, sans-serif', alignItems: 'center' }}>
              {/* No features row in screenshot, so omitting */}
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="#" style={{ background: '#19c39c', color: '#fff', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: 'none', boxShadow: '0 2px 8px rgba(16,185,129,0.10)' }}>Start Formation</a>
              <a href="#" style={{ background: '#fff', color: '#19c39c', border: '2px solid #19c39c', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>Free Consultation</a>
            </div>
          </div>
          {/* Right: Image Card - thick accent, shadow, slight rotation */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 390, maxWidth: '100%', height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Green accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 70, height: 16, background: '#19c39c', borderRadius: '8px 0 8px 0', zIndex: 2 }} />
              {/* Image with border, shadow, and slight rotation */}
              <img src="/images/RAKICC-1.avif" alt="RAK ICC Cityscape" style={{ width: 390, height: 210, borderRadius: 18, objectFit: 'cover', border: '6px solid #fff', boxShadow: '0 8px 32px rgba(16,185,129,0.13)', transform: 'rotate(-2.5deg)', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>
      {/* 3rd Section: Salient Features of RAK ICC */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Salient Features of RAK ICC
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            RAK ICC operates similar to offshore company concept with unique regulations for international companies incorporation.
          </p>
          <div style={{ display: 'flex', gap: 38, alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Features Checklist */}
            <ul style={{ flex: 1, minWidth: 320, maxWidth: 480, color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Limited liability status with 'Limited' or 'Incorporated' suffix</li>
              <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Minimum one shareholder, no maximum limit</li>
              <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Minimum one director required</li>
              <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Corporate directors and shareholders allowed</li>
              <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>No minimum capital requirement</li>
              <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Different classes of shares permitted</li>
              <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>No personal or corporate income tax</li>
              <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Foreign names and characters allowed</li>
            </ul>
            {/* Image Card */}
            <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,198,182,0.10)', padding: 0, width: 340, maxWidth: '100%' }}>
                <img src="/images/RAKICC-2.avif" alt="RAK ICC Features" style={{ width: 440, height: 240, borderRadius: 16, objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th Section: Business Activities Overview */}
      <section style={{ background: '#f6f8f9', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Business Activities Overview
          </h2>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            {/* Permitted Activities Card */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', minWidth: 320, maxWidth: 400, flex: '1 1 320px', boxShadow: '0 2px 16px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#19c39c', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>Permitted Activities</div>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>International trading operations</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Acting as a holding company</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Holding investments in UAE or foreign countries</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Property holding in foreign countries</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Certain properties in UAE</li>
              </ul>
            </div>
            {/* Prohibited Activities Card */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', minWidth: 320, maxWidth: 400, flex: '1 1 320px', boxShadow: '0 2px 16px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#e11d48', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>Prohibited Activities</div>
              <ul style={{ color: '#e11d48', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✖️</span>Business with persons in the Zone</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✖️</span>Banking business operations</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✖️</span>Insurance or re-insurance business</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✖️</span>Insurance brokers or agents</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✖️</span>Activities prohibited by authorities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 5th Section: Streamlined Registration Process */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '80px 0 64px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 38, flexWrap: 'wrap' }}>
          {/* Left: Checklist */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, color: '#fff' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif', color: '#fff' }}>
              Streamlined Registration Process
            </h2>
            <ul style={{ color: '#fff', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 22, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: '#10b981', fontSize: 20, marginTop: 2 }}>☑️</span>
                <div>
                  <span style={{ fontWeight: 700, color: '#fff' }}>No Physical Presence Required</span><br />
                  <span style={{ color: '#e6f2ef', fontWeight: 400 }}>Directors and shareholders don't need to be physically present before authorities, but must sign documents before registered agents.</span>
                </div>
              </li>
              <li style={{ marginBottom: 22, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: '#38bdf8', fontSize: 20, marginTop: 2 }}>🌐</span>
                <div>
                  <span style={{ fontWeight: 700, color: '#fff' }}>International Trade Allowed</span><br />
                  <span style={{ color: '#e6f2ef', fontWeight: 400 }}>Companies can engage in international trading with flexible regulatory framework.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: '#10b981', fontSize: 20, marginTop: 2 }}>🏦</span>
                <div>
                  <span style={{ fontWeight: 700, color: '#fff' }}>UAE Banking & Meetings</span><br />
                  <span style={{ color: '#e6f2ef', fontWeight: 400 }}>Maintain bank accounts in UAE and conduct shareholder meetings within the country.</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,198,182,0.10)', padding: 0, width: 340, maxWidth: '100%' }}>
              <img src="/images/RAKEZ-1.avif" alt="RAKEZ Cityscape" style={{ width: 390, height: 210, borderRadius: 16, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
      {/* 6th Section: Important Considerations */}
      <section style={{ background: '#fff', padding: '72px 0 56px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', padding: '32px 28px', textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#151b26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Important Considerations</div>
            <ul style={{ color: '#151b26', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 14, color: '#e11d48', fontWeight: 600 }}>
                No UAE Residence Visas
                <span style={{ color: '#444', fontWeight: 400 }}>: International companies are not entitled to any residence visa in the UAE.</span>
              </li>
              <li style={{ color: '#0891b2', fontWeight: 600 }}>
                Annual Maintenance
                <span style={{ color: '#444', fontWeight: 400 }}>: Accounts should be maintained annually, though annual audit submission is not mandatory.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 7th Section: Start Your RAK ICC Company Today */}
      <section style={{ background: '#13777c', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Start Your RAK ICC Company Today
          </h2>
          <p style={{ color: '#e6f2ef', fontSize: '1.08rem', marginBottom: 24, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Get expert assistance with your RAK ICC offshore company formation
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, alignItems: 'center', color: '#fff', fontSize: 16, marginBottom: 28, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            <span>+971 50 483 6190</span>
            <span style={{ fontSize: 18, color: '#fff' }}>•</span>
            <span>info@www.globalvisionuae.com@/app</span>
          </div>
          <a href="#" style={{ background: '#fff', color: '#19c39c', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Get Free Consultation</a>
        </div>
      </section>
      {/* Take the First Step Section */}
       
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
              Your trusted partner for RAK ICC company formation and business setup services.
            </div>
          </div>
          {/* Services */}
          <div style={{ flex: '1 1 160px', minWidth: 160, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Services</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Company Formation</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Business License</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Bank Account Opening</div>
            <div style={{ color: '#e5e7eb' }}>Nominee Services</div>
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Business Bay Tower, Dubai, UAE</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 50 483 6190</div>
            <div style={{ color: '#e5e7eb' }}>info@www.globalvisionuae.com@/app</div>
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