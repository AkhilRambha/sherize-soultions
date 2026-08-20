export function MeshBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-violet/25 blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-coral/20 blur-3xl animate-float-slow" />
    </div>
  );
}

export function FloatingParticles({ count = 18 }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 4 + (i % 5) * 3;
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 7) * 0.6;
        const dur = 8 + (i % 6);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary/40 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `float ${dur}s ease-in-out ${delay}s infinite`,
              boxShadow: "0 0 12px currentColor",
              color:
                i % 3 === 0
                  ? "oklch(0.78 0.15 195)"
                  : i % 3 === 1
                    ? "oklch(0.62 0.2 295)"
                    : "oklch(0.7 0.2 18)",
            }}
          />
        );
      })}
    </div>
  );
}
