import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function CoworkingSpacesPage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"Coworking Spaces in Dubai"}
        description={"Flexible, modern coworking spaces designed for entrepreneurs, freelancers, and startups. Enjoy premium amenities, networking, and a collaborative environment in the heart of Dubai."}
        ctaText="Book Your Coworking Space"
        ctaHref="#callback-form"
         backgroundImage="/images/Background-services.jpg"
      />
      {/* 2nd Section */}
      <section style={{ background: '#eafcf8', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          {/* Left: Heading, features, buttons */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontWeight: 800, fontSize: '2.1rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26', lineHeight: 1.13, textAlign: 'left' }}>
              Top-Tier Coworking<br /><span style={{ color: '#19c39c', fontWeight: 800 }}>Space in Dubai</span>
            </h2>
            <div style={{ display: 'flex', gap: 14, marginBottom: 22 }}>
              <a href="#" style={{ background: '#19c39c', color: '#fff', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: 'none', boxShadow: '0 2px 8px rgba(16,185,129,0.10)' }}>Book Coworking Space</a>
              <a href="#" style={{ background: '#fff', color: '#19c39c', border: '2px solid #19c39c', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>Get 40% Discount</a>
            </div>
          </div>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 390, maxWidth: '100%', height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 70, height: 16, background: '#19c39c', borderRadius: '8px 0 8px 0', zIndex: 2 }} />
              <img src="/images/coworking-1.jpg" alt="Coworking Space" style={{ width: 390, height: 210, borderRadius: 18, objectFit: 'cover', border: '6px solid #fff', boxShadow: '0 8px 32px rgba(16,185,129,0.13)', transform: 'rotate(-2.5deg)', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>
      {/* 3rd Section: What is a Coworking Space in Dubai? */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 38, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Left: Text */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 540 }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
              What is a Coworking Space in Dubai?
            </h2>
            <p style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 0 }}>
              A coworking space is a shared work environment for freelancers, entrepreneurs, startups, and remote workers. It offers flexible workstations, meeting rooms, and essential amenities, fostering collaboration and productivity. Our coworking spaces in Dubai are designed to support your work while fueling community, service and success.
            </p>
          </div>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,198,182,0.10)', padding: 0, width: 340, maxWidth: '100%' }}>
              <img src="/images/coworking-2.jpg" alt="Coworking Space Dubai" style={{ width: 440, height: 220, borderRadius: 16, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
      {/* 4th Section: Why Coworking Spaces are Perfect for Your Business */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Why Coworking Spaces are Perfect for Your Business
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Discover the compelling advantages of collaborative workspace solutions
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, maxWidth: 950, margin: '0 auto' }}>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Boost Productivity</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Physical and focused environment with fewer distractions</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Cost-Effectiveness</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Affordable rates, no long-term lease or utility costs</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Flexibility</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Flexible plans, easy upgrades, and scalable options</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Networking Opportunities</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Meet other professionals and grow your network</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Professional Environment</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Work in a professional setting with all amenities</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Prime Location</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Located in the heart of Dubai, easy access to metro</div>
            </div>
          </div>
        </div>
      </section>
      {/* 5th Section: Best Coworking Space in Dubai */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 38, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Left: List */}
          <ul style={{ flex: 1, minWidth: 320, maxWidth: 480, color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Premium Amenities</li>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Flexible Solutions</li>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Strategic Location</li>
          </ul>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,198,182,0.10)', padding: 0, width: 340, maxWidth: '100%' }}>
              <img src="/images/coworking-3.jpg" alt="Best Coworking Space" style={{ width: 440, height: 220, borderRadius: 16, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
      {/* 6th Section: Benefits of Coworking Space at Spider Business Center */}
      <section style={{ background: '#fff', padding: '32px 0 32px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Benefits of Coworking Space at Spider Business Center
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, maxWidth: 1000, margin: '0 auto' }}>
            {['24/7 Access','Fully Furnished','High Speed Wi-Fi','Security & CCTV','Printing and Storage','No Down Payment or Deposit','Easy Access to Metro Station','Guest Lounge & Concierge','Flexible Payment Options','Secured Keyless Entry System','Meeting Room','Social Experience Room'].map((benefit, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: '18px 8px', textAlign: 'center', color: '#151b26', fontWeight: 600, fontSize: 14, marginBottom: 0, fontFamily: 'Montserrat, Arial, sans-serif', border: '1.5px solid #e5e7eb' }}>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 7th Section: Affordable Coworking Space Package */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 18, padding: '38px 0', color: '#fff', fontWeight: 700, fontSize: '1.5rem', marginBottom: 0, fontFamily: 'Montserrat, Arial, sans-serif', border: '1.5px solid #19c39c' }}>
            <div style={{ fontSize: 18, marginBottom: 10 }}>Our Top Package</div>
            <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>AED 1,200</div>
            <div style={{ fontSize: 15, fontWeight: 400, marginBottom: 18 }}>Monthly Coworking access in prime location</div>
            <ul style={{ color: '#fff', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: '0 0 18px 0', listStyle: 'none', fontWeight: 400 }}>
              <li>✔️ No Deposit</li>
              <li>✔️ No Hidden Fees</li>
              <li>✔️ 24/7 Access</li>
              <li>✔️ Free Wi-Fi</li>
              <li>✔️ Meeting Room Access</li>
              <li>✔️ Printing & Scanning</li>
            </ul>
            <a href="#" style={{ background: '#fff', color: '#19c39c', padding: '11px 28px', borderRadius: 30, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: 'none', boxShadow: '0 2px 8px rgba(16,185,129,0.10)' }}>Book Now</a>
          </div>
        </div>
      </section>
      {/* 8th Section: Additional Benefits of Coworking */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 38, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 10 }}>🏢</div>
              <div style={{ fontWeight: 600, color: '#151b26', fontSize: 15 }}>Access to Amenities</div>
              <div style={{ color: '#6b7a86', fontSize: 13 }}>All-day access to meeting rooms, lounges, and more</div>
            </div>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 10 }}>🛎️</div>
              <div style={{ fontWeight: 600, color: '#151b26', fontSize: 15 }}>Support Services</div>
              <div style={{ color: '#6b7a86', fontSize: 13 }}>On-site support and reception for your needs</div>
            </div>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 10 }}>⚖️</div>
              <div style={{ fontWeight: 600, color: '#151b26', fontSize: 15 }}>Work-Life Balance</div>
              <div style={{ color: '#6b7a86', fontSize: 13 }}>Flexible hours and a vibrant community</div>
            </div>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 10 }}>💡</div>
              <div style={{ fontWeight: 600, color: '#151b26', fontSize: 15 }}>Embrace Innovation</div>
              <div style={{ color: '#6b7a86', fontSize: 13 }}>Connect with creative minds and new ideas</div>
            </div>
          </div>
        </div>
      </section>
      {/* 9th Section: FAQ */}
      <section style={{ background: '#fff', padding: '32px 0 32px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ background: '#f8fafc', borderRadius: 10, padding: '22px 28px', marginBottom: 18, border: '1.5px solid #e5e7eb' }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#222', marginBottom: 6 }}>What are the popular coworking spaces in Dubai?</div>
            <div style={{ color: '#444', fontSize: 15 }}>Dubai offers a wide range of coworking spaces, including Spider Business Center, WeWork, Regus, and more. Each space offers unique amenities and flexible plans.</div>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 10, padding: '22px 28px', border: '1.5px solid #e5e7eb' }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#222', marginBottom: 6 }}>How much does a coworking space cost in Dubai?</div>
            <div style={{ color: '#444', fontSize: 15 }}>Our coworking spaces start from AED 1200 monthly with all services included, such as internet, 24/7 security, and reception services.</div>
          </div>
        </div>
      </section>
      {/* 10th Section: CTA */}
      <section style={{ background: '#13777c', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Join Our Coworking Community
          </h2>
          <p style={{ color: '#e6f2ef', fontSize: '1.08rem', marginBottom: 24, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Experience the future of work with Dubai's premier coworking spaces
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, alignItems: 'center', color: '#fff', fontSize: 16, marginBottom: 28, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            <span>+971 800 78427</span>
            <span style={{ fontSize: 18, color: '#fff' }}>•</span>
            <span>sharing@globalvisionservices.com</span>
          </div>
          <a href="#" style={{ background: '#fff', color: '#19c39c', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Get Free Quote</a>
        </div>
      </section>
      {/* 11th Section: Take the First Step */}
       
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Business Bay Tower, Dubai, UAE</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 4 123 4567</div>
            <div style={{ color: '#e5e7eb' }}>sharing@globalvisionservices.com</div>
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