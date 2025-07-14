import { FaGlobe, FaMapMarkedAlt, FaPlaneDeparture, FaUserFriends } from 'react-icons/fa';
import ContactLeadSection from '../../components/ContactLeadSection';
import FreezoneHeroWithForm from '../../components/FreezoneHeroWithForm';
import Navbar from '../../components/Navbar';

export default function GlobalVisaPage() {
  return (
    <>
      <Navbar />
      <FreezoneHeroWithForm
        title={"Global Visa Assistance"}
        description={"Worldwide visa solutions for travel, work, and migration. Fast, reliable, and expert support for all your global mobility needs."}
        ctaText="Get Visa Assistance"
        ctaHref="#callback-form"
        backgroundImage="/images/Background-services.jpg"
      />
      {/* Gateway Section */}
      <section style={{ background: '#E0E3EA', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, padding: '0 32px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 18, color: '#179e9e' }}>Global Visa Assistance</h2>
          </div>
          <div style={{ flex: 1, minWidth: 500, maxWidth: 500, padding: '12px' }}>
            <img src="/images/Background+Border+Shadow (2).png" alt="Passport and Visa Ticket" style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>
      <div style={{ padding: 40, textAlign: 'center' }}>
        

        

           

      {/* Section 3: Comprehensive Visa Solutions */}
      <section style={{ background: '#f8fafc', padding: '80px 0 90px 0', textAlign: 'center' }}>
        <div style={{ color: '#bfc7d1', fontWeight: 600, fontSize: 15, marginBottom: 10 }}>Our Services</div>
        <h2 style={{ fontWeight: 700, fontSize: '2.6rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Comprehensive Visa Solutions
        </h2>
        <p style={{ color: '#4a5a6a', fontSize: '1.18rem', marginBottom: 56, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          From tourist visas to business travel, we provide expert assistance for all types of international visa applications.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
          maxWidth: 1200,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Card 1: Tourist Visas */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 18px rgba(30,198,182,0.08)', padding: '44px 32px 32px 32px', textAlign: 'left', minWidth: 0, maxWidth: 370, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 38, color: '#1ec6b6', marginBottom: 18, display: 'block' }}><FaPlaneDeparture /></span>
            <div style={{ fontWeight: 700, fontSize: '1.18rem', color: '#222', marginBottom: 10 }}>Tourist Visas</div>
            <div style={{ color: '#4a5a6a', fontSize: 15, marginBottom: 14 }}>
              Worldwide tourist visa assistance for leisure and business travel from UAE.
            </div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: '0 0 18px 0', padding: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Europe (Schengen)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> USA</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Canada</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Australia</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> UK</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Asia Pacific</li>
            </ul>
            <div style={{ color: '#4a5a6a', fontSize: 15, margin: '0 0 18px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#1ec6b6', fontSize: 18, display: 'flex', alignItems: 'center' }}>⏱</span> Processing: 5-15 days
            </div>
            <button style={{ marginTop: 8, background: '#fff', border: '1.5px solid #e0e7ef', borderRadius: 8, color: '#222', fontWeight: 600, fontSize: 15, padding: '10px 0', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
              Apply Now <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
          {/* Card 2: Family Visit Visas */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 18px rgba(30,198,182,0.08)', padding: '44px 32px 32px 32px', textAlign: 'left', minWidth: 0, maxWidth: 370, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 38, color: '#1ec6b6', marginBottom: 18, display: 'block' }}><FaUserFriends /></span>
            <div style={{ fontWeight: 700, fontSize: '1.18rem', color: '#222', marginBottom: 10 }}>Family Visit Visas</div>
            <div style={{ color: '#4a5a6a', fontSize: 15, marginBottom: 14 }}>
              Help family members visit you in UAE or assist with your visits abroad.
            </div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: '0 0 18px 0', padding: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Family reunion visas</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Spouse visas</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Parent visas</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Children visas</li>
            </ul>
            <div style={{ color: '#4a5a6a', fontSize: 15, margin: '0 0 18px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#1ec6b6', fontSize: 18, display: 'flex', alignItems: 'center' }}>⏱</span> Processing: 2-4 weeks
            </div>
            <button style={{ marginTop: 8, background: '#fff', border: '1.5px solid #e0e7ef', borderRadius: 8, color: '#222', fontWeight: 600, fontSize: 15, padding: '10px 0', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
              Apply Now <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
          {/* Card 3: Business Visas */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 18px rgba(30,198,182,0.08)', padding: '44px 32px 32px 32px', textAlign: 'left', minWidth: 0, maxWidth: 370, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 38, color: '#1ec6b6', marginBottom: 18, display: 'block' }}><FaGlobe /></span>
            <div style={{ fontWeight: 700, fontSize: '1.18rem', color: '#222', marginBottom: 10 }}>Business Visas</div>
            <div style={{ color: '#4a5a6a', fontSize: 15, marginBottom: 14 }}>
              Business visa support for international travel and trade opportunities.
            </div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: '0 0 18px 0', padding: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Trade missions</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Conference visas</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Investment visas</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span>✔</span> Meeting visas</li>
            </ul>
            <div style={{ color: '#4a5a6a', fontSize: 15, margin: '0 0 18px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#1ec6b6', fontSize: 18, display: 'flex', alignItems: 'center' }}>⏱</span> Processing: 1-3 weeks
            </div>
            <button style={{ marginTop: 8, background: '#fff', border: '1.5px solid #e0e7ef', borderRadius: 8, color: '#222', fontWeight: 600, fontSize: 15, padding: '10px 0', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
              Apply Now <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Section 4: Visa Assistance for 100+ Countries */}
      <section style={{ background: '#fff', padding: '70px 0 90px 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 14, fontFamily: 'Playfair Display, serif' }}>
          Visa Assistance for 100+ Countries
        </h2>
        <p style={{ color: '#4a5a6a', fontSize: '1.13rem', marginBottom: 56, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          We provide comprehensive visa assistance for destinations across all continents, helping you travel the world with confidence.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
          maxWidth: 1400,
          margin: '0 auto',
          justifyItems: 'center',
        }}>
          {/* Card 1: Europe */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '38px 86px', textAlign: 'left', minWidth: 0, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 14, display: 'block' }}><FaMapMarkedAlt /></span>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 10 }}>Europe</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 4 }}>&#9679; Germany</li>
              <li style={{ marginBottom: 4 }}>&#9679; France</li>
              <li style={{ marginBottom: 4 }}>&#9679; Italy</li>
              <li style={{ marginBottom: 4 }}>&#9679; Spain</li>
              <li style={{ marginBottom: 4 }}>&#9679; Netherlands</li>
              <li>&#9679; Switzerland</li>
            </ul>
          </div>
          {/* Card 2: Americas */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '38px 86px', textAlign: 'left', minWidth: 0, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 14, display: 'block' }}><FaMapMarkedAlt /></span>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 10 }}>Americas</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 4 }}>&#9679; USA</li>
              <li style={{ marginBottom: 4 }}>&#9679; Canada</li>
              <li style={{ marginBottom: 4 }}>&#9679; Brazil</li>
              <li style={{ marginBottom: 4 }}>&#9679; Argentina</li>
              <li style={{ marginBottom: 4 }}>&#9679; Mexico</li>
              <li>&#9679; Chile</li>
            </ul>
          </div>
          {/* Card 3: Asia Pacific */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '38px 86px', textAlign: 'left', minWidth: 0, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 14, display: 'block' }}><FaMapMarkedAlt /></span>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 10 }}>Asia Pacific</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 4 }}>&#9679; Australia</li>
              <li style={{ marginBottom: 4 }}>&#9679; Japan</li>
              <li style={{ marginBottom: 4 }}>&#9679; Singapore</li>
              <li style={{ marginBottom: 4 }}>&#9679; South Korea</li>
              <li style={{ marginBottom: 4 }}>&#9679; New Zealand</li>
              <li>&#9679; Malaysia</li>
            </ul>
          </div>
          {/* Card 4: Others */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '38px 86px', textAlign: 'left', minWidth: 0, maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #f0f3f7' }}>
            <span style={{ fontSize: 28, color: '#1ec6b6', marginBottom: 14, display: 'block' }}><FaMapMarkedAlt /></span>
            <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222', marginBottom: 10 }}>Others</div>
            <ul style={{ color: '#1ec6b6', fontSize: 15, margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: 4 }}>&#9679; UK</li>
              <li style={{ marginBottom: 4 }}>&#9679; Russia</li>
              <li style={{ marginBottom: 4 }}>&#9679; South Africa</li>
              <li style={{ marginBottom: 4 }}>&#9679; Turkey</li>
              <li style={{ marginBottom: 4 }}>&#9679; Egypt</li>
              <li>&#9679; Morocco</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Section 5: Easy 5-Step Visa Process */}
      <section style={{ background: '#fafbfc', padding: '64px 0 0 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 48, maxWidth: 1200, margin: '0 auto' }}>
        {/* Left: Steps */}
        <div style={{ flex: '1 1 520px', minWidth: 320, maxWidth: 600, padding: '0 48px' }}>
          <div style={{ color: '#1ec6b6', fontWeight: 600, fontSize: 15, marginBottom: 10 }}>Simple Process</div>
          <h2 style={{ fontWeight: 700, fontSize: '2.1rem', color: '#222', marginBottom: 16 }}>Easy 5-Step Visa Process</h2>
          <p style={{ color: '#6b7683', fontSize: '1.08rem', marginBottom: 32 }}>
            Our streamlined process makes visa applications simple and stress-free, with expert guidance at every step.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>01</span>
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Consultation & Assessment</div>
                <div style={{ color: '#6b7683', fontSize: 15 }}>Free consultation to assess your visa requirements and eligibility.</div>
              </div>
            </div>
            {/* Step 2 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>02</span>
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Document Preparation</div>
                <div style={{ color: '#6b7683', fontSize: 15 }}>Comprehensive checklist and assistance with document preparation.</div>
              </div>
            </div>
            {/* Step 3 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>03</span>
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Application Submission</div>
                <div style={{ color: '#6b7683', fontSize: 15 }}>Professional submission of your visa application to the relevant embassy.</div>
              </div>
            </div>
            {/* Step 4 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>04</span>
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Application Tracking</div>
                <div style={{ color: '#6b7683', fontSize: 15 }}>Regular updates on your application status and processing timeline.</div>
              </div>
            </div>
            {/* Step 5 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              <span style={{ background: '#1ec6b6', color: '#fff', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>05</span>
              <div>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 16 }}>Visa Collection</div>
                <div style={{ color: '#6b7683', fontSize: 15 }}>Secure collection and delivery of your approved visa documents.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div style={{ flex: '1 1 420px', minWidth: 320, maxWidth: 540, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 48px' }}>
          {/* Replace src with your uploaded image */}
          <img src="/images/Global Visa Assistance (1).png" alt="Passport and Map" style={{ width: '100%', maxWidth: 470, height: 400, objectFit: 'cover', borderRadius: 20, boxShadow: '0 2px 18px rgba(30,198,182,0.13)' }} />
        </div>
      </section>
      
      {/* Section 6: Success Stories from Around the World */}
      <section style={{ background: '#fff', padding: '80px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 12, fontFamily: 'Playfair Display, serif' }}>
          Success Stories from Around the World
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 48, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Helping travelers achieve their visa goals with professional expertise
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto 64px auto',
          justifyItems: 'center',
        }}>
          {/* Testimonial 1 */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 2 }}>Ahmad Hassan</div>
            <div style={{ color: '#6b7683', fontSize: 14, marginBottom: 10 }}>Schengen Visa</div>
            <div style={{ color: '#1ec6b6', fontSize: 18, marginBottom: 8 }}>★★★★★</div>
            <div style={{ color: '#6b7683', fontSize: 15, fontStyle: 'italic' }}>
              "Smooth processing for my European business tour. The team handled everything professionally."
            </div>
          </div>
          {/* Testimonial 2 */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 2 }}>Priya Sharma</div>
            <div style={{ color: '#6b7683', fontSize: 14, marginBottom: 10 }}>Australia Tourist Visa</div>
            <div style={{ color: '#1ec6b6', fontSize: 18, marginBottom: 8 }}>★★★★★</div>
            <div style={{ color: '#6b7683', fontSize: 15, fontStyle: 'italic' }}>
              "Excellent guidance throughout the process. Got my visa approved in 10 days!"
            </div>
          </div>
          {/* Testimonial 3 */}
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 2px 12px rgba(30,198,182,0.07)', padding: '36px 28px', textAlign: 'left', minWidth: 0, maxWidth: 370, border: '1.5px solid #f0f3f7', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 17, marginBottom: 2 }}>John Mitchell</div>
            <div style={{ color: '#6b7683', fontSize: 14, marginBottom: 10 }}>Canada Business Visa</div>
            <div style={{ color: '#1ec6b6', fontSize: 18, marginBottom: 8 }}>★★★★★</div>
            <div style={{ color: '#6b7683', fontSize: 15, fontStyle: 'italic' }}>
              "Professional service for my trade mission. Highly recommend their expertise."
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Ready to Travel the World? */}
      <section style={{ background: '#fafbfc', padding: '64px 0 0 0', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#222', marginBottom: 18, fontFamily: 'Playfair Display, serif' }}>
          Ready to Travel the World?
        </h2>
        <p style={{ color: '#6b7683', fontSize: '1.13rem', marginBottom: 44, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Get expert visa assistance for your next international journey. Our team is ready to help you navigate visa requirements for any destination.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          maxWidth: 900,
          margin: '0 auto 48px auto',
          justifyItems: 'center',
        }}>
          {/* Feature 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M11 7v4l3 2"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>100+ countries covered</span>
          </div>
          {/* Feature 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M7 11l2 2 4-4"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>95% approval rate</span>
          </div>
          {/* Feature 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#1ec6b6', fontSize: 22, display: 'flex', alignItems: 'center' }}>
              <svg width="22" height="22" fill="none" stroke="#1ec6b6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="10"/><path d="M11 7v4l3 2"/><circle cx="11" cy="16" r="1.5"/></svg>
            </span>
            <span style={{ color: '#4a5a6a', fontSize: 16 }}>Expert consultation team</span>
          </div>
        </div>
      </section>
      {/* Trust Bar */}
      <div style={{ background: '#1ec6b6', color: '#fff', fontSize: 17, fontWeight: 500, textAlign: 'center', padding: '28px 0', letterSpacing: 0.1, margin: 0 }}>
        Your trusted partner for global visa assistance. Making international travel accessible for everyone.
      </div>
      
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
      
    </>
  );
} 