export default function CasinoChip() {
  return (
    <div className="relative w-15 h-15 rounded-full bg-gradient-to-br from-primary to-accent border-3 border-foreground shadow-[0_0_20px_var(--primary)] animate-float">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7.5 h-7.5 rounded-full bg-background"></div>
    </div>
  );
}
