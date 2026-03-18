const StatusBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t-2 border-border px-4 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between font-pixel text-[7px] md:text-[8px] text-muted-foreground">
        <span>HP: <span className="text-accent">100/100</span></span>
        <span>MP: <span className="text-secondary">AI/ML</span></span>
        <span>CLASS: <span className="text-primary">MOBILE_DEV</span></span>
        <span className="hidden sm:inline">LVL: <span className="text-accent">2026</span></span>
      </div>
    </footer>
  );
};

export default StatusBar;
