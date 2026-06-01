interface ChatInputProps {
  value: string;
  onChange: (v: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  placeholder = 'Type a message…',
}: ChatInputProps) {
  return (
    <div className="px-4 py-3 flex gap-2.5 items-center flex-shrink-0">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={e => {
          if (e.key === 'Enter' && onSubmit) onSubmit();
        }}
        className="flex-1 h-11 px-4 text-sm outline-none placeholder:text-neutral-400 bg-white"
        style={{
          borderRadius: '37px',
          border: '1px solid rgba(0, 133, 124, 0.27)',
          background: '#FFF',
        }}
      />
      <button
        onClick={onSubmit}
        className="w-11 h-11 rounded-full bg-[#00857C] flex items-center justify-center text-white font-bold hover:bg-[#006B63] transition-colors flex-shrink-0"
      >
        ↑
      </button>
    </div>
  );
}
