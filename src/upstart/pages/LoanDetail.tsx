import { useState } from 'react';
import { Link } from 'react-router';
import { Nav } from '../components/Nav';
import { ChatPanel } from '../components/ChatPanel';
import { mockLoan, streakPattern } from '../data/mock';

const STREAK_COLORS = {
  paid: '#00857C',
  late: '#D97706',
  reported_late: '#DC2626',
  past_due: '#DC2626',
  empty: 'transparent',
};

const STREAK_BORDERS = {
  paid: 'none',
  late: 'none',
  reported_late: 'none',
  past_due: 'none',
  empty: '1.5px solid #E2E4E4',
};

export function LoanDetail() {
  const [chatOpen, setChatOpen] = useState(false);
  const [bankOpen, setBankOpen] = useState(true);
  const [feesOpen, setFeesOpen] = useState(false);
  const loan = mockLoan;

  const years = [
    streakPattern.slice(0, 12),
    streakPattern.slice(12, 24),
    streakPattern.slice(24, 36),
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Nav />

      <div className="pt-14">
        <main className="max-w-4xl mx-auto px-8 py-8 flex flex-col gap-5">

          {/* Breadcrumb */}
          <Link to="/" className="text-sm text-[#00857C] hover:underline w-fit">
            ‹ My Account
          </Link>

          {/* Loan header */}
          <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-5">
            <h1 className="text-xl font-bold text-neutral-900">Personal loan #{loan.loanNumber}</h1>
            <p className="text-sm text-neutral-500 mt-0.5">Provided by an Upstart-powered lender</p>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded bg-neutral-900 flex items-center justify-center text-white text-xs font-bold">fn</div>
                <span className="text-sm font-bold text-neutral-800">fnbo</span>
              </div>
              <span className="text-neutral-300">|</span>
              <button className="text-sm text-[#00857C] hover:underline">Learn More</button>
            </div>
          </div>

          {/* Success banner */}
          <div className="bg-[#E6F4F3] rounded-lg px-5 py-3.5 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00857C] flex-shrink-0" />
            <p className="text-sm font-medium text-neutral-800">Congratulations! You have paid off your entire loan!</p>
          </div>

          {/* Two-column body */}
          <div className="grid grid-cols-[1fr_1.2fr] gap-5 items-start">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4">

              {/* Bank accounts */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm">
                <button
                  onClick={() => setBankOpen(v => !v)}
                  className="w-full flex items-center justify-between px-5 py-4"
                >
                  <span className="text-sm font-semibold text-neutral-800">Bank accounts</span>
                  <span className="text-neutral-400 text-sm">{bankOpen ? '∧' : '∨'}</span>
                </button>

                {bankOpen && (
                  <div className="px-5 pb-5 flex flex-col gap-3">
                    <div className="h-px bg-neutral-100" />
                    <div className="flex justify-between text-xs font-semibold text-neutral-500">
                      <span>Bank Account Name</span>
                      <span>Status</span>
                    </div>
                    {loan.bankAccounts.map(acc => (
                      <div key={acc.id} className="flex justify-between items-start py-1">
                        <div>
                          <p className="text-sm text-neutral-800">{acc.name}: x-{acc.last4}</p>
                          {acc.isAutopay && <p className="text-xs text-neutral-400">(Used for autopay)</p>}
                        </div>
                        {acc.verified && (
                          <span className="text-xs font-medium text-[#00857C] bg-[#E6F4F3] px-2.5 py-0.5 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => setChatOpen(true)}
                      className="w-full mt-1 py-2.5 bg-[#00857C] hover:bg-[#006B63] text-white text-sm font-semibold rounded-full transition-colors"
                    >
                      Add bank account
                    </button>
                  </div>
                )}
              </div>

              {/* Pay by check */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm">
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-semibold text-neutral-800">Pay by check</span>
                  <span className="text-neutral-400 text-sm">∧</span>
                </div>
                <div className="px-5 pb-5">
                  <div className="h-px bg-neutral-100 mb-3" />
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Please allow 7-10 business days for check processing. Make the check payable to:{' '}
                    <strong className="text-neutral-700">FIRST NATIONAL BANK OF OMAHA</strong>.
                    Include loan number <strong className="text-neutral-700">{loan.loanNumber}</strong> in the memo field.
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-xs text-neutral-500">
                    <div>
                      <p className="font-semibold text-neutral-700">Mail via standard mail*</p>
                      <p>FIRST NATIONAL BANK OF OMAHA</p>
                      <p>PO Box 889149</p>
                      <p>Los Angeles, CA 90088-9149</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-700 mt-2">Overnight check address*</p>
                      <p>Lockbox Services - #399149</p>
                      <p>3440 Flair Dr., El Monte, CA 91731</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4">

              {/* Payments */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-neutral-800">Payments</span>
                  <button className="text-sm text-[#00857C] hover:underline">See more</button>
                </div>
                <div className="flex flex-col divide-y divide-neutral-100">
                  {loan.payments.slice(0, 3).map(p => (
                    <div key={p.id} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex-shrink-0" />
                        <span className="text-sm text-neutral-800">{p.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-neutral-800">${p.amount.toFixed(2)}</span>
                        <span className="text-neutral-400 text-xs">›</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fees row */}
                <div className="h-px bg-neutral-100 mt-1" />
                <button
                  onClick={() => setFeesOpen(v => !v)}
                  className="w-full flex items-center justify-between pt-3"
                >
                  <span className="text-sm font-semibold text-neutral-800">Fees</span>
                  <span className="text-neutral-400 text-sm">{feesOpen ? '∧' : '∨'}</span>
                </button>
              </div>

              {/* Payment streak */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-5">
                <p className="text-sm font-semibold text-neutral-800 mb-1">Payment streak</p>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Each completed on-time payment is reported to credit bureaus and can improve your credit score.
                </p>
                <div className="flex flex-col gap-2">
                  {years.map((row, yi) => (
                    <div key={yi} className="flex items-center gap-1">
                      {row.map((dot, di) => (
                        <span
                          key={di}
                          className="w-4 h-4 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: dot === 'empty' ? 'transparent' : STREAK_COLORS[dot],
                            border: STREAK_BORDERS[dot],
                          }}
                        />
                      ))}
                      <span className="text-xs text-neutral-400 ml-1">Year {yi + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#00857C]" />Paid on time</div>
                  <div className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#D97706]" />Paid late</div>
                  <div className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#DC2626]" />Reported late</div>
                  <div className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded-full bg-[#DC2626]" />Past due</div>
                </div>
              </div>

              {/* Payoff progress */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-5">
                <p className="text-sm font-semibold text-neutral-800 mb-1">Payoff progress</p>
                <p className="text-xs text-neutral-500 mb-3">
                  ${loan.loanAmount.toLocaleString()}.00 of ${loan.loanAmount.toLocaleString()}.00 paid toward principal
                </p>
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00857C] rounded-full w-full" />
                </div>
                <button className="text-xs text-[#00857C] hover:underline mt-2">What is principal?</button>
              </div>

              {/* Loan summary */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-5">
                <p className="text-sm font-semibold text-neutral-800 mb-3">Loan summary</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    ['Loan Amount', `$${loan.loanAmount.toLocaleString()}.00`],
                    ['Loan Number', loan.loanNumber],
                    ['Outstanding Principal', `$${loan.outstandingPrincipal.toFixed(2)}`],
                    ['Interest Rate', `${loan.interestRate}%`],
                    ['Unpaid Accrued Interest', `$${loan.unpaidAccruedInterest.toFixed(2)}`],
                    ['Origination Date', loan.originationDate],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-xs text-neutral-500">{k}</p>
                      <p className="text-sm font-medium text-neutral-800 mt-0.5">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-4 pt-3 border-t border-neutral-100">
                  {['Amortization Schedule', 'Promissory Note', 'TILA Notice'].map(l => (
                    <button key={l} className="text-xs text-[#00857C] hover:underline">{l}</button>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-5">
                <p className="text-sm font-semibold text-neutral-800 mb-3">Have questions about this loan?</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#00857C]">
                  {[
                    '💬 Chat with our virtual agent',
                    '✉ Email fnbo.servicing@upstart.com',
                    '📞 Call 1-866-215-9746',
                    '📄 Review Documents & Notices',
                  ].map(item => (
                    <button key={item} className="text-left hover:underline">{item}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Chat FAB */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-xl hover:bg-neutral-800 transition-colors z-20"
        >
          💬 Ask a question
        </button>
      )}

      <ChatPanel
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        pastDueAmount={loan.pastDueAmount}
        bankAccount="x-9673"
      />
    </div>
  );
}
