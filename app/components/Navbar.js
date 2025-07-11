"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaBuilding, FaCertificate, FaCrown, FaGlobe, FaPassport, FaRegEdit, FaRegFileAlt, FaShieldAlt, FaUniversity } from 'react-icons/fa';

const businessSetupTabs = [
  {
    key: 'mainland',
    label: 'Mainland',
    icon: <FaBuilding />,
    content: (
      <div className="dropdown-content-grid exact-dropdown-cols">
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/dubai'; }} style={{ cursor: 'pointer' }}>Dubai Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/sharjah'; }} style={{ cursor: 'pointer' }}>Sharjah Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/abu-dhabi'; }} style={{ cursor: 'pointer' }}>Abu Dhabi Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/ajman'; }} style={{ cursor: 'pointer' }}>Ajman Mainland</div>
        </div>
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/rak'; }} style={{ cursor: 'pointer' }}>RAK Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/uaq'; }} style={{ cursor: 'pointer' }}>UAQ Mainland</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/mainland/fujairah'; }} style={{ cursor: 'pointer' }}>Fujairah Mainland</div>
        </div>
      </div>
    )
  },
  {
    key: 'freezone',
    label: 'Freezone',
    icon: <FaBuilding />,
    content: (
      <div className="dropdown-content-grid exact-dropdown-cols exact-freezone-cols">
        <div>
          <div className="dropdown-col-title exact-freezone-title">Dubai Freezones</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/dubai/meydan'; }} style={{ cursor: 'pointer' }}>MEYDAN</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/dubai/ifza'; }} style={{ cursor: 'pointer' }}>IFZA</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/dubai/dmcc'; }} style={{ cursor: 'pointer' }}>DMCC</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/dubai/difc'; }} style={{ cursor: 'pointer' }}>DIFC</div>
        </div>
        <div>
          <div className="dropdown-col-title exact-freezone-title">Sharjah Freezones</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/sharjah/srtip'; }} style={{ cursor: 'pointer' }}>SRTIP</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/sharjah/shams'; }} style={{ cursor: 'pointer' }}>SHAMS</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/sharjah/spc'; }} style={{ cursor: 'pointer' }}>SPC</div>
        </div>
        <div>
          <div className="dropdown-col-title exact-freezone-title">Other Freezones</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/other/rak'; }} style={{ cursor: 'pointer' }}>Ras Al Khaimah Freezone</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/other/ajman'; }} style={{ cursor: 'pointer' }}>Ajaman Freezone</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/freezone/other/uaq'; }} style={{ cursor: 'pointer' }}>Umm Al Quwain Freezone</div>
        </div>
      </div>
    )
  },
  {
    key: 'offshore',
    label: 'Offshore',
    icon: <FaBuilding />,
    content: (
      <div className="dropdown-content-grid exact-dropdown-cols">
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/dubai'; }} style={{ cursor: 'pointer' }}>Dubai Offshore</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/rakicc'; }} style={{ cursor: 'pointer' }}>RAKICC</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/bvi'; }} style={{ cursor: 'pointer' }}>BVI</div>
        </div>
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/cayman'; }} style={{ cursor: 'pointer' }}>Cayman Islands</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/offshore/mauritius'; }} style={{ cursor: 'pointer' }}>Mauritius</div>
        </div>
      </div>
    )
  },
  {
    key: 'office',
    label: 'Office Assistance',
    icon: <FaBuilding />,
    content: (
      <div className="dropdown-content-grid exact-dropdown-cols">
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/virtual-offices'; }} style={{ cursor: 'pointer' }}>Virtual Offices</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/shared-offices'; }} style={{ cursor: 'pointer' }}>Shared Offices</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/flexi-offices'; }} style={{ cursor: 'pointer' }}>Flexi Offices</div>
        </div>
        <div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/private-offices'; }} style={{ cursor: 'pointer' }}>Private Offices</div>
          <div onClick={() => { if (typeof window !== 'undefined') window.location.href = '/office-assistance/coworking-spaces'; }} style={{ cursor: 'pointer' }}>Coworking Spaces</div>
        </div>
      </div>
    )
  }
];

