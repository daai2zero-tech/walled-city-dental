'use client'
import { useEffect, useRef, useState } from 'react'

const plans = [
  {
    name: 'Essentials',
    tagline: 'Perfect start',
    price: '£299',
    suffix: 'from',
    highlight: false,
    items: ['Teeth Whitening (in-clinic)', 'Full dental assessment', 'Hygiene & polish', 'Personalised aftercare plan', 'Whitening top-up kit'],
  },
  {
    name: 'Smile Makeover',
    tagline: 'Most popular',
    price: '£799',
    suffix: 'from',
    highlight: true,
    items: ['Everything in Essentials', 'Composite veneers (2 teeth)', 'Before & after photography', 'Invisalign consultation', 'Priority booking', '6-month follow-up'],
  },
  {
    name: 'Full Transformation',
    tagline: 'Complete package',
    price: 'Custom',
    suffix: '',
    highlight: false,
    items: ['Full smile makeover plan', 'Multiple veneer treatment', 'Invisalign full course', 'Aesthetic add-ons', 'Dedicated care coordinator', 'Monthly payment plans'],
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const [demoClicked, setDemoClicked] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => el.classList.add('visible')); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} style={{ background: '#1c2028', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,177,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 600, color: '#00d4b1', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '16px' }}>Transparent Pricing</p>
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(30px, 4vw, 52px)', color: 'white', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: '20px' }}>
            No hidden fees.<br />No surprise costs.
          </h2>
          <p style={{ fontFamily: 'Outfit', fontSize: '16px', color: 'rgba(255,255,255,0.4)', maxWidth: '420px', margin: '0 auto', lineHeight: 1.7 }}>
            Just honest pricing for treatments that make a real difference.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <div key={plan.name} className={`reveal d${i + 1}`} style={{
              background: plan.highlight ? 'linear-gradient(135deg, rgba(0,212,177,0.15) 0%, rgba(0,212,177,0.05) 100%)' : 'rgba(255,255,255,0.04)',
              border: plan.highlight ? '1px solid rgba(0,212,177,0.4)' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px', padding: '40px 32px',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              cursor: 'default',
              boxShadow: plan.highlight ? '0 0 60px rgba(0,212,177,0.12)' : 'none',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-8px)'; el.style.borderColor = plan.highlight ? 'rgba(0,212,177,0.7)' : 'rgba(0,212,177,0.3)'; el.style.boxShadow = '0 20px 60px rgba(0,212,177,0.15)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'none'; el.style.borderColor = plan.highlight ? 'rgba(0,212,177,0.4)' : 'rgba(255,255,255,0.08)'; el.style.boxShadow = plan.highlight ? '0 0 60px rgba(0,212,177,0.12)' : 'none' }}
            >
              {plan.highlight && (
                <>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #00d4b1, #7feee4)' }} />
                  <div style={{ display: 'inline-block', background: '#00d4b1', color: '#1c2028', fontFamily: 'Outfit', fontWeight: 700, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: '100px', marginBottom: '20px' }}>Most Popular</div>
                </>
              )}
              <p style={{ fontFamily: 'Outfit', fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>{plan.tagline}</p>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '22px', color: 'white', marginBottom: '20px' }}>{plan.name}</h3>
              <div style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {plan.suffix && <span style={{ fontFamily: 'Outfit', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{plan.suffix} </span>}
                <span style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '44px', color: plan.highlight ? '#00d4b1' : 'white', letterSpacing: '-0.03em' }}>{plan.price}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {plan.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: '#00d4b1', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>&#10003;</span>
                    <span style={{ fontFamily: 'Outfit', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setDemoClicked(true)}
                style={{
                  width: '100%', padding: '14px', borderRadius: '100px', fontFamily: 'Outfit', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
                  background: plan.highlight ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.3)',
                  transition: 'none',
                }}
              >
                Book a Consultation
              </button>
            </div>
          ))}
        </div>

        {demoClicked && (
          <p style={{ textAlign: 'center', fontFamily: 'Outfit', fontSize: '14px', color: '#00d4b1', letterSpacing: '0.05em', marginTop: '24px' }}>
            This is a Demo Site
          </p>
        )}

        <p className="reveal" style={{ textAlign: 'center', fontFamily: 'Outfit', fontSize: '14px', color: 'rgba(255,255,255,0.3)', marginTop: '40px', lineHeight: 1.6 }}>
          All prices are a guide. A personalised quote is provided at your free consultation.<br />
          Monthly payment plans available on selected treatments.
        </p>
      </div>
    </section>
  )
}
