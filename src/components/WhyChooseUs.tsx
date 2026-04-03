'use client'
import { useEffect, useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    title: 'Historic City Location',
    desc: 'Situated inside the Derry city walls — accessible, central and easy to reach from across the North West.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: '5-Star Rated',
    desc: 'Consistently rated 5 stars on Google by our patients. We let our results — and our reviews — speak for themselves.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'GDC Registered',
    desc: 'All our dentists and aestheticians are fully registered, insured and committed to continuing professional development.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/>
        <line x1="12" y1="22" x2="12" y2="9"/>
        <polyline points="2 9 12 9 22 9"/>
        <line x1="6" y1="3" x2="12" y2="9"/>
        <line x1="18" y1="3" x2="12" y2="9"/>
      </svg>
    ),
    title: 'Premium Products Only',
    desc: 'We use only the best materials and products — from Invisalign aligners to leading aesthetic brands.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'No Rush, No Pressure',
    desc: "We take time to understand what you want, explain your options clearly, and never push you into treatment you don't need.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'Smile Transformations',
    desc: 'From subtle whitening to complete smile makeovers — we love seeing the confidence boost our patients get.',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => el.classList.add('visible')); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="why" ref={sectionRef} style={{ background: 'white', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '16px' }}>Why Choose Us</p>
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 52px)', color: '#1c2028', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '20px' }}>
            A different kind<br />of dental experience
          </h2>
          <p style={{ fontFamily: 'Outfit', fontSize: '16px', color: '#64748b', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            We combine clinical excellence with a genuinely warm, welcoming environment where you feel at ease from the moment you walk in.
          </p>
        </div>

        {/* Big stat row */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(0,212,177,0.15)', borderRadius: '20px', overflow: 'hidden', marginBottom: '80px' }}>
          {[
            { num: '500+', label: 'Happy Patients', sub: 'and counting' },
            { num: '10+', label: 'Years Experience', sub: 'in the city' },
            { num: '5.0★', label: 'Google Rating', sub: 'from our patients' },
          ].map(s => (
            <div key={s.label} style={{ background: '#f8fffe', padding: '48px 32px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(40px, 5vw, 64px)', color: '#00d4b1', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '16px', color: '#1c2028', marginTop: '8px' }}>{s.label}</div>
              <div style={{ fontFamily: 'Outfit', fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {features.map((f, i) => (
            <div key={f.title} className={`reveal card-lift d${i + 1}`} style={{
              background: '#f8fffe',
              border: '1px solid rgba(0,212,177,0.15)',
              borderRadius: '20px', padding: '32px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,177,0.4)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,177,0.15)' }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(0,212,177,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#00d4b1', marginBottom: '18px',
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '18px', color: '#1c2028', marginBottom: '10px', letterSpacing: '-0.01em' }}>{f.title}</h3>
              <p style={{ fontFamily: 'Outfit', fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
