import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function FlexiOfficesPage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"Flexi Offices in Dubai"}
        description={"Affordable, flexible office solutions for growing businesses. Enjoy shared amenities, prime locations, and scalable options to suit your needs in Dubai."}
        ctaText="Explore Flexi Offices"
        ctaHref="#callback-form"
         backgroundImage="/images/Background-services.jpg"
      />
       
      {/* Flexi Desk Section */}
      <section style={{ background: '#fff', padding: '56px 0 56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          {/* Left: Heading, features, buttons */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 540, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontWeight: 800, fontSize: '2.1rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26', lineHeight: 1.13, textAlign: 'left' }}>
              Flexi Desk<br /><span style={{ color: '#19c39c', fontWeight: 800 }}>Dubai Smart Office</span>
            </h2>
            <div style={{ display: 'flex', gap: 14, marginBottom: 22 }}>
              <a href="#" style={{ background: '#19c39c', color: '#fff', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: 'none', boxShadow: '0 2px 8px rgba(16,185,129,0.10)' }}>Book Flexi Desk</a>
              <a href="#" style={{ background: '#fff', color: '#19c39c', border: '2px solid #19c39c', padding: '11px 28px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>Learn More</a>
            </div>
          </div>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 390, maxWidth: '100%', height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 70, height: 16, background: '#19c39c', borderRadius: '8px 0 8px 0', zIndex: 2 }} />
              <img src="/images/flexi-1.jpg" alt="Flexi Desk" style={{ width: 390, height: 210, borderRadius: 18, objectFit: 'cover', border: '6px solid #fff', boxShadow: '0 8px 32px rgba(16,185,129,0.13)', transform: 'rotate(-2.5deg)', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>
      {/* What is a Flexi Desk in Dubai? */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 38, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Left: Text */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 540 }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
              What is a Flexi Desk in Dubai?
            </h2>
            <p style={{ color: '#444', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 0 }}>
              A Flexi desk, commonly known as a shared office in the UAE, is a top choice for professionals or companies upon registration. It includes a desk and chair setup, providing companies with a registered business address, access to facilities, and essential business services.<br /><br />
              Built for maximum efficiency, a Flexi Desk is the most affordable way to meet the UAE's "real desk" facility. This smart solution provides prime business benefits – it's an open, shared, and flexible workspace.<br /><br />
              Every UAE-registered business needs at least one of these desks to meet regulatory requirements and maintain a physical presence.
            </p>
          </div>
          {/* Right: Image Card */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,198,182,0.10)', padding: 0, width: 340, maxWidth: '100%' }}>
              <img src="/images/flexi-2.jpg" alt="Flexi Desk Dubai" style={{ width: 480, height: 240, borderRadius: 16, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
      {/* Benefits of Flexi Desk in Dubai */}
      <section style={{ background: '#f8fafc', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Benefits of Flexi Desk in Dubai
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Discover why flexi desks are ideal for startups and businesses in the UAE
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, maxWidth: 950, margin: '0 auto' }}>
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Ready Workspace</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Fully equipped desk, chair, PO box, phone number, and internet access</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Flexible Usage</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Use as a personal workstation and secure it after work hours for privacy</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Additional Facilities</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Access to video conferencing facilities and meeting rooms</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Cost-Effective</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Highly affordable alternative to traditional office space rentals</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Time Saving</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Eliminates compliance formalities and saves time for entrepreneurs</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '32px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#151b26', marginBottom: 8 }}>Business Compliance</div>
              <div style={{ color: '#6b7a86', fontSize: 15 }}>Meets UAE business registration requirement for physical presence</div>
            </div>
          </div>
        </div>
      </section>
      {/* Maximizing Your Flexi Desk Space */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Maximizing Your Flexi Desk Space
          </h2>
          <p style={{ textAlign: 'center', color: '#444', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 400, fontSize: 15, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Your flexi desk can be a dynamic hub for work, networking, and growth
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, maxWidth: 1000, margin: '0 auto' }}>
            {['Smart Setup','Focused Work','Networking','Business Address','Flexibility'].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 12, padding: '18px 8px', textAlign: 'center', color: '#151b26', fontWeight: 600, fontSize: 14, marginBottom: 0, fontFamily: 'Montserrat, Arial, sans-serif', border: '1.5px solid #e5e7eb' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Key Considerations for Flexible Office Spaces */}
      <section style={{ background: '#fff', padding: '32px 0 32px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Key Considerations for Flexible Office Spaces
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 1000, margin: '0 auto' }}>
            {['Location','Cost-Effectiveness','Flexibility','Amenities','Workspace Design','Community & Networking','Privacy Options','Scalability','Tech Infrastructure','Support Services','Lease Terms','Security','Accessibility','Brand Image'].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 22, padding: '8px 22px', color: '#19c39c', fontWeight: 600, fontSize: 14, border: '1.5px solid #e5e7eb', marginBottom: 8 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Advantages of Flexible Workspace */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 38, fontFamily: 'Montserrat, Arial, sans-serif', color: '#fff' }}>
            Advantages of Flexible Workspace
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, maxWidth: 950, margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 17, border: '1.5px solid #19c39c' }}>
              Increased Productivity
              <div style={{ fontWeight: 400, fontSize: 15, marginTop: 8 }}>Select workspace that aligns with specific task requirements</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 17, border: '1.5px solid #19c39c' }}>
              Enhanced Adaptability
              <div style={{ fontWeight: 400, fontSize: 15, marginTop: 8 }}>Seamless adjustment to changing workspace needs</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 17, border: '1.5px solid #19c39c' }}>
              Cost Efficiency
              <div style={{ fontWeight: 400, fontSize: 15, marginTop: 8 }}>Optimize resources based on evolving business requirements</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 14, padding: '32px 18px', textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 17, border: '1.5px solid #19c39c' }}>
              Employee Satisfaction
              <div style={{ fontWeight: 400, fontSize: 15, marginTop: 8 }}>Higher retention rates through adaptability and freedom</div>
            </div>
          </div>
        </div>
      </section>
      {/* Flexi Desk vs Virtual Office */}
      <section style={{ background: '#fff', padding: '48px 0 36px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif', color: '#151b26' }}>
            Flexi Desk vs Virtual Office
          </h2>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 220, background: '#f8fafc', borderRadius: 14, padding: '28px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb', fontWeight: 600, fontSize: 16 }}>
              <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Flexi Desk</div>
              <ul style={{ color: '#151b26', fontWeight: 400, fontSize: 15, listStyle: 'none', padding: 0, margin: 0 }}>
                <li>Physical workspace available</li>
                <li>Actual desk and chair setup</li>
                <li>Can work from the location</li>
                <li>Meeting rooms access</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: 220, background: '#f8fafc', borderRadius: 14, padding: '28px 18px', textAlign: 'center', boxShadow: '0 2px 12px rgba(30,198,182,0.04)', border: '1.5px solid #e5e7eb', fontWeight: 600, fontSize: 16 }}>
              <div style={{ color: '#19c39c', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Virtual Office</div>
              <ul style={{ color: '#151b26', fontWeight: 400, fontSize: 15, listStyle: 'none', padding: 0, margin: 0 }}>
                <li>Registered address only</li>
                <li>No physical desk access</li>
                <li>Cannot operate onsite</li>
                <li>Limited virtual services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Start Your Business? CTA */}
      <section style={{ background: 'linear-gradient(120deg, #0f9d8f 0%, #19c39c 100%)', padding: '56px 0 36px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Ready to Start Your Business?
          </div>
          <div style={{ color: '#e6f2ef', fontSize: 15, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 18 }}>
            Get your flexi desk in Dubai and meet UAE business registration requirements
          </div>
          <div style={{ color: '#fff', fontSize: 16, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 18 }}>
            +971 4 8872760 &nbsp; | &nbsp; dubai@globalvisionservices.com
          </div>
          <a href="#contact" style={{ background: '#fff', color: '#19c39c', padding: '11px 28px', borderRadius: 30, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', border: 'none', boxShadow: '0 2px 8px rgba(16,185,129,0.10)' }}>Contact Expert Consultants</a>
        </div>
      </section>
      {/* Take the First Step Section */}
       
      <ContactLeadSection />
      {/* Footer */}
      <footer style={{ background: '#151b26', color: '#fff', padding: '36px 0 0 0', fontFamily: 'Montserrat, Arial, sans-serif' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <img src="/images/logo.jpg" alt="Global Vision Logo" style={{ width: 160, marginBottom: 18, borderRadius: 6 }} />
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 18 }}>
              Your ideal partner for tailored business solutions and innovative office spaces in the UAE.
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 180 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Services</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>Company Formation</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>Business Consulting</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>Office Assistance</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>Visa Services</div>
          </div>
          <div style={{ flex: 1, minWidth: 180 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Resources</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>Blog</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>FAQs</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>Guides</div>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Contact Info</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>Office 101, Business Bay Tower, Dubai, UAE</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>+971 4 324 4697</div>
            <div style={{ color: '#e6f2ef', fontSize: 14, marginBottom: 8 }}>dubai@globalvisionservices.com</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #222', marginTop: 32, padding: '18px 0 0 0', textAlign: 'center', color: '#e6f2ef', fontSize: 13 }}>
          © 2024 Global Vision Services. All rights reserved. &nbsp; &nbsp; <a href="#" style={{ color: '#19c39c', textDecoration: 'none' }}>Privacy Policy</a> &nbsp; | &nbsp; <a href="#" style={{ color: '#19c39c', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </footer>
    </>
  );
}