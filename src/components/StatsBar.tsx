"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 40, suffix: "+", label: "Classes Per Month" },
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 12, suffix: "", label: "Resident Artists" },
  { value: 8, suffix: "", label: "Studio Disciplines" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, active]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, 1600, active);

  return (
    <div className="text-center px-4">
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{
          fontFamily: "var(--font-playfair, Georgia, serif)",
          color: "#fff",
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="text-xs uppercase tracking-widest font-medium"
        style={{ color: "rgba(255,255,255,0.55)", fontFamily: "system-ui, sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} active={active} />
      ))}
    </div>
  );
}
