'use client'

export default function Footer() {
  const links = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Our Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer style={{ background: '#13161c', borderTop: '1px solid rgba(0,212,177,0.1)', padding: '60px 24px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-grid" style={{ gap: '60px', marginBottom: '60px' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '20px', color: 'white', letterSpacing: '-0.02em', marginBottom: '4px' }}>
              Walled City <span style={{ color: '#00d4b1' }}>Dental</span>
            </div>
            <div style={{ fontFamily: 'Outfit', fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>& Aesthetics · Derry</div>
            <p style={{ fontFamily: 'Outfit', fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: '280px' }}>
              Premium private dental and aesthetic care inside the historic Derry city walls. GDC registered. Fully insured.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Quick Links</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map(l => (
                <a key={l.href} href={l.href} style={{ fontFamily: 'Outfit', fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00d4b1')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                '12 Shipquay Street, Derry',
                '028 7136 0000',
                'hello@walledcitydental.co.uk',
                'Mon\u2013Fri: 9am\u20136pm',
              ].map(item => (
                <p key={item} style={{ fontFamily: 'Outfit', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
          <p style={{ fontFamily: 'Outfit', fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>
            &copy; 2025 Walled City Dental & Aesthetics. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Outfit', fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>
            Demo site built by{' '}
            <a href="https://derrydigital.co.uk" style={{ color: '#00d4b1', textDecoration: 'none' }}>Derry Digital</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
