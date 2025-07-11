export default function Licenses() {
  const licenses = [
    {
      title: 'E-Commerce License',
      price: '5,499',
      features: [
        '3 Free Business Activities',
        '100% Ownership',
        'Free Co-Working Space',
        'Free Business Address',
        'Shared PO Box',
        'File Desk Lease Agreement',
      ],
    },
    {
      title: 'Freezone License',
      price: '12,500',
      features: [
        '1 Free Visa for Life ( Eligibility )',
        '3 Free Business Activities',
        '100% Ownership',
        'Free Co-Working Space',
        'Free Business Address',
        'Shared PO Box',
        'File Desk Lease Agreement',
      ],
    },
    {
      title: 'Dubai Mainland License',
      price: '14,999',
      features: [
        'Eligibility Investor Visa',
        'Trade License',
        '100% Ownership',
        'PRO service',
        'Establishment Cards',
        'Virtual Office Space',
      ],
    },
  ];
  return (
    <section className="licenses-section">
      <div className="licenses-container">
        {licenses.map((lic, idx) => (
          <div className="license-card" key={idx}>
            <h3 className="license-title">{lic.title}</h3>
            <div className="license-price-badge">
              <span className="license-currency">AED</span>
              <span className="license-price">{lic.price}</span>
            </div>
            <ul className="license-features">
              {lic.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="license-btn">View all</button>
          </div>
        ))}
      </div>
    </section>
  );
} 