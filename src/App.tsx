import { useState, useEffect, useRef } from 'react'

const TICKER_ITEMS = [
  'PARRILLAS', 'BRASEROS', 'CHULENGOS', 'HORNOS', 'PARRILLAS', 'BRASEROS',
  'ACCESORIOS', 'ACERO PREMIUM', 'ASADORES', 'ARTESANAL',
]

// const FEATURES = [
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
//         <path d="M24 8C24 8 14 18 14 26a10 10 0 0020 0c0-8-10-18-10-18z" stroke="#E85D04" strokeWidth="2.5" strokeLinejoin="round"/>
//         <path d="M24 28c0-4-4-8-4-8" stroke="#E85D04" strokeWidth="2" strokeLinecap="round"/>
//         <path d="M10 40h28" stroke="#F5EFE0" strokeWidth="2.5" strokeLinecap="round"/>
//         <path d="M16 40v4M32 40v4" stroke="#F5EFE0" strokeWidth="2" strokeLinecap="round"/>
//       </svg>
//     ),
//     label: 'FIRE PITS',
//     desc: 'Handcrafted pits built for long burns and lasting warmth.',
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
//         <rect x="8" y="18" width="32" height="4" rx="2" stroke="#E85D04" strokeWidth="2.5"/>
//         <path d="M12 22v10a2 2 0 002 2h20a2 2 0 002-2V22" stroke="#E85D04" strokeWidth="2.5"/>
//         <line x1="24" y1="18" x2="24" y2="6" stroke="#F5EFE0" strokeWidth="2" strokeLinecap="round"/>
//         <path d="M24 6c0 0-3-4 0-6 3 2 0 6 0 6z" fill="#E85D04"/>
//         <line x1="16" y1="34" x2="16" y2="42" stroke="#F5EFE0" strokeWidth="2" strokeLinecap="round"/>
//         <line x1="32" y1="34" x2="32" y2="42" stroke="#F5EFE0" strokeWidth="2" strokeLinecap="round"/>
//       </svg>
//     ),
//     label: 'PREMIUM GRILLS',
//     desc: 'Heavy-gauge steel grills engineered for restaurant-grade performance.',
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
//         <rect x="6" y="20" width="36" height="20" rx="3" stroke="#E85D04" strokeWidth="2.5"/>
//         <path d="M14 20V16a10 10 0 0120 0v4" stroke="#E85D04" strokeWidth="2.5"/>
//         <circle cx="24" cy="30" r="4" stroke="#F5EFE0" strokeWidth="2"/>
//         <path d="M24 26v-4M24 38v-4M18.5 30H14M34 30h-4.5" stroke="#F5EFE0" strokeWidth="1.5" strokeLinecap="round"/>
//       </svg>
//     ),
//     label: 'SMOKERS',
//     desc: 'Offset and drum smokers for low-and-slow mastery.',
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
//         <path d="M10 24h28" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round"/>
//         <path d="M10 30h28" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
//         <path d="M10 36h28" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4"/>
//         <rect x="6" y="18" width="36" height="24" rx="2" stroke="#F5EFE0" strokeWidth="2"/>
//         <path d="M14 18V12M24 18V10M34 18V13" stroke="#F5EFE0" strokeWidth="2" strokeLinecap="round"/>
//       </svg>
//     ),
//     label: 'BBQ ACCESSORIES',
//     desc: 'Every tool, cover, and condiment for the complete cook setup.',
//   },
// ]

interface Ember {
  id: number
  x: number
  size: number
  duration: number
  delay: number
}

