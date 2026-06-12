import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, Gem, Shuffle, ShieldCheck, Scale,
  TrendingUp, Users, Globe, Smartphone, Wallet, AlertTriangle,
  Check, X, Sparkles, MapPin, Zap, Star, BarChart3, Target,
} from 'lucide-react'

type Slide = {
  id: string
  component: React.FC<{ direction: number }>
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: 0.08 * i, duration: 0.5, ease: 'easeOut' as const },
  }),
}

function SlideTitle({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide title-slide"
    >
      <div className="slide-inner" style={{ textAlign: 'center' }}>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <Gem size={16} /> Pitch Deck
          </span>
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          <span className="gradient-text">Lowkey Gem</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="subtitle"
        >
          Africa's First Fair Freelance Marketplace
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="meta"
        >
          Equal Discovery &middot; Escrow Protected &middot; KYC Verified
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          style={{ marginTop: '2rem' }}
        >
          <div className="tags" style={{ justifyContent: 'center' }}>
            <span className="tag accent">Pre-launch</span>
            <span className="tag">Web + Mobile</span>
            <span className="tag">Nigeria</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function SlideProblem({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide"
    >
      <div className="slide-inner">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow"><BarChart3 size={14} /> The Problem</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Algorithmic bias is burying<br />
          <span className="gradient-text">Nigerian talent</span>
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Global platforms rank freelancers by spend, history, and engagement — not skill.
          Newcomers are invisible. Nigerian freelancers face the highest barriers.
        </motion.p>

        <div className="stats-row">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="stat-card">
            <div className="value">13–32%</div>
            <div className="label">Combined platform fees<br />(Upwork / Fiverr)</div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="stat-card">
            <div className="value">~10%</div>
            <div className="label">Of freelancers get<br />page-one visibility</div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5} className="stat-card">
            <div className="value">Pay-to-win</div>
            <div className="label">Upwork Boosts / Fiverr Ads<br />advantage paying users</div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
          className="tags"
          style={{ marginTop: '1.5rem' }}
        >
          <span className="tag">Upwork: 10-15% freelancer + up to 8% client fee</span>
          <span className="tag">Fiverr: 20% seller + 5.5% buyer fee</span>
          <span className="tag">Freelancer.com: 10% or $5 min</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

function SlideSolution({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide"
    >
      <div className="slide-inner">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow"><Zap size={14} /> The Solution</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          <span className="gradient-text">Non-algorithmic</span>, randomized<br />
          discovery with escrow trust
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Lowkey Gem replaces ranking algorithms with randomized browsing and
          Tinder-style matching. Every profile gets equal visibility. Work is
          protected by escrow, KYC, and human dispute mediators.
        </motion.p>

        <div className="steps">
          {[
            { icon: Users, t: 'Profile + KYC', d: 'Freelancers post skill profiles; clients post jobs. Both verify identity.' },
            { icon: Shuffle, t: 'Randomized Discovery', d: 'No ranking, no pay-to-win. Talent is shuffled so everyone gets seen.' },
            { icon: Star, t: 'Swipe to Match', d: 'Tinder-style. Both sides say yes → private channel opens.' },
            { icon: ShieldCheck, t: 'Escrow & Deliver', d: 'Funds held in escrow, released on approval. Human dispute resolution.' },
          ].map((s, i) => (
            <motion.div
              key={s.t}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3 + i}
              className="step"
            >
              <s.icon size={20} color="#ff1d68" />
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function SlideMarket({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide"
    >
      <div className="slide-inner">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow"><TrendingUp size={14} /> Market Opportunity</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          A growing market in a{' '}
          <span className="gradient-text">massive, underserved region</span>
        </motion.h2>

        <div className="stats-row">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="stat-card">
            <div className="value">$5.6B → $13.8B</div>
            <div className="label">Global freelance platform market<br />2024 → 2030 (16.1% CAGR)</div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="stat-card">
            <div className="value">$5.17B</div>
            <div className="label">Nigeria's gig economy<br />(2026, Bolt/Ipsos)</div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="stat-card">
            <div className="value">230M+</div>
            <div className="label">Population<br />65% under 35 years old</div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5} style={{ marginTop: '1.5rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)', padding: '1.2rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Globe size={14} color="#41e0d0" /> Digital Infra
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: '1.6' }}>
                118M+ internet users (51% penetration)<br />
                75% 4G coverage · 5G rolling out<br />
                40% use mobile money
              </p>
            </div>
            <div style={{ background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)', padding: '1.2rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} color="#41e0d0" /> Regional Context
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: '1.6' }}>
                Nigeria, Kenya & S. Africa = 80.6%<br />
                of Sub-Saharan online gig traffic<br />
                English-speaking workforce
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function SlideProduct({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide"
    >
      <div className="slide-inner">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow"><Smartphone size={14} /> Product</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Built for <span className="gradient-text">fair discovery</span>,<br />
          designed for trust
        </motion.h2>

        <div className="two-col">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <h3><Check size={16} color="#22c55e" /> Key Features</h3>
            <ul>
              {[
                'Tinder-style swipe matching (jobs ↔ freelancers)',
                'Non-algorithmic randomized discovery feed',
                'Government ID + selfie KYC verification',
                'Escrow-based payments (credit ledger)',
                'Human-mediated dispute resolution system',
                'Work submission & revision system (max 2 revisions)',
                'Post-completion ratings & reviews',
                'Real-time messaging & file attachments',
                'Location-based matching (Lagos, Abuja, Port Harcourt)',
                'Mobile apps via Capacitor (iOS & Android)',
              ].map((f) => (
                <li key={f}><Check size={14} className="check" /> {f}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <h3><BarChart3 size={16} color="#41e0d0" /> Tech Stack</h3>
            <ul>
              <li><Zap size={14} color="#f59e0b" /> React 18 + TypeScript + Vite</li>
              <li><Zap size={14} color="#f59e0b" /> Python FastAPI backend</li>
              <li><Zap size={14} color="#f59e0b" /> Supabase Postgres + Storage</li>
              <li><Zap size={14} color="#f59e0b" /> Capacitor native mobile</li>
              <li><Zap size={14} color="#f59e0b" /> Three.js 3D landing experience</li>
              <li><Zap size={14} color="#f59e0b" /> Deployable on Vercel (serverless)</li>
            </ul>
            <div className="tags" style={{ marginTop: '1.5rem' }}>
              <span className="tag accent">Web App</span>
              <span className="tag accent">iOS App</span>
              <span className="tag accent">Android App</span>
              <span className="tag accent">PWA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function SlideBusinessModel({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide"
    >
      <div className="slide-inner">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow"><Wallet size={14} /> Business Model</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Low fees, high trust,<br />
          <span className="gradient-text">sustainable economics</span>
        </motion.h2>

        <div className="two-col">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <h3><TrendingUp size={16} color="#22c55e" /> Revenue Streams</h3>
            <ul>
              <li><Check size={14} className="check" /> Service fee (%) on completed contracts (TBD)</li>
              <li><Check size={14} className="check" /> Escrow float interest on held funds</li>
              <li><Check size={14} className="check" /> Premium KYC verification (faster turnaround)</li>
              <li><Check size={14} className="check" /> Featured/boosted listings (future)</li>
            </ul>
            <div style={{ marginTop: '1rem', background: 'var(--surface)', borderRadius: 8, border: '1px solid var(--border)', padding: '1rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>
                <strong style={{ color: 'var(--text)' }}>Competitive advantage:</strong> At 5-8% take rate vs
                Upwork's 13-32% combined, we're 2-4x cheaper.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <h3><Scale size={16} color="#f59e0b" /> Cost Structure</h3>
            <ul>
              <li><span style={{ color: '#ef4444' }}>●</span> Server & infrastructure (Vercel + Supabase)</li>
              <li><span style={{ color: '#ef4444' }}>●</span> Identity validation (KYC provider)</li>
              <li><span style={{ color: '#ef4444' }}>●</span> Dispute managers & support staff</li>
              <li><span style={{ color: '#ef4444' }}>●</span> Operations & marketing</li>
            </ul>
            <div style={{ marginTop: '1rem', background: 'var(--surface)', borderRadius: 8, border: '1px solid var(--border)', padding: '1rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>
                <strong style={{ color: 'var(--text)' }}>Key resources:</strong> Existing codebase (35+ backend
                modules, 50+ frontend components), dispute managers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function SlideFeasibility({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide"
    >
      <div className="slide-inner">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow"><Target size={14} /> Feasibility Study</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Nigeria is <span className="gradient-text">ready</span> for a fair<br />freelance marketplace
        </motion.h2>

        <div className="two-col">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <h3><Check size={16} color="#22c55e" /> Enabling Factors</h3>
            <ul>
              <li><Check size={14} className="check" /> 65% of 230M population under 35 — massive digital-native workforce</li>
              <li><Check size={14} className="check" /> 118M internet users, 75% 4G coverage, rapid 5G rollout</li>
              <li><Check size={14} className="check" /> $29B National Digital Economy Policy investment by 2030</li>
              <li><Check size={14} className="check" /> English-speaking — access to global freelance market</li>
              <li><Check size={14} className="check" /> Nigeria's gig economy already valued at $5.17B</li>
              <li><Check size={14} className="check" /> Strong fintech ecosystem ($1.2B funding, 200+ startups)</li>
              <li><Check size={14} className="check" /> Startup Act 2022 — legal framework for tech entrepreneurship</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <h3><AlertTriangle size={16} color="#ef4444" /> Risks & Mitigations</h3>
            <div className="risk-tags">
              <span className="risk-tag">Payment infrastructure gaps</span>
              <span className="risk-tag mitigation">→ Partner with fintechs (Paystack, Flutterwave)</span>
            </div>
            <div className="risk-tags">
              <span className="risk-tag">Trust deficit in online transactions</span>
              <span className="risk-tag mitigation">→ Escrow + KYC as core trust layer</span>
            </div>
            <div className="risk-tags">
              <span className="risk-tag">Low digital payment adoption (40%)</span>
              <span className="risk-tag mitigation">→ USSD + bank transfer integration</span>
            </div>
            <div className="risk-tags">
              <span className="risk-tag">Competition from global platforms</span>
              <span className="risk-tag mitigation">→ Localized + fair discovery differentiator</span>
            </div>
            <div className="risk-tags">
              <span className="risk-tag">Regulatory uncertainty</span>
              <span className="risk-tag mitigation">→ Legal team engagement, compliance-first</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function SlideCompetition({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide"
    >
      <div className="slide-inner">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow"><BarChart3 size={14} /> Competitive Landscape</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Only Lowkey Gem offers{' '}
          <span className="gradient-text">fair + local + trusted</span>
        </motion.h2>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} style={{ width: '100%', overflowX: 'auto' }}>
          <table className="comp-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Lowkey Gem</th>
                <th>Upwork</th>
                <th>Fiverr</th>
                <th>Gigafro</th>
                <th>TERAWORK</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Nigeria-focused', <Check className="check" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />, <Check className="check" size={14} />, <Check className="check" size={14} />],
                ['Non-algorithmic discovery', <Check className="check" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />],
                ['Escrow payments', <Check className="check" size={14} />, <span className="partial">Partial</span>, <span className="partial">Partial</span>, <Check className="check" size={14} />, <span className="partial">Partial</span>],
                ['Human dispute mediation', <Check className="check" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />],
                ['KYC verification', <Check className="check" size={14} />, <span className="partial">Basic</span>, <span className="partial">Basic</span>, <Check className="check" size={14} />, <Check className="check" size={14} />],
                ['Swipe matching', <Check className="check" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />, <X className="cross" size={14} />],
                ['Take rate', '5–10% est.', '13–32%', '24–35%', 'Unknown', '5–10%'],
              ].map((row, i) => (
                <tr key={i} className={i === 0 ? 'highlight' : ''}>
                  <td>{row[0]}</td>
                  {row.slice(1).map((cell, j) => <td key={j}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{ fontSize: '0.8rem', marginTop: '1rem' }}
        >
          <strong>Note:</strong> Gigafro (unfunded, Lagos, est. 2023) is the closest local competitor.
          No local platform offers randomized discovery or human dispute resolution.
        </motion.p>
      </div>
    </motion.div>
  )
}

function SlideRoadmap({ direction }: { direction: number }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="slide"
    >
      <div className="slide-inner">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="eyebrow"><Sparkles size={14} /> Roadmap & Next Steps</span>
        </motion.div>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Codebase complete. Ready for{' '}
          <span className="gradient-text">market entry</span>.
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Full-stack application built (React + FastAPI + Supabase). Now pursuing
          pilot launch in Lagos, Abuja, and Port Harcourt.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} style={{ width: '100%', marginTop: '1.5rem' }}>
          {[
            { done: true, t: 'Platform Development', d: 'Full frontend (50+ components), backend (35+ modules), mobile (iOS + Android)' },
            { done: true, t: 'Trust Infrastructure', d: 'KYC system, escrow wallet, dispute resolution, admin portal built and tested' },
            { done: false, t: 'Pilot Launch — Q3 2026', d: 'Onboard 500 freelancers + 50 clients in Lagos, Abuja, Port Harcourt' },
            { done: false, t: 'Scale & Funding', d: 'Seed round to cover operations, marketing, KYC provider costs, and dispute management team' },
          ].map((item, i) => (
            <div key={i} className="roadmap-item">
              <div className="roadmap-marker">
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: item.done ? '#22c55e' : 'var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, border: item.done ? 'none' : '2px solid var(--text2)',
                }}>
                  {item.done && <Check size={12} color="white" />}
                </div>
                {i < 3 && <div className="roadmap-line" />}
              </div>
              <div className="roadmap-content">
                <h4>{item.t}</h4>
                <p>{item.d}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="tags"
          style={{ marginTop: '1rem' }}
        >
          <span className="tag accent">Seeking: Seed Funding</span>
          <span className="tag">Target: Pilot Cities (3)</span>
          <span className="tag">Stage: Pre-launch</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

const slides: Slide[] = [
  { id: 'title', component: SlideTitle },
  { id: 'problem', component: SlideProblem },
  { id: 'solution', component: SlideSolution },
  { id: 'market', component: SlideMarket },
  { id: 'product', component: SlideProduct },
  { id: 'business-model', component: SlideBusinessModel },
  { id: 'feasibility', component: SlideFeasibility },
  { id: 'competition', component: SlideCompetition },
  { id: 'roadmap', component: SlideRoadmap },
]

export default function App() {
  const [[slideIndex, direction], setSlideState] = useState([0, 0])
  const touchStart = useRef<number | null>(null)

  const paginate = useCallback((dir: number) => {
    setSlideState(([current]) => {
      const next = current + dir
      if (next < 0 || next >= slides.length) return [current, dir]
      return [next, dir]
    })
  }, [])

  const goTo = useCallback((idx: number) => {
    setSlideState(([current]) => [idx, idx > current ? 1 : -1])
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') paginate(1)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') paginate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [paginate])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return
    const diff = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(diff) > 60) paginate(diff < 0 ? 1 : -1)
    touchStart.current = null
  }

  const SlideComponent = slides[slideIndex].component

  return (
    <div
      style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Nav bar */}
      <nav>
        <div className="logo"><Gem size={16} color="#ff1d68" /> <span>Lowkey</span> Gem</div>
        <div className="slide-counter">Pitch Deck &middot; {slideIndex + 1} / {slides.length}</div>
      </nav>

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <SlideComponent key={slideIndex} direction={direction} />
      </AnimatePresence>

      {/* Bottom navigation */}
      <div className="nav-arrows">
        <button className="nav-btn" onClick={() => paginate(-1)} disabled={slideIndex === 0}>
          <ArrowLeft size={18} />
        </button>
        <div className="dots">
          {slides.map((_, i) => (
            <button key={i} className={`dot ${i === slideIndex ? 'active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="nav-btn" onClick={() => paginate(1)} disabled={slideIndex === slides.length - 1}>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
