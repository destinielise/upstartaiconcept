import { UpstartLogo } from './UpstartLogo';

interface NavProps {
  onChatOpen?: () => void;
}

export function Nav({ onChatOpen }: NavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-14 bg-white border-b border-neutral-200 flex items-center justify-between px-5 md:px-8 shadow-sm">
      <UpstartLogo />
      {/* Desktop: user name */}
      <div className="hidden md:flex items-center gap-3">
        <span className="text-xs font-semibold tracking-wider text-neutral-800">DESTINI ELISE</span>
      </div>
      {/* Mobile: hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Menu">
        <span className="w-5 h-0.5 bg-neutral-800 rounded" />
        <span className="w-5 h-0.5 bg-neutral-800 rounded" />
        <span className="w-5 h-0.5 bg-neutral-800 rounded" />
      </button>
    </header>
  );
}