function useEmbers(count = 10) {
  const [embers, setEmbers] = useState<Ember[]>([])
  useEffect(() => {
    setEmbers(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 4 + Math.random() * 6,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
      }))
    )
  }, [count])
  return embers
}

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const embers = useEmbers(12)
  const heroRef = useRef<HTMLElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  const tickerText = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── Nav bar ── */}
      <header className="fade-up" style={{ position: 'relative', zIndex: 20, padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(232,93,4,0.12)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* <div style={{ width: 36, height: 36, background: '#E85D04', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
              <path d="M12 3C12 3 7 9 7 13.5a5 5 0 0010 0C17 9 12 3 12 3z" fill="#fff"/>
            </svg>
          </div> */}
          <span className="condensed" style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.08em', color: '#F5EFE0', textTransform: 'uppercase' }}>
            Iron&nbsp;King
          </span>
        </div>
        <span className="condensed" style={{ fontSize: 13, letterSpacing: '0.2em', color: '#6B6B6B', textTransform: 'uppercase' }}>
          Coming Soon
        </span>
      </header>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background photo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1505405241694-58823de133e1?w=1600&h=900&fit=crop&auto=format')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.22) saturate(0.7)',
          }}
          role="img"
          aria-label="Fire burning on a grill"
        />

        {/* Orange vignette from bottom */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(232,93,4,0.28) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0D0D0D 0%, transparent 40%, transparent 80%, #0D0D0D 100%)' }} />

        {/* Floating embers */}
        {embers.map(e => (
          <span
            key={e.id}
            className="ember"
            style={{
              left: `${e.x}%`,
              bottom: 0,
              width: e.size,
              height: e.size,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
            }}
          />
        ))}

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 800, margin: '0 auto' }}>
          <p className="condensed fade-up delay-1" style={{ fontSize: 13, letterSpacing: '0.3em', color: '#E85D04', textTransform: 'uppercase', marginBottom: 20 }}>
            ◆ &nbsp;El fuego se acerca&nbsp; ◆
          </p>

          <h1 className="condensed flame-glow fade-up delay-2" style={{ fontSize: 'clamp(72px, 14vw, 148px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.01em', color: '#FFFFFF', textTransform: 'uppercase', margin: '0 0 28px' }}>
            Muy<br />
            <span style={{ color: '#E85D04' }}>Pronto</span>
          </h1>

          <p className="fade-up delay-3" style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 300, lineHeight: 1.65, color: 'rgba(245,239,224,0.75)', maxWidth: 560, margin: '0 auto 48px', letterSpacing: '0.01em' }}>
            Parrillas, braseros, chulengos, hornos y accesorios premium, fabricados artesanalmente en acero de gran calibre. Estamos dando los últimos retoques a un producto diseñado para durar."
            {/* Parrillas, braseros, chulengos, hornos, accesorios y demas, de primera calidad, todo fabricado artesanalmente en acero de gran calibre. Estamos dando los ultimos retoques a un producto hecho para durar. */}
            {/* Premium grills, fire pits, smokers, and BBQ accessories—all handcrafted in heavy-gauge steel. We're putting the finishing touches on something built to last. */}
          </p>

          {/* Email form */}
          <div className="fade-up delay-4">
            {submitted ? (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 32px', border: '1px solid rgba(232,93,4,0.5)', borderRadius: 4, background: 'rgba(232,93,4,0.08)' }}>
                <svg viewBox="0 0 20 20" fill="#E85D04" width="20" height="20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="condensed" style={{ fontSize: 18, letterSpacing: '0.08em', color: '#F5EFE0', textTransform: 'uppercase' }}>
                  You're on the list — we'll fire up your inbox soon.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <div style={{ display: 'flex', width: '100%', maxWidth: 520, gap: 0 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    placeholder="tu@email.com"
                    className="input-flame"
                    aria-label="Email address"
                    style={{
                      flex: 1,
                      padding: '15px 20px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(245,239,224,0.15)',
                      borderRight: 'none',
                      borderRadius: '4px 0 0 4px',
                      color: '#F5EFE0',
                      fontSize: 15,
                      fontFamily: 'Barlow, sans-serif',
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-flame condensed"
                    style={{
                      padding: '15px 28px',
                      borderRadius: '0 4px 4px 0',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    NOTIFICARME
                  </button>
                </div>
                {error && (
                  <p style={{ fontSize: 13, color: '#E85D04', margin: 0 }}>{error}</p>
                )}
                <p style={{ fontSize: 12, color: '#6B6B6B', letterSpacing: '0.06em', margin: 0 }}>
                  No spam. Solo un aviso de cara al lanzamiento.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Ticker strip ── */}
      <div className="ticker-strip" style={{ padding: '12px 0' }} aria-hidden="true">
        <div className="ticker-inner">
          {tickerText.map((item, i) => (
            <span key={i} className="condensed" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase', padding: '0 32px' }}>
              {item} &nbsp;◆
            </span>
          ))}
        </div>
      </div>

      {/* ── Feature grid ── */}
      {/* <section style={{ padding: 'clamp(64px, 10vw, 112px) clamp(24px, 6vw, 80px)', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <h2 className="condensed" style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 800, color: '#F5EFE0', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1, margin: 0 }}>
            What We're<br />
            <span style={{ color: '#E85D04' }}>Bringing</span>
          </h2>
          <p style={{ fontSize: 15, color: '#6B6B6B', maxWidth: 320, lineHeight: 1.7, margin: 0 }}>
            Every product forged for outdoor obsessives who refuse to compromise on quality or character.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
          {FEATURES.map((f) => (
            <div
              key={f.label}
              className="feature-card"
              style={{
                padding: '40px 32px',
                background: '#1A1A1A',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
              }}
            >
              {f.icon}
              <div>
                <p className="condensed" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.22em', color: '#E85D04', textTransform: 'uppercase', margin: '0 0 8px' }}>
                  {f.label}
                </p>
                <p style={{ fontSize: 15, color: 'rgba(245,239,224,0.6)', lineHeight: 1.65, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── Divider photo band ── */}
      <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1516483954662-1bee87353427?w=1600&h=400&fit=crop&auto=format')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            filter: 'brightness(0.3) saturate(0.5)',
          }}
          role="img"
          aria-label="Black steel cooker"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #0D0D0D 0%, transparent 30%, transparent 70%, #0D0D0D 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <blockquote className="condensed" style={{ fontSize: 'clamp(22px, 4vw, 40px)', fontWeight: 700, color: '#F5EFE0', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', padding: '0 24px', margin: 0, lineHeight: 1.3 }}>
            "Fabricado en Acero.&nbsp;
            <span style={{ color: '#E85D04' }}>Forjado con pasion.</span>"
          </blockquote>
        </div>
      </div>

      {/* ── Trust badges ── */}
      <section style={{ padding: 'clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)', borderTop: '1px solid rgba(232,93,4,0.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[
            { stat: '100%', label: 'Artesanal' },
            { stat: 'ACERO', label: 'PREMIUM' },
            { stat: 'GARANTIA', label: 'ASEGURADA' },
            { stat: 'ENVIO', label: 'a todo el pais' },
            { stat: '24/7', label: 'Soporte' },
          ].map(b => (
            <div key={b.label} style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
              <span className="condensed" style={{ fontSize: 38, fontWeight: 900, color: '#E85D04', letterSpacing: '-0.01em', lineHeight: 1 }}>
                {b.stat}
              </span>
              <span className="condensed" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', color: '#6B6B6B', textTransform: 'uppercase' }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid rgba(245,239,224,0.06)', padding: '24px clamp(24px, 6vw, 80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* <div style={{ width: 24, height: 24, background: '#E85D04', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true">
              <path d="M12 3C12 3 7 9 7 13.5a5 5 0 0010 0C17 9 12 3 12 3z" fill="#fff"/>
            </svg>
          </div> */}
          <span className="condensed" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', color: '#F5EFE0', textTransform: 'uppercase' }}>Iron King</span>
        </div>
        <p style={{ fontSize: 12, color: '#6B6B6B', margin: 0, letterSpacing: '0.04em' }}>
          © 2026 Iron King. All rights reserved.
        </p>
      </footer>
    </div>
  )
}