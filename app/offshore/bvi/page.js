import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function BVIPage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"BVI Offshore Company"}
        description={"Set up your British Virgin Islands (BVI) offshore company for global business, asset protection, and tax efficiency. Fast, confidential, and internationally recognized jurisdiction."}
        ctaText="Start BVI Company"
        ctaHref="#callback-form"
         backgroundImage="/images/Background-services.jpg"
      />
      {/* Section 2: White background, left text, right image */}
      <section style={{ background: '#e6fcfa', padding: '80px 0 80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', minHeight: 340 }}>
          {/* Left: Title, subtitle, feature pills, buttons */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.3rem', color: '#23272e', marginBottom: 10, lineHeight: 1.15 }}>
              BVI Offshore<br /><span style={{ color: '#19c39c' }}>Company Formation</span>
            </h2>
            <div style={{ display: 'flex', gap: 14, margin: '18px 0 0 0' }}>
              <span style={{ display: 'flex', alignItems: 'center', background: '#f6fafd', color: '#19c39c', borderRadius: 30, padding: '8px 22px', fontWeight: 600, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginRight: 6 }}>
                <span style={{ fontSize: 18, marginRight: 7 }}>👑</span> British Overseas Territory
              </span>
              <span style={{ display: 'flex', alignItems: 'center', background: '#f6fafd', color: '#19c39c', borderRadius: 30, padding: '8px 22px', fontWeight: 600, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 18, marginRight: 7 }}>🌴</span> Caribbean Location
              </span>
            </div>
            <div style={{ display: 'flex', gap: 18, margin: '32px 0 0 0' }}>
              <a href="#" style={{ background: '#19c39c', color: '#fff', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Start BVI Setup</a>
              <a href="#" style={{ border: '2px solid #19c39c', color: '#19c39c', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', background: '#fff' }}>Free Consultation</a>
            </div>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/images/BVI-1.avif" alt="BVI Offshore" style={{ width: 420, height: 260, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.13)' }} />
          </div>
        </div>
      </section>
      {/* 3rd Section: About British Virgin Islands */}
      <section style={{ background: '#fff', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Left: Text and feature pills */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', color: '#23272e', marginBottom: 16 }}>About British Virgin Islands</h2>
            <p style={{ color: '#444', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 12 }}>
              The British Virgin Islands are a British Overseas Territory in the Caribbean, part of the West Indies. As a British Overseas Territory, it maintains the British monarch as Head of State while governing itself independently.
            </p>
            <p style={{ color: '#444', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 24 }}>
              The BVI Business Companies Act (No. 16 of 2004) governs company formation, simplifying the process with minimal reporting requirements and basic company structure needing just one shareholder and one Director.
            </p>
            <div style={{ display: 'flex', gap: 18, marginBottom: 0 }}>
              <span style={{ display: 'flex', alignItems: 'center', background: '#f6fafd', color: '#19c39c', borderRadius: 30, padding: '12px 32px', fontWeight: 600, fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', marginRight: 6 }}>
                <span style={{ fontSize: 22, marginRight: 10 }}>👑</span> British Overseas Territory
              </span>
              <span style={{ display: 'flex', alignItems: 'center', background: '#f6fafd', color: '#19c39c', borderRadius: 30, padding: '12px 32px', fontWeight: 600, fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 22, marginRight: 10 }}>🌴</span> Caribbean Location
              </span>
            </div>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/images/BVI-2.avif" alt="British Virgin Islands" style={{ width: 480, height: 260, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.13)' }} />
          </div>
        </div>
      </section>
      {/* 4th Section: Why Choose BVI for Your Offshore Company? */}
      <section style={{ background: '#f8f9fa', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Why Choose BVI for Your Offshore Company?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            The British Virgin Islands offer unmatched advantages for international business with strong legal framework and complete tax exemption.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {/* Benefit 1 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              English is the official language for easy documentation
            </div>
            {/* Benefit 2 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Simplified company structure with minimal requirements
            </div>
            {/* Benefit 3 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              No corporate or income tax for registered companies
            </div>
            {/* Benefit 4 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              No capital gains taxes on profits
            </div>
            {/* Benefit 5 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Complete confidentiality – owner names not public
            </div>
            {/* Benefit 6 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              100% foreign ownership permitted
            </div>
            {/* Benefit 7 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Companies can operate anywhere in the world
            </div>
            {/* Benefit 8 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.04)' }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              British legal system provides stability and trust
            </div>
          </div>
        </div>
      </section>
      {/* 5th Section: How to Set Up Your BVI Company */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#fff' }}>
            How to Set Up Your BVI Company
          </h2>
          <p style={{ textAlign: 'center', color: '#e6f2ef', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Our streamlined 5-step process makes BVI company formation simple and efficient
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, justifyContent: 'center', margin: '0 auto', maxWidth: 900 }}>
            {/* Step 1 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 10 }}>1</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Choose Unique Business Name</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Reserve your chosen name with Companies Registry under Registry of Corporate Affairs</div>
            </div>
            {/* Step 2 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 10 }}>2</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Prepare Articles of Incorporation</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Document company purpose and articles (name, objectives, shareholding, directorship, timelines)</div>
            </div>
            {/* Step 3 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 10 }}>3</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Appoint Local Registered Agent</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Agent handles all submissions including liaising with BVI Companies Registry</div>
            </div>
            {/* Step 4 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 10 }}>4</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Open Corporate Bank Account</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Required before company registration – essential prerequisite for incorporation</div>
            </div>
            {/* Step 5 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 10 }}>5</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Obtain Additional Approvals</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Receive all necessary approvals from BVI Companies for specific business activities</div>
            </div>
          </div>
        </div>
      </section>
      {/* 6th Section: Strong Legal Framework */}
      <section style={{ background: '#fff', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/images/service3.png" alt="BVI Legal" style={{ width: 380, height: 210, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.13)' }} />
          </div>
          {/* Right: Text and features */}
          <div style={{ flex: 2, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', color: '#23272e', marginBottom: 16 }}>Strong Legal Framework</h2>
            <p style={{ color: '#444', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 24 }}>
              The BVI legal system closely resembles UK courts and is considered the best place to incorporate an offshore company. English Common Law provides a familiar and reliable legal foundation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#19c39c', fontWeight: 700, fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 20 }}>✔️</span> BVI Companies Act (2021 Revision)
                <span style={{ color: '#444', fontWeight: 400, fontSize: 15, marginLeft: 8 }}>Governs company formation with simplified requirements</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#19c39c', fontWeight: 700, fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 20 }}>✔️</span> Minimal Requirements
                <span style={{ color: '#444', fontWeight: 400, fontSize: 15, marginLeft: 8 }}>Just one shareholder and one Director needed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#19c39c', fontWeight: 700, fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 20 }}>✔️</span> No Minimum Capital
                <span style={{ color: '#444', fontWeight: 400, fontSize: 15, marginLeft: 8 }}>No minimum shareholding capital required</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7th Section: Why Choose Our Expert Services? */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#23272e' }}>
            Why Choose Our Expert Services?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            At A&A Associate LLC, we have years of experience helping set up companies in BVI. Our expert legal team and financial analysts ensure everything is in perfect order.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Expert Legal Team Card */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 280, maxWidth: 340, flex: '1 1 280px', border: '2px solid #19c39c', textAlign: 'center', marginBottom: 18 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>👨‍⚖️</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Expert Legal Team</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Backed by exceptionally strong legal team with extensive BVI experience</div>
            </div>
            {/* Global Experience Card */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 280, maxWidth: 340, flex: '1 1 280px', border: '2px solid #19c39c', textAlign: 'center', marginBottom: 18 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🌐</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Global Experience</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Helped clients from 100+ countries with seamless company formation</div>
            </div>
          </div>
        </div>
      </section>
      {/* 8th Section: Call to Action */}
      <section style={{ background: '#13777c', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Ready to Incorporate in BVI?
          </h2>
          <p style={{ color: '#e6f2ef', fontSize: '1.08rem', marginBottom: 24, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Contact our BVI formation experts today for a free consultation
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, alignItems: 'center', color: '#fff', fontSize: 16, marginBottom: 28, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            <span>+971 50 483 6150</span>
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
              Your trusted partner for BVI offshore<br/>company formation and business setup<br/>services.
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>BVI Office, British Virgin Islands</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 50 483 6150</div>
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