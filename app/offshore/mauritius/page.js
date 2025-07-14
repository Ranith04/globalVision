import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function MauritiusPage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"Mauritius Offshore Company"}
        description={"Leverage Mauritius for international business, investment, and tax planning. Enjoy a robust legal framework and access to African and Asian markets."}
        ctaText="Start Mauritius Company"
        ctaHref="#callback-form"
        backgroundImage="/images/Background-services.jpg"
      />
      {/* 2nd Section - Pixel-perfect as screenshot */}
      <section style={{ background: '#eafcf8', padding: '32px 0 32px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          {/* Left: Heading, features, buttons */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontWeight: 800, fontSize: '2.1rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26', lineHeight: 1.13, textAlign: 'left' }}>
              Mauritius Offshore<br /><span style={{ color: '#10b981', fontWeight: 800 }}>Company Formation</span>
            </h2>
            <div style={{ display: 'flex', gap: 24, margin: '0 0 22px 0', color: '#151b26', fontSize: 15, fontWeight: 500, fontFamily: 'Montserrat, Arial, sans-serif', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#10b981', fontSize: 18 }}>📍</span>Indian Ocean
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#10b981', fontSize: 18 }}>🏝️</span>Island Paradise
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#10b981', fontSize: 18 }}>⏱️</span>7-10 Days Setup
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="#" style={{ background: '#10b981', color: '#fff', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: 'none', boxShadow: '0 2px 8px rgba(16,185,129,0.10)' }}>Start Formation</a>
              <a href="#" style={{ background: '#fff', color: '#10b981', border: '2px solid #10b981', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>Free Consultation</a>
            </div>
          </div>
          {/* Right: Image Card - thick accent, shadow, slight rotation */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 390, maxWidth: '100%', height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Green accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 70, height: 16, background: '#10b981', borderRadius: '8px 0 8px 0', zIndex: 2 }} />
              {/* Image with border, shadow, and slight rotation */}
              <img src="/images/mauritius-1.avif" alt="Mauritius Cityscape" style={{ width: 390, height: 210, borderRadius: 18, objectFit: 'cover', border: '6px solid #fff', boxShadow: '0 8px 32px rgba(16,185,129,0.13)', transform: 'rotate(-2.5deg)', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>
      {/* 3rd Section: Why Mauritius for Offshore Business? */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.7rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Why Mauritius for Offshore Business?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 16, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            In recent years, Mauritius has gained a solid reputation as a secure and reliable investment destination with several exciting features including stable governance, ethics, economic transparency, and political freedom.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, maxWidth: 950, margin: '0 auto' }}>
            {/* Card 1 */}
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#10b981', marginBottom: 12 }}>
                <span role="img" aria-label="shield">🛡️</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Stable Governance</div>
              <div style={{ color: '#6b7a86', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Established reputation for secure and reliable investment destination</div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#10b981', marginBottom: 12 }}>
                <span role="img" aria-label="chart">📈</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Economic Transparency</div>
              <div style={{ color: '#6b7a86', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Strong economic transparency and political freedom</div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#10b981', marginBottom: 12 }}>
                <span role="img" aria-label="location">📍</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Strategic Location</div>
              <div style={{ color: '#6b7a86', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Island in Indian Ocean, southeast coast of African continent</div>
            </div>
            {/* Card 4 */}
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#10b981', marginBottom: 12 }}>
                <span role="img" aria-label="platform">🖥️</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Leading Platform</div>
              <div style={{ color: '#6b7a86', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Established as leading platform for global investors</div>
            </div>
            {/* Card 5 */}
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#10b981', marginBottom: 12 }}>
                <span role="img" aria-label="nature">🌴</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Natural Beauty</div>
              <div style={{ color: '#6b7a86', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Beautiful flora, fauna and exciting natural attractions</div>
            </div>
            {/* Card 6 */}
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontSize: 32, color: '#10b981', marginBottom: 12 }}>
                <span role="img" aria-label="investors">👥</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8, fontFamily: 'Montserrat, Arial, sans-serif' }}>Global Investors</div>
              <div style={{ color: '#6b7a86', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Platform for investors around the globe with plenty of offers</div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th Section: Key Facts on Mauritius Business Setup */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Key Facts on Mauritius Business Setup
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Important information about company formation and business operations in Mauritius
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, maxWidth: 900, margin: '0 auto' }}>
            {/* Fact 1 */}
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#151b26', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              <span style={{ color: '#10b981', fontSize: 20 }}>✔️</span>Category two global business company replaced by authorized company
            </div>
            {/* Fact 2 */}
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#151b26', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              <span style={{ color: '#10b981', fontSize: 20 }}>✔️</span>Considered non-resident for taxation if management is outside country
            </div>
            {/* Fact 3 */}
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#151b26', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              <span style={{ color: '#10b981', fontSize: 20 }}>✔️</span>Business activities conducted outside Mauritius
            </div>
            {/* Fact 4 */}
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#151b26', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              <span style={{ color: '#10b981', fontSize: 20 }}>✔️</span>Controlled by majority shareholders who are not Mauritius citizens
            </div>
            {/* Fact 5 */}
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#151b26', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              <span style={{ color: '#10b981', fontSize: 20 }}>✔️</span>Company formation takes 7-10 days with proper documents
            </div>
            {/* Fact 6 */}
            <div style={{ background: '#f8fafc', borderRadius: 10, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#151b26', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 500 }}>
              <span style={{ color: '#10b981', fontSize: 20 }}>✔️</span>Migration of companies permitted in and out of country
            </div>
          </div>
        </div>
      </section>
      {/* 5th Section: Regulatory Framework */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 38, flexWrap: 'wrap' }}>
          {/* Left: Text and cards */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, color: '#fff' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#fff' }}>
              Regulatory Framework
            </h2>
            <p style={{ color: '#e6f2ef', fontSize: 15, marginBottom: 28, fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Mauritius has a well-established regulatory framework governing offshore company formation
            </p>
            <div style={{ marginBottom: 22 }}>
              <div style={{ background: 'rgba(16,185,129,0.13)', borderRadius: 8, padding: '16px 18px', marginBottom: 12, color: '#10b981', fontWeight: 700, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Financial Services Commission
                <div style={{ color: '#e6f2ef', fontWeight: 400, fontSize: 14, marginTop: 4 }}>Primary regulatory body overseeing financial services</div>
              </div>
              <div style={{ background: 'rgba(16,185,129,0.13)', borderRadius: 8, padding: '16px 18px', color: '#10b981', fontWeight: 700, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Registrar of Companies
                <div style={{ color: '#e6f2ef', fontWeight: 400, fontSize: 14, marginTop: 4 }}>Handles company registration and compliance matters</div>
              </div>
            </div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 8 }}>Key Legislation</div>
            <ul style={{ color: '#e6f2ef', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}><span style={{ color: '#10b981', fontSize: 18 }}>✔️</span>The Companies Act, 2001</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#10b981', fontSize: 18 }}>✔️</span>Financial Services Act, 2007</li>
            </ul>
          </div>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,198,182,0.10)', padding: 0, width: 340, maxWidth: '100%' }}>
              <img src="/images/mauritius-2.avif" alt="Mauritius Regulatory" style={{ width: 600, height: 380, borderRadius: 16, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
      {/* 6th Section: Company Structure Information */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Company Structure Information
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Understanding the structure and requirements for Mauritius offshore companies
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Company Requirements Card */}
            <div style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', minWidth: 320, maxWidth: 400, flex: '1 1 320px', boxShadow: '0 2px 16px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>Company Requirements</div>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#0891b2', fontSize: 18 }}>■</span>Company Name<br /><span style={{ color: '#444', fontWeight: 400, fontSize: 14, marginLeft: 26 }}>can end with 'Ltd', 'Limited', 'Corp', 'S.A.', or 'Inc'</span></li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#19c39c', fontSize: 18 }}>✔️</span>Formation Time<br /><span style={{ color: '#444', fontWeight: 400, fontSize: 14, marginLeft: 26 }}>7-10 days with proper documentation</span></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ color: '#0891b2', fontSize: 18 }}>⇄</span>Migration Permitted<br /><span style={{ color: '#444', fontWeight: 400, fontSize: 14, marginLeft: 26 }}>Companies can migrate in and out of country</span></li>
              </ul>
            </div>
            {/* Key Benefits Card */}
            <div style={{ background: '#eafcf8', borderRadius: 16, padding: '32px 28px', minWidth: 320, maxWidth: 400, flex: '1 1 320px', boxShadow: '0 2px 16px rgba(30,198,182,0.07)', border: '1.5px solid #e5e7eb', marginBottom: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#23272e', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>Key Benefits</div>
              <ul style={{ color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>No shelf companies – all fresh incorporations</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Flexible tax planning opportunities</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Access to extensive treaty network</li>
                <li style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>Established financial services sector</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18 }}>✔️</span>English-speaking business environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 7th Section: How A&A Associates Support Offshore Business Setup in Mauritius */}
      <section style={{ background: '#f6f8f9', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            How A&A Associates Support Offshore Business Setup in Mauritius
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            With years of experience setting up companies offshore, we provide comprehensive support for your Mauritius company formation needs.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
            {/* Expert Legal Team Card */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 260, maxWidth: 400, flex: '1 1 260px', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#10b981', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Expert Legal Team</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Company formation experts work closely with our legal team to ensure everything is in perfect order</div>
            </div>
            {/* Global Experience Card */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', minWidth: 260, maxWidth: 400, flex: '1 1 260px', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#10b981', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Global Experience</div>
              <div style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>We have helped clients from 100+ countries worldwide with offshore company formation</div>
            </div>
          </div>
          {/* Callout Card */}
          <div style={{ background: '#10b981', borderRadius: 12, padding: '22px 32px', color: '#fff', fontWeight: 600, fontSize: 1.08+'rem', textAlign: 'center', maxWidth: 700, margin: '0 auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Need Help with Mauritius Offshore Company Formation?<br />
            <span style={{ fontWeight: 400, fontSize: 15, color: '#e6f2ef' }}>If you need help incorporating an offshore company in Mauritius, get in touch. We can be counted on to deliver the right kind of assistance for your unique needs.</span>
          </div>
        </div>
      </section>
      {/* 8th Section: Ready to Incorporate in Mauritius? */}
      <section style={{ background: '#13777c', padding: '44px 0 44px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Ready to Incorporate in Mauritius?
          </h2>
          <p style={{ color: '#e6f2ef', fontSize: '1.01rem', marginBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Contact our Mauritius formation experts today for comprehensive offshore solutions
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, alignItems: 'center', color: '#fff', fontSize: 15, marginBottom: 22, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            <span>+971 50 483 6190</span>
            <span style={{ fontSize: 18, color: '#fff' }}>•</span>
            <span>info@www.globalvisionuae.com@/app</span>
          </div>
          <a href="#" style={{ background: '#fff', color: '#19c39c', padding: '11px 28px', borderRadius: 30, fontWeight: 700, fontSize: '1.01rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Get Free Consultation</a>
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
              Your trusted partner for Mauritius company formation and business setup services.
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