import { useState, useRef, useEffect } from 'react';

interface ChatPanelProps {
  open: boolean;
  onClose: () => void;
  mobile?: boolean;
}

type Role = 'user' | 'assistant';
interface Message { role: Role; content: string; }

// ── UI atoms ──────────────────────────────────────────────────────────

function BotMsg({ text, streaming }: { text: string; streaming?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#00857C', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>U</div>
      <div style={{ background: '#fff', borderRadius: 16, padding: '10px 14px', fontSize: 14, color: '#2B3232', lineHeight: 1.55, border: '1px solid #F0F1F1', maxWidth: 260, wordBreak: 'break-word' }}>
        {text}
        {streaming && <span style={{ opacity: 0.5, animation: 'blink 1s step-end infinite' }}>▌</span>}
      </div>
    </div>
  );
}

function UserMsg({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ background: '#00857C', borderRadius: '16px 16px 4px 16px', padding: '10px 14px', fontSize: 14, color: '#fff', lineHeight: 1.55, maxWidth: 260, wordBreak: 'break-word' }}>
        {text}
      </div>
    </div>
  );
}

function QuickChip({ label, sub, primary, onClick }: { label: string; sub?: string; primary?: boolean; onClick?: () => void }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', textAlign: 'left', padding: '13px 16px',
      borderRadius: 12, cursor: 'pointer', transition: 'opacity 0.15s',
      background: primary ? '#00857C' : '#fff',
      border: primary ? 'none' : '1px solid #E2E4E4',
    }}
    onMouseOver={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
    onMouseOut={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: primary ? '#fff' : '#2B3232' }}>{label}</p>
      {sub && <p style={{ margin: '2px 0 0', fontSize: 12, color: primary ? 'rgba(255,255,255,0.7)' : '#9BA0A0' }}>{sub}</p>}
    </button>
  );
}

function Pill({ text, red }: { text: string; red?: boolean }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 500, background: red ? '#FEF2F2' : '#E6F4F3', color: red ? '#B91C1C' : '#00857C', border: `1px solid ${red ? '#FECACA' : '#99D9D5'}` }}>
      {text}
    </span>
  );
}

// ── Main ChatPanel ────────────────────────────────────────────────────

