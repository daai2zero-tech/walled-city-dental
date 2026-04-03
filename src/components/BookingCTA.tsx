'use client'

export default function BookingCTA() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: '#1c2028',
      padding: '140px 24px',
      textAlign: 'center',
    }}>
      {/* Background photo with overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1611690061822-b707a67bfebb?auto=format&fit=crop&w=1600&q=80"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(28,32,40,0.97) 0%, rgba(28,32,40,0.85) 100%)' }} />
      </div>

      {/* Teal glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,177,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '20px' }}>Ready to Begin?</p>
        <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(32px, 5vw, 60px)', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '24px' }}>
          Your smile transformation<br />starts here
        </h2>
        <p style={{ fontFamily: 'Outfit', fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '48px', maxWidth: '480px', margin: '0 auto 48px' }}>
          Book a free consultation with our team inside the Derry city walls and take the first step towards the smile you&apos;ve always wanted.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-teal" style={{ fontSize: '16px', padding: '16px 40px' }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Free Consultation
          </button>
          <a href="tel:02871360000" style={{ textDecoration: 'none' }}>
            <button className="btn-outline-white" style={{ fontSize: '16px', padding: '16px 40px' }}>
              028 7136 0000
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
