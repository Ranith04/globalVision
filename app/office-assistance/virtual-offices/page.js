import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function VirtualOfficesPage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"Virtual Offices in Dubai"}
        description={"Establish a professional business presence in Dubai with a virtual office. Enjoy mail handling, call services, and a prestigious address without physical space."}
        ctaText="Get Virtual Office"
        ctaHref="#callback-form"
         backgroundImage="/images/Background-services.jpg"
      />
      {/* 2nd Section */}
      <section style={{ background: '#eafcf8', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          {/* Left: Heading, features, buttons */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontWeight: 800, fontSize: '2.1rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26', lineHeight: 1.13, textAlign: 'left' }}>
              Virtual Offices<br /><span style={{ color: '#19c39c', fontWeight: 800 }}>Dubai Sheikh Zayed Road</span>
            </h2>
            <div style={{ display: 'flex', gap: 14, marginBottom: 22 }}>
              <a href="#" style={{ background: '#19c39c', color: '#fff', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: 'none', boxShadow: '0 2px 8px rgba(16,185,129,0.10)' }}>Book Virtual Office</a>
              <a href="#" style={{ background: '#fff', color: '#19c39c', border: '2px solid #19c39c', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>Free Consultation</a>
            </div>
          </div>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 390, maxWidth: '100%', height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 70, height: 16, background: '#19c39c', borderRadius: '8px 0 8px 0', zIndex: 2 }} />
              <img src="/images/virtual-1.avif" alt="SZR Cityscape" style={{ width: 390, height: 210, borderRadius: 18, objectFit: 'cover', border: '6px solid #fff', boxShadow: '0 8px 32px rgba(16,185,129,0.13)', transform: 'rotate(-2.5deg)', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>
      {/* 3rd Section: Why Choose Virtual Office in Dubai? */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Why Choose Virtual Office in Dubai?
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Experience the benefits of a professional business presence without the overhead costs
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, maxWidth: 950, margin: '0 auto' }}>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Prestigious Business Address</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Professional Dubai address on Sheikh Zayed Road for credibility</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Mail Handling</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Includes mail receiving, forwarding, and management services</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Phone Answering Service</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Professional call handling with dedicated phone lines</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Meeting Room Access</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>8 hours monthly access to fully equipped meeting rooms</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Enhanced Privacy</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Protect personal information while running your business address</div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Global Accessibility</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Access worldwide talent pool and international markets</div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th Section: Complete Virtual Office Services */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 38, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Left: Services List */}
          <ul style={{ flex: 1, minWidth: 320, maxWidth: 480, color: '#19c39c', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', paddingLeft: 0, margin: 0, listStyle: 'none' }}>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Professional Address</li>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Mail Handling</li>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Shared Desk 8 Hours/Month</li>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Dedicated Phone Line</li>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Copy Printing Service</li>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Meeting Room 8 Hours/Month</li>
            <li style={{ marginBottom: 12, color: '#19c39c', display: 'flex', alignItems: 'center', gap: 8 }}>✔️ Receptionist Services</li>
          </ul>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,198,182,0.10)', padding: 0, width: 340, maxWidth: '100%' }}>
              <img src="/images/virtual-2.avif" alt="Virtual Office Services" style={{ width: 440, height: 240, borderRadius: 16, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
      {/* 5th Section: 10 Key Advantages */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#fff' }}>
            10 Key Advantages of Virtual Offices
          </h2>
          <p style={{ textAlign: 'center', color: '#e6f2ef', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Discover how virtual offices can transform your business operations
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, maxWidth: 1000, margin: '0 auto' }}>
            {['No Daily Commute','Enhanced Productivity','More Flexibility','Access to Worldwide Talent Pool','Less Maintenance','Increased Privacy','Cost-Effective','Expandability','Employee Satisfaction','Prestige'].map((adv, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 12, padding: '22px 10px', textAlign: 'center', color: '#fff', fontWeight: 600, fontSize: 15, marginBottom: 0, fontFamily: 'Montserrat, Arial, sans-serif', border: '1.5px solid #19c39c' }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{i+1}</div>
                {adv}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 6th Section: Premium Facilities & Features */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Premium Facilities & Features
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 38, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 10 }}>🌊</div>
              <div style={{ fontWeight: 600, color: '#151b26', fontSize: 15 }}>Sea View / SZR View</div>
              <div style={{ color: '#6b7a86', fontSize: 13 }}>Prestigious location with stunning views</div>
            </div>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 10 }}>📶</div>
              <div style={{ fontWeight: 600, color: '#151b26', fontSize: 15 }}>High Speed Wi-Fi</div>
              <div style={{ color: '#6b7a86', fontSize: 13 }}>Fastest internet connectivity</div>
            </div>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 10 }}>🔒</div>
              <div style={{ fontWeight: 600, color: '#151b26', fontSize: 15 }}>24/7 Security</div>
              <div style={{ color: '#6b7a86', fontSize: 13 }}>CCTV monitoring and secure access</div>
            </div>
            <div style={{ textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 32, color: '#19c39c', marginBottom: 10 }}>🤖</div>
              <div style={{ fontWeight: 600, color: '#151b26', fontSize: 15 }}>Robotic Parking</div>
              <div style={{ color: '#6b7a86', fontSize: 13 }}>Automated parking solutions</div>
            </div>
          </div>
        </div>
      </section>
      {/* 7th Section: FAQ */}
      <section style={{ background: '#fff', padding: '32px 0 32px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ background: '#f8fafc', borderRadius: 10, padding: '22px 28px', marginBottom: 18, border: '1.5px solid #e5e7eb' }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#222', marginBottom: 6 }}>What is a virtual office and how does it work?</div>
            <div style={{ color: '#444', fontSize: 15 }}>A virtual office provides businesses with a professional address and essential services without physical space, offering flexibility and cost-effectiveness.</div>
          </div>
          <div style={{ background: '#f8fafc', borderRadius: 10, padding: '22px 28px', border: '1.5px solid #e5e7eb' }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#222', marginBottom: 6 }}>How much does a virtual office cost?</div>
            <div style={{ color: '#444', fontSize: 15 }}>Virtual office costs vary based on services included. Contact us for customized pricing that fits your business needs.</div>
          </div>
        </div>
      </section>
      {/* 8th Section: CTA */}
      <section style={{ background: '#13777c', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: '#e6f2ef', fontSize: '1.08rem', marginBottom: 24, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Book your virtual office in Dubai today and establish your business presence
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, alignItems: 'center', color: '#fff', fontSize: 16, marginBottom: 28, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            <span>+971 50 483 6190</span>
            <span style={{ fontSize: 18, color: '#fff' }}>•</span>
            <span>dubai@globalvisionservices.com</span>
          </div>
          <a href="#" style={{ background: '#fff', color: '#19c39c', padding: '13px 32px', borderRadius: 30, fontWeight: 700, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 8px rgba(30,198,182,0.10)' }}>Get Free Quote</a>
        </div>
      </section>
      {/* 9th Section: Take the First Step */}
      
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
            <div style={{ color: '#e5e7eb' }}>dubai@globalvisionservices.com</div>
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