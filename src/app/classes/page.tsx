import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Browse all classes at Rainier Gardens Art Studio — ceramics, painting, drawing, printmaking, and more.",
};

interface ClassItem {
  id: number;
  title: string;
  description: string;
  category: string;
  instructor: string;
  schedule: string;
  duration: string;
  price: number;
  level: string;
  spots_remaining: number;
  total_spots: number;
}

async function getClasses(): Promise<ClassItem[]> {
  const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
  if (!apiUrl) return [];

  try {
    const res = await fetch(`${apiUrl}/api/public/classes`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? data ?? [];
  } catch {
    return [];
  }
}

const FALLBACK_CLASSES: ClassItem[] = [
  {
    id: 1,
    title: "Wheel Throwing Fundamentals",
    description: "Learn to center clay, open, and pull walls on the potter's wheel. All materials included.",
    category: "Ceramics",
    instructor: "Elena Vasquez",
    schedule: "Tuesdays & Thursdays, 6–9 PM",
    duration: "8 weeks",
    price: 320,
    level: "Beginner",
    spots_remaining: 4,
    total_spots: 10,
  },
  {
    id: 2,
    title: "Hand-Building in Clay",
    description: "Explore slab, coil, and pinch techniques to create functional and sculptural ceramic forms.",
    category: "Ceramics",
    instructor: "Marcus Chen",
    schedule: "Mondays, 10 AM–1 PM",
    duration: "6 weeks",
    price: 240,
    level: "All Levels",
    spots_remaining: 7,
    total_spots: 12,
  },
  {
    id: 3,
    title: "Oil Painting Studio",
    description: "Explore color mixing, composition, and classical oil painting techniques in an open studio format.",
    category: "Painting",
    instructor: "Renata Nowak",
    schedule: "Saturdays, 10 AM–1 PM",
    duration: "10 weeks",
    price: 380,
    level: "All Levels",
    spots_remaining: 2,
    total_spots: 8,
  },
  {
    id: 4,
    title: "Watercolor Essentials",
    description: "Develop fluency with watercolor through studies of light, wet-on-wet technique, and controlled washes.",
    category: "Painting",
    instructor: "Tanya Okafor",
    schedule: "Wednesdays, 1–4 PM",
    duration: "6 weeks",
    price: 215,
    level: "Beginner",
    spots_remaining: 9,
    total_spots: 12,
  },
  {
    id: 5,
    title: "Botanical Illustration",
    description: "Render plants and flowers with scientific precision and artistic beauty using pen, ink, and watercolor.",
    category: "Drawing",
    instructor: "Hiroshi Tanaka",
    schedule: "Wednesdays, 5–8 PM",
    duration: "8 weeks",
    price: 295,
    level: "Intermediate",
    spots_remaining: 6,
    total_spots: 10,
  },
  {
    id: 6,
    title: "Relief Printmaking",
    description: "Learn woodcut and linocut printmaking from block carving to hand-printing limited edition works.",
    category: "Printmaking",
    instructor: "Sofia Andrade",
    schedule: "Fridays, 2–5 PM",
    duration: "6 weeks",
    price: 260,
    level: "All Levels",
    spots_remaining: 5,
    total_spots: 8,
  },
];

const levelColors: Record<string, string> = {
  Beginner: "#22863a",
  Intermediate: "#b08800",
  Advanced: "#c05040",
  "All Levels": "#5a5fa0",
};

export default async function ClassesPage() {
  const apiClasses = await getClasses();
  const classes = apiClasses.length > 0 ? apiClasses : FALLBACK_CLASSES;

  const categories = Array.from(new Set(classes.map((c) => c.category))).sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="section-title">Classes & Workshops</h1>
        <p className="section-subtitle">
          Discover your medium. All classes include materials unless otherwise
          noted, and are led by working professional artists.
        </p>
      </div>

      {/* Category sections */}
      {categories.map((category) => {
        const categoryClasses = classes.filter((c) => c.category === category);
        return (
          <section key={category} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-2xl font-bold"
                style={{ color: "var(--color-text)" }}
              >
                {category}
              </h2>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "var(--color-border)" }}
              />
              <span className="text-sm text-muted">
                {categoryClasses.length} class
                {categoryClasses.length !== 1 ? "es" : ""}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryClasses.map((cls) => {
                const fillPercent =
                  ((cls.total_spots - cls.spots_remaining) / cls.total_spots) *
                  100;
                const almostFull = cls.spots_remaining <= 3;

                return (
                  <div key={cls.id} className="card p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                          color: "var(--color-accent)",
                        }}
                      >
                        {cls.category}
                      </span>
                      <span
                        className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${levelColors[cls.level] ?? "#777"} 12%, transparent)`,
                          color: levelColors[cls.level] ?? "#777",
                        }}
                      >
                        {cls.level}
                      </span>
                    </div>

                    <h3 className="text-base font-bold mb-1">{cls.title}</h3>
                    <p className="text-xs text-muted mb-1">
                      with {cls.instructor}
                    </p>
                    <p className="text-sm text-muted mb-4 flex-1 leading-relaxed">
                      {cls.description}
                    </p>

                    <div
                      className="space-y-2 text-xs text-muted border-t pt-4 mb-4"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div className="flex justify-between">
                        <span>{cls.schedule}</span>
                        <span className="font-medium">{cls.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="flex-1 h-1.5 rounded-full overflow-hidden"
                          style={{ backgroundColor: "var(--color-surface-alt)" }}
                        >
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${fillPercent}%`,
                              backgroundColor: almostFull
                                ? "#c05040"
                                : "var(--color-accent)",
                            }}
                          />
                        </div>
                        <span
                          className="font-medium whitespace-nowrap"
                          style={{ color: almostFull ? "#c05040" : "var(--color-text-muted)" }}
                        >
                          {cls.spots_remaining} left
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold" style={{ color: "var(--color-accent)" }}>
                        ${cls.price}
                      </span>
                      <Link
                        href="/contact"
                        className="btn-primary text-xs px-4 py-2"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Private instruction CTA */}
      <div
        className="rounded-2xl p-8 md:p-12 text-center mt-8"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <h3 className="text-2xl font-bold mb-3">Want Private Instruction?</h3>
        <p className="text-muted mb-6 max-w-xl mx-auto">
          Work one-on-one with any of our instructors. Private sessions are
          available for all disciplines and skill levels.
        </p>
        <Link href="/contact" className="btn-primary">
          Inquire About Private Sessions
        </Link>
      </div>
    </div>
  );
}
