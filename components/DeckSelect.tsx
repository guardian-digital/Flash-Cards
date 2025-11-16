type DeckSelectProps = {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
};

export function DeckSelect({ options, value, onChange }: DeckSelectProps) {
  return (
    <div className="mt-1">
      <select
        aria-label="Choose deck"
        className="bg-surface text-white border border-white/20 rounded-xl px-3 py-2 text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}


