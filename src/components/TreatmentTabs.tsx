'use client'
import { useEffect, useRef } from 'react'

const treatments = [
  { name: 'Teeth Whitening', desc: 'Professional in-clinic whitening delivering dramatic, long-lasting results in a single session.', image: 'https://images.unsplash.com/photo-1611690061822-b707a67bfebb?auto=format&fit=crop&w=800&q=80', tag: 'Most Popular' },
  { name: 'Composite Veneers', desc: 'Transform your smile with custom-crafted veneers that look and feel completely natural.', image: 'https://images.unsplash.com/photo-1744723856265-866d19b9cf1a?auto=format&fit=crop&w=800&q=80', tag: 'Cosmetic' },
  { name: 'Invisalign', desc: 'Straighten your teeth discreetly with clear aligners tailored to your unique smile.', image: 'https://images.unsplash.com/photo-1761718209852-54ca4210183e?auto=format&fit=crop&w=800&q=80', tag: 'Orthodontics' },
  { name: 'Aesthetic Treatments', desc: 'Expert dermal fillers, skin boosters and anti-wrinkle injections using premium products.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80', tag: 'Aesthetics' },
]

const extras = ['Check-ups & Hygiene', 'Dental Implants', 'Root Canal', 'Anti-Wrinkle Injections', 'Skin Boosters', 'Emergency Dentistry', "Children's Dentistry", 'Tooth Extraction']

export default function TreatmentTabs() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => el.classList.add('visible')); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="treatments" ref={sectionRef} style={{ background: '#0d1f35', paddingBottom: '100px', overflow: 'hidden' }}>
      {/* Ticker */}
      <div style={{ background: '#00d4b1', overflow: 'hidden', padding: '14px 0', whiteSpace: 'nowrap' }}>
        <div className="ticker-track">
          {[...Array(2)].map((_, ri) => (
            <span key={ri} style={{ display: 'inline-flex' }}>
              {['Teeth Whitening', 'Invisalign', 'Composite Veneers', 'Dental Implants', 'Dermal Fillers', 'Skin Boosters', 'Hygiene', 'Anti-Wrinkle'].map(s => (
                <span key={s} style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '12px', color: '#0a1628', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0 28px' }}>
                  {s}&nbsp;&nbsp;<span style={{ opacity: 0.3 }}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 56px' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '14px' }}>What We Offer</p>
            <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 52px)', color: 'white', letterSpacing: '-0.025em', lineHeight: 1.05 }}>Treatments designed<br />to make you shine</h2>
          </div>
          <p style={{ fontFamily: 'Outfit', fontSize: '15px', color: 'rgba(255,255,255,0.4)', maxWidth: '320px', lineHeight: 1.7 }}>Every treatment is tailored to you — your goals, your timeline, your budget.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="treatments-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
        {treatments.map((t, i) => (
          <div key={t.name} className={`reveal treatment-card card-lift d${i + 1}`} style={{ position: 'relative', height: '440px', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
            <img src={t.image} alt={t.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.65s ease' }} />
            <div className="treatment-overlay">
              <div style={{ display: 'inline-block', background: '#00d4b1', color: '#0a1628', fontFamily: 'Outfit', fontWeight: 700, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '100px', marginBottom: '12px', alignSelf: 'flex-start' }}>{t.tag}</div>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '21px', color: 'white', marginBottom: '8px', letterSpacing: '-0.01em' }}>{t.name}</h3>
              <p style={{ fontFamily: 'Outfit', fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '14px' }}>{t.desc}</p>
              <div className="treatment-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00d4b1', fontFamily: 'Outfit', fontWeight: 600, fontSize: '13px' }}>Learn more →</div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra pills */}
      <div style={{ maxWidth: '1200px', margin: '48px auto 0', padding: '0 24px' }}>
        <p style={{ fontFamily: 'Outfit', fontSize: '11px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '18px' }}>Also available</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {extras.map(s => (
            <div key={s} style={{ fontFamily: 'Outfit', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '8px 18px', transition: 'all 0.2s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,177,0.5)'; e.currentTarget.style.color = '#00d4b1' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
            >{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
