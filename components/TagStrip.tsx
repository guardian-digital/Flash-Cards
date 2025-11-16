import type { Group } from '@/lib/data';

type TagStripProps = {
  groups: Group[];
  activeGroupId: string | null;
  onSelect: (groupId: string) => void;
};

export function TagStrip({ groups, activeGroupId, onSelect }: TagStripProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-1" aria-label="Tour highlight selector">
      {groups.map((g) => {
        const isActive = g.id === activeGroupId;
        return (
          <button
            key={g.id}
            type="button"
            data-group={g.id}
            onClick={() => onSelect(g.id)}
            className={[
              'px-3 py-1.5 rounded-full border text-sm',
              isActive
                ? 'bg-accent text-black border-accent'
                : 'bg-transparent text-muted border-white/20',
              'shadow-none',
            ].join(' ')}
            aria-pressed={isActive}
          >
            {g.label}
          </button>
        );
      })}
    </div>
  );
}


