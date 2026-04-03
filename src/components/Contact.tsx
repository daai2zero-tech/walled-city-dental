'use client'
import { useState, useRef, useEffect } from 'react'

export default function Contact() {
  const [demoClicked, setDemoClicked] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => el.classList.add('visible')); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const inputStyle: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'white', padding: '14px 18px',
    fontFamily: 'Outfit', fontSize: '15px',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" ref={sectionRef} style={{ background: '#0a1628', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Grid bg */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,212,177,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>Book an Appointment</p>
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 52px)', color: 'white', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
            Get in touch
          </h2>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start' }}>

          {/* Left: info */}
          <div className="reveal-left">
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '22px', color: 'white', marginBottom: '8px' }}>Walled City Dental & Aesthetics</h3>
              <p style={{ fontFamily: 'Outfit', fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
                Inside the historic Derry city walls. Private dental and aesthetic treatments in a welcoming, modern environment.
              </p>
            </div>

            {[
              { label: 'Address', value: '12 Shipquay Street, Derry / Londonderry, BT48 6DW' },
              { label: 'Phone', value: '028 7136 0000' },
              { label: 'Email', value: 'hello@walledcitydental.co.uk' },
              { label: 'Opening Hours', value: 'Mon–Fri: 9am–6pm\nSat: 9am–2pm\nSun: Closed' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontFamily: 'Outfit', fontSize: '11px', color: '#00d4b1', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</p>
                <p style={{ fontFamily: 'Outfit', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div className="reveal-right">
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px', padding: '40px 36px',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                {['First name', 'Last name'].map(p => (
                  <input key={p} placeholder={p} style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,212,177,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input placeholder="Email address" type="email" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'rgba(0,212,177,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <input placeholder="Phone number" type="tel" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'rgba(0,212,177,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <select style={{ ...inputStyle, color: 'rgba(255,255,255,0.5)', appearance: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.05)' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(0,212,177,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                >
                  <option value="">Treatment of interest…</option>
                  {['Teeth Whitening', 'Composite Veneers', 'Invisalign', 'Dental Implants', 'Dermal Fillers', 'Anti-Wrinkle', 'General Dentistry', 'Other'].map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <textarea placeholder="Tell us a bit more about what you're looking for…" rows={4} style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(0,212,177,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <button
                  type="button"
                  onClick={() => setDemoClicked(true)}
                  style={{
                    width: '100%', padding: '16px', borderRadius: '100px',
                    fontFamily: 'Outfit', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.02em',
                  }}
                >
                  Book My Free Consultation
                </button>
                {demoClicked && (
                  <p style={{ textAlign: 'center', fontFamily: 'Outfit', fontSize: '13px', color: '#00d4b1', letterSpacing: '0.05em' }}>
                    This is a Demo Site
                  </p>
                )}
                <p style={{ fontFamily: 'Outfit', fontSize: '12px', color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.6 }}>
                  We&apos;ll be in touch within 24 hours to confirm your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
