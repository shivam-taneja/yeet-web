export function PlatformBadge({ name }: { name: "X" | "Threads" }) {
  return (
    <span
      className={`grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink text-xs font-bold ${
        name === "X" ? "bg-ink text-cream" : "bg-mint text-ink"
      }`}
      aria-label={name}
    >
      {name === "X" ? "X" : "@"}
    </span>
  );
}
