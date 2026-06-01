import { useState } from 'react';
import { Link } from 'react-router';
import { Nav } from '../components/Nav';
import { ChatPanel } from '../components/ChatPanel';

const LOAN_OPTIONS = [
  { title: 'Auto refinance', sub: 'Average yearly savings of $1,582.²', cta: 'Check your rate' },
  { title: 'Personal loans', sub: 'Loans from $1,000 to $75,000³', cta: 'Check your rate' },
  { title: 'Short-term relief', sub: '$200 to $2,500 over 3–18 months⁴', cta: 'See what you qualify for' },
  { title: 'Home equity line of credit', sub: '$26,000 to $250,000 from as low as 6.52% APR⁵', cta: 'Check your rate' },
];

const EXPLORE = [
  { title: 'Personal loan', sub: 'Consolidate debt and more' },
  { title: 'Car refinance loan', sub: 'Swap your car loan and save' },
  { title: 'Short-term relief', sub: 'For everyday bills & expenses' },
  { title: 'Home equity line of credit⁶', sub: 'Get more cash with your home equity' },
];

const STREAK = [
  { month: 'Jan', paid: true },
  { month: 'Feb', paid: true },
  { month: 'Mar', paid: true },
  { month: 'Apr', paid: false },
  { month: 'May', paid: false },
];

function StreakDot({ paid }: { paid: boolean }) {
  return paid ? (
    <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0">
      <circle cx="12" cy="12" r="12" fill="#00857C" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0">
      <circle cx="12" cy="12" r="12" fill="#DC2626" />
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">!</text>
    </svg>
  );
}

export function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Nav onChatOpen={() => setChatOpen(true)} />

      <div className="flex flex-1 min-h-0" style={{ marginTop: '56px' }}>

        {/* ── MAIN SCROLL AREA ── */}
        <div className="flex-1 overflow-y-auto min-w-0">

          {/* DIV 1 — Red, text only */}
          <div
            className="bg-[#D93025] flex items-center justify-center"
            style={{ height: '160px', padding: '0 24px' }}
          >
            <p className="text-white font-semibold text-center" style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}>
              Hi Destini, let's get you back on track.
            </p>
          </div>

          {/* DIV 2 — White, ~206px. Card has negative margin to overlap into the red above */}
          <div className="bg-white" style={{ minHeight: '206px', paddingBottom: '32px' }}>
            <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '720px', marginTop: '-40px' }}>
              <div className="bg-white rounded-2xl" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.14)', padding: 'clamp(20px, 4vw, 28px)' }}>
                <div className="flex flex-col gap-4">
                  {/* Top row: amount left, button right */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-bold text-neutral-900 leading-none" style={{ fontSize: 'clamp(32px, 5vw, 40px)' }}>$500</p>
                      <p className="text-neutral-500 mt-1.5" style={{ fontSize: '13px' }}>Pay by June 5th to avoid a late fee</p>
                    </div>
                    <button
                      onClick={() => setChatOpen(true)}
                      className="flex-shrink-0 font-semibold rounded-lg transition-colors text-white"
                      style={{ background: '#DC2626', padding: '10px 20px', fontSize: '13px', whiteSpace: 'nowrap' }}
                      onMouseOver={e => (e.currentTarget.style.background = '#B91C1C')}
                      onMouseOut={e => (e.currentTarget.style.background = '#DC2626')}
                    >
                      Make a payment
                    </button>
                  </div>

                  {/* Streak dots */}
                  <div className="flex items-end gap-2 md:gap-4">
                    {STREAK.map(s => (
                      <div key={s.month} className="flex flex-col items-center gap-1">
                        <StreakDot paid={s.paid} />
                        <span className="text-xs text-neutral-400">{s.month}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress bar — full card width */}
                  <div className="w-full">
                    <div className="flex justify-between text-xs text-neutral-400 mb-1.5">
                      <span>$6,600</span>
                      <span>Payoff: 12/11/26</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: '#E2E4E4' }}>
                      <div className="h-full rounded-full" style={{ width: '75%', background: '#00857C' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teal section */}
          <div className="bg-[#E8F5F4] px-4 md:px-6 py-8 md:py-10">
            <div className="mx-auto w-full flex flex-col gap-8 md:gap-10" style={{ maxWidth: '720px' }}>

              {/* Loan options */}
              <div>
                <h2 className="font-bold text-neutral-900" style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}>
                  Loan options
                </h2>
                <p className="text-sm mt-1" style={{ color: '#00857C' }}>
                  Checking your rate won't affect your credit score.¹
                </p>
                <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden mt-4">
                  {LOAN_OPTIONS.map((opt, i) => (
                    <div key={opt.title}>
                      {i > 0 && <div className="h-px bg-neutral-100 mx-5" />}
                      <div className="flex items-center justify-between px-5 py-4 gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-neutral-900" style={{ fontSize: 'clamp(13px, 1.5vw, 15px)' }}>
                            {opt.title}
                          </p>
                          <p className="text-neutral-500 mt-0.5" style={{ fontSize: 'clamp(11px, 1.2vw, 13px)' }}>
                            {opt.sub}
                          </p>
                        </div>
                        <button
                          className="flex-shrink-0 text-white font-semibold rounded-lg text-center"
                          style={{
                            background: '#00857C',
                            width: '210px',
                            padding: '10px 0',
                            fontSize: '13px',
                          }}
                        >
                          {opt.cta}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explore loans */}
              <div>
                <h2 className="font-bold text-neutral-900" style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}>
                  Explore loans
                </h2>
                <div className="flex flex-col gap-3 mt-4">
                  {EXPLORE.map(l => (
                    <div
                      key={l.title}
                      className="bg-white rounded-2xl border border-neutral-200 shadow-sm px-5 py-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <div>
                        <p className="font-semibold text-neutral-900 text-sm">{l.title}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{l.sub}</p>
                      </div>
                      <span className="text-lg ml-4 flex-shrink-0" style={{ color: '#00857C' }}>→</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/loan/FN1885393" className="text-sm" style={{ color: '#00857C' }}>
                View loan #FN1885393 details →
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop chat panel */}
        <div className="hidden md:block">
          <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
        </div>
      </div>

      {/* Mobile chat panel — bottom sheet */}
      <div className="md:hidden">
        <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} mobile />
      </div>

      {/* Floating chat bubble — only shows when chat is closed */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 text-white font-semibold shadow-xl transition-all duration-200"
          style={{
            background: '#00857C',
            borderRadius: '9999px',
            padding: '11px 20px',
            height: '44px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
          }}
          onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = '#006B63'; }}
          onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = '#00857C'; }}
        >
          <span style={{ fontSize: 15 }}>💬</span>
          Ask a question
        </button>
      )}
    </div>
  );
}
