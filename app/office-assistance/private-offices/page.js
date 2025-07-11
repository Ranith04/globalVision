import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function PrivateOfficesPage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"Private Offices in Dubai"}
        description={"Secure, fully furnished private offices for businesses of all sizes. Experience privacy, comfort, and a professional environment with flexible lease terms in Dubai's top locations."}
        ctaText="Get Your Private Office"
        ctaHref="#callback-form"
         backgroundImage="/images/Background-services.jpg"
      />

      {/* Offer Section */}
      <section style={{ background: '#f7fafd', padding: '48px 0 32px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '0 16px' }}>
          <div style={{ flex: 1, minWidth: 320 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#222', marginBottom: 8 }}>Private Office <span style={{ color: '#0b8c8c' }}>for Rent in Dubai</span></h2>
            <div style={{ margin: '24px 0' }}>
              <button style={{ background: '#0b8c8c', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginRight: 12 }}>Book Private Office</button>
              <button style={{ background: '#fff', color: '#0b8c8c', border: '1px solid #0b8c8c', borderRadius: 6, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Schedule Tour</button>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'flex-end' }}>
            <img src="/images/private-1.jpg" alt="Private Office" style={{ width: 440, borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ background: '#fff', padding: '40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: 22, marginBottom: 32 }}>Benefits of Private Office for Rent</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { title: 'Enhanced Productivity', desc: 'Quiet and focused environment for improved concentration and efficiency.' },
              { title: 'Customizable Branding', desc: "Personalize spaces according to your company's brand and culture." },
              { title: 'Privacy & Security', desc: 'Private workspace for confidential meetings and secure data handling.' },
              { title: 'Professional Image', desc: 'Prestigious Dubai location enhances your business reputation.' },
              { title: 'Flexibility & Scalability', desc: 'Adapt space as your business grows with flexible terms.' },
              { title: 'Prime Location', desc: "Strategic location with access to Dubai's commercial hubs and metros." },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f7fafd', borderRadius: 10, padding: 24, minHeight: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <h4 style={{ color: '#0b8c8c', fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: '#444', fontSize: 15 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section style={{ background: '#fff', padding: '0 0 40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: 22, marginBottom: 32 }}>What We Offer with Private Office Rental</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {[
              'Sea View / SZR View', 'Fully Furnished', 'High-Speed WiFi', 'Dedicated Service Staff',
              'Robotic Car Parking', 'Modern Interiors', 'Customize Your Space', 'F&B Services',
              'Proximity to Metro Station', 'Guest Lounge & Concierge', 'Printing and Storage', 'No DEWA or Utilities Bill',
              'Ejari Approved', 'Flexible Payment Options', 'Secured Keyless Entry', 'Meeting Room/Conference Room',
            ].map((item, i) => (
              <div key={i} style={{ background: '#f7fafd', borderRadius: 10, padding: 16, textAlign: 'center', fontWeight: 500, fontSize: 15 }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ background: '#fff', padding: '0 0 40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '0 16px' }}>
          <div style={{ flex: 1, minWidth: 320 }}>
            <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>13 Years of Industry Experience</h3>
            <p style={{ color: '#444', fontSize: 15, marginBottom: 0 }}>
              At Global Vision Business Centers, we have consistently delivered high-standard office solutions for over a decade. Our expertise ensures you receive the best workspace, amenities, and support for your business to thrive in Dubai's dynamic market.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'flex-end' }}>
            <img src="/images/private-2.jpg" alt="Experience" style={{ width: 480, borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ background: 'linear-gradient(180deg, #0b8c8c 0%, #0b8c8c 100%)', padding: '48px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h3 style={{ textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: 22, marginBottom: 32 }}>Why Choose Private Office Space in Dubai?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { title: 'Professional Image', desc: 'Prestigious address that signifies commitment to high standards.' },
              { title: 'Flexibility', desc: 'Short-term or long-term solutions based on your needs.' },
              { title: 'Fully Furnished', desc: 'Turnkey solution allowing immediate business operations.' },
              { title: 'Support Services', desc: 'Administrative assistance, IT support, and meeting room access.' },
              { title: 'Networking Opportunities', desc: 'Reliable connectivity for seamless business hub.' },
              { title: 'Security & Privacy', desc: 'Dedicated for handling information and resources.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: 24, minHeight: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.03)', textAlign: 'center' }}>
                <h4 style={{ color: '#0b8c8c', fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: '#444', fontSize: 15 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Services Section */}
      <section style={{ background: '#fff', padding: '40px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: 22, marginBottom: 32 }}>Luxury Amenities & Services</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            {[
              { icon: '🌊', label: 'Sea Views' },
              { icon: '📶', label: 'High-Speed Internet' },
              { icon: '🤖', label: 'Robotic Parking' },
              { icon: '🍽️', label: 'F&B Services' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 600, color: '#0b8c8c', fontSize: 16 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: '#fff', padding: '40px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: 22, marginBottom: 32 }}>Frequently Asked Questions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              {
                q: 'What is a Private Office?',
                a: 'A private office is a lockable workspace designed for exclusive use, providing complete privacy and amenities for an individual or dedicated team.'
              },
              {
                q: 'What are the advantages of a private office?',
                a: 'Enhanced privacy, productivity, customization options, privacy, professional image, flexibility, and support services.'
              },
              {
                q: 'Can I find truly unlimited office rent in Dubai?',
                a: 'Yes, our offerings include flexible terms, multiple locations, amenities, and support for all business sizes.'
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f7fafd', borderRadius: 10, padding: 18 }}>
                <div style={{ fontWeight: 600, color: '#0b8c8c', fontSize: 16, marginBottom: 6 }}>{item.q}</div>
                <div style={{ color: '#444', fontSize: 15 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section style={{ background: '#0b8c8c', padding: '40px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', color: '#fff', padding: '0 16px' }}>
          <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Secure Your Private Office Today</h3>
          <p style={{ fontSize: 16, marginBottom: 18 }}>Elevate your business with premium private office solutions in Dubai!</p>
          <div style={{ marginBottom: 18 }}>
            <span style={{ marginRight: 18 }}>+971 4 870 7237</span>
            <span style={{ marginRight: 18 }}>dubai@globalvisionsvcs.com</span>
          </div>
          <button style={{ background: '#fff', color: '#0b8c8c', border: 'none', borderRadius: 6, padding: '10px 32px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Contact Us Today</button>
        </div>
      </section>

      {/* Take the First Step Section */}
       

      <ContactLeadSection />

      {/* Footer */}
      <footer style={{ background: '#0b8c8c', color: '#fff', padding: '32px 0 0 0', fontSize: 15 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', padding: '0 16px' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <img src="/images/footerlogo.png" alt="Global Vision" style={{ width: 160, marginBottom: 12 }} />
            <div style={{ marginBottom: 8 }}>Global Vision for Businessmen Services LLC</div>
            <div style={{ marginBottom: 8 }}>All rights reserved.</div>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Services</div>
            <div>Company Formation</div>
            <div>Office Solutions</div>
            <div>Bank Account Opening</div>
            <div>Visa Services</div>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Contact Us</div>
            <div>Office 1101, Business Bay Tower, Dubai, UAE</div>
            <div>+971 4 123 4567</div>
            <div>dubai@globalvisionsvcs.com</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #fff2', marginTop: 24, padding: '16px 0', textAlign: 'center', fontSize: 13, color: '#e0f7fa' }}>
          Privacy Policy | Terms of Service
        </div>
      </footer>
    </>
  );
} 