const servicesList = [
  { key: 'golden-visa', label: 'Golden visa services', icon: <FaCrown /> },
  { key: 'local-sponsorship', label: 'Local sponsorship', icon: <FaShieldAlt /> },
  { key: 'bank-account', label: 'Bank account opening assistance', icon: <FaUniversity /> },
  { key: 'notary', label: 'Notery services', icon: <FaRegEdit /> },
  { key: 'global-visa', label: 'Global visa assistance', icon: <FaGlobe /> },
  { key: 'trademark', label: 'Trade mark registrations', icon: <FaRegFileAlt /> },
  { key: 'visa', label: 'Visa services', icon: <FaPassport /> },
  { key: 'certificate', label: 'Certificate attestation', icon: <FaCertificate /> },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('mainland');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Determine which nav item is active
  const isHome = pathname === '/';
  const isBusinessSetup = pathname.startsWith('/mainland') || pathname.startsWith('/freezone') || pathname.startsWith('/offshore') || pathname.startsWith('/office-assistance');
  const isServices = pathname.startsWith('/services');

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <Image 
          src="/images/logo.jpg" 
          alt="Global Vision Logo" 
          width={180} 
          height={60} 
          priority
          className="logo-img"
        />
      </a>
      <ul className="navbar__links">
        <li><Link href="/" className={isHome ? "active" : ""}>Home</Link></li>
        <li className="navbar__dropdown-wrapper">
          <div
            style={{display: 'inline-block', position: 'relative'}}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#" className={"navbar__dropdown" + (isBusinessSetup ? " active" : "")}>Business Setup <span className="navbar__arrow">▼</span></a>
            {dropdownOpen && (
              <div className="business-dropdown exact-business-dropdown-bg" style={{position: 'absolute', left: '50%', top: '100%', transform: 'translateX(-50%)', zIndex: 1000}}>
                <div className="business-dropdown-tabs exact-dropdown-tabs">
                  {businessSetupTabs.map(tab => (
                    <button
                      key={tab.key}
                      className={`business-dropdown-tab exact-dropdown-tab${activeTab === tab.key ? ' active' : ''}`}
                      onClick={() => setActiveTab(tab.key)}
                      type="button"
                    >
                      {tab.icon} <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
                <div className="business-dropdown-content exact-dropdown-content">
                  {businessSetupTabs.find(tab => tab.key === activeTab)?.content}
                </div>
              </div>
            )}
          </div>
        </li>
        <li className="navbar__dropdown-wrapper" style={{ position: 'relative' }}>
          <div
            style={{ display: 'inline-block' }}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a className={"navbar__dropdown" + (isServices ? " active" : "")}>Services <span className="navbar__arrow">▼</span></a>
            {servicesDropdownOpen && (
              <div
                className="business-dropdown exact-business-dropdown-bg"
                style={{
                  position: 'absolute',
                  left: '40%',
                  top: '100%',
                  transform: 'translateX(-50%)',
                  zIndex: 1000,
                  minWidth: 950,
                  maxWidth: 700,
                  padding: 0,
                  borderRadius: 12,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.10)'
                }}
              >
                <div className="business-dropdown-content exact-dropdown-content" style={{ padding: '24px 32px' }}>
                  <div className="dropdown-content-grid exact-dropdown-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 48px' }}>
                    <div>
                      {servicesList.slice(0, 4).map((service, idx) => (
                        <div
                          key={idx}
                          onClick={() => router.push(`/services/${service.key}`)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontSize: '1.18em',
                            padding: '0',
                            cursor: 'pointer',
                            color: '#fff',
                            fontWeight: 400,
                            lineHeight: 1.5
                          }}
                        >
                          <span style={{ fontSize: '1.22em', minWidth: 22, color: '#fff' }}>{service.icon}</span>
                          {service.label}
                        </div>
                      ))}
                    </div>
                    <div>
                      {servicesList.slice(4).map((service, idx) => (
                        <div
                          key={idx + 4}
                          onClick={() => router.push(`/services/${service.key}`)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontSize: '1.18em',
                            padding: '0',
                            cursor: 'pointer',
                            color: '#fff',
                            fontWeight: 400,
                            lineHeight: 1.5
                          }}
                        >
                          <span style={{ fontSize: '1.22em', minWidth: 22, color: '#fff' }}>{service.icon}</span>
                          {service.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
      <a href="#contact" className="navbar__contact-btn outlined">Contact us</a>
    </nav>
  );
} 