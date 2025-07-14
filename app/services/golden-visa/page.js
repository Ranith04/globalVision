import Image from 'next/image';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function GoldenVisaPage() {
  return (
    <div style={{ background: '#f7f7f7' }}>
      <Navbar />
      <FreezoneHeroWithForm
        title={"UAE Golden Visa"}
        description={"Secure your long-term residency in the UAE with the prestigious Golden Visa program. Expert assistance for eligibility, application, and approval."}
        ctaText="Apply for Golden Visa"
        ctaHref="#callback-form"
        backgroundImage="/images/Background-services.jpg"
      />

      {/* Gateway Section */}
      <section style={{ background: '#E0E3EA', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Your Gateway to Long-Term Residency</h2>
          </div>
          <div style={{ flex: 1, minWidth: 320, background: 'transparent' }}>
            <Image src="/images/golden-1.jpg" alt="Dubai Skyline" width={500} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto', background: 'transparent' }} />
          </div>
        </div>
      </section>
      

      {/* What is UAE Golden Visa */}
      <section style={{ background: '#fff', padding: '40px 0 0 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>What is UAE Golden Visa?</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32, maxWidth: 900 }}>
            Introduced in 2019, the Golden Visa is a long-term residency program designed to attract top talent, investors, and entrepreneurs to contribute to UAE's economic development. It offers unprecedented flexibility and opportunities for qualified individuals.
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              { icon: '🕒', label: 'Long-Term Residency', desc: '5-10 year renewable visa with no need to return every 6 months.' },
              { icon: '👨‍👩‍👧‍👦', label: 'Sponsor Family Members', desc: 'Sponsor spouse, children, and parents with the same benefits.' },
              { icon: '💼', label: 'Business Opportunities', desc: 'Access to UAE\'s thriving business ecosystem and free zones.' },
              { icon: '🚫', label: 'No Local Sponsor', desc: 'Live and work independently without requiring a local sponsor.' },
            ].map((item, i) => (
              <div key={i} style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.label}</div>
                <div style={{ color: '#555', fontSize: '1rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Visa Categories */}
      <section style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Golden Visa Categories</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32 }}>Multiple pathways to obtain your Golden Visa based on your qualifications and investments.</p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { title: 'Company Investor', desc: 'AED 2 million minimum investment' },
              { title: 'Property Investor', desc: 'AED 2 million property investment' },
              { title: 'Senior Manager', desc: 'AED 30,000+ monthly salary' },
              { title: 'University Graduate', desc: 'UAE: 100% non-working residency' },
            ].map((cat, i) => (
              <div key={i} style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{cat.title}</div>
                <div style={{ color: '#555', fontSize: '1rem' }}>{cat.desc}</div>
                <a href="#" style={{ color: '#1ec6b6', fontWeight: 600, marginTop: 12, display: 'inline-block', textDecoration: 'underline', fontSize: '0.98rem' }}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Application Process */}
      <section style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Simple Application Process</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 32 }}>Our expert consultants guide you through every step.</p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 32 }}>
            {[
              { step: '01', label: 'Prepare Documents', desc: 'We help gather all required paperwork and ensure compliance with GDRFA requirements.' },
              { step: '02', label: 'Submit Application', desc: 'Complete application submission with transparent fee breakdown and timeline.' },
              { step: '03', label: 'Receive Your Visa', desc: 'Get your approved Golden Visa within 1-3 weeks processing time.' },
            ].map((item, i) => (
              <div key={i} style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)' }}>
                <div style={{ fontWeight: 700, fontSize: '2rem', color: '#1ec6b6', marginBottom: 8 }}>{item.step}</div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{item.label}</div>
                <div style={{ color: '#555', fontSize: '1rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Benefits of Golden Visa</h2>
            <ul style={{ color: '#222', fontSize: '1.1rem', marginBottom: 24, paddingLeft: 20 }}>
              <li>No need to return every 6 months to maintain visa status</li>
              <li>Sponsor multiple family members including parents</li>
              <li>Access to exclusive discounts on government services</li>
              <li>Multiple business opportunities in free zones and mainland</li>
              <li>Path to long-term stability in the UAE</li>
            </ul>
            <a href="#" style={{ background: '#1ec6b6', color: '#fff', padding: '12px 32px', borderRadius: 30, fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block' }}>Apply Now</a>
          </div>
          <div style={{ flex: 1, minWidth: 320 }}>
            <Image src="/images/go;den-2.jpg" alt="Dubai Night" width={500} height={300} style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section style={{ background: '#fff', padding: '0 0 60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 18 }}>Ready to Start Your Golden Visa Journey?</h2>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              'Expert Guidance',
              'Transparent Pricing',
              'Fast Processing',
            ].map((item, i) => (
              <div key={i} style={{ flex: 1, minWidth: 220, background: '#f7f7f7', borderRadius: 14, padding: 24, textAlign: 'center', boxShadow: '0 2px 8px rgba(30,198,182,0.06)', fontWeight: 600, fontSize: '1.1rem' }}>{item}</div>
            ))}
          </div>
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
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>Business Bay Tower, Dubai, UAE</div>
            <div style={{ color: '#e5e7eb', marginBottom: 6 }}>+971 50 419 3507</div>
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
      
    </div>
  );
} 