export function ChatPanel({ open, onClose, mobile = false }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [menuDone, setMenuDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streaming]);

  useEffect(() => {
    if (!open) {
      // Reset on close
      setTimeout(() => { setMessages([]); setMenuDone(false); setInput(''); }, 300);
    }
  }, [open]);

  async function sendMessage(userText: string) {
    if (streaming || !userText.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setInput('');
    setMenuDone(true);
    setStreaming(true);

    // Add empty assistant message to stream into
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    abortRef.current = new AbortController();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`${res.status}: ${errText}`);
      }
      if (!res.body) throw new Error('No response body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        const finalText = assistantText;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: finalText };
          return updated;
        });
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: "I'm having trouble connecting right now. Please try again in a moment." };
          return updated;
        });
      }
    } finally {
      setStreaming(false);
    }
  }

  function handleChip(text: string) {
    sendMessage(text);
  }

  function handleSubmit() {
    sendMessage(input);
  }

  const isLastAssistant = messages.length > 0 && messages[messages.length - 1].role === 'assistant';

  return (
    <div style={mobile ? {
      // Mobile: fixed bottom sheet
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: open ? '85vh' : '0',
      display: 'flex',
      flexDirection: 'column',
      background: '#F0F9F8',
      borderTop: open ? '1px solid #D5ECE9' : 'none',
      borderRadius: open ? '20px 20px 0 0' : '0',
      boxShadow: open ? '0 -4px 30px rgba(0,0,0,0.12)' : 'none',
      overflow: 'hidden',
      transition: 'height 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
      fontFamily: 'Inter, system-ui, sans-serif',
    } : {
      // Desktop: side panel
      width: open ? '360px' : '0px',
      minWidth: open ? '360px' : '0px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#F0F9F8',
      borderLeft: open ? '1px solid #D5ECE9' : 'none',
      boxShadow: open ? '-4px 0 20px rgba(0,0,0,0.07)' : 'none',
      overflow: 'hidden',
      transition: 'width 0.3s ease, min-width 0.3s ease',
      fontFamily: 'Inter, system-ui, sans-serif',
      flexShrink: 0,
    }}>
      {/* Mobile backdrop */}
      {mobile && open && (
        <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: -1 }} />
      )}

      {/* Top bar: drag handle (mobile) + X button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px 4px', flexShrink: 0 }}>
        {mobile ? (
          <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
            <div style={{ width: 36, height: 4, borderRadius: 9999, background: '#B2D8D5' }} />
          </div>
        ) : <div />}
        <button
          onClick={onClose}
          style={{
            width: 32, height: 32, borderRadius: '50%',
            border: '1.5px solid #00857C',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: 16,
            color: '#00857C',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            marginLeft: mobile ? 0 : 'auto',
          }}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* Scrollable area */}
      <div style={{ flex: 1, overflowY: 'auto', minHeight: 0, display: 'flex', flexDirection: 'column' }}>

        {/* Title */}
        <div style={{ padding: '150px 24px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#00857C', margin: '0 0 6px', lineHeight: 1.3 }}>
            Let's get you back on track
          </h2>
          <p style={{ fontSize: 13, color: '#9BA0A0', margin: 0 }}>How can I assist you?</p>
        </div>

        {/* Messages or menu */}
        <div style={{ flex: 1, padding: '0 20px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Initial urgency pills — show until first message */}
          {!menuDone && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 4 }}>
              <Pill text="⏱ 5 days to act" red />
              <Pill text="$500 past due" red />
            </div>
          )}

          {/* Conversation messages */}
          {messages.map((m, i) => (
            m.role === 'user'
              ? <UserMsg key={i} text={m.content} />
              : <BotMsg key={i} text={m.content} streaming={streaming && i === messages.length - 1} />
          ))}

          {/* Quick action menu — show when no messages yet */}
          {!menuDone && messages.length === 0 && (
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <QuickChip
                label="Finalize $500 payment for Apr & May"
                sub="Via Chase x-5165 — clears both missed payments"
                primary
                onClick={() => handleChip("I want to finalize my $500 past due payment for April and May using Chase x-5165")}
              />
              <QuickChip
                label="Pay $250 now, $250 on the 30th"
                sub="Split across Chase x-5165"
                onClick={() => handleChip("I'd like to pay $250 now and $250 on the 30th, both from Chase x-5165")}
              />
              <QuickChip
                label="Change payment method"
                onClick={() => handleChip("I need to change my payment method — my Capital One card has insufficient funds")}
              />
              <QuickChip
                label="Ask anything"
                onClick={() => { const el = document.querySelector('input[placeholder]') as HTMLInputElement; el?.focus(); }}
              />
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input — always pinned at bottom */}
      <div style={{ flexShrink: 0, padding: '12px 16px 16px', background: '#F0F9F8', borderTop: '1px solid #D5ECE9', display: 'flex', gap: 10, alignItems: 'center' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !streaming) handleSubmit(); }}
          placeholder={streaming ? 'Responding…' : 'Type a message…'}
          disabled={streaming}
          style={{
            flex: 1, height: 44,
            borderRadius: '37px',
            border: '1px solid rgba(0, 133, 124, 0.27)',
            background: '#FFFFFF',
            padding: '0 16px',
            fontSize: 14,
            outline: 'none',
            color: '#2B3232',
            fontFamily: 'Inter, system-ui, sans-serif',
            opacity: streaming ? 0.6 : 1,
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={streaming || !input.trim()}
          style={{
            width: 44, height: 44, borderRadius: '50%',
            background: streaming || !input.trim() ? '#9BA0A0' : '#00857C',
            border: 'none', cursor: streaming || !input.trim() ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 18, flexShrink: 0,
            transition: 'background 0.15s',
          }}>
          ↑
        </button>
      </div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}
