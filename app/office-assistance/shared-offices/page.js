import React from 'react';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function SharedOfficesPage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"Shared Offices in Dubai"}
        description={"Collaborative shared office spaces with modern amenities, ideal for teams and professionals seeking a vibrant, cost-effective work environment in Dubai."}
        ctaText="Find Shared Office"
        ctaHref="#callback-form"
        backgroundImage="/images/Background-services.jpg"
      />

      {/* Offer Section */}
      <section style={{ background: '#f7fafd', padding: '48px 0 32px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '0 16px' }}>
          <div style={{ flex: 1, minWidth: 320 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#222', marginBottom: 8 }}>Shared Office Space <span style={{ color: '#0b8c8c' }}>Dubai Sheikh Zayed Road</span></h2>
            <div style={{ margin: '24px 0' }}>
              <button style={{ background: '#0b8c8c', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginRight: 12 }}>Book Office Space</button>
              <button style={{ background: '#fff', color: '#0b8c8c', border: '1px solid #0b8c8c', borderRadius: 6, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Get Free Quote</button>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'flex-end' }}>
            <img src="/images/shared-1.jpg" alt="Shared Office" style={{ width: 320, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ background: '#fff', padding: '40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: 22, marginBottom: 32 }}>Why Choose Shared Office Space Dubai?</h3>
          <p style={{ textAlign: 'center', color: '#444', fontSize: 16, marginBottom: 32 }}>Discover the advantages of collaborative workspace solutions:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { title: 'Cost-effective', desc: 'Share expenses for rent, utilities, and maintenance with other businesses.' },
              { title: 'Networking Opportunities', desc: 'Connect with diverse professionals and potential business partners.' },
              { title: 'Ready Infrastructure', desc: 'Fully furnished with essential amenities and modern business tools.' },
              { title: 'Professional Environment', desc: 'Conducive workspace for meetings, presentations, and daily operations.' },
              { title: 'Flexibility', desc: 'Short-term or long-term agreements based on your business needs.' },
              { title: 'Prime Location', desc: "Strategic location on Sheikh Zayed Road opposite World Trade Center." },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f7fafd', borderRadius: 10, padding: 24, minHeight: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <h4 style={{ color: '#0b8c8c', fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: '#444', fontSize: 15 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features & Amenities Section */}
      <section style={{ background: '#fff', padding: '0 0 40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: 22, marginBottom: 32 }}>Premium Features & Amenities</h3>
          <p style={{ textAlign: 'center', color: '#444', fontSize: 16, marginBottom: 32 }}>Everything you need for a productive workspace experience</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {[
              'Sea View / SZR View', 'Fully Furnished', 'High Speed Wi-Fi', 'Dedicated Service Staff',
              'Robotic Car Parking', 'Modern Interiors', 'Customize Your Space', 'F&B Services',
              'Proximity to Metro Station', 'Guest Lounge & Concierge', 'Printing and Storage', 'No DEWA or Utilities Bill',
              'Ejari Approved', 'Flexible Payment Options', 'Secured Keyless Entry', 'Meeting / Conference Room',
            ].map((item, i) => (
              <div key={i} style={{ background: '#f7fafd', borderRadius: 10, padding: 16, textAlign: 'center', fontWeight: 500, fontSize: 15 }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Office Features Section */}
      <section style={{ background: '#fff', padding: '0 0 40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: 22, marginBottom: 32 }}>Comprehensive Office Features</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            {[
              { icon: '🔄', label: 'Flexible Workspace', desc: 'Choose from open work areas, dedicated desks, or private offices.' },
              { icon: '🏢', label: 'Meeting Rooms', desc: 'Well-equipped conference rooms with AV equipment and video conferencing.' },
              { icon: '📶', label: 'High-Speed Internet', desc: 'Reliable and fast Wi-Fi/Ethernet for seamless workflow.' },
              { icon: '🛋️', label: 'Common Areas', desc: 'Lounges, kitchens, and breakout areas for networking and relaxation.' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', maxWidth: 220 }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 600, color: '#0b8c8c', fontSize: 16, marginBottom: 6 }}>{item.label}</div>
                <div style={{ color: '#444', fontSize: 14 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spider Business Center Section */}
      <section style={{ background: 'linear-gradient(180deg, #0b8c8c 0%, #0b8c8c 100%)', padding: '48px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '0 16px' }}>
          <div style={{ flex: 1, minWidth: 320, color: '#fff' }}>
            <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Why Spider Business Center?</h3>
            <div style={{ marginBottom: 12 }}><b>13+ Years Experience</b><br />Industry expertise in delivering top-notch shared office solutions.</div>
            <div style={{ marginBottom: 12 }}><b>Highly Secure Workspaces</b><br />Advanced security with gated access, 24/7 security, and CCTV monitoring.</div>
            <div style={{ marginBottom: 12 }}><b>Prime Location</b><br />Strategic location on Sheikh Zayed Road opposite World Trade Center.</div>
          </div>
          <div style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'flex-end' }}>
            <img src="/images/shared-2.jpg" alt="Shared Office" style={{ width: 320, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
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
                q: 'What is shared office space in Dubai?',
                a: 'Shared office spaces give you access to flexible workspace solutions where businesses rent fully equipped office space on temporary or short-term basis with various amenities.'
              },
              {
                q: 'Can 2 companies share an office in Dubai?',
                a: 'Yes, multiple companies can share an office space in Dubai, making it cost-effective and providing networking opportunities.'
              },
              {
                q: 'What amenities are included in shared office spaces?',
                a: 'Shared offices include meeting rooms, high-speed internet, printing facilities, F&B services, reception services, security, and common areas.'
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

      {/* CTA Section */}
      <section style={{ background: '#0b8c8c', padding: '40px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', color: '#fff', padding: '0 16px' }}>
          <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Get Your Shared Office Today</h3>
          <p style={{ fontSize: 16, marginBottom: 18 }}>Professional shared office solutions in Dubai's prime business district</p>
          <div style={{ marginBottom: 18 }}>
            <span style={{ marginRight: 18 }}>+971 800 774237</span>
            <span style={{ marginRight: 18 }}>dubai@globalvisionsvcs.com</span>
          </div>
          <button style={{ background: '#fff', color: '#0b8c8c', border: 'none', borderRadius: 6, padding: '10px 32px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Request Free Quote</button>
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
            <div>Office 101, Business Bay Tower, Dubai, UAE</div>
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