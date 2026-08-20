import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(20px)",
        filter: shown ? "blur(0)" : "blur(4px)",
        transition: `opacity 1.2s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 1.2s cubic-bezier(.16,1,.3,1) ${delay}ms, filter 1.2s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
