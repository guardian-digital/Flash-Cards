type DeckSelectProps = {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
};

export function DeckSelect({ options, value, onChange }: DeckSelectProps) {
  return (
    <select
      aria-label="Choose deck"
      className="flex-1 bg-surface text-white border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base md:text-lg appearance-none cursor-pointer touch-manipulation min-h-[44px] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23f5f5f7%22%20d%3D%22M6%209L1%204h10z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center] sm:bg-[right_14px_center]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}


