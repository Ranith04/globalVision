import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import Navbar from '../../components/Navbar';

export default function DubaiOffshorePage() {
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
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 40 }}>
              Dubai Offshore <br />Company Formation
            </h1>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', color: '#ffffff', marginBottom: 0, fontWeight: 400, lineHeight: 1.7, opacity: 0.95 }}>
            Establish your offshore company in Dubai and enjoy the advantages of complete privacy, tax efficiency, and global business reach. Ideal for international trading, holding assets, intellectual property management, and wealth protection, Dubai’s offshore framework offers a secure, flexible, and reputable jurisdiction. With simplified regulations, no local office requirements, and strong banking support, it's the perfect choice for entrepreneurs and investors seeking confidentiality and international growth
             </p>
          </div>
        </div>
      </section>
      {/* Section 2: White background, left text, right image */}
      <section style={{ background: '#e6fcfa', padding: '80px 0 80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', minHeight: 340 }}>
          {/* Left: Title, subtitle, buttons */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2.3rem', color: '#23272e', marginBottom: 10, lineHeight: 1.15 }}>
              Dubai Offshore<br /><span style={{ color: '#19c39c' }}>Company Formation</span>
            </h2>
            <div style={{ display: 'flex', gap: 18, margin: '32px 0 0 0' }}>
              <a href="#" style={{ background: '#19c39c', color: '#fff', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Start Your Setup</a>
              <a href="#" style={{ border: '2px solid #19c39c', color: '#19c39c', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', background: '#fff' }}>Free Consultation</a>
            </div>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="/images/dubai-offshore.avif" alt="Dubai Offshore" style={{ width: 420, height: 260, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.13)' }} />
          </div>
        </div>
      </section>
      {/* 3rd Section: Why Choose Dubai Offshore? */}
      <section style={{ background: '#fff', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Why Choose Dubai Offshore?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 44, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Dubai offshore companies offer unparalleled advantages for international business operations, asset protection, and tax optimization.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginBottom: 0 }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>💸</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Tax Neutrality</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Legally benefit from zero tax structure</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🔒</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Privacy Protection</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Shareholder details not required for public record</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>📝</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Minimal Compliance</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Easing routine for annual reporting and tax obligations</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🏦</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Easy Banking</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Simple corporate bank account setup in UAE</div>
            </div>
            {/* Card 5 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🌍</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Global Operations</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Full repatriation of funds and multi-currency facilities</div>
            </div>
            {/* Card 6 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🏢</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Complete Ownership</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>100% ownership in full business activities</div>
            </div>
            {/* Card 7 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🤝</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>Confidentiality</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Maintain complete confidentiality in business dealings</div>
            </div>
            {/* Card 8 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 12 }}>🚫</div>
              <div style={{ color: '#23272e', fontWeight: 700, fontSize: 17, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>No Trade Barriers</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>No foreign exchange controls or trade restrictions</div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th Section: Strategic Offshore Solutions */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/images/dubai-offshore-2.avif" alt="Dubai Offshore" style={{ width: 550, height: 380, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px rgba(30,198,182,0.13)' }} />
          </div>
          {/* Right: Text */}
          <div style={{ flex: 2, minWidth: 320, maxWidth: 600, color: '#fff', paddingLeft: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', marginBottom: 12, color: '#fff' }}>
              Strategic Offshore Solutions for<br />Global Business
            </h2>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 17, color: '#e6f2ef', marginBottom: 32, fontWeight: 400 }}>
              An offshore company formation in Dubai is a legal business established to operate outside its registered jurisdiction. These companies offer unique advantages for international trading, asset protection, and tax optimization.<br /><br />With UAE's stable legal system, sophisticated infrastructure, and access to international markets, Dubai offshore companies provide the perfect gateway for global business growth.
            </p>
            <a href="#" style={{ background: '#fff', color: '#19c39c', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', width: 'fit-content', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Learn More About Benefits</a>
          </div>
        </div>
      </section>
      {/* 5th Section: Top Offshore Jurisdictions in UAE */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Top Offshore Jurisdictions in UAE
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            Choose from the most established offshore centers
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 0 }}>
            {/* RAK ICC Card */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 340, maxWidth: 480, flex: '1 1 340px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#23272e', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>RAK International Corporate Centre (RAK ICC)</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 16 }}>
                The cheapest and fastest way to set up an offshore company in the UAE, with incorporation often completed in just a few days.
              </div>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 8 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>100% foreign ownership permitted</li>
                <li style={{ marginBottom: 8 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Tax-free jurisdiction</li>
                <li><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span><a href="#" style={{ color: '#1e90ff', textDecoration: 'underline' }}>Over 14,000 companies registered</a></li>
              </ul>
            </div>
            {/* JAFZA Card */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 28px', minWidth: 340, maxWidth: 480, flex: '1 1 340px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#23272e', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Jebel Ali Free Zone Authority (JAFZA)</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 16 }}>
                UAE's only offshore vehicles permitted to own property in Dubai, offering unique advantages for real estate investment.
              </div>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 20, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 8 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span><a href="#" style={{ color: '#1e90ff', textDecoration: 'underline' }}>Property ownership rights in Dubai</a></li>
                <li style={{ marginBottom: 8 }}><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span>Multi-currency banking accounts</li>
                <li><span style={{ color: '#19c39c', marginRight: 6 }}>✓</span><a href="#" style={{ color: '#1e90ff', textDecoration: 'underline' }}>International business operations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 6th Section: Our Comprehensive Services */}
      <section style={{ background: '#f8f9fa', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 10, fontFamily: 'Playfair Display, serif', color: '#23272e' }}>
            Our Comprehensive Services
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 17 }}>
            End-to-end solutions for your offshore business setup
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, justifyContent: 'center' }}>
            {/* Service 1 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🏢</div>
              Offshore Company Setup
            </div>
            {/* Service 2 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>💼</div>
              Investor Visa
            </div>
            {/* Service 3 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>👥</div>
              Work Visa for Teams
            </div>
            {/* Service 4 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🏠</div>
              Residence Permits
            </div>
            {/* Service 5 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>📄</div>
              Licensing & Documentation
            </div>
            {/* Service 6 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🧾</div>
              Labour Cards
            </div>
            {/* Service 7 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🛂</div>
              Immigration Cards
            </div>
            {/* Service 8 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>✅</div>
              Government Approvals
            </div>
            {/* Service 9 */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 18px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)', textAlign: 'center', border: '1.5px solid #e5e7eb', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 600, color: '#23272e' }}>
              <div style={{ fontSize: 28, color: '#19c39c', marginBottom: 10 }}>🔄</div>
              License Renewal
            </div>
          </div>
        </div>
      </section>
      {/* 7th Section: Frequently Asked Questions */}
      <section style={{ background: '#fff', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', marginBottom: 36, fontFamily: 'Montserrat, Arial, sans-serif', color: '#23272e' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* FAQ 1 */}
            <div style={{ background: '#fff', border: '1.5px solid #19c39c', borderRadius: 10, padding: '22px 28px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>Why set up an offshore company in the UAE?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>An offshore company in the UAE offers the advantage of maintaining a virtual office while benefiting from the UAE market, requiring very low capital and operating in tax-free jurisdictions.</div>
            </div>
            {/* FAQ 2 */}
            <div style={{ background: '#fff', border: '1.5px solid #19c39c', borderRadius: 10, padding: '22px 28px', boxShadow: '0 2px 8px rgba(30,198,182,0.07)' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 6 }}>How can I start an offshore company in Dubai?</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>The process involves choosing your jurisdiction, selecting a company name, preparing incorporation documents, appointing a registered agent, and completing the registration process. We handle everything for you.</div>
            </div>
          </div>
        </div>
      </section>
      {/* 8th Section: Call to Action */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Ready to Start Your Offshore Company?
          </h2>
          <p style={{ color: '#e6f2ef', fontSize: '1.08rem', marginBottom: 24, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Get expert guidance and start your Dubai offshore company formation today
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, alignItems: 'center', color: '#fff', fontSize: 16, marginBottom: 28, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            <span> +971 50 419 3507</span>
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