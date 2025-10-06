
export default function CasinoChip() {
  return (
    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary border-4 border-foreground shadow-[0_0_30px_var(--primary)] animate-float group hover:scale-110 transition-all duration-500">
      {/* Inner circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary/50"></div>
      
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse"></div>
      
      {/* Edge details */}
      <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
      
      {/* Side markings */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-foreground/50 rounded-full"></div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-foreground/50 rounded-full"></div>
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-1 bg-foreground/50 rounded-full"></div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-1 bg-foreground/50 rounded-full"></div>
    </div>
  );
}
