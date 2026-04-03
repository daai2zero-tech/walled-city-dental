'use client'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: '#1c2028',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '106px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,212,177,0.07) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        pointerEvents: 'none',
      }} />
      {/* Teal radial glow top-right */}
      <div style={{
        position: 'absolute', top: '-300px', right: '-200px',
        width: '900px', height: '900px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,177,0.1) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      {/* Subtle glow bottom-left */}
      <div style={{
        position: 'absolute', bottom: '-200px', left: '-200px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(17,138,178,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="hero-grid" style={{
        maxWidth: '1200px', margin: '0 auto', padding: '60px 24px',
        width: '100%',
        alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        {/* Left: content */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,212,177,0.1)',
            border: '1px solid rgba(0,212,177,0.25)',
            borderRadius: '100px', padding: '6px 16px',
            marginBottom: '32px',
          }}>
            <span className="pulse-dot" style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: '#00d4b1' }} />
            <span style={{ fontFamily: 'Outfit', fontSize: '12px', fontWeight: 500, color: '#00d4b1', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Private Dental & Aesthetics · Derry
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Outfit', fontWeight: 900,
            fontSize: 'clamp(42px, 5.5vw, 72px)',
            color: 'white', lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
          }}>
            Your smile.<br />
            <span style={{
              background: 'linear-gradient(135deg, #00d4b1 0%, #7feee4 60%, #00b8d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Transformed.</span>
          </h1>

          <p style={{
            fontFamily: 'Outfit', fontSize: '17px', fontWeight: 400,
            color: 'rgba(255,255,255,0.55)', lineHeight: 1.75,
            marginBottom: '44px', maxWidth: '460px',
          }}>
            From teeth whitening and Invisalign to composite veneers and aesthetic treatments — premium dental care inside the historic Derry city walls.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <button className="btn-teal"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Free Consultation
            </button>
            <button className="btn-outline-white"
              onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Treatments
            </button>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
          }}>
            {[
              { num: '500+', label: 'Happy Patients' },
              { num: '10+', label: 'Years Experience' },
              { num: '5.0 ★', label: 'Google Rating' },
            ].map((s, i) => (
              <div key={s.label} style={{
                paddingRight: i < 2 ? '24px' : '0',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                paddingLeft: i > 0 ? '24px' : '0',
              }}>
                <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '26px', color: '#00d4b1', letterSpacing: '-0.02em' }}>{s.num}</div>
                <div style={{ fontFamily: 'Outfit', fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image with floating cards */}
        <div className="hero-image-col" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '520px' }}>
          {/* Rotating rings */}
          <div style={{
            position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
            border: '1px solid rgba(0,212,177,0.12)',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          }} />
          <div style={{
            position: 'absolute', width: '440px', height: '440px', borderRadius: '50%',
            border: '1px solid rgba(0,212,177,0.18)',
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          }} />

          {/* Main image — circular */}
          <div className="img-zoom" style={{
            width: '380px', height: '380px', borderRadius: '50%',
            border: '3px solid rgba(0,212,177,0.5)',
            boxShadow: '0 0 80px rgba(0,212,177,0.18), 0 40px 80px rgba(0,0,0,0.5)',
            position: 'relative', zIndex: 2,
          }}>
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=85"
              alt="Dental care at Walled City Dental"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>

          {/* Floating card: GDC */}
          <div className="glass mobile-hide" style={{
            position: 'absolute', bottom: '40px', left: '-10px', zIndex: 3,
            padding: '16px 20px',
          }}>
            <div style={{ fontFamily: 'Outfit', fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginBottom: '4px', letterSpacing: '0.05em' }}>GDC Registered</div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '14px', color: 'white' }}>Qualified & Insured</div>
          </div>

          {/* Floating card: Free consultation */}
          <div className="mobile-hide" style={{
            position: 'absolute', top: '50px', right: '-10px', zIndex: 3,
            background: '#00d4b1', borderRadius: '16px', padding: '16px 20px',
            boxShadow: '0 8px 32px rgba(0,212,177,0.4)',
          }}>
            <div style={{ fontFamily: 'Outfit', fontSize: '11px', color: 'rgba(28,32,40,0.55)', marginBottom: '4px', letterSpacing: '0.05em' }}>New Patients</div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '14px', color: '#1c2028' }}>Free Consultation</div>
          </div>

          {/* Floating rating badge */}
          <div className="glass mobile-hide" style={{
            position: 'absolute', top: '180px', right: '-30px', zIndex: 3,
            padding: '12px 16px', borderRadius: '14px',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '8px',
              background: '#00d4b1',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1c2028">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '13px', color: 'white' }}>5.0 Google</div>
              <div style={{ fontFamily: 'Outfit', fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: 0.45, zIndex: 1,
      }}>
        <span style={{ fontFamily: 'Outfit', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#00d4b1' }}>Scroll</span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, #00d4b1, transparent)' }} />
      </div>
    </section>
  )
}
