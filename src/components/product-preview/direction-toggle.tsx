import { Button } from "@/components/ui/button";

export function DirectionToggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`h-6 w-10 shrink-0 rounded-full border-2 border-ink p-0 hover:bg-coral ${
        checked ? "justify-end bg-coral" : "justify-start bg-muted"
      }`}
    >
      <span className="mx-0.5 size-4 rounded-full bg-cream" />
    </Button>
  );
}
