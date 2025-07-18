import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function CaymanIslandsPage() {
  return (
    <>
      <Navbar />
      {/* Simple Hero Section without form */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #0f9d8f 0%, #0e3c5d 100%)',
        position: 'relative',
        padding: 0
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
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 24 }}>
              RAK ICC Offshore<br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
              Ras Al Khaimah International Corporate Centre (RAK ICC) is your gateway to seamless international business operations, offering a secure and reputable jurisdiction for global entrepreneurs and investors. With flexible regulations, tax-free benefits, and a strong legal framework aligned with international standards, RAK ICC is ideal for asset protection, wealth management, international holding structures, and business expansion — all while ensuring confidentiality and operational efficiency.
            </p>
          </div>
        </div>
      </section>
      {/* Section 2: White background, left text, right image */}
      <section style={{ background: '#e6fcfa', padding: '80px 0 80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', minHeight: 340 }}>
          {/* Left: Title, subtitle, feature pills, buttons */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.3rem', color: '#23272e', marginBottom: 10, lineHeight: 1.15 }}>
              Cayman Islands<br /><span style={{ color: '#19c39c' }}>Company Formation</span>
            </h2>
            <div style={{ display: 'flex', gap: 14, margin: '18px 0 0 0' }}>
              <span style={{ display: 'flex', alignItems: 'center', background: '#f6fafd', color: '#19c39c', borderRadius: 30, padding: '8px 22px', fontWeight: 600, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginRight: 6 }}>
                <span style={{ fontSize: 18, marginRight: 7 }}>👑</span> British Territory
              </span>
              <span style={{ display: 'flex', alignItems: 'center', background: '#f6fafd', color: '#19c39c', borderRadius: 30, padding: '8px 22px', fontWeight: 600, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginRight: 6 }}>
                <span style={{ fontSize: 18, marginRight: 7 }}>🌎</span> West Indies
              </span>
              <span style={{ display: 'flex', alignItems: 'center', background: '#f6fafd', color: '#19c39c', borderRadius: 30, padding: '8px 22px', fontWeight: 600, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 18, marginRight: 7 }}>👥</span> 68,076 Population
              </span>
            </div>
            <div style={{ display: 'flex', gap: 18, margin: '32px 0 0 0' }}>
              <a href="#" style={{ background: '#19c39c', color: '#fff', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Start Formation</a>
              <a href="#" style={{ border: '2px solid #19c39c', color: '#19c39c', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', background: '#fff' }}>Free Consultation</a>
            </div>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/images/cayman-1.avif" alt="Cayman Islands" style={{ width: 420, height: 260, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.13)' }} />
          </div>
        </div>
      </section>
      {/* 3rd Section: About the Cayman Islands */}
      <section style={{ background: '#fff', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            About the Cayman Islands
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            The Cayman Islands are a self-governing British Overseas Territory in the West Indies, with George Town as its capital and most populated city with 40,200 residents.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, justifyContent: 'center', marginBottom: 0 }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', border: '2px solid #19c39c', textAlign: 'center', marginBottom: 18 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>👑</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>British Territory Status</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Citizens are British citizens with UK handling Foreign Relations and Defence</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', border: '2px solid #19c39c', textAlign: 'center', marginBottom: 18 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>⚖️</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Mature Legal System</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Legal system closely resembles UK courts - considered best for offshore incorporation</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', border: '2px solid #19c39c', textAlign: 'center', marginBottom: 18 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>📍</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Strategic Location</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Located in West Indies with George Town as the business and financial center</div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th Section: Why Choose Cayman Islands? */}
      <section style={{ background: '#f8f9fa', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Why Choose Cayman Islands?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            The Cayman Islands offer exceptional advantages for offshore company formation with their sophisticated legal framework and business-friendly environment.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {/* Benefit 1 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600 }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              English is the official language
            </div>
            {/* Benefit 2 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600 }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Legal system based on English Common Law
            </div>
            {/* Benefit 3 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600 }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Very mature and reliable legal system
            </div>
            {/* Benefit 4 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600 }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              No minimum shareholding capital required
            </div>
            {/* Benefit 5 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600 }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Only need registered office and registered agent
            </div>
            {/* Benefit 6 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600 }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Minimum one shareholder and one Director
            </div>
            {/* Benefit 7 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600 }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Companies can operate outside Cayman Islands
            </div>
            {/* Benefit 8 */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 15, color: '#19c39c', fontWeight: 600 }}>
              <span style={{ fontSize: 20 }}>✔️</span>
              Simple annual return filing - no audit required
            </div>
          </div>
        </div>
      </section>
      {/* 5th Section: How to Set Up Your Cayman Islands Company */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#fff' }}>
            How to Set Up Your Cayman Islands Company
          </h2>
          <p style={{ textAlign: 'center', color: '#e6f2ef', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Our expert team guides you through each step of the Cayman Islands company formation process
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, justifyContent: 'center', margin: '0 auto', maxWidth: 900 }}>
            {/* Step 1 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Choose Company Type</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Most popular is Exempt Company. You can also register as Limited Duration or Segregated Portfolio.</div>
            </div>
            {/* Step 2 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Select Company Name</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Choose a unique name in English or Chinese through the Companies Registry.</div>
            </div>
            {/* Step 3 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Prepare Articles of Association</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Decide on Directors and share allocation during preparation.</div>
            </div>
            {/* Step 4 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Register Your Company</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Complete registration with supporting documents and opening brokerage/bank account.</div>
            </div>
            {/* Step 5 */}
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, boxShadow: '0 2px 8px rgba(30,198,182,0.07)', gridColumn: 'span 1' }}>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>Secure Additional Approvals</div>
              <div style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>Access special licenses and services from Cayman Islands Monetary Authority.</div>
            </div>
          </div>
        </div>
      </section>
      {/* 6th Section: Cayman Islands Companies Act (2021 Revision) */}
      <section style={{ background: '#fff', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Left: Text and features */}
          <div style={{ flex: 2, minWidth: 320, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', color: '#23272e', marginBottom: 16 }}>Cayman Islands Companies Act (2021 Revision)</h2>
            <p style={{ color: '#444', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 24 }}>
              The Companies Act governs company formation and allows foreigners to register companies with minimal requirements. For Legally Limited Companies, there's no minimum shareholding capital requirement.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#19c39c', fontWeight: 700, fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 20 }}>✔️</span> Exempted Company
                <span style={{ color: '#444', fontWeight: 400, fontSize: 15, marginLeft: 8 }}>No capital required, simple tax-free structure</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#19c39c', fontWeight: 700, fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 20 }}>✔️</span> Simple Compliance
                <span style={{ color: '#444', fontWeight: 400, fontSize: 15, marginLeft: 8 }}>Only one annual return is needed for filing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#19c39c', fontWeight: 700, fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                <span style={{ fontSize: 20 }}>✔️</span> Global Operations
                <span style={{ color: '#444', fontWeight: 400, fontSize: 15, marginLeft: 8 }}>Companies can carry out business outside Cayman Islands</span>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/images/cayman-2.avif" alt="Cayman Legal" style={{ width: 380, height: 210, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.13)' }} />
          </div>
        </div>
      </section>
      {/* 7th Section: Comprehensive Formation Services */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#23272e' }}>
            Comprehensive Formation Services
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            We handle every aspect of your Cayman Islands company formation
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* What We Handle Card */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', minWidth: 320, maxWidth: 400, flex: '1 1 320px', boxShadow: '0 2px 16px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>What We Handle</div>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Company name search and reservation</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Articles of Association preparation</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Company registration process</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Banking assistance</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Regulatory approvals</li>
              </ul>
            </div>
            {/* Optional Services Card */}
            <div style={{ background: '#f7f6fd', borderRadius: 16, padding: '32px 28px', minWidth: 320, maxWidth: 400, flex: '1 1 320px', boxShadow: '0 2px 16px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>Optional Services</div>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Shelf company purchase available</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Legal structure consultation</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Ongoing compliance support</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Nominee services if required</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Financial services licensing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 8th Section: Call to Action */}
      <section style={{ background: '#13777c', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Start Your Cayman Islands Company Today
          </h2>
          <p style={{ color: '#e6f2ef', fontSize: '1.08rem', marginBottom: 24, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Our experienced team is ready to help you establish your Cayman Islands company
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
              Your trusted partner for Cayman Islands<br/>company formation and business setup<br/>services.
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