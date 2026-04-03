'use client'
import { useEffect, useRef } from 'react'

const features = [
  { icon: '🏛️', title: 'Historic City Location', desc: 'Situated inside the Derry city walls — accessible, central and easy to reach from across the North West.' },
  { icon: '⭐', title: '5-Star Rated', desc: "Consistently rated 5 stars on Google by our patients. We let our results — and our reviews — speak for themselves." },
  { icon: '🦷', title: 'GDC Registered', desc: 'All our dentists and aestheticians are fully registered, insured and committed to continuing professional development.' },
  { icon: '💎', title: 'Premium Products Only', desc: 'We use only the best materials and products — from Invisalign aligners to leading aesthetic brands.' },
  { icon: '🤝', title: 'No Rush, No Pressure', desc: "We take time to understand what you want, explain your options clearly, and never push you into treatment you don't need." },
  { icon: '✨', title: 'Smile Transformations', desc: 'From subtle whitening to complete smile makeovers — we love seeing the confidence boost our patients get.' },
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
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 52px)', color: '#0a1628', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '20px' }}>
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
              <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '16px', color: '#0a1628', marginTop: '8px' }}>{s.label}</div>
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
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '18px', color: '#0a1628', marginBottom: '10px', letterSpacing: '-0.01em' }}>{f.title}</h3>
              <p style={{ fontFamily: 'Outfit', fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
